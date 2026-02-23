"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "TypeScript",
  "REST APIs",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
       <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative inline-block text-3xl font-bold text-blue-500 mb-12"
            >
            Skills
            <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute left-0 -bottom-2 h-[2px] bg-blue-600"
            />
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-black border border-slate-800 hover:border-blue-600 p-6 rounded-xl text-center transition-all"
            >
              <p className="text-gray-300">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}