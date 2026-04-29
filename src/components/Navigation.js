import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import "./Footer.css";
import { AuroraTextEffect } from "./lightswind/aurora-text-effect.tsx"
import SearchBar from "./SearchBar";

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-container">
                <AuroraTextEffect 
                    text="Nailah Brown" 
                    fontSize="60px"
                    colors={{
                        first: "#abcdff",
                        second: "#4781d7",
                        third: "#d9abff",
                        fourth: "#955ee2"
                    }}
                    blurAmount="blur-lg"
                />
                
                <SearchBar />
                
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
