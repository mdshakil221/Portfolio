const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
    console.log("Recieved Data:", req.body);
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const user = await User.create({email, password: hashedPassword });
        res.status(201).json({ message: "User registrered successsfully!"});
    } catch (error){
        res.status(400).json({error: "Registration failed"});
    }
});

router.post("./login", async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({error: "User not found"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({error: "Invalid credentials"});

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.json({ token });
});

module.exports = router;