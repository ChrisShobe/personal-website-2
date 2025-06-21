import React, { useState } from "react";
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
