import React from "react";
import { FaArrowAltCircleUp, FaDownload } from "react-icons/fa";
import { Link } from "react-router";
import developer from "../../assets/developer.jpg";

const AboutMe = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300">

            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="text-gray-500 dark:text-gray-400 text-[18px] mt-3 leading-relaxed mb-6 group-hover:text-white/80">
                        Transforming complex problems into elegant, scalable digital solutions.
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Image Section */}
                    <div className="lg:col-span-5 relative group">

                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-400 rounded-3xl rotate-6 transform transition-transform duration-500 group-hover:rotate-3 opacity-20 dark:opacity-40"></div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark aspect-[4/5] bg-surface-light dark:bg-surface-dark">

                            <img
                                alt="Portrait"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                src={developer} />

                            {/* Experience Badge */}
                            <div className="absolute bottom-6 left-6 bg-white dark:bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-center gap-3 animate-bounce-slow">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <span className="material-icons-outlined text-2xl">verified</span>
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium uppercase tracking-wide">
                                        Aspiring
                                    </p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">Developer</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-7 space-y-8">

                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                I'm a passionate <span className="text-primary">MERN Stack Developer <br /></span> turning ideas into impactful web experiences.
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400 text-[17px] mt-3 leading-relaxed mb-6 group-hover:text-white/80">
                                I specialize in building high-performance web applications using MongoDB, Express.js, React, and Node.js.
                                With a keen eye for design and strong backend architecture, I create seamless digital experiences that are
                                both beautiful and functional.
                            </p>

                            <p className="text-gray-500 dark:text-gray-400 text-[17px] mt-3 leading-relaxed mb-6 group-hover:text-white/80">
                                My journey in tech is driven by a desire to solve real-world problems through code. When I'm not
                                developing, I'm contributing to open-source projects or exploring the latest trends in cloud computing
                                and system design.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { num: "30+", label: "Projects Completed" },
                                { num: "Advanced", label: "Coding Experience" },
                                { num: "24/7", label: "Support" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:border-primary/30 group">
                                    <div className="text-3xl font-bold text-primary mb-1">{item.num}</div>
                                    <div className="text-sm text-text-muted-light dark:text-text-muted-dark group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link to={""} className="inline-flex items-center gap-2 bg-black hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5">
                                Download Resume
                                <span className="material-icons-outlined text-sm"><FaDownload /></span>
                            </Link>

                            <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5">
                                Contact Me
                                <span className="material-icons-outlined">
                                    <FaArrowAltCircleUp className="text-[19px] p-[3px] rounded-full rotate-45" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
