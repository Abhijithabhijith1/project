import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/grey-lo.png';

import '../index.css';

const Header = ({ selectedPage }) => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <Link to="/home">Paper Box</Link>
            </div>
            <div className="nav-links">
                <Link className={selectedPage === "home" ? "selected" : ""} to="/home">Home</Link>
                <Link className={selectedPage === "about" ? "selected" : ""} to="/about">About</Link>
                <Link className={selectedPage === "contact" ? "selected" : ""} to="/contact">Contact us</Link>
                <Link className={selectedPage === "services" ? "selected" : ""} to="/services">Services</Link>
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;