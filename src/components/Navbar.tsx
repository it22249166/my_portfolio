"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-black shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-blue-500">
          MB.
        </h1>

        <div className="flex items-center gap-6">

          {/* Navigation Links */}
          <div className="space-x-6 text-gray-300 hidden md:flex">
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-gray-400 hover:text-blue-500 transition text-lg"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

        </div>
      </div>
    </nav>
  );
}