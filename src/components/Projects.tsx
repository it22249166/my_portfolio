

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
  image?: string;
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
  {
    title: "SME Business App",
    description:
      "A web application designed to help small and medium enterprises manage their operations, including inventory, sales, and customer relationships.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/it22249166/SME-Business-App.git",
    highlights: ["Inventory management", "Sales tracking", "Customer relationship features"],
  },
  {
    title: "AI-powered Productivity Browser",
    description:
      "A web application that leverages AI to enhance productivity by providing intelligent suggestions and automation features.",
    tech: ["JavaScript", "React", "Node.js", "AI/ML"],
    github: "https://github.com/it22249166/AI-powered-productivity-browser.git",
    highlights: ["AI suggestions", "Automation features", "Productivity tools"],
  },
  {
    title: "POS System for SMEs",
    description:
      "A Point of Sale (POS) system tailored for small and medium enterprises, offering features like inventory management, sales tracking, and customer relationship management.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/it22249166/POS1.git",
    highlights: ["Inventory management", "Sales tracking", "Customer relationship features"],
  },
  {
    title: "Hostal Management System",
    description:
      "A comprehensive management system for hostels, providing features such as booking management, room allocation, and customer relationship management.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/it22249166/HostalManagement.git",
    highlights: ["Booking management", "Room allocation", "Customer relationship features"],
  },
  {
    title: "Waste Management System",
    description:
      "A web application for managing waste collection and disposal, with features for tracking, scheduling, and reporting.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ravindu200232/wast_management.git",
    highlights: ["Waste tracking", "Scheduling", "Reporting features"],
  },
  {
    title: "Driving License Test Preparation App",
    description:
      "A web application for preparing users for their driving license tests, with features for practice exams and study materials.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ravindu200232/DrivingLC.git",
    highlights: ["Practice exams", "Study materials", "Test preparation features"],
  },
  {
    title: "ArtisanConnect Mobile App",
    description:
      "A mobile application for connecting artisans with customers, featuring product listings, booking, and communication tools.",
    tech: ["JavaScript", "React Native", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ravindu200232/ArtisanConnect_Mobile.git",
    highlights: ["Product listings", "Booking system", "Communication tools"],
  },
  {
    title: "Fully automated deployment agent",
    description:
      "A deployment agent that automates the process of deploying applications to various environments, with features for configuration and monitoring.",
    tech: ["Python", "Docker", "Kubernetes", "CI/CD"],
    github: "https://github.com/Ravindu200232/RP-SE-009.git",
    highlights: ["Automated deployment", "Configuration management", "Monitoring features"],
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
    <section id="projects" className="bg-linear-to-b from-[#fffdf8] via-white to-[#f3f8fd] px-6 py-20 dark:bg-dark-800">
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
            <div className="section-label mx-auto mb-5">Selected work</div>
            <h2 className="section-title text-4xl font-semibold md:text-5xl">Projects</h2>

            <p className="mt-3 text-lg text-slate-600">
              Search projects, filter by tech, and explore highlights
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mt-5 h-[3px] rounded-full bg-linear-to-r from-accent-cyan via-accent-teal to-accent-coral"
            />
          </motion.div>

          {/* Search (updated for light theme) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-10 w-full md:w-[420px]"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects (e.g., Docker, React)..."
                className="surface-panel w-full rounded-full py-3 pl-11 pr-10 text-slate-800 outline-none transition focus:border-accent-cyan/60 focus:ring-2 focus:ring-vibrant-400/20 dark:border-vibrant-700 dark:bg-dark-800/40 dark:text-gray-200 dark:placeholder:text-slate-500"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200"
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
                  "rounded-full px-4 py-2 text-sm border font-medium transition-all duration-300",
                  active
                    ? "border-accent-cyan bg-sky-50 text-accent-blue shadow-glow-sm"
                    : "border-sky-100 bg-white/80 text-slate-700 hover:border-accent-cyan/50 hover:bg-sky-50 hover:text-accent-blue dark:border-vibrant-700 dark:bg-dark-800/40 dark:text-gray-300 dark:hover:bg-dark-900/20",
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
            className="mt-10 relative overflow-hidden rounded-[2.4rem] border border-sky-100 bg-linear-to-br from-white via-[#f8fbff] to-[#fff4ea] shadow-[0_30px_70px_rgba(15,23,42,0.08)] dark:border-vibrant-700 dark:from-slate-800/60 dark:to-dark-900"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl dark:bg-vibrant-600/20" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-200/35 blur-3xl dark:bg-vibrant-500/10" />

            <div className="relative p-7 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="section-label !px-3 !py-2 !text-[0.65rem] !tracking-[0.18em]">
                    Featured
                  </span>
                  <h3 className="section-title mt-4 text-2xl font-semibold md:text-3xl dark:text-gray-100">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-slate-600 dark:text-gray-300">
                    {featured.description}
                  </p>

                  {featured.highlights?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featured.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-xs font-medium text-accent-blue dark:border-vibrant-700 dark:bg-dark-800/70 dark:text-vibrant-300"
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
                      rel="noreferrer"
                      className="secondary-button !px-4 !py-2.5 !text-sm"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : null}
                  {featured.live ? (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button !px-4 !py-2.5 !text-sm"
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
                    className="rounded-full border border-sky-100 bg-white/82 px-3 py-1 text-sm font-medium text-accent-blue dark:border-vibrant-600/30 dark:bg-vibrant-600/15 dark:text-vibrant-300"
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
                  className="group relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/84 p-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-glow-md dark:border-vibrant-700 dark:bg-dark-800/50"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute -inset-1 bg-linear-to-r from-sky-300/20 via-teal-200/15 to-orange-200/25 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 dark:from-vibrant-600/20 dark:via-vibrant-500/10 dark:to-vibrant-500/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="section-title text-xl font-semibold transition group-hover:text-accent-blue dark:text-gray-100">
                        {project.title}
                      </h3>

                      <div className="flex gap-3 text-xl">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 transition hover:text-accent-blue dark:text-gray-400 dark:hover:text-vibrant-300"
                            aria-label="GitHub"
                          >
                            <FaGithub />
                          </a>
                        ) : null}
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 transition hover:text-accent-blue dark:text-gray-400 dark:hover:text-blue-400"
                            aria-label="Live"
                          >
                            <FiExternalLink />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-3 leading-relaxed text-slate-600 dark:text-gray-300">
                      {isExpanded
                        ? project.description
                        : project.description.length > 90
                          ? project.description.slice(0, 90) + "..."
                          : project.description}
                    </p>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpanded(isExpanded ? null : project.title)}
                      className="mt-4 text-sm font-semibold text-accent-blue underline underline-offset-4 transition hover:text-accent-teal"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-sky-100 bg-sky-50/70 px-3 py-1 text-xs font-medium text-accent-blue dark:border-blue-600/25 dark:bg-blue-600/15 dark:text-blue-300"
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
                          <div className="rounded-xl border border-sky-100 bg-white/75 p-4 dark:border-vibrant-700 dark:bg-black/30">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-gray-400">Highlights</p>
                            <ul className="space-y-2">
                              {project.highlights.map((h) => (
                                <li key={h} className="text-sm text-slate-700 dark:text-gray-200">
                                  <span className="mr-2 font-bold text-accent-blue dark:text-blue-400">•</span>
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
          <div className="mt-10 rounded-2xl border border-sky-100 bg-white/80 p-8 text-center font-medium text-slate-700 dark:border-vibrant-700 dark:bg-dark-800/40 dark:text-gray-300">
            No projects match your search/filter. Try another keyword or tech.
          </div>
        ) : null}
      </div>
    </section>
  );
}
