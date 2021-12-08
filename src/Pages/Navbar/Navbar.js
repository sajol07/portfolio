import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="https://kazolidas.netlify.app/">Portfolio</a></div>
                    <ul className="menu">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/allProjects">Project</Link></li>
                        <li><a href="Kazoli resume.pdf">Resume</a></li>
                        <li><Link to="/contactme">Contact Me</Link></li>
                        <li><Link to="/kazoli-das">About Me</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {/* <li><a href="/blog">Blog</a></li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;