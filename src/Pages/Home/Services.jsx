import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleUp, FaDatabase } from "react-icons/fa";
import { MdLayers, MdOutlineDns, MdOutlineIntegrationInstructions } from "react-icons/md";

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 -mt-20 bg-white dark:bg-card-dark rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Top Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold tracking-wider uppercase text-xl mb-3">
                            My Expertise
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Providing World Class <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                                Digital Services
                            </span>
                        </h3>
                    </div>

                    <div className="max-w-xs">
                        <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed">
                            I build sleek, scalable, and modern web applications.
                            Let’s create something powerful together.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Frontend Development */}
                    <div className="group bg-gray-50 relative bg-background-light dark:bg-background-dark p-8 rounded-[2rem] hover:bg-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 bg-white dark:bg-card-dark rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <span className="material-icons-outlined text-2xl text-primary group-hover:text-white">
                                <MdLayers />
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white">
                            Frontend Development
                        </h4>

                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80">
                            Building responsive, high-performance user interfaces using
                            React.js, Tailwind CSS, and modern web technologies.
                        </p>

                        <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-primary transition-all">
                            <span className="material-icons-outlined text-sm transform -rotate-45 group-hover:rotate-0 transition-transform">
                                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                            </span>
                        </div>
                    </div>

                    {/* Backend Development */}
                    <div className="group bg-gray-50 relative bg-background-light dark:bg-background-dark p-8 rounded-[2rem] hover:bg-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 bg-white dark:bg-card-dark rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <span className="material-icons-outlined text-2xl text-primary group-hover:text-white">
                                <MdOutlineDns />
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white">
                            Backend Development
                        </h4>

                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80">
                            Robust server-side logic and scalable architecture using Node.js
                            and Express to power your applications.
                        </p>

                        <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-primary transition-all">
                            <span className="material-icons-outlined text-sm transform -rotate-45 group-hover:rotate-0 transition-transform">
                                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                            </span>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="group bg-gray-50 relative bg-background-light dark:bg-background-dark p-8 rounded-[2rem] hover:bg-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 bg-white dark:bg-card-dark rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <span className="material-icons-outlined text-2xl text-primary group-hover:text-white">
                                <FaDatabase />
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white">
                            Database Management
                        </h4>

                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80">
                            Designing efficient MongoDB schemas and managing data flow to
                            ensure integrity and speed.
                        </p>

                        <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-primary transition-all">
                            <span className="material-icons-outlined text-sm transform -rotate-45 group-hover:rotate-0 transition-transform">
                                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                            </span>
                        </div>
                    </div>

                    {/* API Integration */}
                    <div className="group bg-gray-50 relative bg-background-light dark:bg-background-dark p-8 rounded-[2rem] hover:bg-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 bg-white dark:bg-card-dark rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <span className="material-icons-outlined text-2xl text-primary group-hover:text-white">
                                <MdOutlineIntegrationInstructions />
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white">
                            API Integration
                        </h4>

                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80">
                            Seamlessly connecting third-party services and RESTful APIs to
                            extend your application's functionality.
                        </p>

                        <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-primary transition-all">
                            <span className="material-icons-outlined text-sm transform -rotate-45 group-hover:rotate-0 transition-transform">
                                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;