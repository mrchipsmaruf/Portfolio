import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaArrowLeft, FaCode, FaReact } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import {
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiStripe,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

import { motion } from "framer-motion";

const techIcons = {
  React: <FaReact className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  DaisyUI: <SiDaisyui className="text-purple-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Express: <SiExpress className="text-gray-300" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Stripe: <SiStripe className="text-indigo-500" />,
  "Framer Motion": <TbBrandFramerMotion className="text-pink-400" />,
  JWT: <RiJavascriptFill className="text-yellow-500" />,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === id);
        setProject(found);
      });
  }, [id]);

  if (!project)
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Project not found.
      </div>
    );

  return (
    <div className="relative overflow-hidden bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">

      {/* Soft Glow Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -left-20 w-96 h-96 bg-purple-500 blur-[150px] rounded-full"/>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 blur-[200px] rounded-full"/>
      </div>

      {/* BACK BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        <Link
          to="/?scroll=projects"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
          <FaArrowLeft /> Back to Projects
        </Link>
      </motion.div>

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">

        {/* Title + Desc */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-center mb-14">
          <motion.h1
            initial={{ textShadow: "0px 0px 0px rgba(255,255,255,0)" }}
            animate={{
              textShadow: [
                "0px 0px 0px rgba(255,255,255,0)",
                "0px 0px 18px rgba(255,255,255,0.25)",
                "0px 0px 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
            {project.title}
          </motion.h1>

          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        </motion.div>

        {/* Premium Glow Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.03, rotateX: 1.2, rotateY: -1.2 }}
          className="relative group">
          {/* Pulse Glow Animation */}
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.03, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 blur-xl"/>

          <div className="relative rounded-xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover aspect-video group-hover:scale-105 transition-all duration-700"/>
          </div>
        </motion.div>

        {/* TECHNOLOGIES */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.07 }}
          className="mt-14 flex flex-col items-center gap-9">
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl font-bold">
            Technologies Used
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 shadow">
                {techIcons[tech]}
                <span className="text-primary text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href={project.liveLink}
              target="_blank"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-white text-sm font-bold shadow-lg hover:shadow-primary/40 transition-all">
              <FaArrowUpRightFromSquare /> View Live Site
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href={project.githubRepository}
              target="_blank"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-400 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shadow">
              <FaCode /> View Source Code
            </motion.a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetails;
