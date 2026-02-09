import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import aboutImg from '../assets/about.png';

gsap.registerPlugin(ScrollTrigger);

const About = ({ standalone = false }) => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%", // Start animation when section is in view
                toggleActions: "play none none reverse"
            }
        });

        // Image Reveal Animation (Masking/Scaling)
        tl.fromTo(imgRef.current,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.inOut" }
        )
            // Stagger Text Reveal
            .from(".about-animate-text", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.5");

    }, { scope: containerRef });

    // --- STANDALONE PAGE RENDER ---
    if (standalone) {
        return (
            <div className="about-page" ref={containerRef}>
                {/* Hero / Intro Section (Reusing existing layout logic) */}
                <section className="about standalone-section">
                    <div className="about-grid">
                        <div className="about-col-left">
                            <div className="section-label about-animate-text">WHO WE ARE</div>
                            <h2 className="about-heading about-animate-text">
                                <span>CRAFTING</span>
                                <span>MODERN</span>
                                <span>LEGACIES.</span>
                            </h2>
                            <div className="about-stats about-animate-text">
                                <div className="stat-item">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Years of Excellence</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">40+</span>
                                    <span className="stat-label">Awards Won</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-col-center">
                            <div className="about-image-wrapper">
                                <img ref={imgRef} src={aboutImg} alt="Luxury Interior Design" />
                            </div>
                        </div>

                        <div className="about-col-right">
                            <div className="about-description">
                                <p className="about-animate-text intro-text">
                                    At <strong>Dishva</strong>, we believe that a home is more than just a structure—it is a canvas for your life. We merge architectural innovation with timeless aesthetics.
                                </p>
                                <p className="about-animate-text secondary-text">
                                    From the selection of sustainable materials to the integration of seamless technology, every detail acts as a testament to our commitment to quality.
                                </p>

                                <div className="philosophy-list about-animate-text">
                                    <h4>OUR PHILOSOPHY</h4>
                                    <ul>
                                        <li>Human-Centric Design</li>
                                        <li>Sustainable Innovation</li>
                                        <li>Cultural Harmony</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Content for Full Page */}
                <section className="about-process">
                    <div className="process-header about-animate-text">
                        <h3>OUR PROCESS</h3>
                        <div className="line"></div>
                    </div>
                    <div className="process-grid">
                        <div className="process-step about-animate-text">
                            <span className="step-num">01</span>
                            <h4>Vision</h4>
                            <p>We start by understanding your deepest aspirations for your living space.</p>
                        </div>
                        <div className="process-step about-animate-text">
                            <span className="step-num">02</span>
                            <h4>Craft</h4>
                            <p>Our artisans and architects work in unison to sculpt every detail.</p>
                        </div>
                        <div className="process-step about-animate-text">
                            <span className="step-num">03</span>
                            <h4>Realization</h4>
                            <p>We bring the blueprint to life with flawless execution and finish.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // --- HOMEPAGE SECTION RENDER ---
    return (
        <section className={`about ${standalone ? 'standalone' : ''}`} id="about" ref={containerRef}>
            <div className="about-grid">
                {/* Left Column: Heading */}
                <div className="about-col-left">
                    <div className="section-label about-animate-text">WHO WE ARE</div>
                    <h2 className="about-heading about-animate-text">
                        <span>CRAFTING</span>
                        <span>MODERN</span>
                        <span>LEGACIES.</span>
                    </h2>
                    <div className="about-stats about-animate-text">
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">40+</span>
                            <span className="stat-label">Awards Won</span>
                        </div>
                    </div>
                </div>

                {/* Center Column: Image */}
                <div className="about-col-center">
                    <div className="about-image-wrapper">
                        <img ref={imgRef} src={aboutImg} alt="Luxury Interior Design" />
                    </div>
                </div>

                {/* Right Column: Description & Details */}
                <div className="about-col-right">
                    <div className="about-description">
                        <p className="about-animate-text intro-text">
                            At <strong>Dishva</strong>, we believe that a home is more than just a structure—it is a canvas for your life. We merge architectural innovation with timeless aesthetics to create sanctuaries that inspire.
                        </p>
                        <p className="about-animate-text secondary-text">
                            From the selection of sustainable materials to the integration of seamless technology, every detail acts as a testament to our commitment to quality.
                        </p>

                        <div className="philosophy-list about-animate-text">
                            <h4>OUR PHILOSOPHY</h4>
                            <ul>
                                <li>Human-Centric Design</li>
                                <li>Sustainable Innovation</li>
                                <li>Cultural Harmony</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn-pill about-animate-text">DISCOVER OUR STORY</button>
                </div>
            </div>
        </section>
    );
};

export default About;
