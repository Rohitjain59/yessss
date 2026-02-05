import React from 'react';
import './Amenities.css';

const Amenities = () => {
    return (
        <section className="amenities-section" id="amenities">
            <div className="amenities-text-container">
                <div className="amenities-content">
                    <h2 className="amenities-title">
                        WELLNESS-<br />
                        CENTERED<br />
                        <span className="italic-font">AMENITIES</span>
                    </h2>

                    <p className="amenities-desc">
                        From private fitness studios to guided meditation sessions, our amenities are designed to enhance your well-being and foster a sense of harmony.
                    </p>

                    <button className="btn-amenities">LEARN MORE</button>
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
