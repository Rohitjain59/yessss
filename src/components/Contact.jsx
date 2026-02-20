import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Contact.css';

const Contact = ({ standalone = true }) => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
            alert("Please fill in all required fields (Name, Phone, Message).");
            return;
        }

        const subject = `Enquiry from ${formData.name}`;
        const body = `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

Message:
${formData.message}`;

        const mailtoLink = `mailto:Info@dishva.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className={`contact-page ${standalone ? 'standalone' : ''}`} ref={sectionRef}>
            <div className="contact-container">

                {/* Left Column: Info */}
                <div className="contact-info">
                    <h1 className="contact-title contact-animate">
                        CONTACT<br />
                    </h1>

                    <div className="contact-text contact-animate">
                        <p>
                            At the heart of every project we build is a commitment to excellence and a promise of a better lifestyle.
                            Whether you are looking for your next family home or a strategic investment, our team is ready to guide you through our latest developments.
                        </p>
                        <p className="mt-4">
                            Reach out today to schedule a site visit or to discuss your future at one of our landmark addresses.
                        </p>
                    </div>

                    <div className="contact-details contact-animate">
                        <div className="detail-group">
                            <span className="label">OFFICE ADDRESS</span>
                            <p>The Atmosphere, opp. Sangath Pure, Chandkheda, Ahmedabad.</p>
                        </div>

                        <div className="detail-group">
                            <span className="label">GET IN TOUCH</span>
                            <p>
                                <a href="mailto:Info@dishva.com">Info@dishva.com</a><br />
                                <a href="tel:+917600900993">+91 76 009 009 93</a>
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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">NAME *</label>
                            <input type="text" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">EMAIL <span style={{ opacity: 0.4, fontSize: '0.7rem' }}>(Optional)</span></label>
                            <input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">PHONE NUMBER *</label>
                            <input type="tel" id="phone" placeholder="Your Phone Number" required value={formData.phone} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">MESSAGE *</label>
                            <textarea id="message" rows="4" placeholder="How can we help you?" required value={formData.message} onChange={handleChange}></textarea>
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
