import React from "react";
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
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Home</a></li>
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
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">LinkedIn</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">GitHub</a></li>
                  <li><a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Twitter</a></li>
                </ul>
              </nav>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex justify-center gap-6 sm:justify-start lg:hidden">
              {/* LinkedIn */}
              <a href="#" className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                <span className="sr-only">GitHub</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477..."></path>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547..."></path>
                </svg>
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
