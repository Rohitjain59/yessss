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

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".values-header", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".value-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section className="values-section" id="values" ref={containerRef}>
            <div className="values-bg-overlay"></div>

            <div className="values-container">
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
