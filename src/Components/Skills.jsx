import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
    FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
    FaFigma, FaNpm, FaDocker
} from "react-icons/fa";
import {
    SiTailwindcss, SiMongodb, SiMongoose, SiMysql, SiFirebase, SiVercel, SiNetlify, SiTypescript,
    SiExpress, SiGoogleauthenticator, SiNextdotjs
} from "react-icons/si";
import { MdOutlineCode, MdDns, MdStorage, MdBuild } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray(".skill-card");

        // performance boost
        cards.forEach(c => (c.style.willChange = "transform, opacity"));

        // fade + slide
        gsap.set(cards, { opacity: 0, y: 40 });

        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.18,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        // 3D HOVER TILT
        cards.forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = ((y - rect.height / 2) / 20).toFixed(2);
                const rotateY = ((x - rect.width / 2) / 20).toFixed(2);
                gsap.to(card, {
                    rotateX: -rotateX,
                    rotateY: rotateY,
                    scale: 1.04,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power3.out",
                });
            });
        });

        // FLOATING ICON ANIMATION
        gsap.to(".skill-icon", {
            y: -8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // premium shine effect
        gsap.utils.toArray(".skill-card").forEach((card) => {
            const shine = document.createElement("div");
            shine.className =
                "shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none";
            shine.style.transform = "translateX(-150%)";
            card.appendChild(shine);

            card.addEventListener("mouseenter", () => {
                gsap.to(shine, {
                    opacity: 1,
                    duration: 0.2,
                });

                gsap.to(shine, {
                    x: "150%",
                    duration: 1.4,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(shine, {
                    opacity: 0,
                    duration: 0.3
                });
                gsap.set(shine, { x: "-150%" });
            });
        });

    }, []);

    return (
        <section
            ref={containerRef}
            className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background-light dark:bg-background-dark font-body"
        >
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2"></div>
                <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 md:mb-15">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        My Technical Proficiency
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-light-primary dark:text-text-dark-primary mb-6">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Skills</span> & Tools
                    </h2>

                    <p className="max-w-2xl text-gray-500 mx-auto text-text-light-secondary dark:text-text-dark-secondary text-lg md:text-xl leading-relaxed">
                        A comprehensive overview of the technologies and tools I utilize to build scalable, high performance web applications.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* All your cards remain EXACT same — only animation added */}
                    {/* FRONTEND CARD */}
                    <div className="skill-card group p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 dark:bg-white rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-primary skill-icon">
                            <MdOutlineCode className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Frontend</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaReact /> React.js</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaJsSquare /> JavaScript</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaHtml5 /> HTML5</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaCss3Alt /> CSS3</span>
                        </div>
                    </div>

                    {/* Back-end / Database / Tools remain unchanged – only animation applied */}
                    {/* BACKEND CARD */}
                    <div className="skill-card group p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 dark:bg-red-400 rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-purple-50 dark:bg-white rounded-2xl flex items-center justify-center mb-6 text-primary skill-icon">
                            <MdDns className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Backend</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaNodeJs /> Node.js</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiExpress /> Express.js</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiGoogleauthenticator /> JWT Auth</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><TbApi /> REST API</span>
                        </div>
                    </div>

                    {/* DATABASE */}
                    <div className="skill-card group p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 dark:bg-blue-400 rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-green-50 dark:bg-white rounded-2xl flex items-center justify-center mb-6 text-primary skill-icon">
                            <MdStorage className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Database</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiMongodb /> MongoDB</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiMongoose /> Mongoose</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiMysql /> MySQL</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiFirebase /> Firebase</span>
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="skill-card group p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 dark:bg-orange-400 rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-orange-50 dark:bg-white rounded-2xl flex items-center justify-center mb-6 text-primary skill-icon">
                            <MdBuild className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Tools</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaGitAlt /> Git</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaGithub /> GitHub</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><VscVscode /> VS Code</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaFigma /> Figma</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><FaNpm /> NPM</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiVercel /> Vercel</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2"><SiNetlify /> Netlify</span>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-base text-text-light-secondary dark:text-text-dark-secondary mb-3 font-medium">
                                Currently learning:
                            </p>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-3xl"><SiNextdotjs /></div>
                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl"><SiTypescript /></div>
                                <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center text-3xl"><FaDocker /></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
