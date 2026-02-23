"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-500">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed">
          I build scalable systems, modern dashboards, and structured
          applications using clean architecture principles.
        </p>
      </motion.div>
    </section>
  );
}