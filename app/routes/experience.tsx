import React from "react";
import "../home.css";

export default function Experience() {
  return (
    <div>
      <div className="social-icons">
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
        <a href="/experience" className="current">Experience</a>
        <a href="/about">Beyond CS</a>
      </nav>

      <div className="header">
        <div className="header-content">
          <h1>
            <span style={{ color: "#b340e0" }}>My</span>{" "}
            <span style={{ color: "#40E0D0" }}>Experience</span>
          </h1>
          <p>
            My professional experience and internships in technology, cybersecurity, and software development.
          </p>
        </div>
      </div>

      <div className="experience-container">
        <div className="experience-item">
          <h3>Experience 1</h3>
          <p>Description of your first experience goes here.</p>
        </div>
        
        <div className="experience-item">
          <h3>Experience 2</h3>
          <p>Description of your second experience goes here.</p>
        </div>
      </div>
    </div>
  );
}
