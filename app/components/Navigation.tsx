import { useState } from "react";
import "../main.css";

interface NavigationProps {
  currentPage: "home" | "projects" | "experience" | "about";
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="top-header">
        {/* Hamburger Menu Button - only visible on mobile */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="/" 
            className={currentPage === "home" ? "current" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="/projects" 
            className={currentPage === "projects" ? "current" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="/experience" 
            className={currentPage === "experience" ? "current" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a 
            href="/about" 
            className={currentPage === "about" ? "current" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Beyond CS
          </a>
        </nav>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/chris-shobe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/ChrisShobe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:chrisshobe2000@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="/Chris Shobe Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="nav-overlay" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
