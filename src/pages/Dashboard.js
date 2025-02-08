import { useEffect, useState } from "react";
import axios from "axios";

//Dashboard crud Operations (Blog, Team, Service)
const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("https://your-backend-url.com/api/blogs")
            .then((res) => setBlogs(res.data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Manage your content from here.</p>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id}>{blog.title} <button onClick={() => handleDelete(blog._id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    );
};

//Delete funtionality add
const handleDelete = async (id) => {
    try {
        await axios.delete(`https://your-backend-url.com/api/blogs/${id}`);
        setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
        console.error("Delete Failed", error);
    }
};

//Add new Blog (create)
const [newTitle, setNewTitle] = useState("");
const handleAdd = async () => {
    try {
        const res = await axios.post("https://your-backend-url.com/api/blogs", { title: newTitle });
        setBlogs([...blogs, res, data]);
        setNewTitle("");
    } catch (error) {
        console.error("Add Failed", error);
    }
    <button onClick={handleAdd}>Add Blog</button>
};

//Add form
<input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="New BLog TItle" />

//Update Blog
const handleUpdate = async (id, newTitle) => {
    try {
        await axios.put(`https://your-backend-url.com/api/blogs/${id}`, { title: newTitle });
        setBlogs(blogs.map(blog => (blog._id === id ? { ...blog, title: newTitle } : blog)));
    } catch (error) {
        console.error("Update Failed", error);
    }
};

// Fatch Blogg
const token = localStorage.getItem("token");
axios.get("https://localhost:5000/api/blogs", { headers: { Authorization: token } })
    .then(res => setBlogs(res.data))
    .catch(err => console.error(err));

    
export default Dashboard;