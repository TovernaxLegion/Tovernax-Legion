import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette
        navy: {
          50: "#f0f3ff",
          100: "#e0e8ff",
          200: "#c2d0ff",
          300: "#93abff",
          400: "#6380ff",
          500: "#3d57ff",
          600: "#2034f5",
          700: "#1a27e1",
          800: "#1b21b6",
          900: "#1c2090",
          950: "#0e1154",
        },
        gold: {
          50: "#fffdf0",
          100: "#fffacc",
          200: "#fff385",
          300: "#ffe64d",
          400: "#ffd624",
          500: "#f5b800",
          600: "#d98e00",
          700: "#b46500",
          800: "#924f07",
          900: "#78400c",
          950: "#452100",
        },
        slate: {
          950: "#0a0f1e",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "radial-gradient(ellipse at 20% 50%, rgba(29, 53, 220, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245, 184, 0, 0.08) 0%, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "slide-in-left": "slideInLeft 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.7s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(61, 87, 255, 0.3)",
        "glow-gold": "0 0 40px rgba(245, 184, 0, 0.25)",
        card: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 12px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
        premium: "0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
