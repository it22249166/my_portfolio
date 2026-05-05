"use client";

import { motion } from "framer-motion";
import { useMemo, useState, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiSpringboot,
  SiRedux,
  SiJest,
  SiTestinglibrary,
  SiFigma,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";

type Category = "Frontend" | "Backend" | "Database" | "Tools";
type Skill = {
  name: string;
  level: number; // 0-100
  category: Category;
  hint: string;
  icon?: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

const SKILLS: Skill[] = [
  // Frontend
  { name: "React", level: 92, category: "Frontend", hint: "Hooks, component architecture, state patterns", icon: SiReact, featured: true },
  { name: "Next.js", level: 88, category: "Frontend", hint: "App Router, SSR/SSG, routing patterns", icon: SiNextdotjs, featured: true },
  { name: "TypeScript", level: 86, category: "Frontend", hint: "Types, generics, safer scalable code", icon: SiTypescript, featured: true },
  { name: "Tailwind CSS", level: 90, category: "Frontend", hint: "Responsive UI, design systems, layouts", icon: SiTailwindcss, featured: true },
  { name: "Redux / Context", level: 78, category: "Frontend", hint: "Global state management", icon: SiRedux },
  { name: "UI/UX (Figma)", level: 72, category: "Frontend", hint: "Wireframes, clean layouts, UX thinking", icon: SiFigma },

  // Backend
  { name: "Node.js", level: 85, category: "Backend", hint: "Async, APIs, performance basics", icon: SiNodedotjs, featured: true },
  { name: "Express.js", level: 83, category: "Backend", hint: "Middleware, routing, auth patterns", icon: SiExpress, featured: true },
  { name: "REST API Design", level: 87, category: "Backend", hint: "CRUD, pagination, validation, status codes" },
  { name: "JWT Authentication", level: 80, category: "Backend", hint: "Secure login, refresh/access tokens", icon: SiJsonwebtokens },
  { name: "Spring Boot", level: 75, category: "Backend", hint: "Microservices, controllers, JPA basics", icon: SiSpringboot },

  // Database
  { name: "MongoDB", level: 82, category: "Database", hint: "Schema design, aggregation basics", icon: SiMongodb, featured: true },
  { name: "MySQL", level: 78, category: "Database", hint: "Joins, relational modeling, queries", icon: SiMysql },

  // Tools
  { name: "Git", level: 86, category: "Tools", hint: "Branching, PR workflow, collaboration", icon: SiGit, featured: true },
  { name: "GitHub", level: 85, category: "Tools", hint: "Repo management, actions basics", icon: SiGithub },
  { name: "Docker", level: 76, category: "Tools", hint: "Containers, Compose, local deployments", icon: SiDocker, featured: true },
  { name: "Postman", level: 84, category: "Tools", hint: "API testing, debugging collections", icon: SiPostman },
  { name: "Vercel", level: 74, category: "Tools", hint: "Deploying Next.js projects", icon: SiVercel },
  { name: "Jest", level: 72, category: "Tools", hint: "Unit tests, mocks, test structure", icon: SiJest },
  { name: "Testing Library", level: 70, category: "Tools", hint: "Component testing best practices", icon: SiTestinglibrary },
];

const CATEGORIES: Array<"All" | Category> = ["All", "Frontend", "Backend", "Database", "Tools"];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function GlowCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[28px] border border-sky-100 bg-white/78 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 dark:border-vibrant-800 dark:bg-black/40 ${className}`}
    >
      {/* cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: show ? 1 : 0,
          background: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, rgba(14,165,233,0.16), transparent 60%)`,
        }}
      />
      {/* subtle edge glow */}
      <div aria-hidden className="pointer-events-none absolute -inset-1 bg-linear-to-r from-vibrant-400/15 via-accent-teal/10 to-accent-coral/15 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 dark:from-vibrant-600/15 dark:via-vibrant-500/10" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [pinned, setPinned] = useState<string | null>(null);

  const stackRow = useMemo(() => {
    // Top icons row (premium)
    const picks = [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Node", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Docker", Icon: SiDocker },
      { name: "Git", Icon: SiGit },
      { name: "Postman", Icon: SiPostman },
    ];
    return picks;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return SKILLS.filter((s) => {
      const matchesCategory = activeCategory === "All" ? true : s.category === activeCategory;
      const matchesQuery = !q ? true : `${s.name} ${s.hint} ${s.category}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    })
      .sort((a, b) => {
        // pinned first, then featured, then by level
        if (pinned) {
          if (a.name === pinned) return -1;
          if (b.name === pinned) return 1;
        }
        const fa = a.featured ? 1 : 0;
        const fb = b.featured ? 1 : 0;
        if (fb !== fa) return fb - fa;
        return b.level - a.level;
      });
  }, [activeCategory, query, pinned]);

  return (
    <section id="skills" className="relative overflow-hidden bg-linear-to-b from-[#f8fcff] via-[#fffdf8] to-[#eef7fd] px-6 py-20 dark:bg-linear-to-b dark:from-[#08131f] dark:via-[#0b192a] dark:to-[#10233a]">
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl dark:bg-vibrant-600/10" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl dark:bg-vibrant-500/10" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Get In Touch style title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto mb-5">Core toolkit</div>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">Skills</h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-gray-400">
            Tech stack, tools, and strengths I use to build real-world products
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 h-[3px] rounded-full bg-linear-to-r from-accent-cyan via-accent-teal to-accent-coral"
          />
        </motion.div>

        {/* Premium tech stack row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <GlowCard className="p-5">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm text-slate-500 dark:text-gray-400">Tech Stack</p>
                <p className="font-medium text-slate-900 dark:text-gray-200">Core tools I&apos;m most confident with</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-end">
                {stackRow.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-xl border border-sky-100 bg-sky-50/70 px-3 py-2 dark:border-vibrant-800 dark:bg-slate-950/40"
                    title={name}
                  >
                    <Icon className="text-slate-700 dark:text-gray-200" />
                    <span className="text-xs text-slate-800 dark:text-gray-300">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Controls */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {/* Search */}
          <GlowCard className="p-4">
            <p className="text-sm text-slate-500 dark:text-gray-400">Search skills</p>
            <div className="mt-2 relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills (e.g., Docker, Next, JWT...)"
                className="w-full rounded-xl border border-sky-100 bg-white/85 px-4 py-3 text-slate-800 outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-vibrant-400/20 dark:border-vibrant-800 dark:bg-black/40 dark:text-gray-200 dark:focus:border-vibrant-500 dark:focus:ring-vibrant-500/20 dark:placeholder:text-slate-500"
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
          </GlowCard>

          {/* Category tabs */}
          <GlowCard className="p-4">
            <p className="text-sm text-slate-500 dark:text-gray-400">Filter by category</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => {
                const active = c === activeCategory;
                return (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={[
                      "rounded-full px-4 py-2 text-sm border transition",
                      active
                        ? "border-accent-cyan bg-sky-50 text-accent-blue shadow-[0_12px_22px_rgba(14,165,233,0.12)] dark:border-vibrant-500 dark:bg-vibrant-500/15 dark:text-vibrant-300"
                        : "border-sky-100 bg-white/70 text-slate-700 hover:border-accent-cyan hover:text-accent-blue dark:border-vibrant-800 dark:bg-black/30 dark:text-gray-300 dark:hover:border-vibrant-500 dark:hover:text-vibrant-300",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
              {pinned ? (
                <button
                  onClick={() => setPinned(null)}
                  className="rounded-full border border-sky-100 bg-white/70 px-4 py-2 text-sm text-slate-700 transition hover:border-accent-cyan hover:text-accent-blue dark:border-vibrant-800 dark:bg-black/30 dark:text-gray-300 dark:hover:border-vibrant-500 dark:hover:text-vibrant-300"
                  title="Clear pinned skill"
                >
                  Clear pin: <span className="text-accent-blue dark:text-vibrant-300">{pinned}</span>
                </button>
              ) : null}
            </div>
          </GlowCard>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, index) => {
            const isPinned = pinned === skill.name;
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2) }}
              >
                <GlowCard
                  onClick={() => setPinned((prev) => (prev === skill.name ? null : skill.name))}
                  className={[
                    "p-6 cursor-pointer hover:-translate-y-1 transition-transform",
                    isPinned ? "border-accent-cyan/70 dark:border-vibrant-500/70" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3 dark:border-vibrant-800 dark:bg-slate-950/40">
                        {Icon ? <Icon className="text-lg text-slate-700 dark:text-gray-200" /> : <span className="text-slate-600 dark:text-gray-300">★</span>}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100">{skill.name}</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">{skill.category}</p>
                      </div>
                    </div>

                    <span
                      className={[
                        "text-xs rounded-full px-3 py-1 border",
                        isPinned
                          ? "border-accent-cyan/60 bg-sky-50 text-accent-blue dark:bg-vibrant-600/10 dark:text-vibrant-300"
                          : "border-sky-100 bg-white/70 text-slate-700 dark:border-vibrant-700 dark:bg-dark-900/30 dark:text-gray-300",
                      ].join(" ")}
                      title="Click to pin"
                    >
                      {isPinned ? "Pinned" : "Pin"}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{skill.hint}</p>

                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-gray-400">Confidence</span>
                      <span className="text-xs text-slate-900 dark:text-gray-200">{clamp(skill.level, 0, 100)}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-sky-100 dark:bg-dark-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${clamp(skill.level, 0, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-linear-to-r from-accent-cyan via-accent-teal to-accent-coral"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                    <span className="opacity-0 group-hover:opacity-100 transition">
                      Click to {isPinned ? "unpin" : "pin"}
                    </span>
                    <span className="text-slate-500 transition hover:text-accent-blue dark:text-gray-400 dark:hover:text-vibrant-300">Click for more detail</span>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-sky-100 bg-white/80 p-8 text-slate-700 dark:border-vibrant-800 dark:bg-black/40 dark:text-gray-300">
            No skills match your search. Try a different keyword.
          </div>
        ) : null}
      </div>
    </section>
  );
}
