import React from "react";
import { useParams, Link } from "react-router";
import { aboutCategories } from "../data/about.js";
import type { AboutCategory } from "../data/about.js";
import "../home.css";
import "../about.css";
import "../project.css";
import Navigation from "../components/Navigation.js";

export default function AboutDetail() {
    const { categoryId } = useParams();
    const category = aboutCategories.find(c => c.id === categoryId);
      if (!category) {
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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-alt"></i>
            </a>        </div>
        
        <Navigation currentPage="about" />

        <div className="header">
            <div className="header-content">
                <h1>Category Not Found</h1>
                <p>The category you're looking for doesn't exist.</p>
                <Link to="/about" className="back-button">Back to Beyond CS</Link>
            </div>
        </div>
        </div>
        );
    }      return (
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file-alt"></i>
          </a>        </div>
      
        <Navigation currentPage="about" />

        <Link to="/about" className="back-button">← Back to Beyond CS</Link>
        
        <div className="project-detail">
          <div className="project-detail-content">
            <div className="project-detail-header">
              <img src={category.image} alt={`${category.title}`} className="project-detail-title-image" />
              <h1>{category.title}</h1>
            </div>
            
            <div className="project-description">
              <h3>About {category.title}</h3>
              <p>{category.fullDescription}</p>
            </div>

            {category.images && category.images.length > 0 && (
              <div className="about-images">
                {category.images.map((image, index) => (
                  <img key={index} src={image} alt={`${category.title} ${index + 1}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
