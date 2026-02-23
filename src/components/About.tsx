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
       <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative inline-block text-3xl font-bold text-blue-500 mb-12"
            >
            About Me
            <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute left-0 -bottom-2 h-[2px] bg-blue-600"
            />
        </motion.h2>

        <p className="text-gray-400 leading-relaxed">
          I build scalable systems, modern dashboards, and structured
          applications using clean architecture principles.
        </p>
      </motion.div>
    </section>
  );
}