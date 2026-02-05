import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);
import projectImg from '../assets/project.png';
import aboutImg from '../assets/about.png';
import heroImg from '../assets/hero.png';

const projectsData = [
    {
        id: 1,
        title: ["LUMIÈRE DUPLEX", "RESIDENCES"],
        img: projectImg,
        desc: "Two-story luxury apartments that features sunlit living spaces, private terraces, and a selection of exclusive amenities."
    },
    {
        id: 2,
        title: ["AURORA SKY", "PENTHOUSES"],
        img: aboutImg,
        desc: "Elevated living with panoramic city views, floor-to-ceiling windows, and bespoke interior finishes."
    },
    {
        id: 3,
        title: ["SERENITY", "GARDEN VILLAS"],
        img: heroImg,
        desc: "Secluded sanctuary homes surrounded by lush landscaping, featuring private pools and outdoor wellness areas."
    },
    {
        id: 4,
        title: ["OBSIDIAN", "HEIGHTS"],
        img: projectImg, // Reusing projectImg to ensure visibility
        desc: "Architectural masterpieces defined by bold geometry, sustainable materials, and breathtaking horizon views."
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

    // GSAP Animation for Standalone Page
    useGSAP(() => {
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

    // --- RENDER STANDALONE PAGE (GRID/LIST) ---
    if (standalone) {
        return (
            <div className="projects-page" ref={projectsRef}>
                <div className="projects-page-header">
                    <h1 className="page-title">OUR PORTFOLIO</h1>
                    <p className="page-subtitle">A curation of our finest architectural endeavors.</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={project.id} className="project-card">
                            <div className="card-image-wrapper">
                                <img src={project.img} alt={project.title.join(' ')} />
                            </div>
                            <div className="card-content">
                                <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                                <h2 className="project-name">
                                    {project.title.map((line, i) => (
                                        <span key={i} className="block-span">{line}</span>
                                    ))}
                                </h2>
                                <p className="project-desc">{project.desc}</p>
                                <button className="btn-line">VIEW RESIDENCE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // --- RENDER HOMEPAGE WIDGET (CAROUSEL) ---
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <div className="section-label">(OUR PROJECTS)</div>
                <div className="projects-indices">
                    {projectsData.map((_, idx) => (
                        <span key={idx} className={idx === activeIndex ? "active" : ""}>
                            ({idx + 1})
                        </span>
                    ))}
                </div>
            </div>

            <div className="gallery-container">
                {projectsData.map((project, index) => (
                    <div key={project.id} className={`gallery-item ${getPositionClass(index)}`}>
                        <img src={project.img} alt={project.title.join(' ')} />
                        <div className="item-title-container">
                            <h2 className="item-title">
                                {project.title.map((line, i) => (
                                    <span key={i}>{line}</span>
                                ))}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-footer">
                <p className="projects-description">
                    {projectsData[activeIndex].desc}
                </p>
                <button className="btn-pill">LEARN MORE</button>
            </div>
        </section>
    );
};

export default Projects;
