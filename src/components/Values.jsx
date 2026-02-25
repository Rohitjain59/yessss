import React, { useRef } from 'react';
import './Values.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Values = () => {
    const containerRef = useRef(null);

    const valuesList = [
        { title: "HOLISTIC WELL-BEING", desc: "Spaces designed to nurture the mind, body, and soul." },
        { title: "DISCRETION & EXCLUSIVITY", desc: "Privacy and personal growth at the forefront." },
        { title: "CULTURAL ENRICHMENT", desc: "Celebrate local artistry, history, and traditions." },
        { title: "COMMUNITY & CONNECTION", desc: "A welcoming environment that fosters relationships." },
        { title: "SUSTAINABLE ELEGANCE", desc: "Luxury that respects our environment." }
    ];

    const bgClearRef = useRef(null);
    const bgBlurRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        // Smooth Parallax for both layers
        gsap.to([bgClearRef.current, bgBlurRef.current], {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1 // Smooth following
            }
        });

        // High-performance Focus Transition (Opacity Cross-fade)
        gsap.to(bgBlurRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to(bgClearRef.current, {
            opacity: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Content slight lift
        gsap.to(contentRef.current, {
            y: -50,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // CTA Button Entrance
        gsap.fromTo(".values-cta-btn",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".values-cta-btn",
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, { scope: containerRef });


    return (
        <section className="values-section" id="values" ref={containerRef}>
            <div className="values-bg-clear" ref={bgClearRef}></div>
            <div className="values-bg-blur" ref={bgBlurRef}></div>
            <div className="values-bg-overlay"></div>

            <div className="values-container" ref={contentRef}>
                <div className="values-header">
                    <h2 className="values-title">THE ATMOSPHERE <br /> <span className="italic-text">OF DREAMS</span></h2>

                    <div className="values-desc-text">
                        <p>Beyond the walls, a new way of living begins. This is where your aspirations take flight, anchored in a standard of living without compromise. In the heart of Chandkheda—where you don’t just reside; you finally arrive.</p>
                    </div>

                    <Link to="/projects" className="values-cta-btn">Explore Project</Link>

                </div>

                {/* <div className="values-list">
                    {valuesList.map((item, index) => (
                        <div className="value-item" key={index}>
                            <span className="value-number">{(index + 1).toString().padStart(2, '0')}</span>
                            <div className="value-content">
                                <h3>{item.title}</h3>
                                <div className="value-line"></div>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default Values;
