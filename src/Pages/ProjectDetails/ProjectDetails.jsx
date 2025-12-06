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
  SiStripe
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

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
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen">

      {/* BACK BUTTON */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        {/* Title + Desc */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        </div>

        {/* Main Image */}
        <img
          src={project.image}
          className="w-full rounded-xl object-cover aspect-video border border-slate-200 dark:border-white/10 shadow-lg"
          alt={project.title}
        />

        {/* TECHNOLOGIES */}
        <div className="mt-12 flex flex-col items-center gap-8">

          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Technologies Used
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20">
                {techIcons[tech]}
                <span className="text-primary text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">

            <a
              href={project.liveLink}
              target="_blank"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90">
              <FaArrowUpRightFromSquare /> View Live Site
            </a>

            <a
              href={project.githubRepository}
              target="_blank"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              <FaCode /> View Source Code
            </a>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
