import React from "react";
import { Link } from "react-router";
import { experience } from "../data/experience.js";
import type { Experience } from "../data/experience.js";
import "../experience.css";
import "../project.css";
import Navigation from "../components/Navigation.js";

export default function Experience() {
  return (
    <div>      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chris-shobe/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/ChrisShobe" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:chrisshobe2000@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-file-alt"></i>
        </a>      </div>
        
      <Navigation currentPage="experience" />

      <div className="header">
        <div className="header-content">
          <h1>
            <span style={{ color: "#b340e0" }}>My</span>{" "}
            <span style={{ color: "#40E0D0" }}>Experience</span>
          </h1>
          <p>
            Click on a role to learn more about my internships and leadership experience across software engineering, cybersecurity, DEI advocacy, and entrepreneurship.
          </p>
        </div>
      </div>      <div className="projects-container">        {experience.map((exp: Experience) => (
          <Link key={exp.id} to={`/experience/${exp.id}`} className="project-link">            <div className="project">              <div className="project-badges">
                <div>
                  {exp.title && (
                    <span className="badge experience">{exp.title}</span>
                  )}
                </div>
                <div>
                  {exp.startDate && (
                    <span className="badge date">{exp.startDate} - {exp.endDate || "Present"}</span>
                  )}
                </div>
              </div><div className="project-header">
                <img src={exp.image} alt={`${exp.company} logo`} className="project-list-image" />
                <h3>{exp.company}</h3>
              </div>              <div className="project-meta">
                <div className="project-tags">
                  {exp.tags && exp.tags.map((tag: string) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}</div>
    </div>
  );
}
