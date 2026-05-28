import { useParams, Link } from "react-router";
import { aboutCategories } from "../data/about.js";
import type { AboutCategory } from "../data/about.js";
import "../home.css";
import "../about.css";
import "../project.css";
import Navigation from "../components/Navigation.js";
import PageHero from "../components/PageHero.js";

const CATEGORY_LABELS: Record<string, { type: string; meta: string; seq: string }> = {
  art:       { type: "IMG_SOURCE", meta: "SOURCE: ANALOG_SKETCHPAD", seq: "RECON" },
  music:     { type: "AUDIO_LOG",  meta: "CAPTURE_HZ: 44.1KHZ",      seq: "TRACK" },
  traveling: { type: "GEO_LOC",    meta: "LAT_LONG: [COORD_STRINGS]", seq: "DEST"  },
  interests: { type: "FIELD_NOTES",meta: "CLASS: PERSONAL",           seq: "LOG"   },
};

export default function AboutDetail() {
  const { categoryId } = useParams();
  const category = aboutCategories.find((c: AboutCategory) => c.id === categoryId);

  if (!category) {
    return (
      <div className="page-shell">
        <Navigation currentPage="about" />
        <div className="detail-shell">
          <h1>Category Not Found</h1>
          <p>The category you're looking for doesn't exist.</p>
          <Link to="/about" className="project-back-link">← Back to Beyond CS</Link>
        </div>
      </div>
    );
  }

  const label = CATEGORY_LABELS[category.id] ?? { type: "FILE", meta: "CLASSIFIED", seq: "REF" };
  const allPhotos = category.images ?? [];

  return (
    <div className="page-shell page-fade-in">
      <Navigation currentPage="about" />

      <PageHero kicker="Personal archive" subtitle={category.description}>
        <span style={{ color: "var(--teal-soft)" }}>{category.title}</span>
      </PageHero>

      <div className="detail-shell">
        <Link to="/about" className="project-back-link">← Beyond CS</Link>

        <div className="detail-card" style={{ marginBottom: "1.5rem" }}>
          <div className="about-description-panel">
            <h3 className="project-section-heading">About {category.title}</h3>
            <p>{category.fullDescription}</p>
          </div>
        </div>

        <div className="classified-grid">
          {allPhotos.map((src, i) => (
            <div key={i} className="classified-photo">
              <img src={src} alt={`${category.title} ${i + 1}`} />
              <div className="classified-label">
                {label.type} // {label.meta} // {label.seq}_{String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
