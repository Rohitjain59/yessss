import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Amenities.css';

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".amenities-text-animate", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        })
            .from(".amenities-img-wrapper", {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: sectionRef });

    return (
        <section className="amenities-section" id="amenities" ref={sectionRef}>
            <div className="amenities-text-container">
                <div className="amenities-content">
                    <h2 className="amenities-title amenities-text-animate">
                        WELLNESS-<br />
                        CENTERED<br />
                        <span className="italic-font">AMENITIES</span>
                    </h2>

                    <p className="amenities-desc amenities-text-animate">
                        From private fitness studios to guided meditation sessions, our amenities are designed to enhance your well-being and foster a sense of harmony.
                    </p>

                    <button className="btn-amenities amenities-text-animate">LEARN MORE</button>
                </div>
            </div>

            <div className="amenities-image-container">
                {/* Using a reliable placeholder from Unsplash via a different endpoint or specific ID known to work, or standard placeholder */}
                <div className="amenities-img-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
                        alt="Wellness Architecture"
                        className="amenities-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Amenities;
