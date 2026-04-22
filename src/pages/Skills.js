import React from "react";
import "./pages.css";
import { InteractiveCard } from "../components/lightswind/interactive-card.tsx";

export default function Skills() {
    const skills = [
        { category: "Software/App Development", items: ["React/React Native", "JavaScript", "CSS", "HTML", "Node.js", "MariaDB"] },
        { category: "Tools", items: ["Git", "VS Code", "npm"] },
        { category: "Programming Languages", items: ["Python", "Java", "JavaScript", "HTML", "CSS", "C#", "SQL", "PHP"]},
        { category: "Other", items: ["Responsive Design", "UI/UX", "Problem Solving", "Docker", "Unity"] }
    ];

    return (
        <div className="page-container">
            <h1>Skills</h1>
            <div className="page-content">
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <InteractiveCard>
                        <div key={index} className="skill-category">
                            <h2>{skillGroup.category}</h2>
                            <ul>
                                {skillGroup.items.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        </InteractiveCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
