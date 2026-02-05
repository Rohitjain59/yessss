import React from 'react';
import './About.css';
import aboutImg from '../assets/about.png';

const About = () => {
    return (
        <section className="about">
            <div className="about-grid">
                <div className="about-col-left">
                    <div className="section-label">(ABOUT)</div>
                    <h2 className="about-heading">
                        <span>TIMELESS</span>
                        <span>DESIGN.</span>
                        <span>WELLNESS-</span>
                        <span>FOCUSED</span>
                        <span>LIVING.</span>
                    </h2>
                </div>

                <div className="about-col-center">
                    <div className="about-image-wrapper">
                        <img src={aboutImg} alt="Luxury Interior" />
                    </div>
                </div>

                <div className="about-col-right">
                    <div className="about-description">
                        <p>
                            Every element of Elyse Residence reflects a commitment to excellence. From the timeless elegance of its interiors to its thoughtfully curated amenities, the property embodies a holistic approach to luxury living.
                        </p>
                        <p>
                            Whether you're seeking a serene retreat, cultural hub, or a space that fosters personal growth, Elyse Residence offers it all.
                        </p>
                    </div>
                    <button className="btn-pill">LEARN MORE</button>
                </div>
            </div>
        </section>
    );
};

export default About;
