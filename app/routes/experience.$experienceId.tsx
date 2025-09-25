import React from "react";
import { useParams, Link } from "react-router";
import { experience } from "../data/experience.js";
import type { Experience } from "../data/experience.js";
import "../experience.css";
import "../project.css";
import Navigation from "../components/Navigation.js";

export default function ExperienceDetail() {
    const { experienceId } = useParams();
    const experienceItem = experience.find(e => e.id === experienceId);
      if (!experienceItem) {
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
            <a href="/Chris Shobe Resume.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-alt"></i>
            </a>        </div>
        
        <Navigation currentPage="experience" />

        <div className="header">
            <div className="header-content">
                <h1>Experience Not Found</h1>
                <p>The experience you're looking for doesn't exist.</p>
                <Link to="/experience" className="back-button">All Experience</Link>
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
          <a href="/Chris Shobe Resume.pdf" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file-alt"></i>
          </a>        </div>
      
        <Navigation currentPage="experience" />        
        
        <Link to="/experience" className="back-button">← Back to All Experience</Link>        <div className="experience-detail">          <div className="experience-detail-content">
            <div className="experience-detail-header">
              <img src={experienceItem.image} alt={`${experienceItem.company} logo`} className="experience-detail-title-image" />
              <div>
                <h1>{experienceItem.company}</h1>
                <h2 className="experience-position">{experienceItem.title}</h2>
              </div>
            </div>
          <div className="experience-dates">
            {experienceItem.startDate && (
              <span className="date">{experienceItem.startDate} - {experienceItem.endDate || "Present"}</span>
            )}
            <div className="experience-tags">
              {experienceItem.tags && experienceItem.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>          <div className="experience-description">
            <h3>About This Experience</h3>
            <p>{experienceItem.fullDescription}</p>
            {experienceItem.bottomImage && (
              <img src={experienceItem.bottomImage} alt={`${experienceItem.title} experience`} className="experience-bottom-image" />
            )}
          </div>

          {experienceItem.roles && experienceItem.roles.length > 0 && (
            <div className="experience-roles">
              <h3>Roles & Responsibilities</h3>              {experienceItem.roles.map((role, index) => (
                <div key={index} className="role-item">
                  <div className="role-header">
                    <h4>{role.title}</h4>
                    <span className="role-date">{role.date}</span>
                  </div>
                  <p className="role-description">{role.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    );
}