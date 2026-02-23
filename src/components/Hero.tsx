"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-blue-500">Malith Bandara</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Software Engineering Undergraduate passionate about building scalable
          web applications using modern technologies.
        </p>

        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:border-blue-500 hover:text-blue-500 transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}