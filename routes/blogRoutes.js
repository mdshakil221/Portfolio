const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//create blog
router.post("/", authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.status(201).json(newBlog);
});

//Read blogs
router.get("/", async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

// Update blog
router.put("/:id", authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(updateBlog);
});

// Delete BLog
router.delete("/:id", authMiddleware, async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({message: "Blog deleted"});
});

module.exports = router;
