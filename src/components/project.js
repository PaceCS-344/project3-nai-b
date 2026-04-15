import React from "react";
import "./project.css";

export default function project({name, year, description, image, link}) {
    return (
        <div className="project-card">
            <a href={link} className="project-name">
                <h1>{name}</h1>
            </a>
            <img src={image} alt={name} className="project-image"/>
            <h2 className="project-year">{year}</h2>
            <h3 className="project-description">{description}</h3>
        </div>
    );
}

const styles = StyleSheet.create