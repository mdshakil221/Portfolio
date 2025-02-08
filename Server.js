
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

console.log("MongoDB URI:", process.env.MONGO_URI);

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err))
.catch(err => console.log("MongoDB connection Error:", err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));