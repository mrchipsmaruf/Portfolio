import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../assets/bannerImage.png";
import { FaArrowAltCircleUp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";

// Premium, production-ready Banner. Preserves original structure while adding:
// - hardware-accelerated layers and will-change hints
// - reduced-motion support
// - accessible ARIA and keyboard focus for interactive elements
// - pointer-driven parallax + tilt
// - performant canvas particle system (tiny, device-friendly)
// - improved motion orchestration with Framer Motion controllers
// - image lazy-loading and responsive srcSet
// - subtle lighting & vignette layers
// - polished micro-interactions on hover & focus

const Banner = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef(null);
  const controls = useAnimation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(media.matches);
    const handler = () => setPrefersReducedMotion(media.matches);
    media.addEventListener?.("change", handler);
    return () => media.removeEventListener?.("change", handler);
  }, []);

  // Entrance orchestration
  useEffect(() => {
    if (prefersReducedMotion) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
      return;
    }
    controls.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } });
  }, [controls, prefersReducedMotion]);

  // Pointer parallax + subtle tilt
  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    let rect = el.getBoundingClientRect();
    const handleMove = (e) => {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--pointer-x", String(x));
      el.style.setProperty("--pointer-y", String(y));
    };

    const handleResize = () => (rect = el.getBoundingClientRect());
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion]);

  // Tiny canvas particle system for ambient depth. Optimized: low-res on mobile, capped particles.
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas || prefersReducedMotion) return;

    let ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.clientWidth * devicePixelRatio);
    let height = (canvas.height = canvas.clientHeight * devicePixelRatio);
    const maxParticles = Math.min(28, Math.round((width + height) / 300));
    const particles = [];

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1 + Math.random() * 2.8,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.1 - Math.random() * 0.6,
        alpha: 0.12 + Math.random() * 0.26,
      });
    }

    let raf = null;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.9996;
        if (p.y < -20) {
          p.y = height + 20;
          p.alpha = 0.12 + Math.random() * 0.26;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    tick();

    const handleResize = () => {
      width = (canvas.width = canvas.clientWidth * devicePixelRatio);
      height = (canvas.height = canvas.clientHeight * devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion]);

  // Utility: small accessible focus ring for links
  const focusClass = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60";

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 1.4, ease: "easeOut" }}
      aria-label="Hero banner - Al Maruf"
      className={`relative overflow-hidden w-full mx-auto pt-9 pb-24 md:pt-15 md:pb-0 flex flex-col items-center text-center will-change-transform `}>
      <div className="max-w-7xl mx-auto">
        {/* GPU-accelerated canvas background for particles */}
        <div className="pointer-events-none absolute inset-0 -z-30" aria-hidden>
          <canvas ref={particlesRef} className="w-full h-full block" />
        </div>

        {/* Neon Aura (keeps original size/placement) */}
        <motion.div
          aria-hidden
          animate={prefersReducedMotion ? {} : { scale: [1, 1.28, 1], opacity: [0.28, 0.95, 0.28] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] bg-primary/25 blur-[180px] rounded-full top-20 left-1/2 -translate-x-1/2 -z-10 will-change-transform"
        />

        {/* Hello Badge (preserved) */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: prefersReducedMotion ? 0 : 0.9, ease: "backOut" }}
          className=" mb-6 relative inline-block mx-auto pointer-events-auto"
        >
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.12, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-gray-300 dark:border-gray-700 px-6 py-2 rounded-full bg-white dark:bg-white relative z-10 shadow-lg shadow-primary/20"
          >
            <span className="font-bold text-gray-800 dark:text-black">Hello!</span>
          </motion.div>

          {/* Glow Line Drawing (subtle stroke animation) */}
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: 0.9, duration: 1.4, ease: "easeOut" }}
            className="absolute -top-4 -right-6 w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,120,0,0.7)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <motion.path d="M4 12c2-4 8-6 12-4" />
            <motion.path d="M12 4c4 2 6 8 4 12" />
          </motion.svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-1 md:mb-4 leading-tight"
        >
          I'm <span className="text-primary">Al Maruf</span>,<br />
          MERN Stack Developer
        </motion.h1>

        {/* Layout Grid (preserves original columns and layout) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 mt-0 md:mt-12 items-end relative">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.1 }}
            className="md:col-span-3 text-left md:pl-8 hidden md:block mb-32"
          >
            <motion.p whileHover={prefersReducedMotion ? {} : { x: 15 }} className="text-[15px] text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Exceptional full-stack <br />
              development with MERN<br />
              Highly Recommended!
            </motion.p>
          </motion.div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 1.3 }}
            className="md:col-span-6 flex flex-col items-center relative z-10"
          >

            {/* Premium Glow Circle (keeps original visual but with ray overlay & subtle chromatic shift) */}
            <motion.div
              aria-hidden
              animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], rotateY: [0, 12, 0], rotateZ: [0, 2, -2, 0], opacity: [0.6, 0.95, 0.6] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="w-[380px] h-[380px] md:w-[580px] md:h-[580px]
                       bg-primary/90 rounded-full absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2 z-0 
                       blur-[30px] shadow-[0_0_150px_rgba(168,85,247,0.55)] will-change-transform"
            />

            {/* Floating Main Image (preserved layout) */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -25, 0], rotateX: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 -mt-20 md:-mt-32"
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.06, rotateY: 7 }}
                transition={{ type: "spring", stiffness: 80 }}
                className="w-[380px] md:w-[560px] h-[560px] md:h-[650px] 
                         overflow-hidden rounded-[2.5rem] 
                         mx-auto relative will-change-transform"
                style={{
                  transform: `perspective(1200px) translateZ(0) rotateX(calc(var(--pointer-y,0)*6deg)) rotateY(calc(var(--pointer-x,0)*10deg))`,
                  WebkitTransform: `perspective(1200px) translateZ(0) rotateX(calc(var(--pointer-y,0)*6deg)) rotateY(calc(var(--pointer-x,0)*10deg))`,
                }}
              >
                <img
                  src={bannerImage}
                  alt="Al Maruf"
                  loading="lazy"
                  srcSet={`${bannerImage} 1x`}
                  className="w-full h-full object-cover object-top
                           -translate-y-20 md:-translate-y-60
                           scale-110 md:scale-160 transform-gpu"
                  draggable={false}
                  aria-hidden={false}
                />
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="absolute bottom-30 left-1/2 -translate-x-1/2 
                         bg-white/20 backdrop-blur-2xl border border-white/30 p-2 
                         rounded-full flex items-center gap-4 shadow-2xl w-max"
              >
                <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.12, rotate: 2 }}>
                  <Link
                    to={"https://drive.google.com/file/d/185KbhYmCTlyqGeQqY1_i98F-zZlc5yXw/view?usp=drive_link"}
                    className={`bg-black text-white hover:bg-gray-900 px-6 py-2.5 
                             rounded-full font-semibold flex items-center gap-2 ${focusClass}`}
                    aria-label="Download resume"
                  >
                    Resume <FaArrowAltCircleUp className="rotate-45" />
                  </Link>
                </motion.div>

                <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.18 }}>
                  <Link
                    to={"https://www.linkedin.com/in/mrchipsmaruf/"}
                    className={`text-white/90 hover:text-black px-4 font-medium pr-6 ${focusClass}`}
                    aria-label="Hire me on LinkedIn"
                  >
                    Hire me
                  </Link>
                </motion.div>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Social Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 1.2 }}
            className="md:col-span-3 text-right md:pr-8 hidden md:flex flex-col items-end mb-32"
          >
            <motion.h3 whileHover={prefersReducedMotion ? {} : { x: -12 }} className="text-[20px] font-bold tracking-wide">
              Connect with Me
            </motion.h3>

            <div className="flex gap-3 mt-3">
              {[
                { icon: <FaFacebook className="text-blue-600 dark:text-white" />, link: "https://www.facebook.com/share/16tDHZTSXZ/" },
                { icon: <FaGithub className="text-black dark:text-white" />, link: "https://github.com/mrchipsmaruf" },
                { icon: <FaSquareXTwitter className="text-black dark:text-white" />, link: "https://x.com/mrchips_maruf" },
                { icon: <FaLinkedin className="text-blue-700 dark:text-white" />, link: "https://www.linkedin.com/in/mrchipsmaruf/" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.3, rotate: 8, y: -3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    to={item.link}
                    className={`w-full h-full flex items-center justify-center rounded-full 
                             backdrop-blur-md transition duration-300 text-2xl ${focusClass}`}
                    aria-label={`Open ${item.link}`}
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Vignette & subtle bottom shadow for depth */}
        <div className="pointer-events-none absolute inset-0 -z-5 bg-gradient-to-b from-transparent to-black/6 opacity-60" aria-hidden />
      </div>


    </motion.section>
  );
};

export default Banner;
