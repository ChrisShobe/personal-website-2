import type { ReactNode } from "react";

interface PageHeroProps {
  kicker: ReactNode;
  children: ReactNode;
  subtitle: ReactNode;
}

export default function PageHero({ kicker, children, subtitle }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker">{kicker}</div>
          <h1>{children}</h1>
          <p className="page-subtitle">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
