import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Contact.css';

const Contact = ({ standalone = true }) => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Animated reveal
        tl.from(".contact-animate", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.2
        })
            .from(".contact-form-wrapper", {
                x: 50,
                opacity: 0,
                duration: 1
            }, "-=0.6");

    }, { scope: sectionRef });

    return (
        <section className={`contact-page ${standalone ? 'standalone' : ''}`} ref={sectionRef}>
            <div className="contact-container">

                {/* Left Column: Info */}
                <div className="contact-info">
                    <div className="section-label contact-animate">(GET IN TOUCH)</div>
                    <h1 className="contact-title contact-animate">
                        START A<br />CONVERSATION
                    </h1>

                    <div className="contact-details contact-animate">
                        <div className="detail-group">
                            <span className="label">VISIT US</span>
                            <p>Dishva Residences<br />1200 Luxury Lane<br />Beverly Hills, CA 90210</p>
                        </div>

                        <div className="detail-group">
                            <span className="label">CONTACT</span>
                            <p>
                                <a href="mailto:hello@dishva.com">hello@dishva.com</a><br />
                                <a href="tel:+13105550123">+1 (310) 555-0123</a>
                            </p>
                        </div>

                        <div className="detail-group">
                            <span className="label">FOLLOW</span>
                            <div className="social-links">
                                <a href="#">Instagram</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" className="btn-submit">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
