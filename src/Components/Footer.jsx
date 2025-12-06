import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="logo-text text-black font-bold text-lg tracking-wider">AL MARUF</span>
            <p className="mt-4 max-w-sm text-gray-500 dark:text-gray-400">
              Let's build something amazing together. Ready to turn your ideas into reality?
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring focus:ring-purple-300 dark:focus:ring-purple-800">
              Get in Touch
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:justify-items-end">

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">Quick Links</p>
              <nav aria-label="Footer navigation" className="mt-4">
                <ul className="space-y-2">
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="/#">Home</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#about">About</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#services">Services</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#projects">Projects</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">Social</p>
              <nav aria-label="Footer social links" className="mt-4">
                <ul className="space-y-2">
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="https://www.linkedin.com/in/mrchipsmaruf/">LinkedIn</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="https://github.com/mrchipsmaruf">GitHub</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="https://x.com/mrchips_maruf">Twitter</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="https://www.facebook.com/share/16tDHZTSXZ/">Facebook</a></li>
                </ul>
              </nav>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex justify-center gap-6 sm:justify-start lg:hidden">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/mrchipsmaruf/" className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a href="https://github.com/mrchipsmaruf" className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                <span className="sr-only">GitHub</span>
                <FaGithub />
              </a>

              {/* Twitter */}
              <a href="https://x.com/mrchips_maruf" className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                <span className="sr-only">Twitter</span>
                <FaXTwitter />
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/16tDHZTSXZ/" className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                <span className="sr-only">Facebook</span>
                <FaFacebook />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:items-center sm:justify-between">

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © 2025 AI Maruf. All rights reserved.
            </p>

            {/* Desktop Social Icons */}
            <div className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              {/* Same SVG icons (hidden on mobile) */}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
