import React from "react";
import "./pages.css";

export default function WorkExperience() {
    const experiences = [
        {
            title: "Code Coach",
            company: "The Coder School",
            period: "January 2026 - Present",
            description: "Developed games and programs to teach students how to recreate them through systematic thinking and worked in a fast paced environment to keep students on track and provided necessary hints to reach their program’s goals."

        },
        {
            title: "App Developer",
            company: "Yours Safety",
            period: "September 2025 - December 2025",
            description: "Collaborating with a 3-member team to plan and develop the YoursApp months ahead of schedule. Troubleshooted various errors while tackling product backlog items per product sponsor’s requests. Facilitated iOS testing, UI design, and developed platform specific logic for the YoursApp."
        },
        {
            title: "Production Assistant",
            company: "Craig Cutler Studio",
            period: "June 2024 - Present",
            description: "Analyzed video files for National Geographic Magazine, providing comprehensive descriptions to support content management systems using Google Sheets. Managed & tracked daily commitments for an individual, providing regular reminders & updates to facilitate effective time management & task completion"
        }
    ];

    return (
        <div className="page-container">
            <h1>Work Experience</h1>
            <div className="page-content">
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <h2>{exp.title}</h2>
                                <p className="company">{exp.company}</p>
                            </div>
                            <p className="period">{exp.period}</p>
                            <p className="description">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
