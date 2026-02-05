import React, { useEffect, useRef } from 'react';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const heroImages = [
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Dark moody modern exterior
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Spacious luxury living room
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"  // Modern pool/patio dusk
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="hero" id="hero">
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

            <h1 className="hero-title">DISHVA</h1>

        </section>
    );
};

export default Hero;
