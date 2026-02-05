import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Amenities.css';
import {
    TbBuildingArch, TbWheelchair, TbElevator, TbFireExtinguisher,
    TbCar, TbBatteryCharging, TbWifi, TbVideo,
    TbDoorEnter, TbSolarPanel, TbFlame, TbAntenna
} from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

const amenitiesList = [
    { icon: <TbBuildingArch />, title: "MULTI PURPOSE HALL" },
    { icon: <TbWheelchair />, title: "SENIOR CITIZEN AREA" },
    { icon: <TbElevator />, title: "2 LIFT IN EACH BLOCK" },
    { icon: <TbFireExtinguisher />, title: "FIRE SAFETY" },
    { icon: <TbCar />, title: "BASEMENT PARKING" },
    { icon: <TbBatteryCharging />, title: "POWER BACKUP" },
    { icon: <TbWifi />, title: "WIFI" },
    { icon: <TbVideo />, title: "SECURITY SYSTEM" },
    { icon: <TbDoorEnter />, title: "ATTRACTIVE ENTRANCE FOYER" },
    { icon: <TbSolarPanel />, title: "SOLAR SYSTEM" },
    { icon: <TbFlame />, title: "GAS PIPELINE" },
    { icon: <TbAntenna />, title: "DTH CONNECTION" },
];

const Amenities = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".amenities-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".amenity-card", {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: sectionRef });

    return (
        <section className="amenities-section" id="amenities" ref={sectionRef}>
            <div className="amenities-header">
                <h2 className="amenities-title">Amenities</h2>
            </div>

            <div className="amenities-grid">
                {amenitiesList.map((item, index) => (
                    <div key={index} className="amenity-card">
                        <div className="icon-circle">
                            {item.icon}
                        </div>
                        <p className="amenity-name">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Amenities;
