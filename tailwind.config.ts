import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrant: {
          50: "#f4fbff",
          100: "#e6f7ff",
          200: "#ccecff",
          300: "#9ddcff",
          400: "#63c8ff",
          500: "#2aa8ff",
          600: "#1686e6",
          700: "#1768ba",
          800: "#17558f",
          900: "#18496f",
        },
        accent: {
          purple: "#5b7cfa",
          coral: "#ff7a59",
          gold: "#f6b73c",
          pink: "#ff648a",
          cyan: "#0ea5e9",
          blue: "#1d4ed8",
          teal: "#14b8a6",
        },
        dark: {
          50: "#edf5ff",
          100: "#d8e7fb",
          200: "#b8cae6",
          300: "#8ca6c8",
          400: "#6483aa",
          500: "#49698d",
          600: "#375171",
          700: "#283d57",
          800: "#17283d",
          900: "#0b1727",
        },
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-in forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "from": { opacity: "0", transform: "translateY(10px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "from": { opacity: "0", transform: "translateY(30px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(124, 58, 237, 0.2)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.5), 0 0 60px rgba(124, 58, 237, 0.3)"
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 10px 24px rgba(14, 165, 233, 0.18)",
        "glow-md": "0 18px 44px rgba(14, 165, 233, 0.18)",
        "glow-lg": "0 24px 56px rgba(255, 122, 89, 0.18)",
        "glow-xl": "0 30px 80px rgba(14, 165, 233, 0.22), 0 20px 45px rgba(255, 122, 89, 0.14)",
        "premium": "0 24px 60px rgba(22, 101, 169, 0.12), 0 12px 24px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "gradient-premium": "linear-gradient(135deg, #0ea5e9 0%, #14b8a6 52%, #ff7a59 100%)",
        "gradient-light": "linear-gradient(135deg, #ffffff 0%, #f3fbff 40%, #eefbf7 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
