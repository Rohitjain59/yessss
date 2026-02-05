import React, { useEffect, useRef } from 'react';
import './Vision.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section className="vision-section" id="vision" ref={containerRef}>
            <div className="vision-image-container">
                <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                    alt="Modern Interior"
                    className="vision-img"
                />
                {/* Placeholder image from unsplash matching the luxury vibe */}
            </div>
            <div className="vision-content">
                <div className="vision-header">
                    <span className="vision-subtitle">(OUR BELIEFS)</span>
                </div>

                <div className="vision-main-title">
                    <h2 ref={titleRef}>
                        A VISION OF<br />
                        <span className="italic-text">INSPIRED</span> LIVING
                    </h2>
                </div>

                <div className="vision-footer">
                    <p className="vision-text">
                        To inspire and nurture an enriched lifestyle that harmonizes beauty, wellness, and cultural connection, creating a sanctuary that feels like home.
                    </p>
                    <button className="btn-vision">Book a Visit</button>
                </div>
            </div>
        </section>
    );
};

export default Vision;
