import { useState } from "react";
import { Link } from "react-router";
import { aboutCategories } from "../data/about.js";
import type { AboutCategory } from "../data/about.js";
import "../home.css";
import "../about.css";
import "../project.css";
import Navigation from "../components/Navigation.js";
import PageHero from "../components/PageHero.js";

export default function About() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      if (expandedId !== id) {
        e.preventDefault();
        setExpandedId(id);
      }
    }
  };

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as Element).closest(".vault-card")) {
      setExpandedId(null);
    }
  };

  return (
    <div className="page-shell page-fade-in" onClick={handlePageClick}>
      <Navigation currentPage="about" />

      <PageHero kicker="Beyond CS" subtitle="Click a category to learn more about my creative interests and projects beyond CS.">
        <span style={{ color: "var(--purple)" }}>Beyond</span>{" "}
        <span style={{ color: "var(--teal-soft)" }}>CS</span>
      </PageHero>

      <section className="vault-section vault-section--no-locks">
        <div className="project-archive-hint page-subtitle">hover to unlock · click to enter</div>
        <div className="vault-rail">
          {aboutCategories.map((category: AboutCategory) => (
            <Link
              key={category.id}
              to={`/about/${category.id}`}
              className={`vault-card${expandedId === category.id ? " is-expanded" : ""}`}
              onClick={(e) => handleCardClick(e, category.id)}
            >
              <div className="vault-card-shell" data-id={category.id}>
                <div className="vault-card-body">
                  <div className="vault-topline">
                    <span className="vault-pill">Archive</span>
                    <span className="vault-ribbon">{category.title}</span>
                  </div>
                  <h2 className="vault-heading">{category.title}</h2>
                  <p className="vault-copy">{category.description}</p>
                  <div className="vault-lock-window">
                    <div className="redact-bar" aria-hidden="true">▓ REDACTED ▓</div>
                    <img src={category.image} alt={category.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
