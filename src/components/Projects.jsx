import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);
import projectImg from '../assets/project.png';
import aboutImg from '../assets/about.png';
import heroImg from '../assets/hero.png';
import florImg from '../assets/flor.jpg';
import house1Img from '../assets/house1.jpg';
import house2Img from '../assets/house2.jpeg';
import house4Img from '../assets/house 4.jpg';
import house5Img from '../assets/house 5.jpeg';
import house6Img from '../assets/house6.jpeg';
import house8Img from '../assets/house8.jpeg';

export const projectsData = [
    {
        id: 1,
        title: ["LUMIÈRE DUPLEX", "RESIDENCES"],
        img: projectImg,
        desc: "Two-story luxury apartments that features sunlit living spaces, private terraces, and a selection of exclusive amenities.",
        location: "SOUTH DELHI",
        status: "ONGOING PROJECT",
        amenities: ["Private Lift", "Sky Penthouse", "Concierge Service", "Heated Indoor Pool", "Valet Parking", "Multi Purpose Hall", "Senior Citizen Area", "Fire Safety", "Basement Parking", "Power Backup"],
        gallery: [
            { src: projectImg, text: "MAIN FACADE", category: "Exterior" },
            { src: house1Img, text: "LIVING AREA", category: "Living" },
            { src: house2Img, text: "MASTER SUITE", category: "Bedroom" },
            { src: aboutImg, text: "DINING SPACE", category: "Kitchen" },
            { src: house4Img, text: "MODERN KITCHEN", category: "Kitchen" },
            { src: house5Img, text: "PRIVATE POOL", category: "Exterior" },
            { src: heroImg, text: "SKY TERRACE", category: "Exterior" },
            { src: house6Img, text: "HOME THEATER", category: "Living" },
            { src: florImg, text: "SPA & WELLNESS", category: "Bathroom" },
            { src: house8Img, text: "GUEST LOUNGE", category: "Living" },
            { src: house1Img, text: "LIBRARY", category: "Office" },
            { src: house2Img, text: "WINE CELLAR", category: "Living" },
            { src: projectImg, text: "ART GALLERY", category: "Living" },
            { src: house5Img, text: "GARDEN PATH", category: "Exterior" },
            { src: aboutImg, text: "PANORAMIC VIEW", category: "Exterior" }
        ],
        story: "Lumière Duplex Residences redefine urban luxury by blending contemporary architecture with the warmth of natural light. \n\nInspired by the interplay of sun and shadow, the design philosophy focuses on creating expansive, airy interiors that seamlessly connect with the outdoors. \n\nEach residence is a masterpiece of craftsmanship, featuring double-height living areas, private elevators, and sustainable materials that ensure a healthy, eco-friendly lifestyle.",
        floorPlans: {
            "Ground Floor Plan": ["/3d-floor-plan-design-.jpg"],
            "Typical Floor Plan": ["/images.jpeg"],
            "3BHK Type A & D": ["/images (1).jpeg"],
            "3BHK Type B & C": ["/images (2).jpeg"]
        }
    },
    {
        id: 2,
        title: ["AURORA SKY", "PENTHOUSES"],
        img: aboutImg,
        desc: "Elevated living with panoramic city views, floor-to-ceiling windows, and bespoke interior finishes.",
        location: "GURGAON",
        status: "UPCOMING PROJECT",
        amenities: ["Golf Course View", "VRV Air Conditioning", "Italian Marble Flooring", "Smart Home Automation", "Clubhouse Access", "Wifi", "Security System", "Solar System", "Gas Pipeline", "DTH Connection"],
        gallery: [
            { src: aboutImg, text: "PANORAMIC VIEW", category: "Exterior" },
            { src: house4Img, text: "MODERN KITCHEN", category: "Kitchen" },
            { src: house6Img, text: "HOME THEATER", category: "Living" },
            { src: heroImg, text: "SKY TERRACE", category: "Exterior" },
            { src: house1Img, text: "LIVING AREA", category: "Living" },
            { src: house5Img, text: "PRIVATE POOL", category: "Exterior" },
            { src: projectImg, text: "MAIN FACADE", category: "Exterior" },
            { src: house8Img, text: "GUEST LOUNGE", category: "Living" },
            { src: florImg, text: "SPA & WELLNESS", category: "Bathroom" },
            { src: house2Img, text: "MASTER SUITE", category: "Bedroom" },
            { src: aboutImg, text: "DINING SPACE", category: "Kitchen" },
            { src: house5Img, text: "GARDEN PATH", category: "Exterior" },
            { src: house1Img, text: "LIBRARY", category: "Office" },
            { src: house6Img, text: "ART GALLERY", category: "Living" },
            { src: heroImg, text: "WINE CELLAR", category: "Living" }
        ],
        story: "Aurora Sky Penthouses are designed for those who seek to live above the ordinary. \n\nPerched atop the city's skyline, these residences offer unobstructed views that change with the colors of the day—from the golden hues of sunrise to the twinkling city lights at night. \n\nThe architectural language is minimal yet bold, emphasizing clean lines and glass facades that dissolve the boundary between inside and outside.",
        floorPlans: {
            "Tower A Layout": [florImg, house1Img, house2Img],
            "Tower B Layout": [florImg, aboutImg, heroImg],
            "Penthouse Lower": [florImg, house5Img, house6Img],
            "Penthouse Upper": [florImg, house4Img, house1Img],
            "Terrace Plan": [florImg, projectImg, aboutImg],
            "Basement Plan": [florImg, house8Img, florImg]
        }
    },
    {
        id: 3,
        title: ["SERENITY", "GARDEN VILLAS"],
        img: heroImg,
        desc: "Secluded sanctuary homes surrounded by lush landscaping, featuring private pools and outdoor wellness areas.",
        location: "NOIDA",
        status: "COMPLETED",
        amenities: ["Private Garden", "Terrace Garden", "Gated Community", "Kids Play Area", "Meditation Zone", "Multi Purpose Hall", "Senior Citizen Area", "Fire Safety", "Basement Parking", "Power Backup"],
        gallery: [
            { src: heroImg, text: "SKY TERRACE", category: "Exterior" },
            { src: house2Img, text: "MASTER SUITE", category: "Bedroom" },
            { src: florImg, text: "SPA & WELLNESS", category: "Bathroom" },
            { src: projectImg, text: "MAIN FACADE", category: "Exterior" },
            { src: house1Img, text: "LIVING AREA", category: "Living" },
            { src: house8Img, text: "GUEST LOUNGE", category: "Living" },
            { src: aboutImg, text: "DINING SPACE", category: "Kitchen" },
            { src: house5Img, text: "PRIVATE POOL", category: "Exterior" },
            { src: house4Img, text: "MODERN KITCHEN", category: "Kitchen" },
            { src: house6Img, text: "HOME THEATER", category: "Living" },
            { src: house1Img, text: "LIBRARY", category: "Office" },
            { src: house2Img, text: "WINE CELLAR", category: "Living" },
            { src: projectImg, text: "ART GALLERY", category: "Living" },
            { src: house5Img, text: "GARDEN PATH", category: "Exterior" },
            { src: aboutImg, text: "PANORAMIC VIEW", category: "Exterior" }
        ],
        story: "Serenity Garden Villas are a tribute to the healing power of nature. \n\nNestled within acres of lush greenery, each villa is designed as a personal retreat from the chaos of urban life. \n\nThe layout focuses on privacy and tranquility, with central courtyards, water bodies, and private gardens that create a microclimate of cool, fresh air. It's not just a home; it's a wellness sanctuary.",
        floorPlans: {
            "Ground Floor": [heroImg, house4Img, house1Img],
            "First Floor": [house2Img, florImg, house5Img],
            "Penthouse": [projectImg, aboutImg, house6Img]
        }
    },
    {
        id: 4,
        title: ["OBSIDIAN", "HEIGHTS"],
        img: projectImg,
        desc: "Architectural masterpieces defined by bold geometry, sustainable materials, and breathtaking horizon views.",
        location: "MUMBAI",
        status: "ONGOING PROJECT",
        amenities: ["Sea View", "Infinity Pool", "Rooftop Lounge", "Business Center", "Private Cinema", "Wifi", "Security System", "Solar System", "Gas Pipeline", "DTH Connection"],
        gallery: [
            { src: projectImg, text: "MAIN FACADE", category: "Exterior" },
            { src: house5Img, text: "PRIVATE POOL", category: "Exterior" },
            { src: house8Img, text: "GUEST LOUNGE", category: "Living" },
            { src: heroImg, text: "SKY TERRACE", category: "Exterior" },
            { src: house1Img, text: "LIVING AREA", category: "Living" },
            { src: house4Img, text: "MODERN KITCHEN", category: "Kitchen" },
            { src: aboutImg, text: "DINING SPACE", category: "Kitchen" },
            { src: house2Img, text: "MASTER SUITE", category: "Bedroom" },
            { src: florImg, text: "SPA & WELLNESS", category: "Bathroom" },
            { src: house6Img, text: "HOME THEATER", category: "Living" },
            { src: house1Img, text: "LIBRARY", category: "Office" },
            { src: house2Img, text: "WINE CELLAR", category: "Living" },
            { src: projectImg, text: "ART GALLERY", category: "Living" },
            { src: house5Img, text: "GARDEN PATH", category: "Exterior" },
            { src: aboutImg, text: "PANORAMIC VIEW", category: "Exterior" }
        ],
        story: "Obsidian Heights stands as a bold statement of modern power and elegance. \n\nThe dark, sleek facade, inspired by volcanic glass, contrasts with the soft, luxurious interiors. \n\nThis project is designed for the visionaries—the leaders who shape the world. With state-of-the-art business facilities integrated into the residential complex, it offers the perfect balance of work, life, and leisure.",
        floorPlans: {
            "Ground Floor": [house2Img, house6Img, florImg],
            "First Floor": [projectImg, heroImg, aboutImg],
            "Penthouse": [house4Img, house5Img, house1Img]
        }
    }
];

const Projects = ({ standalone = false }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const projectsRef = useRef(null);

    // Carousel Logic (Only runs if NOT standalone)
    useEffect(() => {
        if (standalone) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projectsData.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [standalone]);

    // GSAP Animation for Both Views
    useGSAP(() => {
        if (!standalone && projectsRef.current) {
            // Homepage Animation: Reveal the entire section
            gsap.fromTo(projectsRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: "top 75%"
                    }
                }
            );
        }

        if (standalone && projectsRef.current) {
            const items = gsap.utils.toArray('.project-card');

            items.forEach((item, i) => {
                gsap.fromTo(item,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        }
                    }
                );
            });
        }
    }, { scope: projectsRef, dependencies: [standalone] });

    const getPositionClass = (index) => {
        if (index === activeIndex) return "active";
        const len = projectsData.length;
        if (index === (activeIndex - 1 + len) % len) return "prev";
        if (index === (activeIndex + 1) % len) return "next";
        return "hidden";
    };

    // Standalone Page Logic
    const [filterStatus, setFilterStatus] = useState('ONGOING');

    const filteredProjects = projectsData.filter(project => {
        if (filterStatus === 'ONGOING') {
            // Show Ongoing and Completed in the main list, or just Ongoing?
            // User asked for "Ongoing" and "Upcoming". Strict filtering might be better to be precise.
            // Let's include everything that IS NOT Upcoming in the first tab to avoid hiding content.
            return !project.status.includes('UPCOMING');
        } else {
            return project.status.includes('UPCOMING');
        }
    });

    // --- RENDER STANDALONE PAGE (GRID/LIST) ---
    if (standalone) {
        return (
            <div className="projects-page" ref={projectsRef}>
                <div className="projects-page-header">
                    <h1 className="page-title">OUR PORTFOLIO</h1>
                    <p className="page-subtitle">A curation of our finest architectural endeavors.</p>

                    {/* Filter Tabs */}
                    <div className="project-filters">
                        <button
                            className={`filter-btn ${filterStatus === 'ONGOING' ? 'active' : ''}`}
                            onClick={() => setFilterStatus('ONGOING')}
                        >
                            ONGOING
                        </button>
                        <button
                            className={`filter-btn ${filterStatus === 'UPCOMING' ? 'active' : ''}`}
                            onClick={() => setFilterStatus('UPCOMING')}
                        >
                            UPCOMING
                        </button>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="project-card">
                            <div className="card-image-wrapper">
                                <Link to={`/projects/${project.id}`}>
                                    <img src={project.img} alt={project.title.join(' ')} />
                                </Link>
                            </div>
                            <div className="card-content">
                                <div className="card-meta-header">
                                    <div className="meta-info-row">
                                        <span className="meta-location">{project.location}</span>
                                        <span className="meta-status">{project.status}</span>
                                    </div>
                                </div>
                                <h2 className="project-name">
                                    {project.title.map((line, i) => (
                                        <span key={i} className="block-span">{line}</span>
                                    ))}
                                </h2>
                                <p className="project-desc">{project.desc}</p>
                                <Link to={`/projects/${project.id}`} className="btn-line">VIEW RESIDENCE</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // --- RENDER HOMEPAGE WIDGET (CAROUSEL) ---
    return (
        <section className="projects" id="projects" ref={projectsRef}>
            <div className="projects-header">
                <h2 className="projects-heading">OUR PROJECTS</h2>
            </div>

            <div className="gallery-container">
                {projectsData.map((project, index) => (
                    <div key={project.id} className={`gallery-item ${getPositionClass(index)}`}>
                        <Link to={`/projects/${project.id}`} className="gallery-link">
                            <img src={project.img} alt={project.title.join(' ')} />
                            <div className="item-title-container">
                                <div className="project-top-meta">
                                    <span className="meta-left">{project.location}</span>
                                    <span className="meta-right">{project.status}</span>
                                </div>
                                <h2 className="item-title">
                                    {project.title.map((line, i) => (
                                        <span key={i}>{line}</span>
                                    ))}
                                </h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="projects-footer">
                <p className="projects-description">
                    {projectsData[activeIndex].desc}
                </p>
                <Link to={`/projects/${projectsData[activeIndex].id}`} className="btn-pill">LEARN MORE</Link>
            </div>
        </section>
    );
};

export default Projects;
