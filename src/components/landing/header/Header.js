import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1>Medical Scheduling App</h1>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;