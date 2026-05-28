import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import "../project.css";
import Navigation from "../components/Navigation.js";
import PageHero from "../components/PageHero.js";
import TagRow from "../components/TagRow.js";
import ProjectLinks from "../components/ProjectLinks.js";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="page-shell">
        <Navigation currentPage="projects" />
        <div className="detail-shell">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="project-back-link">← Back to All Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell page-fade-in">
      <Navigation currentPage="projects" />

      <PageHero kicker={project.projectType ?? "Project"} subtitle={project.description}>
        <span style={{ color: "var(--teal-soft)" }}>{project.title}</span>
      </PageHero>

      <div className="detail-shell">
        <Link to="/projects" className="project-back-link">← All Projects</Link>

        <div className="detail-card">
          <div className="detail-grid">
            <div className="detail-panel">
              {project.award && (
                <span className="project-award-full">★ {project.award}</span>
              )}
              <h3 className="project-section-heading">About This Project</h3>
              <p>{project.fullDescription}</p>
            </div>

            <div className="detail-panel">
              {(project.github || project.devpost || project.writeup) && (
                <div className="project-links-section">
                  <ProjectLinks github={project.github} devpost={project.devpost} writeup={project.writeup} />
                </div>
              )}

              {project.tags && project.tags.length > 0 && <TagRow tags={project.tags} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
