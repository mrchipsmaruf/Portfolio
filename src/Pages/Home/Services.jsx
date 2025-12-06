import React from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight, FaDatabase } from "react-icons/fa";
import { MdLayers, MdOutlineDns, MdOutlineIntegrationInstructions } from "react-icons/md";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 -mt-50 md:-mt-20 bg-white dark:bg-card-dark rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 md:px-8">

                {/*TOP HEADING*/}
                <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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
                </motion.div>

                {/*SERVICES GRID */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}>

                    {[
                        {
                            title: "Frontend Development",
                            desc: "Building responsive, high-performance user interfaces using React.js, Tailwind CSS, and modern web technologies.",
                            icon: <MdLayers />,
                        },
                        {
                            title: "Backend Development",
                            desc: "Robust server-side logic and scalable architecture using Node.js and Express to power your applications.",
                            icon: <MdOutlineDns />,
                        },
                        {
                            title: "Database Management",
                            desc: "Designing efficient MongoDB schemas and managing data flow to ensure integrity and speed.",
                            icon: <FaDatabase />,
                        },
                        {
                            title: "API Integration",
                            desc: "Seamlessly connecting third-party services and RESTful APIs to extend your application's functionality.",
                            icon: <MdOutlineIntegrationInstructions />,
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariant}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                            }}
                            className="group bg-gray-50 bg-background-light dark:bg-background-dark p-8 rounded-[2rem] transition-all duration-300 border border-transparent hover:bg-primary hover:border-primary/20 cursor-pointer relative overflow-hidden flex flex-col justify-between">
                            {/* ICON */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                                className="w-14 h-14 bg-white dark:bg-card-dark rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors text-3xl text-primary">
                                {item.icon}
                            </motion.div>

                            {/* TITLE */}
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white">
                                {item.title}
                            </h4>

                            {/* DESCRIPTION */}
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80">
                                {item.desc}
                            </p>

                            {/* ARROW BUTTON */}
                            <motion.div
                                whileHover={{ rotate: 0 }}
                                className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-primary transition-all">
                                <FaArrowAltCircleRight className="text-md" />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Services;
