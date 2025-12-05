import React from "react";
import bannerImage from "../assets/bannerImage.png";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-0 flex flex-col items-center text-center">

      {/* Hello Bubble */}
      <div className="relative mb-6">
        <div className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-full bg-white dark:bg-zinc-800 shadow-sm relative z-10">
          <span className="font-bold text-gray-800 dark:text-gray-200">Hello!</span>
        </div>

        <svg className="absolute -top-4 -right-6 w-8 h-8 text-primary"
          fill="none" stroke="currentColor" strokeWidth="2"
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
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Exceptional product design<br />
            for our website's success.<br />
            Highly Recommended!
          </p>
        </div>

        {/* Main Image */}
        <div className="md:col-span-6 flex flex-col items-center relative z-10">

          {/* Background Circle */}
          <div className="w-[340px] h-[340px] md:w-[540px] md:h-[540px] bg-primary rounded-full absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 z-0">
          </div>

          {/* Image + Buttons */}
          <div className="relative z-10 mb-100 -mt-20 md:-mt-32">

            {/* ⭐ Only this part changed */}
            <img
              src={bannerImage}
              alt="Designer"
              className="w-96 md:w-[700px] h-auto object-cover rounded-[2.5rem]"
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 
              bg-white/30 backdrop-blur-md border border-white/40 p-2 
              rounded-full flex items-center gap-4 shadow-xl w-max">

              <a href="#" className="bg-black text-white hover:bg-gray-800 px-6 py-2.5 rounded-full font-semibold flex items-center gap-2">
                Portfolio <span className="material-icons text-sm rotate-45"><FaArrowAltCircleUp /></span>
              </a>

              <a href="#" className="text-white hover:text-white/80 px-4 font-medium pr-6">
                Hire me
              </a>
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div className="md:col-span-3 text-right md:pr-8 hidden md:flex flex-col items-end mb-32">
          <div className="flex text-primary mb-2">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="material-icons text-xl">star</span>
            ))}
          </div>
          <h3 className="text-4xl font-bold">10 Years</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
        </div>
      </div>

    </section>
  );
};

export default Banner;
