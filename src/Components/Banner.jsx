import React from "react";
import bannerImage from "../assets/bannerImage.png";
import { FaArrowAltCircleUp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-7xl mx-auto pt-9 pb-24 md:pt-15 md:pb-0 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mb-6">
        <div className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-full bg-white dark:bg-zinc-800 shadow-sm relative z-10">
          <span className="font-bold text-gray-800 dark:text-gray-200">Hello!</span>
        </div>
        <svg
          className="absolute -top-4 -right-6 w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path d="M4 12c2-4 8-6 12-4"></path>
          <path d="M12 4c4 2 6 8 4 12"></path>
        </svg>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold mb-1 md:mb-4 leading-tight">
        I'm <span className="text-primary">Al Maruf</span>,<br />
        MERN Stack Developer
      </motion.h1>

      {/* Center Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 mt-0 md:mt-12 items-end relative">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="md:col-span-3 text-left md:pl-8 hidden md:block mb-32">
          <p className="text-[15px] text-gray-600 dark:text-gray-400 font-medium">
            Exceptional full-stack <br />
            development with MERN<br />
            Highly Recommended!
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
          className="md:col-span-6 flex flex-col items-center relative z-10">
          {/* Background Circle */}
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[340px] h-[340px] md:w-[540px] md:h-[540px] bg-primary 
                       rounded-full absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2 z-0">
          </motion.div>

          {/* Image + Buttons */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 -mt-20 md:-mt-32">
            <div
              className="w-[380px] md:w-[560px] 
                         h-[560px] md:h-[650px] 
                         overflow-hidden rounded-[2.5rem] 
                         mx-auto relative">
              <img
                src={bannerImage}
                alt="Al Maruf"
                className="
                  w-full h-full object-cover object-top
                  -translate-y-20 md:-translate-y-60
                  scale-110 md:scale-160
                "/>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-30 left-1/2 -translate-x-1/2 
                         bg-white/30 backdrop-blur-md border border-white/40 p-2 
                         rounded-full flex items-center gap-4 shadow-xl w-max">
              <Link
                to={"https://drive.google.com/file/d/185KbhYmCTlyqGeQqY1_i98F-zZlc5yXw/view?usp=drive_link"}
                className="bg-black text-white hover:bg-gray-800 px-6 py-2.5 
                           rounded-full font-semibold flex items-center gap-2">
                Resume <FaArrowAltCircleUp className="rotate-45" />
              </Link>

              <Link to={"https://www.linkedin.com/in/mrchipsmaruf/"} className="text-white/80 hover:text-black px-4 font-medium pr-6">
                Hire me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="md:col-span-3 text-right md:pr-8 hidden md:flex flex-col items-end mb-32">
          <h3 className="text-[20px] font-bold">Connect with Me</h3>

          <div className="flex gap-3">
            <Link
              to={"https://www.facebook.com/share/16tDHZTSXZ/"}
              className="w-full h-full flex items-center justify-center rounded-full 
                backdrop-blur-md transition duration-300 text-2xl">
              <FaFacebook className="text-blue-600 dark:text-white" />
            </Link>

            <Link
              to={"https://github.com/mrchipsmaruf"}
              className="w-full h-full flex items-center justify-center rounded-full 
                backdrop-blur-md transition duration-300 text-2xl">
              <FaGithub className="text-black dark:text-white" />
            </Link>

            <Link
              to={"https://x.com/mrchips_maruf"}
              className="w-full h-full flex items-center justify-center rounded-full 
                backdrop-blur-md transition duration-300 text-2xl">
              <FaSquareXTwitter className="text-black dark:text-white" />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/mrchipsmaruf/"}
              className="w-full h-full flex items-center justify-center rounded-full 
                backdrop-blur-md transition duration-300 text-2xl">
              <FaLinkedin className="text-blue-700 dark:text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
