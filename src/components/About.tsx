"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePortfolioMode } from "@/context/PortfolioModeContext";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

type TimelineItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

function StatCounter({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const durationMs = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-accent-cyan">
        {display}
        {suffix ?? ""}
      </div>
      <div className="mt-2 text-slate-600 font-medium">{label}</div>
    </div>
  );
}

function TimelineDot() {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vibrant-400/40" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-vibrant-500" />
    </span>
  );
}

export default function About() {
  const { mode } = usePortfolioMode();
  const isAcademic = mode === "academic";

  const certifications: TimelineItem[] = useMemo(
    () => [
      {
        title: "Full Stack React E-Commerce Project",
        org: "GreatStack",
        period: "2025",
        points: [
          "Built a complete e-commerce application using React.",
          "Implemented product listing, cart logic, and UI structure.",
        ],
      },
      {
        title: "Python Programming",
        org: "University of Moratuwa",
        period: "2024",
        points: [
          "Covered Python fundamentals, OOP, and problem solving.",
          "Hands-on exercises and real coding practice.",
        ],
      },
      {
        title: "Front-End Software Engineering Job Simulation",
        org: "Skyscanner (Forage)",
        period: "2024",
        points: [
          "Built UI components using modern frontend tools.",
          "Worked with real-world front-end engineering tasks.",
        ],
      },
      {
        title: "Explore Digital Technology Job Simulation",
        org: "GE Aerospace (Forage)",
        period: "2024",
        points: [
          "Translated business requirements into technical specifications.",
          "Worked on product-oriented digital solutions.",
        ],
      },
      {
        title: "Software Engineering Job Simulation",
        org: "New York Jobs CEO Council (Forage)",
        period: "2024",
        points: [
          "Solved software engineering tasks in a simulated environment.",
          "Applied debugging and system design thinking.",
        ],
      },
      {
        title: "Cloud Platform Job Simulation",
        org: "Verizon (Forage)",
        period: "2024",
        points: [
          "Worked with cloud-native principles and resiliency concepts.",
          "Tested redundancy and least-privilege access.",
        ],
      },
      {
        title: "Software Engineering Simulation",
        org: "Goldman Sachs (Forage)",
        period: "2024",
        points: [
          "Analyzed IT security practices and password hashing.",
          "Proposed improvements for stronger authentication systems.",
        ],
      },
    ],
    []
  );
  const stats: Stat[] = useMemo(
    () => [
      { value: 4, suffix: "+", label: "Years Learning" },
      { value: 15, suffix: "+", label: "Projects Built" },
      { value: 25, suffix: "+", label: "Technologies" },
      { value: 100, suffix: "%", label: "Commitment" },
    ],
    []
  );

  const timeline: TimelineItem[] = useMemo(
    () => [
      {
        title: "BSc (Hons) Software Engineering",
        org: "SLIIT",
        period: "2022 – 2026 (Expected)",
        points: [
          "Studying software engineering fundamentals, architecture, and testing.",
          "Hands-on work with React, Node.js, Spring Boot, and databases.",
        ],
      },
      {
        title: "Software Engineering Intern",
        org: "Defynbest (Pvt) Ltd",
        period: "2025-2026",
        points: [
          "Building and maintaining web applications using React and Node.js.",
          "Collaborating on feature development and code reviews.",
        ],
      },
      {
        title: "IT Support Engineer",
        org: "Penguins Gen Service",
        period: "2024",
        points: [
          "Provided technical support and troubleshooting for clients.",
          "Managed IT infrastructure and resolved hardware/software issues.",
        ],
      },
      {
        title: "Digital Technology Intern",
        org: "GE Aerospace",
        period: "2024 – Present",
        points: [
          "Built UI components and small web features using modern frontend tools.",
          "Translated business requirements into technical requirements as a product owner.",
          "Worked with best practices: testing, performance, and integration checks.",
        ],
      },

      {
        title: "Front-End Software Engineering Intern",
        org: "Skyscanner (Forage)",
        period: "2024",
        points: [
          "Built UI components using modern frontend tools.",
          "Worked with real-world front-end engineering tasks.",
        ],
      },
      {
        title: "Software Engineering job simulation",
        org: "Goldman Sachs",
        period: "2024",
        points: [
          "Analyzed IT security practices and password hashing.",
          "Proposed improvements for stronger authentication systems.",
        ],
      },
      {
        title: "Cloud Platform Job Simulation",
        org: "Verizone",
        period: "2024",
        points: [
          "Worked with cloud-native principles and resiliency concepts.",
          "Tested redundancy and least-privilege access.",

        ],
      },

      {
        title: "Projects & Practice",
        org: "Personal / Academic",
        period: "Ongoing",
        points: [
          "Built projects like HostalNet (hostel booking) and Memoire (note-taking).",
          "Focused on clean UI/UX, scalable structure, and real-world business logic.",
        ],
      },
    ],
    []

  );

  return (
    <section id="about" className="relative overflow-hidden bg-linear-to-b from-[#f8fbff] via-[#fbfaf5] to-[#f1f7fd] px-6 py-24 dark:bg-linear-to-b dark:from-[#08131f] dark:via-[#0c1a2c] dark:to-[#10233a]">
      {/* Background Gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-linear-to-tr from-sky-200/30 via-white/20 to-amber-200/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-linear-to-tr from-teal-100/20 via-orange-100/15 to-sky-200/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-5">
            {isAcademic ? "Academic portfolio" : "Profile overview"}
          </div>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">
            {isAcademic ? "Academic Profile" : "Experience & Background"}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto leading-relaxed text-slate-600 md:text-lg">
            {isAcademic
              ? "A concise overview of my degree path, current learning priorities, academic evidence, and the software engineering strengths I am building."
              : "A quick look at how I work, what I build best, and the experience shaping my path as a full-stack engineer."}
          </p>
        </motion.div>

        {/* Top Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="surface-panel rounded-[2rem] p-8"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                {/* Put your image in /public/profile.jpg */}
                <Image src="/malith.jpeg" alt="Malith Bandara" fill className="object-cover" />
              </div>
              <div>
                <div className="section-title text-xl font-semibold">Malith Bandara</div>
                <div className="text-slate-600 font-medium">Software Engineering Undergraduate</div>
              </div>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed">
              I build clean, maintainable full-stack applications with modern technologies.
              I enjoy turning ideas into reliable products with great UI/UX and strong backend logic.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Put your CV in /public/Malith_Bandara_CV.pdf */}
              <a
                href="/Malith_Bandara_CV.pdf"
                download
                className="primary-button"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="secondary-button"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Quick highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "React / Next.js",
                "Node.js / APIs",
                "Spring Boot",
                "UI/UX Focus",
              ].map((tag) => (
                <div
                  key={tag}
                  className="soft-panel rounded-[1.25rem] px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: About + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="soft-panel relative rounded-[2rem] p-10">
              <div aria-hidden className="absolute inset-0 rounded-[2rem] bg-linear-to-tr from-white/30 via-transparent to-white/10" />
              <div className="relative">
                <h3 className="section-title text-2xl font-semibold">
                  {isAcademic ? "Current Academic Focus" : "What I build best"}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  I specialize in full-stack development using React/Next.js, Node.js, and databases.
                  I focus on clean architecture, performance, and building features that match real business needs.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {[
                    "Clean Architecture",
                    "REST API Development",
                    "Modern UI/UX Design",
                    "Performance Optimization",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="rounded-[1.25rem] border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Animated Stats */}
                <div className="mt-10 grid grid-cols-2 gap-8">
                  {stats.map((s) => (
                    <StatCounter key={s.label} {...s} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="section-title text-3xl font-semibold md:text-4xl">Experience Timeline</h3>
            <p className="mt-2 text-slate-600">A quick overview of what I have been doing</p>
          </div>

          <div className="surface-panel relative rounded-[2rem] p-8 md:p-10">
            {/* vertical line */}
            <div aria-hidden className="absolute left-6 top-10 bottom-10 w-px bg-vibrant-200" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={`${item.title}-${item.period}`} className="relative pl-12">
                  <div className="absolute left-5 top-1.5">
                    <TimelineDot />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</div>
                      <div className="font-medium text-slate-600 dark:text-slate-300">{item.org}</div>
                    </div>
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 md:text-base">{item.period}</div>
                  </div>

                  <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-vibrant-500 dark:bg-vibrant-500" aria-hidden />
                        <span className="font-light">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="section-title text-3xl font-semibold md:text-4xl">
              Licenses & Certifications
            </h3>
            <p className="mt-2 text-slate-600">
              Professional certifications and job simulations completed
            </p>
          </div>

          <div className="surface-panel relative rounded-[2rem] p-8 md:p-10">
            <div aria-hidden className="absolute left-6 top-10 bottom-10 w-px bg-vibrant-200" />

            <div className="space-y-10">
              {certifications.map((item) => (
                <div key={`${item.title}-${item.period}`} className="relative pl-12">
                  <div className="absolute left-5 top-1.5">
                    <TimelineDot />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </div>
                      <div className="text-slate-600 dark:text-slate-300">{item.org}</div>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 md:text-base">
                      {item.period}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-vibrant-500" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
