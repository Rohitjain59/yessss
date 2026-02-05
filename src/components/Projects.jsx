import React, { useState, useEffect } from 'react';
import './Projects.css';
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

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projectsData.length);
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, []);

    const getPositionClass = (index) => {
        if (index === activeIndex) return "active";

        const len = projectsData.length;
        // Circular Previous
        if (index === (activeIndex - 1 + len) % len) return "prev";
        // Circular Next
        if (index === (activeIndex + 1) % len) return "next";

        return "hidden";
    };

    return (
        <section className="projects">
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
                        {/* Title attached to the item so it moves with it or fades in/out */}
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
