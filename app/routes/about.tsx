import React from "react";
import { Link } from "react-router";
import { aboutCategories } from "../data/about.js";
import type { AboutCategory } from "../data/about.js";
import "../home.css";
import "../about.css";
import "../project.css";
import Navigation from "../components/Navigation.js";

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
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-file-alt"></i>
        </a>      </div>
        
      <Navigation currentPage="about" />

      <div className="header">
        <div className="header-content">
          <h1>
            <span style={{ color: "#b340e0" }}>Beyond</span>{" "}
            <span style={{ color: "#40E0D0" }}>CS</span>
          </h1>
          <p>
            Click on a category to explore the creative and personal passions that shape who I am beyond computer science—from music and art to photography, nature, and curiosity-driven learning.
          </p>
        </div>
      </div>      <div className="projects-container">
        {aboutCategories.map((category: AboutCategory) => (
          <Link key={category.id} to={`/about/${category.id}`} className="project-link">
            <div className="project">
              <div className="project-header">
                <img src={category.image} alt={`${category.title}`} className="project-list-image" />
                <h3>{category.title}</h3>
              </div>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
