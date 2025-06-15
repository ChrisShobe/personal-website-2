import React from "react";
import "../home.css";

export default function About() {
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
      </div>
        
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/about" className="current">Beyond CS</a>
      </nav>

      <div className="header">
        <div className="header-content">
          <h1>
            <span style={{ color: "#b340e0" }}>Beyond</span>{" "}
            <span style={{ color: "#40E0D0" }}>CS</span>
          </h1>
          <p>
            Get to know me beyond computer science - my hobbies, interests, and what makes me who I am.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h3>Interests & Hobbies</h3>
          <p>Content about your interests and hobbies goes here.</p>
        </div>
        
        <div className="about-section">
          <h3>Personal Values</h3>
          <p>Content about your personal values and what drives you goes here.</p>
        </div>      </div>
    </div>
  );
}
