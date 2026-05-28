import { useState, useEffect, useRef } from "react";
import "../home.css";
import meImg from "/assets/images/home/me.png";
import projectImg from "/assets/images/home/projects.jpg";
import experienceImg from "/assets/images/home/experience.jpg";
import aboutImg from "/assets/images/home/sky.jpg";
import Navigation from "../components/Navigation.js";

const PROMPT = "Welcome! I'm Chris Shobe";

const Home = () => {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const [glowIndex, setGlowIndex] = useState(0);
  const cardRefs = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ];

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(PROMPT.slice(0, i));
      if (i >= PROMPT.length) { clearInterval(t); setDone(true); }
    }, 42);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setGlowIndex(i => (i + 1) % 3), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page-shell page-fade-in">
      <Navigation currentPage="home" />

      <header className="page-hero page-hero--portrait">
        <div className="hero-grid">
          <div className="hero-portrait">
            <img className="circle-image" src={meImg} alt="Portrait of Chris Shobe" />
          </div>
          <div className="hero-copy">
            <div className="hero-kicker terminal-action-kicker">
              <span className="terminal-root-prefix">[root@cshobe ~]$</span> open --vault
            </div>
            <h1 className="terminal-h1">
              <span className="terminal-prompt-prefix">cshobe@portfolio:~$</span>{" "}
              <span className="terminal-typed-text">{typed}</span>
              {!done && <span className="terminal-cursor">▋</span>}
            </h1>
            <p className="page-subtitle">
              I'm a junior at Santa Clara University studying Computer Science and Engineering with a Marketing minor, passionate about building inclusive, impactful tech through software, cybersecurity, and full-stack development.
            </p>
            <div className="terminal-disciplines">
              <span>software engineering</span>
              <span>cybersecurity</span>
              <span>student leadership</span>
            </div>
          </div>
        </div>
      </header>

      <section className="vault-section vault-section--no-locks">
        <div className="vault-hint">Scroll sideways and use your cursor as the key to open each room.</div>
        <div className="vault-rail">
          <a href="/projects" ref={cardRefs[0]} className={`vault-card${glowIndex === 0 ? " glow-active" : ""}`}>
            <div className="vault-card-shell">
              <div className="vault-card-body">
                <div className="vault-topline">
                  <span className="vault-pill">01</span>
                  <span className="vault-ribbon">Projects</span>
                </div>
                <h2 className="vault-heading">Project Vault</h2>
                <p className="vault-copy">AI, full-stack, cybersecurity, accessibility, and game design work gathered into one horizontal archive.</p>
                <div className="vault-lock-window">
                  <img src={projectImg} alt="Preview of projects" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </a>

          <a href="/experience" ref={cardRefs[1]} className={`vault-card${glowIndex === 1 ? " glow-active" : ""}`}>
            <div className="vault-card-shell">
              <div className="vault-card-body">
                <div className="vault-topline">
                  <span className="vault-pill">02</span>
                  <span className="vault-ribbon">Experience</span>
                </div>
                <h2 className="vault-heading">Experience Vault</h2>
                <p className="vault-copy">Internships and leadership roles presented like a timeline of locked chambers.</p>
                <div className="vault-lock-window">
                  <img src={experienceImg} alt="Preview of experience" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </a>

          <a href="/about" ref={cardRefs[2]} className={`vault-card${glowIndex === 2 ? " glow-active" : ""}`}>
            <div className="vault-card-shell">
              <div className="vault-card-body">
                <div className="vault-topline">
                  <span className="vault-pill">03</span>
                  <span className="vault-ribbon">Beyond CS</span>
                </div>
                <h2 className="vault-heading">Beyond CS Vault</h2>
                <p className="vault-copy">Music, art, travel, and personal interests arranged as a more exploratory visual space.</p>
                <div className="vault-lock-window">
                  <img src={aboutImg} alt="Preview of beyond CS" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
