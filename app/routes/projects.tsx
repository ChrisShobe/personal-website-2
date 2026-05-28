import { useState } from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import "../project.css";
import Navigation from "../components/Navigation.js";
import PageHero from "../components/PageHero.js";
import TagRow from "../components/TagRow.js";
import ProjectLinks from "../components/ProjectLinks.js";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      if (expandedId !== id) {
        e.preventDefault();
        setExpandedId(id);
      }
      // second tap: let Link navigate normally
    }
  };

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as Element).closest(".project-card")) {
      setExpandedId(null);
    }
  };

  return (
    <div className="page-shell page-fade-in" onClick={handlePageClick}>
      <Navigation currentPage="projects" />

      <PageHero
        kicker="Project archive"
        subtitle="Click on a project to learn more about how I’ve applied AI, full-stack development, cybersecurity, accessibility, and game design to build practical solutions. GitHub repos and Devposts are linked when available."
      >
        <span style={{ color: "var(--purple)" }}>My</span>{" "}
        <span style={{ color: "var(--teal-soft)" }}>Projects</span>
      </PageHero>

      <section className="project-archive">
        <div className="project-archive-hint page-subtitle">hover to unlock · click to enter</div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`project-card${expandedId === project.id ? " is-expanded" : ""}`}
              onClick={(e) => handleCardClick(e, project.id)}
            >
              <div className="project-card-summary">
                <div className="project-card-topline">
                  <span className="project-pill">{project.projectType ?? "Project"}</span>
                  {project.award && (
                    <span className="project-award">★ {project.award}</span>
                  )}
                </div>

                <div className="project-card-core">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="project-card-icon" />
                  )}

                  <div className="project-card-copy">
                    <div className="project-title-status-row">
                      <h2 className="project-card-title">{project.title}</h2>
                      <div className="project-status-tag" aria-hidden="true">
                        <span className="status-encrypted">[ ENCRYPTED ]</span>
                        <span className="status-granted">[ GRANTED ]</span>
                      </div>
                    </div>
                    <p className="project-card-description">{project.description}</p>
                  </div>
                </div>

                {project.tags && <TagRow tags={project.tags} />}

                <ProjectLinks github={project.github} devpost={project.devpost} writeup={project.writeup} stopPropagation />

                <span className="project-open-cta" aria-hidden="true">tap again to open →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
