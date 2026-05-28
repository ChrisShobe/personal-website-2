import { Link } from "react-router";
import { experience } from "../data/experience.js";
import type { Experience } from "../data/experience.js";
import "../experience.css";
import "../project.css";
import { useEffect, useRef } from "react";
import Navigation from "../components/Navigation.js";
import PageHero from "../components/PageHero.js";
import TagRow from "../components/TagRow.js";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fill = document.querySelector('.circuit-line-fill') as HTMLElement | null;
    const timeline = timelineRef.current;

    const updateFill = () => {
      if (!timeline || !fill) return;
      const rect = timeline.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1,
        (-rect.top + window.innerHeight * 0.65) / rect.height
      ));
      fill.style.height = `${progress * 100}%`;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { threshold: 0.2 });

    const nodes = document.querySelectorAll('.circuit-node-group');
    nodes.forEach(n => observer.observe(n));
    window.addEventListener('scroll', updateFill, { passive: true });
    updateFill();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateFill);
    };
  }, []);

  return (
    <div className="page-shell page-fade-in">
      <Navigation currentPage="experience" />

      <PageHero kicker="Career archive" subtitle="Click a role to learn more about internships, leadership, and DEI advocacy.">
        <span style={{ color: "var(--purple)" }}>My</span>{" "}
        <span style={{ color: "var(--teal-soft)" }}>Experience</span>
      </PageHero>

      <section className="circuit-timeline-section">
        <div className="circuit-timeline" ref={timelineRef}>
          <div className="circuit-line">
            <div className="circuit-line-fill" />
          </div>
          {experience.map((exp: Experience, i: number) => (
            <div key={exp.id} className="circuit-node-group" data-index={i}>
              <div className="circuit-node-dot" />
              <div className="circuit-node-content">
                <Link to={`/experience/${exp.id}`} className="circuit-node-card">
                  <div className="circuit-node-meta">
                    <span className="circuit-node-date">{exp.startDate} — {exp.endDate ?? "Present"}</span>
                    <span className="circuit-node-badge">{exp.title}</span>
                  </div>
                  <div className="circuit-node-main">
                    <img src={exp.image} alt={exp.company} className="circuit-node-logo" />
                    <div>
                      <h3 className="circuit-node-company">{exp.company}</h3>
                      <p className="circuit-node-description">{exp.fullDescription}</p>
                    </div>
                  </div>
                  {exp.tags && exp.tags.length > 0 && <TagRow tags={exp.tags} />}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
