import React from "react";
import { FaArrowAltCircleUp, FaDownload } from "react-icons/fa";
import { Link } from "react-router";
import developer from "../../assets/developer.jpg";
import { motion } from "framer-motion";


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeZoom = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.85, ease: "easeOut" },
    },
};

const staggerParent = {
    show: { transition: { staggerChildren: 0.18 } },
};

const AboutMe = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300">

            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-0 right-0 w-[420px] h-[420px] bg-primary/30 blur-[140px] rounded-full" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-purple-500/20 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Title */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <motion.h2
                        initial={{ textShadow: "0px 0px 0px rgba(255,255,255,0)" }}
                        animate={{
                            textShadow: [
                                "0px 0px 0px rgba(255,255,255,0)",
                                "0px 0px 20px rgba(255,255,255,0.25)",
                                "0px 0px 0px rgba(255,255,255,0)",
                            ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
                        className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        About <span className="text-primary">Me</span>
                    </motion.h2>

                    <p className="text-gray-500 dark:text-gray-400 text-[18px] mt-3">
                        Transforming complex problems into elegant, scalable digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/*IMAGE SECTION */}
                    <motion.div
                        variants={fadeZoom}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="lg:col-span-5 relative group">
                        {/* Animated Glow Border */}
                        <motion.div
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-purple-500 blur-xl" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/10 aspect-[4/5] backdrop-blur-xl">
                            <img
                                src={developer}
                                alt="Portrait"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [-8, 8, -8] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-6 left-6 bg-white dark:bg-black p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <span className="material-icons-outlined text-2xl">EXPERIENCED</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-800 dark:text-gray-300 uppercase tracking-wide">
                                        Aspiring
                                    </p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                                        Developer
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/*RIGHT CONTENT */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8">
                        <h3 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-white">
                            I'm a passionate <span className="text-primary">MERN Stack Developer</span> turning ideas into impactful web experiences.
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400 text-[17px] leading-relaxed">
                            I specialize in building high performance web applications using MongoDB, Express.js, React, and Node.js.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 text-[17px] leading-relaxed">
                            My journey is driven by a desire to solve real world problems through code and excellent system design.
                        </p>

                        {/* Stats */}
                        <motion.div
                            variants={staggerParent}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { num: "30+", label: "Projects Completed" },
                                { num: "Advanced", label: "Coding Experience" },
                                { num: "24/7", label: "Support" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white dark:bg-black p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-primary/30 hover:border-primary/40 transition-all">
                                    <div className="text-3xl font-bold text-primary">{item.num}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4 pt-4">
                            <motion.a
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.96 }}
                                href="/resume_of_almaruf.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-primary/50 hover:bg-primary-dark transition-all">
                                Download Resume
                                <FaDownload />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.96 }}
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-primary/50 hover:bg-primary-dark transition-all">
                                Contact Me
                                <FaArrowAltCircleUp className="text-[19px] rotate-45" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
