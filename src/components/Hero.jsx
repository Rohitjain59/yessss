import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    const heroImages = [
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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

            <h1 className="hero-title" ref={titleRef}>DISHVA</h1>

            <div className="hero-content">
                <h2 className="hero-subtitle">At Elyse Residence</h2>
                <p className="hero-description">
                    We believe that a home is more than a physical space — it's a reflection of your aspirations.
                </p>
                <div className="scroll-indicator">SCROLL</div>
            </div>
        </section>
    );
};

export default Hero;
