import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-background-dark font-display">
      <div className="relative overflow-hidden">
        {/* TEXT */}
        <h1 className="logo-text text-6xl md:text-7xl px-2 font-semibold tracking-wide">
          AL MARUF
        </h1>

        {/* LIGHT REVEAL */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="reveal-layer"></div>
        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
        .logo-text {
          background: linear-gradient(
            90deg,
            #6d28d9,
            #8b5cf6,
            #c4b5fd,
            #8b5cf6,
            #6d28d9
          );
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: text-flow 4s ease-in-out infinite,
                     glow 5s ease-in-out infinite;
        }

        @keyframes text-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        .reveal-layer {
          position: absolute;
          top: 0;
          left: -130%;
          width: 130%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.12) 40%,
            rgba(255,255,255,0.65) 50%,
            rgba(255,255,255,0.12) 60%,
            transparent 100%
          );
          mix-blend-mode: screen;
          animation: reveal-sweep 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes reveal-sweep {
          0% { transform: translateX(0); }
          100% { transform: translateX(260%); }
        }
        `}
      </style>
    </div>
  );
};

export default Loading;
