import React, { useState, useEffect } from 'react';
import './PhoneButton.css';

const PhoneButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Replace with your phone number
    const phoneNumber = '+917600900993'; // Change this to your actual number

    const phoneUrl = `tel:${phoneNumber}`;

    useEffect(() => {
        // Show button after a small delay for smooth entrance
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        window.location.href = phoneUrl;
    };

    return (
        <div className={`phone-button-container ${isVisible ? 'visible' : ''}`}>
            <button
                className="phone-button"
                onClick={handleClick}
                aria-label="Call us"
            >
                <svg
                    className="phone-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <span className="phone-tooltip">Call us now</span>
            </button>
            <div className="phone-pulse"></div>
        </div>
    );
};

export default PhoneButton;
