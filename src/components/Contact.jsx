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
                    <h1 className="contact-title contact-animate">
                        CONTACT<br />DISHVA GROUP
                    </h1>

                    <div className="contact-text contact-animate">
                        <p>
                            DISHVA Group provides exclusive 2 & 3 BHK apartments in Zundal, Vaishnodevi Circle, Ahmedabad.
                            If you are looking for affordable luxurious flats near Vaishnodevi circle, Ahmedabad, and Shops in Zundal,
                            we are here with a few ongoing projects like    Dishva Orbit, Dishva Solitaire, Dishva Essence, and Dishva Ixora.
                        </p>
                        <p className="mt-4">
                            Feel free to contact us for any inquiries. You can call us or drop an email, and our team of experts will connect with you as soon as possible.
                        </p>
                    </div>

                    <div className="contact-details contact-animate">
                        <div className="detail-group">
                            <span className="label">OFFICE ADDRESS</span>
                            <p>Vaishnodevi Circle, Zundal<br />Ahmedabad, Gujarat</p>
                        </div>

                        <div className="detail-group">
                            <span className="label">GET IN TOUCH</span>
                            <p>
                                <a href="mailto:[EMAIL_ADDRESS]">[EMAIL_ADDRESS]</a><br />
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </p>
                        </div>

                        <div className="detail-group">
                            <span className="label">FOLLOW US</span>
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
                            <label htmlFor="phone">PHONE NUMBER</label>
                            <input type="tel" id="phone" placeholder="Your Phone Number" />
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
