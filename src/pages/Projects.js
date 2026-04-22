import React from "react";
import Project from "../components/project";
import cosmicCoinsImage from "../images/cosmiccoins.png";
import yoursSafetyImage from "../images/yourssafety.png";
import nbBaddies from "../images/nbBaddies.png";
import "./pages.css";
import "../lightswind.css";
import { InteractiveCard } from "../components/lightswind/interactive-card.tsx";

export default function Projects() {
    return (
        <div className="page-container">
            <h1>My Projects</h1>
            <div className="projects-container">
                <InteractiveCard
                    className="InteractiveGalleryCard project-card"
                    InteractiveColor="#abcdff"
                >
                    <Project
                        name="Cosmic Coins"
                        year="2025"
                        image={cosmicCoinsImage}
                        link={"https://nini2255.itch.io/cosmic-coins"}
                        description={"A comically hard platformer game made in Unity"}
                    />
                </InteractiveCard>
                <InteractiveCard
                    InteractiveColor="#abcdff"
                    className="project-card"
                >
                    <Project
                        name="YoursSafetyApp"
                        year="2025"
                        image={yoursSafetyImage}
                        link={""}
                        description={"A safety app providing at event tracking, location sharing, and emergency contact alerts"}
                    />
                </InteractiveCard>
                <InteractiveCard
                    className="InteractiveGalleryCard project-card"
                    InteractiveColor="#abcdff"
                >
                    <Project
                        name="E-Commerce Website"
                        year="2026"
                        image={nbBaddies}
                        link={"https://github.com/PaceCS-344/project1-nbbaddies"}
                        description={"An E-Commerce site selling uncommon items made in collaboration with a friend, Alex Sullivan"}
                    />
                </InteractiveCard>
                
            </div>
        </div>
    );
}
