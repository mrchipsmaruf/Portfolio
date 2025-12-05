/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#818CF8",

        "background-light": "#F9FAFB",
        "background-dark": "#0F172A",

        "card-light": "#FFFFFF",
        "card-dark": "#1E293B",

        "text-light": "#111827",
        "text-dark": "#F3F4F6",

        "text-muted-light": "#6B7280",
        "text-muted-dark": "#9CA3AF",

        "border-light": "#E5E7EB",
        "border-dark": "#334155",
      },

      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse-slow": "spin 25s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
