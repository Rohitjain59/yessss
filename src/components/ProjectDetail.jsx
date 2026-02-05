import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ProjectDetail.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

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
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="detail-error">Project not found</div>;
    }

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
                <div className="detail-grid">
                    <div className="detail-info-block">
                        <h3>Architectural Vision</h3>
                        <p>Designed to harmonize with its surroundings, {project.title.join(' ')} stands as a testament to modern architectural excellence. Every curve and line has been meticulously planned to optimize natural light and airflow.</p>
                    </div>
                    <div className="detail-info-block">
                        <h3>Interiors & Amenities</h3>
                        <p>Experience a life of unbridled luxury with bespoke interiors, imported marble flooring, and state-of-the-art smart home automation. Residents enjoy exclusive access to a private clubhouse, infinity pool, and wellness center.</p>
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
                    <Link to="/contact" className="btn-solid">ENQUIRE NOW</Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
