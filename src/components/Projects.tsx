"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Image Processing Tool",
    description: "A web application that allows users to upload images and apply various filters and transformations in real-time.",
    tech: ["Python", "Jupyter Notebook", "OpenCV", "NumPy"],
    live: "https://your-live-link.com",
    github: "https://github.com/it22249166/Image-Processing-Tool.git",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
       <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative inline-block text-3xl font-bold text-blue-500 mb-12"
            >
            Projects
            <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute left-0 -bottom-2 h-[2px] bg-blue-600"
            />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-600 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

             <div className="flex gap-4 mt-6">
                <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-400 hover:text-blue-500 transition text-xl"
                >
                    <FaGithub />
                </a>

                <a
                    href={project.live}
                    target="_blank"
                    className="text-gray-400 hover:text-blue-500 transition text-xl"
                >
                    <FiExternalLink />
                </a>
                </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}