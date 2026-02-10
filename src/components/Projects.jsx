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
        title: ["THE", "ATMOSPHERE"],
        img: "/photos/6.jpg",
        desc: "A landmark residential project offering a blend of luxury and nature. Experience the pinnacle of modern living with state-of-the-art amenities and breathtaking views.",
        location: "GURGAON",
        status: "NEW LAUNCH",
        amenities: ["Private Lift", "Sky Penthouse", "Concierge Service", "Heated Indoor Pool", "Valet Parking", "Multi Purpose Hall", "Senior Citizen Area", "Fire Safety", "Basement Parking", "Power Backup"],
        gallery: [
            { src: "/photos/6.jpg", text: "MAIN FACADE", category: "Exterior" },
            { src: "/photos/Shawat_C 1.jpg", text: "LIVING AREA", category: "Living" },
            { src: "/photos/Cam_13_2.jpg", text: "MASTER SUITE", category: "Bedroom" },
            { src: "/photos/BG_FN_02.jpg", text: "DINING SPACE", category: "Kitchen" },
            { src: "/photos/Cam_005_02.jpg", text: "MODERN KITCHEN", category: "Kitchen" },
            { src: "/photos/Cam_03 copy.jpg", text: "PRIVATE POOL", category: "Exterior" },
            { src: "/photos/Cam_11_2.jpg", text: "SKY TERRACE", category: "Exterior" },
            { src: "/photos/Gym.jpg", text: "FITNESS CENTER", category: "Living" },
            { src: "/photos/F_Cam_04.jpg", text: "SPA & WELLNESS", category: "Bathroom" },
            { src: "/photos/Shawat_C 2.jpg", text: "GUEST LOUNGE", category: "Living" },
            { src: "/photos/Library_Cam_01.jpg", text: "LIBRARY", category: "Office" },
            { src: "/photos/Work_Space.jpg", text: "HOME OFFICE", category: "Office" },
            { src: "/photos/Indoor_Games.jpg", text: "GAME ROOM", category: "Living" },
            { src: "/photos/Shawat_C 04.jpg", text: "GARDEN PATH", category: "Exterior" },
            { src: "/photos/Foyer_N.jpg", text: "ENTRANCE FOYER", category: "Exterior" }
        ],
        story: "The Atmosphere is more than just a home; it's a lifestyle statement. \n\nDesigned for those who appreciate the finer things in life, this project combines architectural brilliance with functional elegance. \n\nEvery corner is crafted to perfection, ensuring a living experience that is both opulent and comfortable.",
        floorPlans: {
            "Ground Floor Plan": ["/THE ATMOSPHERE GROUND FLOOR PLAN.jpg.jpeg"],
            "First Floor Plan": ["/THE ATMOSPHERE FIRST FLOOR PLAN.jpg.jpeg"],
            "Typical Floor Plan": ["/THE ATMOSPHERE TYPICAL FLOOR PLAN.jpg.jpeg"],
            "3BHK Type A": ["/THE ATMOSPHERE 3BHK FLOOR PLAN.jpg.jpeg"],
            "3BHK Type B": ["/THE ATMOSPHERE 3BHK FLOOR PLAN 2.0.jpg.jpeg"],
            "4BHK Luxury Plan": ["/THE ATMOSPHERE 4BHK FLOOR PLAN.jpg.jpeg"]
        }
    },
    {
        id: 2,
        title: ["ATMOSPHERE", "O2"],
        img: "/photos/Cam_01_night_02.jpg",
        desc: "The premium tower at The Atmosphere, offering exclusive penthouses and sky villas for limited residents.",
        location: "GURGAON",
        status: "PREMIUM TOWER",
        amenities: ["Golf Course View", "VRV Air Conditioning", "Italian Marble Flooring", "Smart Home Automation", "Clubhouse Access", "Wifi", "Security System", "Solar System", "Gas Pipeline", "DTH Connection"],
        gallery: [
            { src: "/photos/Cam_01_night_02.jpg", text: "NIGHT VIEW", category: "Exterior" },
            { src: "/photos/F_Cam_01.jpg", text: "MODERN KITCHEN", category: "Kitchen" },
            { src: "/photos/Library_Cam_02.jpg", text: "HOME LIBRARY", category: "Living" },
            { src: "/photos/Shawat_C 003.jpg", text: "SKY TERRACE", category: "Exterior" },
            { src: "/photos/Shawat_C 1.jpg", text: "LIVING AREA", category: "Living" },
            { src: "/photos/Cam_03 copy.jpg", text: "PRIVATE POOL", category: "Exterior" },
            { src: "/photos/6.jpg", text: "MAIN FACADE", category: "Exterior" },
            { src: "/photos/Shawat_C 2.jpg", text: "GUEST LOUNGE", category: "Living" },
            { src: "/photos/BG_FN_02.jpg", text: "SPA & WELLNESS", category: "Bathroom" },
            { src: "/photos/Cam_13_2.jpg", text: "MASTER SUITE", category: "Bedroom" },
            { src: "/photos/Cam_005_02.jpg", text: "DINING SPACE", category: "Kitchen" },
            { src: "/photos/Shawat_C 04.jpg", text: "GARDEN PATH", category: "Exterior" },
            { src: "/photos/Library_Cam_01.jpg", text: "STUDY", category: "Office" },
            { src: "/photos/Work_Space.jpg", text: "OFFICE SPACE", category: "Office" },
            { src: "/photos/Indoor_Games.jpg", text: "RECREATION", category: "Living" }
        ],
        story: "Atmosphere O2 represents the zenith of luxury living. \n\nReserved for the select few, these residences feature higher ceilings, exclusive elevator access, and premium specifications. \n\nThe tower commands the best views in the development, overlooking the central greens and the city skyline.",
        floorPlans: {
            "Ground Floor Plan": ["/THE ATMOSPHERE GROUND FLOOR PLAN.jpg.jpeg"],
            "First Floor Plan": ["/THE ATMOSPHERE FIRST FLOOR PLAN.jpg.jpeg"],
            "Typical Floor Plan": ["/THE ATMOSPHERE TYPICAL FLOOR PLAN.jpg.jpeg"],
            "3BHK Type A": ["/THE ATMOSPHERE 3BHK FLOOR PLAN.jpg.jpeg"],
            "3BHK Type B": ["/THE ATMOSPHERE 3BHK FLOOR PLAN 2.0.jpg.jpeg"],
            "4BHK Luxury Plan": ["/THE ATMOSPHERE 4BHK FLOOR PLAN.jpg.jpeg"]
        }
    },
    {
        id: 3,
        title: ["THE", "ATMOSPHERE"],
        img: "/photos/Shawat_C 1.jpg",
        desc: "Phase 1 of The Atmosphere, featuring spacious 3 & 4 BHK apartments designed for family living.",
        location: "GURGAON",
        status: "PHASE 1",
        amenities: ["Private Garden", "Terrace Garden", "Gated Community", "Kids Play Area", "Meditation Zone", "Multi Purpose Hall", "Senior Citizen Area", "Fire Safety", "Basement Parking", "Power Backup"],
        gallery: [
            { src: "/photos/Shawat_C 1.jpg", text: "SKY TERRACE", category: "Exterior" },
            { src: "/photos/Cam_13_2.jpg", text: "MASTER SUITE", category: "Bedroom" },
            { src: "/photos/F_Cam_04.jpg", text: "SPA & WELLNESS", category: "Bathroom" },
            { src: "/photos/6.jpg", text: "MAIN FACADE", category: "Exterior" },
            { src: "/photos/Shawat_C 2.jpg", text: "LIVING AREA", category: "Living" },
            { src: "/photos/Library_Cam_01.jpg", text: "GUEST LOUNGE", category: "Living" },
            { src: "/photos/Cam_005_02.jpg", text: "DINING SPACE", category: "Kitchen" },
            { src: "/photos/Cam_03 copy.jpg", text: "PRIVATE POOL", category: "Exterior" },
            { src: "/photos/F_Cam_01.jpg", text: "MODERN KITCHEN", category: "Kitchen" },
            { src: "/photos/Gym.jpg", text: "HOME GYM", category: "Living" },
            { src: "/photos/Work_Space.jpg", text: "LIBRARY", category: "Office" },
            { src: "/photos/Indoor_Games.jpg", text: "GAME ROOM", category: "Living" },
            { src: "/photos/Foyer_N.jpg", text: "ART GALLERY", category: "Living" },
            { src: "/photos/Shawat_C 04.jpg", text: "GARDEN PATH", category: "Exterior" },
            { src: "/photos/BG_FN_02.jpg", text: "PANORAMIC VIEW", category: "Exterior" }
        ],
        story: "The Atmosphere Phase 1 set the benchmark for luxury living in the region. \n\nWith a focus on community and connectivity, the layout fosters a sense of belonging while ensuring privacy. \n\nThe lush landscaped gardens and podium-level amenities provide a serene escape from the urban hustle.",
        floorPlans: {
            "Ground Floor Plan": ["/THE ATMOSPHERE GROUND FLOOR PLAN.jpg.jpeg"],
            "First Floor Plan": ["/THE ATMOSPHERE FIRST FLOOR PLAN.jpg.jpeg"],
            "Typical Floor Plan": ["/THE ATMOSPHERE TYPICAL FLOOR PLAN.jpg.jpeg"],
            "3BHK Type A": ["/THE ATMOSPHERE 3BHK FLOOR PLAN.jpg.jpeg"],
            "3BHK Type B": ["/THE ATMOSPHERE 3BHK FLOOR PLAN 2.0.jpg.jpeg"],
            "4BHK Luxury Plan": ["/THE ATMOSPHERE 4BHK FLOOR PLAN.jpg.jpeg"]
        }
    },
    {
        id: 4,
        title: ["ATMOSPHERE", "GRID"],
        img: "/photos/Cam_11_2.jpg",
        desc: "The commercial and retail hub of The Atmosphere, created for seamless business and leisure experiences.",
        location: "GURGAON",
        status: "COMMERCIAL",
        amenities: ["Sea View", "Infinity Pool", "Rooftop Lounge", "Business Center", "Private Cinema", "Wifi", "Security System", "Solar System", "Gas Pipeline", "DTH Connection"],
        gallery: [
            { src: "/photos/Cam_11_2.jpg", text: "MAIN FACADE", category: "Exterior" },
            { src: "/photos/Cam_03 copy.jpg", text: "PRIVATE POOL", category: "Exterior" },
            { src: "/photos/Shawat_C 2.jpg", text: "GUEST LOUNGE", category: "Living" },
            { src: "/photos/Shawat_C 003.jpg", text: "SKY TERRACE", category: "Exterior" },
            { src: "/photos/Shawat_C 1.jpg", text: "LIVING AREA", category: "Living" },
            { src: "/photos/F_Cam_01.jpg", text: "MODERN KITCHEN", category: "Kitchen" },
            { src: "/photos/Cam_005_02.jpg", text: "DINING SPACE", category: "Kitchen" },
            { src: "/photos/Cam_13_2.jpg", text: "MASTER SUITE", category: "Bedroom" },
            { src: "/photos/BG_FN_02.jpg", text: "SPA & WELLNESS", category: "Bathroom" },
            { src: "/photos/Indoor_Games.jpg", text: "HOME THEATER", category: "Living" },
            { src: "/photos/Library_Cam_01.jpg", text: "LIBRARY", category: "Office" },
            { src: "/photos/Foyer_N.jpg", text: "WINE CELLAR", category: "Living" },
            { src: "/photos/Work_Space.jpg", text: "ART GALLERY", category: "Living" },
            { src: "/photos/Shawat_C 04.jpg", text: "GARDEN PATH", category: "Exterior" },
            { src: "/photos/Cam_01_night_02.jpg", text: "PANORAMIC VIEW", category: "Exterior" }
        ],
        story: "Atmosphere Grid is the heartbeat of the development. \n\nIntegrating high-street retail, office spaces, and entertainment zones, it offers a vibrant ecosystem for residents and visitors alike. \n\nThe modern glass facade reflects the dynamic energy of the businesses within.",
        floorPlans: {
            "Ground Floor Layout": ["/THE ATMOSPHERE GROUND FLOOR PLAN.jpg.jpeg"],
            "First Level Plan": ["/THE ATMOSPHERE FIRST FLOOR PLAN.jpg.jpeg"],
            "Typical Office Floor": ["/THE ATMOSPHERE TYPICAL FLOOR PLAN.jpg.jpeg"],
            "Executive Suite A": ["/THE ATMOSPHERE 4BHK FLOOR PLAN.jpg.jpeg"],
            "Meeting Suites": ["/THE ATMOSPHERE 3BHK FLOOR PLAN.jpg.jpeg"]
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
                <Link to={`/projects/${projectsData[activeIndex].id}`} className="btn-pill">EXPLORE PROJECTS</Link>
            </div>
        </section>
    );
};

export default Projects;
