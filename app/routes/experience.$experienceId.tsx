import { useParams, Link } from "react-router";
import { experience } from "../data/experience.js";
import type { Experience } from "../data/experience.js";
import "../experience.css";
import "../project.css";
import Navigation from "../components/Navigation.js";
import PageHero from "../components/PageHero.js";
import TagRow from "../components/TagRow.js";

export default function ExperienceDetail() {
  const { experienceId } = useParams();
  const exp = experience.find((e: Experience) => e.id === experienceId);

  if (!exp) {
    return (
      <div className="page-shell">
        <Navigation currentPage="experience" />
        <div className="detail-shell">
          <h1>Experience Not Found</h1>
          <p>The experience you're looking for doesn't exist.</p>
          <Link to="/experience" className="project-back-link">← Back to All Experience</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell page-fade-in">
      <Navigation currentPage="experience" />

      <PageHero kicker={exp.title} subtitle={exp.fullDescription}>
        <span style={{ color: "var(--teal-soft)" }}>{exp.company}</span>
      </PageHero>

      <div className="detail-shell">
        <Link to="/experience" className="project-back-link">← All Experience</Link>

        <div className="detail-card">
          <div className="detail-grid">
            <div className="detail-panel">
              {exp.roles && exp.roles.length > 0 && (
                <>
                  <h3 className="project-section-heading">Roles &amp; Responsibilities</h3>
                  {exp.roles.map((role, i) => (
                    <div key={i} className="role-item">
                      <div className="role-header">
                        <h4>{role.title}</h4>
                        <span className="role-date">{role.date}</span>
                      </div>
                      <p className="role-description">{role.description}</p>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="detail-panel">
              <div className="project-detail-image-wrap">
                <img
                  src={exp.bottomImage ?? exp.image}
                  alt={`${exp.company}`}
                  className="project-detail-image"
                />
              </div>

              <div style={{ marginBottom: "0.9rem" }}>
                <span className="circuit-node-date" style={{ display: "block", marginBottom: "0.5rem" }}>
                  {exp.startDate} — {exp.endDate ?? "Present"}
                </span>
              </div>

              {exp.tags && exp.tags.length > 0 && <TagRow tags={exp.tags} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
