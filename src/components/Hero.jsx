import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

import heroImage from '../assets/hero.png';
import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpeg';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    const heroImages = [
        heroImage,
        house1,
        house2
    ];

    useGSAP(() => {
        // Initial Title Reveal
        gsap.fromTo(titleRef.current,
            { y: 100, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
        );
    }, { scope: containerRef });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="hero" id="hero" ref={containerRef}>
            <div className="hero-background">
                {heroImages.map((imgUrl, index) => (
                    <img
                        key={index}
                        src={imgUrl}
                        alt={`Hero Slide ${index + 1}`}
                        className={index === currentImageIndex ? "active" : ""}
                    />
                ))}
            </div>



            <div className="hero-content">
                <h2 className="hero-subtitle">At Elyse Residence</h2>
                <p className="hero-description">
                    We believe that a home is more than a physical space — it's a reflection of your aspirations.
                </p>
                <Link to="/projects" className="hero-cta-btn">VIEW RESIDENCES</Link>
                <div className="scroll-indicator">SCROLL</div>
            </div>
        </section>
    );

};

export default Hero;
