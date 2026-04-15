import React from "react";
import "./pages.css";

export default function Skills() {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "CSS", "HTML"] },
        { category: "Backend", items: ["Node.js", "Express", "Database Design"] },
        { category: "Tools", items: ["Git", "VS Code", "npm", "Webpack"] },
        { category: "Other", items: ["Responsive Design", "UI/UX", "Problem Solving"] }
    ];

    return (
        <div className="page-container">
            <h1>Skills</h1>
            <div className="page-content">
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-category">
                            <h2>{skillGroup.category}</h2>
                            <ul>
                                {skillGroup.items.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
