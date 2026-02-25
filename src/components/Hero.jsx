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
        '/photos/2025-10-31-17-57-24-The-Atmosphere-6.jpg',
        '/photos/BG_FN_02.jpg',
        '/photos/Cam_03 copy.jpg'
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

                <p className="hero-description">
                    Creating spaces that truly reflects your vision of the good life.
                </p>
                <Link to="/projects" className="hero-cta-btn">VIEW PROJECTS</Link>

            </div>


        </section>
    );

};

export default Hero;
