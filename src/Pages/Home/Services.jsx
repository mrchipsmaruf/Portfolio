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
        transition: { duration: 0.65, ease: "easeOut" },
    },
};

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 -mt-50 md:-mt-20 bg-white dark:bg-black dark:border-t rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-20"
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto px-4 md:px-8"
            >
                {/* Heading */}
                <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold tracking-wider uppercase text-xl mb-3">
                            My Expertise
                        </h2>

                        <motion.h3
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight"
                        >
                            Providing World Class <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                                Digital Services
                            </span>
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-xs"
                    >
                        <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed">
                            I build sleek, scalable, and modern web applications.  
                            Let’s create something powerful together.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Services */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={{
                        show: {
                            transition: { staggerChildren: 0.18 },
                        },
                    }}
                >
                    {[
                        {
                            title: "Frontend Development",
                            desc: "Building responsive, high-performance UIs using React.js, Tailwind CSS, and modern web technologies.",
                            icon: <MdLayers />,
                        },
                        {
                            title: "Backend Development",
                            desc: "Robust server-side logic and scalable Node.js/Express architecture powering your applications.",
                            icon: <MdOutlineDns />,
                        },
                        {
                            title: "Database Management",
                            desc: "Designing efficient MongoDB schemas and fast data structures ensuring integrity.",
                            icon: <FaDatabase />,
                        },
                        {
                            title: "API Integration",
                            desc: "Seamlessly integrating RESTful APIs and third-party services to boost functionality.",
                            icon: <MdOutlineIntegrationInstructions />,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariant}
                            whileHover={{
                                y: -12,
                                scale: 1.06,
                                rotateX: 8,
                                rotateY: -8,
                                transition: { duration: 0.35 },
                            }}
                            className="group bg-gray-100 dark:bg-black p-8 rounded-[2rem] transition-all duration-300 border dark:border border-white hover:bg-primary hover:border-primary/20 cursor-pointer relative overflow-hidden flex flex-col justify-between"
                        >
                            {/* Shine Overlay */}
                            <motion.div
                                initial={{ x: "-150%" }}
                                whileHover={{ x: "150%" }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                            />

                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.12,
                                    boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                                }}
                                transition={{ duration: 1 }}
                                className="w-14 h-14 bg-white dark:bg-card-dark rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors text-3xl text-primary"
                            >
                                {item.icon}
                            </motion.div>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white">
                                {item.title}
                            </h4>

                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80">
                                {item.desc}
                            </p>

                            {/* Arrow */}
                            <motion.div
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.2,
                                }}
                                transition={{ duration: 0.6 }}
                                className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-primary transition-all"
                            >
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
