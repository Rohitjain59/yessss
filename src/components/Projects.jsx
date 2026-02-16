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
        title: ["IN", "ATMOSPHERE"],
        img: "/photos/Cam_03 copy.jpg",
        desc: "A landmark residential project in Chandkheda offering a blend of luxury and nature. Experience the pinnacle of modern living in our 3 & 4 BHK Apartments with aesthetic appeal & modern amenities.",
        location: "CHANDKHEDA",
        status: "NEW LAUNCH",
        amenities: ["Allotted Car Parking", "Amphitheatre", "CCTV", "Children Play Area", "Co Working Space", "DTH Connection", "Fire Safety", "Gas Pipeline", "Gazebo", "Gymnasium", "Indoor Games", "Landscape Garden", "Library", "No Vehicle Zone", "Security Cabin", "Senior Citizen Area", "Swimming Pool", "Toddler Play Area", "Water Supply", "Wifi Zone"],
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
        story: "In Atmosphere is more than just a home; it's a lifestyle statement. \n\nDesigned for those who appreciate the finer things in life, this project combines architectural brilliance with functional elegance. \n\nEvery corner is crafted to perfection, ensuring a living experience that is both opulent and comfortable.",
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
        title: ["ATMOSPHERE", "SOLITAIRE"],
        img: "/photos/Cam_01_night_02.jpg",
        desc: "Exquisite living spaces in Chandkheda designed for those who seek exclusivity and architectural grandeur in every detail.",
        location: "CHANDKHEDA",
        status: "ONGOING",
        amenities: ["Allotted Car Parking", "Amphitheatre", "CCTV", "Children Play Area", "Co Working Space", "DTH Connection", "Fire Safety", "Gas Pipeline", "Gazebo", "Gymnasium", "Indoor Games", "Landscape Garden", "Library", "No Vehicle Zone", "Security Cabin", "Senior Citizen Area", "Swimming Pool", "Toddler Play Area", "Water Supply", "Wifi Zone"],
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
        story: "Atmosphere Solitaire represents the zenith of mid-city luxury. Reserved for the select few, these residences feature higher ceilings, exclusive elevator access, and premium specifications.",
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
        title: ["DISHVA", "ESSENCE"],
        img: "/photos/6.jpg",
        desc: "An expansive 3,50,0,00 Sq. Ft. upcoming development featuring premium 3 & 4 BHK residences. Expected completion by April 2028.",
        location: "AHMEDABAD",
        status: "UPCOMING",
        amenities: ["Allotted Car Parking", "Amphitheatre", "CCTV", "Children Play Area", "Co Working Space", "DTH Connection", "Fire Safety", "Gas Pipeline", "Gazebo", "Gymnasium", "Indoor Games", "Landscape Garden", "Library", "No Vehicle Zone", "Security Cabin", "Senior Citizen Area", "Swimming Pool", "Toddler Play Area", "Water Supply", "Wifi Zone"],
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
        story: "DISHVA ESSENCE is designed to be a future-ready living space, spanning across 3,50,000 Sq. Ft. of pristine landscape. Featuring carefully crafted 3 & 4 BHK apartments, it sets a new benchmark for luxury in Ahmedabad with an expected completion in April 2028.",
        floorPlans: {
            "Ground Floor Plan": ["/THE ATMOSPHERE GROUND FLOOR PLAN.jpg.jpeg"],
            "First Floor Plan": ["/THE ATMOSPHERE FIRST FLOOR PLAN.jpg.jpeg"],
            "Typical Floor Plan": ["/THE ATMOSPHERE TYPICAL FLOOR PLAN.jpg.jpeg"],
            "3BHK Type A": ["/THE ATMOSPHERE 3BHK FLOOR PLAN.jpg.jpeg"],
            "3BHK Type B": ["/THE ATMOSPHERE 3BHK FLOOR PLAN 2.0.jpg.jpeg"],
            "4BHK Luxury Plan": ["/THE ATMOSPHERE 4BHK FLOOR PLAN.jpg.jpeg"]
        }
    }
];

const Projects = ({ standalone = false }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const projectsRef = useRef(null);
    const [cursorX, setCursorX] = useState(0);
    const autoPlayRef = useRef(null);

    // Carousel Logic (Only runs if NOT standalone)
    useEffect(() => {
        if (standalone) return;

        const startAutoPlay = () => {
            autoPlayRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % projectsData.length);
            }, 4000);
        };

        startAutoPlay();

        // Cursor tracking for horizontal movement
        const handleMouseMove = (e) => {
            const windowWidth = window.innerWidth;
            const mouseX = e.clientX;
            const threshold = windowWidth * 0.2; // 20% from edges

            // Left side - move to previous
            if (mouseX < threshold) {
                setCursorX(-1);
            }
            // Right side - move to next
            else if (mouseX > windowWidth - threshold) {
                setCursorX(1);
            }
            // Center - neutral
            else {
                setCursorX(0);
            }
        };

        // Keyboard controls
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
                // Reset auto-play
                clearInterval(autoPlayRef.current);
                startAutoPlay();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                setActiveIndex((prev) => (prev + 1) % projectsData.length);
                // Reset auto-play
                clearInterval(autoPlayRef.current);
                startAutoPlay();
            }
        };

        // Auto-advance based on cursor position
        const cursorInterval = setInterval(() => {
            if (cursorX === -1) {
                setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
            } else if (cursorX === 1) {
                setActiveIndex((prev) => (prev + 1) % projectsData.length);
            }
        }, 2000); // Change slide every 2 seconds when cursor is on edges

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(autoPlayRef.current);
            clearInterval(cursorInterval);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [standalone, cursorX]);

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
                    <h1 className="page-title">OUR PROJECTS</h1>
                    <p className="page-subtitle">Creating iconic landmarks that define the skyline of the city of tomorrow.</p>

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
