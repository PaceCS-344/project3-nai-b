import React from "react";
import "./pages.css";

export default function About() {
    return (
        <div className="page-container">
            <h1>About Me</h1>
            <div className="page-content">
                <section className="about-section">
                    <h2>My Story</h2>
                    <p>
                        Welcome to my portfolio! 
                        
                        My name is Nailah (nai-EE-lah), I'm a passionate developer with a love for creating 
                        innovative solutions and engaging digital experiences. My journey in tech has been 
                        driven by curiosity and a desire to continuously learn and grow, while seeing the joy my work brings to my clients.
                    </p>
                </section>

                <section className="about-section">
                    <h2>My Background</h2>
                    <p>
                        With experience in full-stack development, I've worked on a variety of projects 
                        ranging from web applications to interactive games. I'm committed to writing clean, 
                        efficient code and collaborating effectively with teams to bring ideas to life.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Beyond Code</h2>
                    <p>
                        When I'm not coding, you can find me spending time with friends and family, playing video games like
                        Satisfactory and Project Zomboid, or listening to music.
                    </p>
                </section>
            </div>
        </div>
    );
}
