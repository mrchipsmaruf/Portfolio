import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black dark:bg-zinc-900 rounded-full py-4 px-6 md:px-8 flex items-center justify-between shadow-lg relative z-20">

      {/* Left Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform" href="#">
          Home
        </a>
        <a className="text-gray-300 hover:text-white transition-colors" href="#">About</a>
        <a className="text-gray-300 hover:text-white transition-colors" href="#">Service</a>
      </div>

      {/* Center Logo */}
      <div className="flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="logo-text text-white font-bold text-lg tracking-wider">AL MARUF</span>
      </div>

      {/* Right Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a className="text-gray-300 hover:text-white transition-colors" href="#">Resume</a>
        <a className="text-gray-300 hover:text-white transition-colors" href="#">Project</a>
        <a className="text-gray-300 hover:text-white transition-colors" href="#">Contact</a>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden text-white ml-auto">
        <span className="material-icons">menu</span>
      </button>
    </nav>
  );
};

export default Navbar;
