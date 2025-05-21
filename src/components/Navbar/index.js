import { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-links">
          <a 
            href="#about" 
            className="nav-link"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="nav-link"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="nav-link"
          >
            Contact
          </a>
        </div>
        <a 
          href="https://docs.google.com/document/d/1PeP8jPx4ct_WFCPPNeYYgJaiSRx9p8il5QjwZ7s0wbQ/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;