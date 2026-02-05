import React, { useRef } from 'react';
import './Values.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Values = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".value-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%"
            }
        })
    }, { scope: containerRef });

    return (
        <section className="values-section" id="values" ref={containerRef}>
            <div className="values-bg-overlay"></div>
            {/* Background image is handled in CSS or via absolute img here */}

            <div className="values-container">
                <div className="values-grid">

                    {/* Top Right Description Block - Placed first in DOM for grid flow or absolute? 
                    Grid approach: 2 rows of items.
                */}

                    <div className="value-card card-1">
                        <h3>HOLISTIC<br />WELL-BEING</h3>
                        <p>Spaces designed to nurture the mind, body, and soul.</p>
                    </div>

                    <div className="value-card card-2">
                        <h3>DISCRETION &<br />EXCLUSIVITY</h3>
                        <p>Privacy and personal growth at the forefront.</p>
                        <span className="card-number">(1)</span>
                    </div>

                    <div className="values-intro-text">
                        <p>At Elyse Residence, we believe that a home is more than a physical space — it's a reflection of your aspirations, well-being, and values.</p>
                        <br />
                        <p>Our mission is to immerse you in a lifestyle that balances refined aesthetics, architectural excellence, and a profound sense of community.</p>
                    </div>

                    <div className="value-card card-3">
                        <h3>CULTURAL<br />ENRICHMENT</h3>
                        <p>Celebrate local artistry, history, and traditions.</p>
                        <span className="card-number">(3)</span>
                    </div>

                    <div className="value-card card-4">
                        <h3>COMMUNITY &<br />CONNECTION</h3>
                        <p>A welcoming environment that fosters relationships.</p>
                        <span className="card-number">(4)</span>
                    </div>

                    <div className="value-card card-5">
                        <h3>SUSTAINABLE<br />ELEGANCE</h3>
                        <p>Luxury that respects our environment.</p>
                        <span className="card-number">(5)</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Values;
