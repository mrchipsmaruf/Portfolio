import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaReact } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
    SiTailwindcss, SiDaisyui, SiMongodb,
    SiExpress, SiNodedotjs, SiFirebase, SiStripe
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const techIcons = {
    "React": <FaReact className="text-blue-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
    "DaisyUI": <SiDaisyui className="text-purple-500" />,
    "MongoDB": <SiMongodb className="text-green-500" />,
    "Express": <SiExpress className="text-gray-300" />,
    "Node.js": <SiNodedotjs className="text-green-600" />,
    "Firebase": <SiFirebase className="text-yellow-400" />,
    "Stripe": <SiStripe className="text-indigo-500" />,
    "Framer Motion": <TbBrandFramerMotion className="text-pink-400" />,
    "JWT": <RiJavascriptFill className="text-yellow-500" />
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const cardRefs = useRef([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            });
    }, []);

    // GSAP Entry Animation
    useEffect(() => {
        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            gsap.fromTo(
                card,
                { opacity: 0, y: 50, filter: "blur(4px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power3.out",
                    delay: i * 0.12,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        once: true,
                    },
                }
            );
        });
    }, [projects]);

    return (
        <section className="py-20 sm:py-28" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center">
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        A selection of my best work, showcasing my skills in creating modern and functional web applications.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                    {loading && (
                        <div className="col-span-full flex justify-center items-center">
                            <div className="flex items-center justify-center min-h-[260px] py-12 font-display overflow-visible">
                                <div className="relative overflow-visible">
                                    {/* TEXT */}
                                    <h1 className="logo-text text-2xl md:text-7xl px-4 font-semibold tracking-wide leading-[1.3]">
                                        Loading Projects
                                    </h1>

                                    {/* LIGHT REVEAL */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="reveal-layer"></div>
                                    </div>
                                </div>

                                {/* STYLES */}
                                <style>
                                    {`
          .logo-text {
            background: linear-gradient(
              90deg,
              #6d28d9,
              #8b5cf6,
              #c4b5fd,
              #8b5cf6,
              #6d28d9
            );
            background-size: 300% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: text-flow 4s ease-in-out infinite,
                       glow 5s ease-in-out infinite;
          }

          @keyframes text-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 300% 50%; }
          }

          .reveal-layer {
            position: absolute;
            top: 0;
            left: -140%;
            width: 140%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(255,255,255,0.15) 45%,
              rgba(255,255,255,0.6) 50%,
              rgba(255,255,255,0.15) 55%,
              transparent 100%
            );
            mix-blend-mode: screen;
            animation: reveal-sweep 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          @keyframes reveal-sweep {
            0% { transform: translateX(0); }
            100% { transform: translateX(280%); }
          }
        `}
                                </style>
                            </div>
                        </div>
                    )}


                    {!loading && projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            ref={(el) => (cardRefs.current[index] = el)}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.35, ease: "easeOut" }
                            }}
                            className="
                                group rounded-xl overflow-hidden shadow-lg
                                backdrop-blur-lg bg-white/20 dark:bg-gray-800/20
                                border border-white/10 dark:border-gray-700/10
                                transition-all duration-300
                                hover:shadow-2xl
                                flex flex-col">
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.6 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col h-full backdrop-blur-md">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-gray-700 dark:text-gray-400">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="badge flex items-center gap-1">
                                            {techIcons[tech]} {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-auto pt-6 flex items-center justify-between">
                                    <div className="flex btn btn-primary items-center gap-2">
                                        <a href={project.liveLink}>
                                            Live Demo
                                        </a>
                                        <FaArrowUpRightFromSquare />
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link
                                            className="project-link flex items-center gap-3"
                                            to={`/projects/${project.id}`}>
                                            Details <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
