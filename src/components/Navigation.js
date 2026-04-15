import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-container">
                <h2 className="nav-title">Nailah Brown</h2>
                <ul className="nav-links">
                    <li><Link to="/">Projects</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/experience">Work Experience</Link></li>
                </ul>
            </div>
        </nav>
    );
}
