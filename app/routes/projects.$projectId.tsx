import React from "react";
import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import "../project.css";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
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
          <a href="/projects" className="current">Projects</a>
          <a href="/experience">Experience</a>
          <a href="/about">Beyond CS</a>
        </nav>

        <div className="header">
          <div className="header-content">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="back-button">Back to All Projects</Link>
          </div>
        </div>
      </div>
    );
  }

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
        <a href="/projects" className="current">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/about">Beyond CS</a>
      </nav>

      <Link to="/projects" className="back-button">← Back to All Projects</Link>      <div className="project-detail">        {(project.award || project.projectType) && (
          <div className="project-detail-badges">
            <div>
              {project.award && (
                <span className="badge award">{project.award}</span>
              )}
            </div>
            <div>
              {project.projectType && (
                <span className="badge project-type">{project.projectType}</span>
              )}
            </div>
          </div>
        )}        <div className="project-detail-content">
          <div className="project-detail-header">
            <img src={project.image} alt={`${project.title} logo`} className="project-detail-title-image" />
            <h1>{project.title}</h1>
          </div>
          
          <div className="project-meta">
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.devpost && (
                <>
                  {project.github && " | "}
                  <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                    Devpost
                  </a>
                </>
              )}            </div>
            <div className="project-tags">
              {project.tags && project.tags.map((tag: string) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>          </div>

          <div className="project-description">
            <h3>About This Project</h3>
            <p>{project.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
