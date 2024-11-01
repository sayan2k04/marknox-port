// src/Navbar.jsx
//import React from 'react';
import './Navbar.css'; // Adjust path if necessary

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="/contact">Contact Me</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
