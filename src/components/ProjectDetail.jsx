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
    FaCocktail, FaBriefcase, FaFilm, FaFilePdf
} from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import './ProjectDetail.css';

gsap.registerPlugin(ScrollTrigger);

const getAmenityIcon = (amenity) => {
    // Map amenity names to icon filenames
    const iconMap = {
        // Parking & Transportation
        "Private Lift": "ALOOTED CAR PARKING.png",
        "Valet Parking": "ALOOTED CAR PARKING.png",
        "Basement Parking": "ALOOTED CAR PARKING.png",
        "Allotted Car Parking": "ALOOTED CAR PARKING.png",

        // Entertainment & Recreation
        "Amphitheatre": "AMPETHEATRE.png",
        "Sky Penthouse": "AMPETHEATRE.png",
        "Multi Purpose Hall": "AMPETHEATRE.png",

        // Security & Safety
        "CCTV": "CCTV.png",
        "Security System": "CCTV.png",
        "Power Backup": "CCTV.png",
        "Concierge Service": "SECURITY CABIN.png",
        "Gated Community": "SECURITY CABIN.png",
        "Security Cabin": "SECURITY CABIN.png",
        "Fire Safety": "FIRE SAFETY.png",
        "Solar System": "FIRE SAFETY.png",

        // Children & Family
        "Children Play Area": "CHILDREN PLAY AREA.png",
        "Kids Play Area": "CHILDREN PLAY AREA.png",
        "Toddler Play Area": "TODDLER PLAY AREA.png",
        "Senior Citizen Area": "SENIOR CITYZEN.png",

        // Work & Business
        "Co Working Space": "CO WORKING SPACE.png",
        "Business Center": "CO WORKING SPACE.png",

        // Connectivity
        "DTH Connection": "DTH CONNECTION.png",
        "Gas Pipeline": "GAS PIPE.png",
        "Gas Pipe": "GAS PIPE.png",

        // Outdoor & Garden
        "Gazebo": "GAZEBO.png",
        "Meditation Zone": "GAZEBO.png",
        "Rooftop Lounge": "GAZEBO.png",
        "Terrace Garden": "GAZEBO.png",
        "Private Garden": "LANDSCAPE GARDEN.png",
        "Landscape Garden": "LANDSCAPE GARDEN.png",
        "Golf Course View": "LANDSCAPE GARDEN.png",
        "Italian Marble Flooring": "LANDSCAPE GARDEN.png",
        "Sea View": "LANDSCAPE GARDEN.png",

        // Fitness & Wellness
        "Gymnasium": "GYMNASSIUM.png",
        "Clubhouse Access": "GYMNASSIUM.png",
        "Heated Indoor Pool": "SWIMMING POOL.png",
        "Swimming Pool": "SWIMMING POOL.png",
        "Infinity Pool": "SWIMMING POOL.png",

        // Indoor Activities
        "Indoor Games": "INDOOR GAMES.png",
        "Private Cinema": "INDOOR GAMES.png",
        "Library": "LIBRARY.png",

        // Utilities
        "Water Supply": "WATER SUPPLY.png",
        "Wifi": "WIFI ZONE.png",
        "Wifi Zone": "WIFI ZONE.png",
        "Smart Home Automation": "WIFI ZONE.png",
        "VRV Air Conditioning": "WIFI ZONE.png",

        // Special Zones
        "No Vehicle Zone": "NO VEHICLE ZONE.png"
    };

    const iconFileName = iconMap[amenity] || "CCTV.png"; // Default icon
    return `/DISHVA AMENITIES PNG/${iconFileName}`;
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));
    // tabs removed
    const [isModalOpen, setIsModalOpen] = useState(false);

    const floorPlanKeys = Object.keys(project.floorPlans || {});
    const [activeFloorIndex, setActiveFloorIndex] = useState(null);

    const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
    const [galleryFilter, setGalleryFilter] = useState('View All');

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
    }, { dependencies: [] });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="detail-error">Project not found</div>;
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openLightbox = (index) => setActiveLightboxIndex(index);
    const closeLightbox = () => setActiveLightboxIndex(null);

    const nextImage = (e) => {
        e.stopPropagation();
        setActiveLightboxIndex((prev) => (prev + 1) % project.gallery.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setActiveLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };

    const openFloorLightbox = (index) => setActiveFloorIndex(index);
    const closeFloorLightbox = () => setActiveFloorIndex(null);

    const nextFloor = (e) => {
        e.stopPropagation();
        setActiveFloorIndex((prev) => (prev + 1) % floorPlanKeys.length);
    };

    const prevFloor = (e) => {
        e.stopPropagation();
        setActiveFloorIndex((prev) => (prev - 1 + floorPlanKeys.length) % floorPlanKeys.length);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (project.brochure) {
            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = project.brochure;
            link.download = project.brochure.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            closeModal();
        } else {
            alert("Digital brochure for this project is coming soon! Our team will contact you with more details.");
            closeModal();
        }
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
                        {project.logo ? (
                            <img src={project.logo} alt={project.title.join(' ')} className="detail-logo-img" />
                        ) : (
                            project.title.map((line, i) => (
                                <span key={i} className="block-line">{line}</span>
                            ))
                        )}
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

                {/* 2. Gallery Section (Masonry Grid with Filters) */}
                <div className="detail-gallery">
                    <h3 className="section-subtitle">Gallery</h3>

                    {/* Gallery Filters */}
                    <div className="gallery-grid-new">
                        {project.gallery?.map((item, originalIdx) => (
                            <div key={originalIdx} className="gallery-card-new" onClick={() => openLightbox(originalIdx)}>
                                <div className="gallery-img-wrapper-new">
                                    <img src={item.src} alt={item.text} className="gallery-img-new" />
                                    <div className="gallery-label-overlay">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Plans & Layout Section */}
                <div className="detail-floorplans">
                    <h3 className="section-subtitle">Plans & Layout</h3>

                    <div className="floorplan-display">
                        <div className="floorplan-grid-new">
                            {Object.keys(project.floorPlans).map((floorName, index) => (
                                <div
                                    key={floorName}
                                    className="floorplan-card-new"
                                    onClick={() => openFloorLightbox(index)}
                                >
                                    <div className="floorplan-img-wrapper-new">
                                        <img
                                            src={project.floorPlans[floorName][0]}
                                            alt={`${floorName} Plan`}
                                            className="floorplan-img-new"
                                        />
                                        <div className="floorplan-label-overlay">
                                            {floorName}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Amenities Section */}
                <div className="detail-amenities" id="amenities">
                    <h3 className="section-subtitle">EXCLUSIVE AMENITIES</h3>
                    <div className="amenities-grid">
                        {project.amenities?.map((amenity, index) => (
                            <div key={index} className="amenity-card">
                                <div className="amenity-icon-wrapper">
                                    <img
                                        src={getAmenityIcon(amenity)}
                                        alt={amenity}
                                        className="amenity-icon-img"
                                    />
                                </div>
                                <span className="amenity-text">{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="detail-specs">
                    <div className="spec-item">
                        <span className="spec-label">Area</span>
                        <span className="spec-value">{project.area}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Configuration</span>
                        <span className="spec-value">{project.bedrooms}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Completion</span>
                        <span className="spec-value">{project.completion}</span>
                    </div>
                </div>

                <div className="detail-action">
                    <button className="btn-brochure" onClick={openModal}>
                        <FaFilePdf className="btn-icon" /> GET E-BROCHURE
                    </button>
                    <Link to="/contact" className="btn-solid">ENQUIRE NOW</Link>
                </div>
            </section>

            {/* Lightbox Modal */}
            {activeLightboxIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}><MdClose /></button>
                    <button className="lightbox-prev" onClick={prevImage}>&lt;</button>
                    <button className="lightbox-next" onClick={nextImage}>&gt;</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.gallery[activeLightboxIndex].src}
                            alt={project.gallery[activeLightboxIndex].text}
                            className="lightbox-img"
                        />
                        <div className="lightbox-caption">
                            {project.gallery[activeLightboxIndex].text}
                        </div>
                    </div>
                </div>
            )}

            {/* Navigatable Lightbox for Floor Plans */}
            {activeFloorIndex !== null && (
                <div className="lightbox-overlay floor-lightbox" onClick={closeFloorLightbox}>
                    <button className="lightbox-close" onClick={closeFloorLightbox}><MdClose /></button>

                    {floorPlanKeys.length > 1 && (
                        <>
                            <button className="lightbox-prev" onClick={prevFloor}>&lt;</button>
                            <button className="lightbox-next" onClick={nextFloor}>&gt;</button>
                        </>
                    )}

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.floorPlans[floorPlanKeys[activeFloorIndex]][0]}
                            alt={floorPlanKeys[activeFloorIndex]}
                            className="lightbox-img"
                        />
                        <div className="lightbox-caption">
                            {floorPlanKeys[activeFloorIndex]}
                        </div>
                    </div>
                </div>
            )}

            {/* Brochure Form Modal */}
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

