import React from "react";
import Project from "../components/project";
import cosmicCoinsImage from "../images/cosmiccoins.png";
import yoursSafetyImage from "../images/yourssafety.png";
import "./pages.css";

export default function Projects() {
    return (
        <div className="page-container">
            <h1>My Projects</h1>
            <div className="projects-container">
                <Project
                    name="Cosmic Coins"
                    year="2025"
                    image={cosmicCoinsImage}
                    link={"https://nini2255.itch.io/cosmic-coins"}
                    description={"A comically hard platformer game made in Unity"}
                />
                <Project
                    name="YoursSafetyApp"
                    year="2025"
                    image={yoursSafetyImage}
                    link={""}
                    description={"A safety app providing at event tracking, location sharing, and emergency contact alerts"}
                />
            </div>
        </div>
    );
}
