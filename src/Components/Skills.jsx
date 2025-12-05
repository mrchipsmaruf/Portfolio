import React from "react";
import {
    FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
    FaFigma, FaNpm, FaDocker
} from "react-icons/fa";
import {
    SiTailwindcss, SiMongodb, SiMongoose, SiMysql, SiFirebase, SiVercel, SiNetlify, SiTypescript,
    SiExpress,
    SiGoogleauthenticator,
    SiNextdotjs
} from "react-icons/si";
import { MdOutlineCode, MdDns, MdStorage, MdBuild } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const SkillsSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background-light dark:bg-background-dark font-body">

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

                    {/* FRONTEND */}
                    <div className="group bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <MdOutlineCode className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Frontend</h3>

                        <div className="flex flex-wrap gap-2">

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaReact color="#61DBFB" /> React.js
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaJsSquare color="#F7DF1E" /> JavaScript (ES6+)
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiTailwindcss color="#38BDF8" /> Tailwind CSS
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaHtml5 color="#E34F26" /> HTML5
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaCss3Alt color="#1572B6" /> CSS3
                            </span>
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className="group bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 dark:bg-purple-900/10 rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <MdDns className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Backend</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaNodeJs color="#3C873A" /> Node.js
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiExpress /> Express.js
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiGoogleauthenticator /> JWT Auth
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <TbApi /> REST APIs
                            </span>
                        </div>
                    </div>

                    {/* DATABASE */}
                    <div className="group bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 dark:bg-green-900/10 rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <MdStorage className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Database</h3>

                        <div className="flex flex-wrap gap-2">

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiMongodb color="#47A248" /> MongoDB
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiMongoose color="#880000" /> Mongoose
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiMysql color="#00758F" /> MySQL
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiFirebase color="#FFCA28" /> Firebase
                            </span>
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="group bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 dark:bg-orange-900/10 rounded-bl-full group-hover:scale-110 transition-transform" />

                        <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <MdBuild className="text-4xl" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Tools</h3>

                        <div className="flex flex-wrap gap-2">

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaGitAlt color="#F1502F" /> Git
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaGithub color="#181717" /> GitHub
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <VscVscode /> VS Code
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaFigma color="#F24E1E" /> Figma
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <FaNpm color="#CB0000" /> NPM
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiVercel color="#000000" /> Vercel
                            </span>

                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-base rounded-lg flex items-center gap-2">
                                <SiNetlify color="#00C7B7" /> Netlify
                            </span>
                        </div>

                        {/* Currently Learning */}
                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-base text-text-light-secondary dark:text-text-dark-secondary mb-3 font-medium">
                                Currently learning:
                            </p>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold"><SiNextdotjs /></div>

                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl">
                                    <SiTypescript className="rounded-full" />
                                </div>

                                <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center text-3xl">
                                    <FaDocker  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
