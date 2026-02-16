import React, { useRef } from 'react';
import './Values.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

    }, { scope: containerRef });

    return (
        <section className="values-section" id="values" ref={containerRef}>
            <div className="values-bg-clear" ref={bgClearRef}></div>
            <div className="values-bg-blur" ref={bgBlurRef}></div>
            <div className="values-bg-overlay"></div>

            <div className="values-container" ref={contentRef}>
                <div className="values-header">
                    <h2 className="values-title">Created for the <br /> <span className="italic-text">Discerning Few</span></h2>
                    <div className="values-desc-text">
                        <p>At Elyse Residence, we believe that a home is more than a physical space — it's a reflection of your aspirations, well-being, and values. Our mission is to immerse you in a lifestyle that balances refined aesthetics, architectural excellence, and a profound sense of community.</p>
                    </div>
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
