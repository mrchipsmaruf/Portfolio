import React, { useEffect, useState } from "react";
import { FaArrowRight, FaReact } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiTailwindcss, SiDaisyui, SiMongodb, SiExpress, SiNodedotjs, SiFirebase, SiStripe } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { Link } from "react-router";

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

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

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

                {/* Projects Grid */}
                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-gray-50 dark:bg-gray-800/50 rounded-lg shadow-sm 
                                       overflow-hidden transition-all duration-300 hover:shadow-lg 
                                       hover:-translate-y-1 flex flex-col">
                            <div className="relative">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={project.image}
                                    alt={project.title} />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>

                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="badge flex items-center gap-1">
                                            {techIcons[tech]} {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-auto pt-6 flex items-center justify-between"> {/* ⭐ ONLY ADDED mt-auto */}
                                    <div className="flex btn btn-primary items-center gap-2">
                                        <a href={project.liveLink} target="_blank">
                                            Live Demo
                                        </a>
                                        <span><FaArrowUpRightFromSquare /></span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link className="project-link" to={`/projects/${project.id}`} target="_blank">
                                            Details
                                        </Link>
                                        <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                                            <FaArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
