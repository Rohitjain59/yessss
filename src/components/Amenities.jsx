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
            .from(".amenities-bg-img", {
                scale: 1.1,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            }, "-=0.6")
            .from(".amenities-fg-img-wrapper", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: sectionRef });

    return (
        <section className="amenities-section" id="amenities" ref={sectionRef}>
            <div className="amenities-left">
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

            <div className="amenities-right">
                <div className="amenities-images">
                    {/* Background Architecture Image */}
                    <img
                        src="https://images.unsplash.com/photo-1512918580421-32c295f1d359?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                        alt="Background Architecture"
                        className="amenities-bg-img"
                    />

                    {/* Floating Foreground Image (Gym) */}
                    <div className="amenities-fg-img-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Fitness Studio"
                            className="amenities-fg-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amenities;
