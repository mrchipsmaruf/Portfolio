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

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
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
                        start: "top 85%",
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

                    {projects.map((project, index) => (
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
