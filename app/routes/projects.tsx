import React from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import "../project.css";

export default function Projects() {
  return (
    <div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chris-shobe/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
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
          <h1>
            <span style={{ color: "#b340e0" }}>My</span>{" "}
            <span style={{ color: "#40E0D0" }}>Projects</span>
          </h1>
          <p>
            Here are some of the projects I've worked on, showcasing my skills in software development, web technologies, and problem-solving.
          </p>
        </div>
      </div>

      <div className="projects-container">        {projects.map(project => (
          <Link key={project.id} to={`/projects/${project.id}`} className="project-link">
            <div className="project">              {(project.award || project.projectType) && (
                <div className="project-badges">
                  <div>
                    {project.projectType && (
                      <span className="badge project-type">{project.projectType}</span>
                    )}
                  </div>
                  <div>
                    {project.award && (
                      <span className="badge award">{project.award}</span>
                    )}
                  </div>
                </div>              )}
              <div className="project-header">
                <h3>{project.title}</h3>
                <img src={project.image} alt={`${project.title} logo`} className="project-list-image" />
              </div>
              <p>{project.description}</p><div className="project-meta">
                <div className="project-links">
                  {project.github && (
                    <span onClick={(e) => e.stopPropagation()}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </span>
                  )}
                  {project.devpost && (
                    <span onClick={(e) => e.stopPropagation()}>
                      {project.github && " | "}
                      <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                        Devpost
                      </a>
                    </span>
                  )}                </div>
                <div className="project-tags">
                  {project.tags && project.tags.map((tag: string) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}