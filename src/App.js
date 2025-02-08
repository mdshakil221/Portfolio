import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/service" element={<Service/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>
    );
};

export default App;