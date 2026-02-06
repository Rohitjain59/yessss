import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import dishvaLogo from '../assets/dishva_logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <img src={dishvaLogo} alt="Dishva" className="footer-logo-img" />
                    <p className="footer-tagline">Crafting spaces that defy the ordinary.</p>
                </div>

                <div className="footer-links-group">
                    <div className="footer-column">
                        <h3>Explore</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Portfolio</Link></li>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="mailto:hello@dishva.com">hello@dishva.com</a></li>
                            <li><a href="tel:+919876543210">+91 987 654 3210</a></li>
                            <li><span className="address">South Delhi, India</span></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Social</h3>
                        <ul>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>&copy; {new Date().getFullYear()} Dishva Developments. All rights reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
