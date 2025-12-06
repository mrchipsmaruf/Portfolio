// Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const sections = ["about", "services", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActive("home");
        return;
      }

      let found = false;
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
            found = true;
          }
        }
      });

      if (!found) setActive("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSecOnHome = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
    }
  };

  const handleNavClick = (id) => (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToSecOnHome(id);
      return;
    }

    navigate("/", { replace: false });
    setTimeout(() => {
      scrollToSecOnHome(id);
    }, 120);
  };

  const activeClass =
    "bg-primary text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform";
  const normalClass = "text-gray-300 hover:text-white transition-colors";

  return (
    <nav className="max-w-7xl mx-auto sticky top-0 z-50 bg-black dark:bg-zinc-900 rounded-full py-4 px-6 md:px-8 flex items-center justify-between shadow-lg ">
      {/* Left Menu */}
      <div className="hidden md:flex items-center gap-8">
        <NavLink
          className={active === "home" ? activeClass : normalClass}
          to="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home")(e);
          }}>
          Home
        </NavLink>

        <NavLink
          className={active === "about" ? activeClass : normalClass}
          to="/#about"
          onClick={handleNavClick("about")}>
          About Me
        </NavLink>

        <NavLink
          className={active === "services" ? activeClass : normalClass}
          to="/#services"
          onClick={handleNavClick("services")}>
          Services
        </NavLink>
      </div>

      {/* Center Logo */}
      <div className="flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="logo-text text-white font-bold text-lg tracking-wider">
          AL MARUF
        </span>
      </div>

      {/* Right Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a className={normalClass} href="#">
          Resume
        </a>

        <NavLink
          className={active === "projects" ? activeClass : normalClass}
          to="/#projects"
          onClick={handleNavClick("projects")}>
          Projects
        </NavLink>

        <NavLink
          className={active === "contact" ? activeClass : normalClass}
          to="/#contact"
          onClick={handleNavClick("contact")}>
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden text-white ml-auto">
        <span className="material-icons">menu</span>
      </button>
    </nav>
  );
};

export default Navbar;
