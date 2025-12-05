import React from "react";
import bannerImage from "../assets/bannerImage.png";
import { FaArrowAltCircleUp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { FaSquareXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="relative pt-16 pb-24 md:pt-15 md:pb-0 flex flex-col items-center text-center">
      <div className="relative mb-6">
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
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
        I'm <span className="text-primary">Al Maruf</span>,<br />
        MERN Stack Developer
      </h1>

      {/* Center Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 items-end relative">

        {/* Left Text */}
        <div className="md:col-span-3 text-left md:pl-8 hidden md:block mb-32">
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
            Exceptional product design<br />
            for our website's success.<br />
            Highly Recommended!
          </p>
        </div>

        {/* Main Image */}
        <div className="md:col-span-6 flex flex-col items-center relative z-10">

          {/* Background Circle */}
          <div
            className="w-[340px] h-[340px] md:w-[540px] md:h-[540px] bg-primary 
                       rounded-full absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2 z-0">
          </div>

          {/* Image + Buttons */}
          <div className="relative z-10 -mt-20 md:-mt-32">
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
                  scale-110 md:scale-150
                "/>
            </div>
            {/* Buttons */}
            <div
              className="absolute bottom-30 left-1/2 -translate-x-1/2 
                         bg-white/30 backdrop-blur-md border border-white/40 p-2 
                         rounded-full flex items-center gap-4 shadow-xl w-max">
              <Link
                to={"/resume"}
                className="bg-black text-white hover:bg-gray-800 px-6 py-2.5 
                           rounded-full font-semibold flex items-center gap-2">
                Resume <FaArrowAltCircleUp className="rotate-45" />
              </Link>

              <Link to={"/contact"} className="text-white hover:text-white/80 px-4 font-medium pr-6">
                Hire me
              </Link>
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div className="md:col-span-3 text-right md:pr-8 hidden md:flex flex-col items-end mb-32">
          <h3 className="text-3xl font-bold mb-3">Connect with Me</h3>

          <div className="flex gap-4">
            <Link
              to={""}
              className="w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/20 backdrop-blur-md hover:bg-white/30 
               border border-white/30 transition duration-300 text-2xl">
              <FaFacebook className="text-blue-600" />
            </Link>

            <Link
              to={"https://github.com/mrchipsmaruf"}
              className="w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/20 backdrop-blur-md hover:bg-white/30 
               border border-white/30 transition duration-300 text-2xl">
              <FaGithub className="text-black dark:text-white" />
            </Link>

            <Link
              to={"https://github.com/mrchipsmaruf"}
              className="w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/20 backdrop-blur-md hover:bg-white/30 
               border border-white/30 transition duration-300 text-2xl">
              <FaSquareXTwitter className="text-black dark:text-white" />
            </Link>

            <Link
              to={""}
              className="w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/20 backdrop-blur-md hover:bg-white/30 
               border border-white/30 transition duration-300 text-2xl">
              <FaLinkedin className="text-blue-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
