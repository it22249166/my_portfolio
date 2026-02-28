

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiSearch } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  highlights?: string[];
};

const projects: Project[] = [
  {
    title: "AI-Dress-Mart",
    description:
      "An AI-powered dress shopping project with frontend and backend structure. Includes a shop page and full repository setup.",
    tech: ["JavaScript", "MERN", "React", "Node.js", "MongoDB"],
    github: "https://github.com/it22249166/AI-Dress-Mart",
    image: "/projects/ai-dress-mart.jpg",
    highlights: ["Frontend + Backend folders", "Shop page", "Full-stack structure"],
  },
  {
    title: "Foods-Ordering-App",
    description:
      "A full-stack food ordering system with client/server separation and Docker Compose deployment guide.",
    tech: ["JavaScript", "React", "Node.js", "Docker", "MongoDB"],
    github: "https://github.com/it22249166/Foods-Ordering-App",
    image: "/projects/foods-ordering-app.jpg",
    highlights: ["client + server structure", "Docker Compose", "Deployment guide README"],
  },
  {
    title: "Image Processing Tool",
    description:
      "A web application that allows users to upload images and apply various filters and transformations in real-time.",
    tech: ["Python", "Jupyter Notebook", "OpenCV", "NumPy"],
    live: "https://your-live-link.com",
    github: "https://github.com/it22249166/Image-Processing-Tool.git",
    highlights: ["Real-time filters", "Upload & preview", "OpenCV transforms"],
  },
];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const techOptions = useMemo(() => {
    const all = projects.flatMap((p) => p.tech);
    return ["All", ...uniq(all).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesQuery = !q
        ? true
        : `${p.title} ${p.description} ${p.tech.join(" ")}`
            .toLowerCase()
            .includes(q);

      const matchesTech = activeTech === "All" ? true : p.tech.includes(activeTech);

      return matchesQuery && matchesTech;
    });
  }, [query, activeTech]);

  const featured = filtered[0];

  return (
    <section id="projects" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading + Controls */}
        {/* Title (Get In Touch style) + Search */}
<div className="mb-14">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Projects
    </h2>

    <p className="mt-3 text-slate-400 text-lg">
      Search projects, filter by tech, and explore highlights
    </p>

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-[3px] bg-blue-600 mx-auto mt-5 rounded-full"
    />
  </motion.div>

  {/* Search (same as before) */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="mt-10 w-full md:w-[420px] mx-auto"
  >
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search projects (e.g., Docker, React)..."
        className="w-full rounded-xl bg-slate-900/40 border border-slate-800 pl-11 pr-10 py-3 text-slate-200 placeholder:text-slate-500 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition"
      />
      {query ? (
        <button
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
          aria-label="Clear search"
        >
          ✕
        </button>
      ) : null}
    </div>
  </motion.div>
</div>

        {/* Tech filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {techOptions.map((t) => {
            const active = t === activeTech;
            return (
              <button
                key={t}
                onClick={() => setActiveTech(t)}
                className={[
                  "rounded-full px-4 py-2 text-sm border transition",
                  active
                    ? "bg-blue-600/15 border-blue-600 text-blue-300"
                    : "bg-slate-900/40 border-slate-800 text-slate-300 hover:border-blue-600 hover:text-blue-200",
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </motion.div>

        {/* Featured / Spotlight */}
        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-10 relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-black"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-blue-600/20" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-cyan-500/10" />

            <div className="relative p-7 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full border border-blue-600/40 bg-blue-600/10 px-3 py-1 text-xs text-blue-200">
                    Featured
                  </span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-100">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed">
                    {featured.description}
                  </p>

                  {featured.highlights?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featured.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-3 py-1 rounded-full bg-slate-800/70 text-slate-200 border border-slate-700"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="flex gap-3">
                  {featured.github ? (
                    <a
                      href={featured.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-black/30 px-4 py-2 text-slate-200 hover:border-blue-600 hover:text-blue-200 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : null}
                  {featured.live ? (
                    <a
                      href={featured.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-blue-600/50 bg-blue-600/10 px-4 py-2 text-blue-200 hover:bg-blue-600/15 transition"
                    >
                      <FiExternalLink /> Live
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 bg-blue-600/15 text-blue-300 rounded-full border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Projects grid */}
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project, index) => {
              const isExpanded = expanded === project.title;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-500/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-slate-100">
                        {project.title}
                      </h3>

                      <div className="flex gap-3 text-xl">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            className="text-slate-400 hover:text-blue-400 transition"
                            aria-label="GitHub"
                          >
                            <FaGithub />
                          </a>
                        ) : null}
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            className="text-slate-400 hover:text-blue-400 transition"
                            aria-label="Live"
                          >
                            <FiExternalLink />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-3 text-slate-300 leading-relaxed">
                      {isExpanded
                        ? project.description
                        : project.description.length > 90
                        ? project.description.slice(0, 90) + "..."
                        : project.description}
                    </p>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpanded(isExpanded ? null : project.title)}
                      className="mt-4 text-sm text-blue-300 hover:text-blue-200 transition underline underline-offset-4"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-blue-600/15 text-blue-300 rounded-full border border-blue-600/25"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* extra details (animated) */}
                    <AnimatePresence>
                      {isExpanded && project.highlights?.length ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="rounded-xl border border-slate-800 bg-black/30 p-4">
                            <p className="text-xs text-slate-400 mb-2">Highlights</p>
                            <ul className="space-y-2">
                              {project.highlights.map((h) => (
                                <li key={h} className="text-sm text-slate-200">
                                  <span className="text-blue-400 mr-2">•</span>
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-slate-300">
            No projects match your search/filter. Try another keyword or tech.
          </div>
        ) : null}
      </div>
    </section>
  );
}