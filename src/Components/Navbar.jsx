import React, { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
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
    handleScroll();
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

    setOpen(false);

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
  const normalClass =
    "text-black/70 hover:text-primary transition-colors";

  return (
    <nav
      className="max-w-7xl mx-auto sticky top-0 z-50
        bg-white/30 backdrop-blur-md border border-white/40
        rounded-full py-4 px-6 md:px-8 flex items-center justify-between shadow-lg">

      {/* Desktop Left Menu */}
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
        <span className="logo-text text-black font-bold text-lg tracking-wider">
          AL MARUF
        </span>
      </div>

      {/* Desktop Right Menu */}
      <div className="hidden md:flex items-center gap-8">

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

        <button className="btn btn-outline rounded-full flex items-center">
          <a className={normalClass}
             href="https://drive.google.com/file/d/185KbhYmCTlyqGeQqY1_i98F-zZlc5yXw/view?usp=drive_link">
            Resume
          </a>
          <FaArrowUpRightFromSquare />
        </button>
      </div>

      {/*  Mobile Menu Button */}
      <button
        className="md:hidden text-black/70 ml-auto text-3xl"
        onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-[74px] right-4 left-4 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg flex flex-col p-6 gap-6 md:hidden">

          <a
            onClick={handleNavClick("home")}
            className={active === "home" ? activeClass : normalClass}>
            Home
          </a>

          <a
            onClick={handleNavClick("about")}
            className={active === "about" ? activeClass : normalClass}>
            About Me
          </a>

          <a
            onClick={handleNavClick("services")}
            className={active === "services" ? activeClass : normalClass}>
            Services
          </a>

          <a
            onClick={handleNavClick("projects")}
            className={active === "projects" ? activeClass : normalClass}>
            Projects
          </a>

          <a
            onClick={handleNavClick("contact")}
            className={active === "contact" ? activeClass : normalClass}>
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/185KbhYmCTlyqGeQqY1_i98F-zZlc5yXw/view?usp=drive_link"
            className={normalClass}>
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
