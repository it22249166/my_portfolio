import React from "react";
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">
          MB.
        </h1>

        <div className="space-x-6 text-gray-300 hidden md:flex">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}