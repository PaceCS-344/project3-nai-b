import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h3>Get In Touch</h3>
                <div className="contact-links">
                    <a 
                        href="mailto:nailahbrown.cs@gmail.com" 
                        className="contact-link"
                        title="Email"
                    >
                        <span className="contact-icon">✉️</span>
                        <span className="contact-text">Email</span>
                    </a>
                    <a 
                        href="https://github.com/nai-b" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                        title="GitHub"
                    >
                        <span className="contact-icon">🔗</span>
                        <span className="contact-text">GitHub</span>
                    </a>
                    <a 
                        href="www.linkedin.com/in/nailahbrown-cs" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                        title="LinkedIn"
                    >
                        <span className="contact-icon">💼</span>
                        <span className="contact-text">LinkedIn</span>
                    </a>
                </div>
                <p className="footer-text">&copy; 2026 Nailah Brown. All rights reserved.</p>
            </div>
        </footer>
    );
}
