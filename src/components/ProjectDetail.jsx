import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
    FaBuilding, FaConciergeBell, FaSwimmingPool, FaCarAlt,
    FaGolfBall, FaFan, FaGem, FaMobileAlt, FaGlassCheers, FaTree,
    FaToriiGate, FaChild, FaSpa, FaWater,
    FaCocktail, FaBriefcase, FaFilm
} from 'react-icons/fa';
import { MdDeck, MdElevator, MdClose } from "react-icons/md";
import './ProjectDetail.css';

gsap.registerPlugin(ScrollTrigger);

const getAmenityIcon = (amenity) => {
    const map = {
        "Private Lift": <MdElevator />,
        "Sky Penthouse": <FaBuilding />,
        "Concierge Service": <FaConciergeBell />,
        "Heated Indoor Pool": <FaSwimmingPool />,
        "Valet Parking": <FaCarAlt />,
        "Golf Course View": <FaGolfBall />,
        "VRV Air Conditioning": <FaFan />,
        "Italian Marble Flooring": <FaGem />,
        "Smart Home Automation": <FaMobileAlt />,
        "Clubhouse Access": <FaGlassCheers />,
        "Private Garden": <FaTree />,
        "Terrace Garden": <MdDeck />,
        "Gated Community": <FaToriiGate />,
        "Kids Play Area": <FaChild />,
        "Meditation Zone": <FaSpa />,
        "Sea View": <FaWater />,
        "Infinity Pool": <FaSwimmingPool />,
        "Rooftop Lounge": <FaCocktail />,
        "Business Center": <FaBriefcase />,
        "Private Cinema": <FaFilm />
    };
    return map[amenity] || <FaGem />; // Default icon
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));
    const [activeTab, setActiveTab] = useState('Ground Floor');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useGSAP(() => {
        gsap.fromTo('.detail-hero-img',
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
        );

        gsap.fromTo(['.detail-meta', '.detail-title', '.detail-desc'],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5, ease: "power3.out" }
        );

        gsap.fromTo('.detail-content-section',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.detail-content-section',
                    start: 'top 80%'
                }
            }
        );
    }, { dependencies: [] }); // Fixed dependency array

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="detail-error">Project not found</div>;
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Our brochure will be sent to you shortly.");
        closeModal();
    };

    return (
        <div className="project-detail-page">
            <div className="detail-hero">
                <div className="detail-hero-overlay"></div>
                <img src={project.img} alt={project.title.join(' ')} className="detail-hero-img" />

                <div className="detail-hero-content">
                    <div className="detail-meta">
                        <span>{project.location}</span>
                        <span className="separator">•</span>
                        <span>{project.status}</span>
                    </div>
                    <h1 className="detail-title">
                        {project.title.map((line, i) => (
                            <span key={i} className="block-line">{line}</span>
                        ))}
                    </h1>
                    <p className="detail-desc">{project.desc}</p>
                </div>
            </div>

            <section className="detail-content-section">

                {/* 1. Project Story Section */}
                <div className="detail-story-section">
                    <h3 className="section-subtitle">PROJECT STORY</h3>
                    <div className="story-content">
                        {project.story.split('\n\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* 2. Gallery Section (Vertical Grid Layout) */}
                <div className="detail-gallery">
                    <h3 className="section-subtitle">PROJECT GALLERY</h3>
                    <div className="gallery-grid-view">
                        {project.gallery?.map((img, index) => (
                            <div key={index} className="gallery-img-container">
                                <img src={img} alt={`Gallery ${index}`} className="project-gallery-img" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Floor Plans Section */}
                <div className="detail-floorplans">
                    <h3 className="section-subtitle">FLOOR PLANS</h3>
                    <div className="floorplan-tabs">
                        {Object.keys(project.floorPlans).map((floor) => (
                            <button
                                key={floor}
                                className={`tab-btn ${activeTab === floor ? 'active' : ''}`}
                                onClick={() => setActiveTab(floor)}
                            >
                                {floor}
                            </button>
                        ))}
                    </div>
                    <div className="floorplan-display">
                        <div className="floorplan-grid-view">
                            {project.floorPlans[activeTab]?.map((planImg, index) => (
                                <div key={index} className="floorplan-img-wrapper">
                                    <img src={planImg} alt={`${activeTab} Plan ${index + 1}`} className="floorplan-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Amenities Section */}
                <div className="detail-amenities" id="amenities">
                    <h3 className="section-subtitle">EXCLUSIVE AMENITIES</h3>
                    <div className="amenities-list">
                        {project.amenities?.map((amenity, index) => (
                            <div key={index} className="amenity-tag">
                                <span className="amenity-icon">{getAmenityIcon(amenity)}</span>
                                <span className="amenity-text">{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="detail-specs">
                    <div className="spec-item">
                        <span className="spec-label">Area</span>
                        <span className="spec-value">4,500 Sq. Ft.</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Bedrooms</span>
                        <span className="spec-value">4 - 5</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Completion</span>
                        <span className="spec-value">2026</span>
                    </div>
                </div>

                <div className="detail-action">
                    <button className="btn-outline" onClick={openModal}>DOWNLOAD BROCHURE</button>
                    <Link to="/contact" className="btn-solid">ENQUIRE NOW</Link>
                </div>
            </section>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}><MdClose /></button>
                        <h3>Download Brochure</h3>
                        <p>Fill in your details to get the brochure.</p>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                            <button type="submit" className="btn-solid full-width">DOWNLOAD</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;

