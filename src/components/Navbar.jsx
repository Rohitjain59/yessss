import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.css';
import logo from '../assets/dishva_logo.png';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const lineRef = useRef(null);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    // Initial Animation on Load
    gsap.to(lineRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.1
    });

    // Scroll Interaction (Retract on scroll, Expand on return)
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      onUpdate: (self) => {
        // Optional: Change nav background on scroll
        if (self.progress > 0.05) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.to(menuRef.current, { y: 0, opacity: 1, duration: 0.5, pointerEvents: 'all' });
    } else {
      gsap.to(menuRef.current, { y: '-100%', opacity: 0, duration: 0.5, pointerEvents: 'none' });
    }
  };

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <>
      <nav ref={navRef} className="navbar">
        <div className="navbar-left-spacer"></div> {/* Spacer for grid centering */}

        <div className="navbar-logo">
          <img src={logo} alt="Dishva Logo" className="logo-img" />
        </div>

        <div className="navbar-actions">
          {/* Removed Book a Visit and Language */}
          <div className={`menu-trigger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>

        <div ref={lineRef} className="navbar-line"></div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div ref={menuRef} className="menu-overlay">
        <div className="menu-links">
          <a href="#hero" onClick={handleLinkClick}>Home</a>
          <a href="#vision" onClick={handleLinkClick}>Vision</a>
          <a href="#values" onClick={handleLinkClick}>Values</a>
          <a href="#amenities" onClick={handleLinkClick}>Amenities</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
