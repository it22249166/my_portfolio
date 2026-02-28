"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

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
      <div className="text-3xl font-bold text-white">
        {display}
        {suffix ?? ""}
      </div>
      <div className="mt-2 text-white/70">{label}</div>
    </div>
  );
}

function TimelineDot() {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/40" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
    </span>
  );
}

export default function About() {
  const stats: Stat[] = useMemo(
    () => [
      { value: 3, suffix: "+", label: "Years Learning" },
      { value: 10, suffix: "+", label: "Projects Built" },
      { value: 15, suffix: "+", label: "Technologies" },
      { value: 100, suffix: "%", label: "Commitment" },
    ],
    []
  );

  const timeline: TimelineItem[] = useMemo(
    () => [
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
        title: "BSc (Hons) Software Engineering",
        org: "SLIIT",
        period: "2022 – 2026 (Expected)",
        points: [
          "Studying software engineering fundamentals, architecture, and testing.",
          "Hands-on work with React, Node.js, Spring Boot, and databases.",
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
    <section id="about" className="relative overflow-hidden bg-black py-24 px-6">
      {/* Background Gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/25 via-pink-500/20 to-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-500/20 to-emerald-500/25 blur-3xl" />
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Passionate Software Engineering undergraduate focused on building scalable systems,
            clean architectures, and impactful digital experiences.
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
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
                {/* Put your image in /public/profile.jpg */}
                <Image src="/malith.jpeg" alt="Malith Bandara" fill className="object-cover" />
              </div>
              <div>
                <div className="text-white font-semibold text-xl">Malith Bandara</div>
                <div className="text-white/70">Software Engineering Student</div>
              </div>
            </div>

            <p className="mt-6 text-white/75 leading-relaxed">
              I build clean, maintainable full-stack applications with modern technologies.
              I enjoy turning ideas into reliable products with great UI/UX and strong backend logic.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Put your CV in /public/Malith_Bandara_CV.pdf */}
              <a
                href="/Malith_Bandara_CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg hover:brightness-110 active:brightness-95"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10"
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
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/85"
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
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 shadow-2xl backdrop-blur relative">
              <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white">What I do</h3>
                <p className="mt-4 text-white/75 leading-relaxed">
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
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90"
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
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Experience Timeline</h3>
            <p className="mt-2 text-white/70">A quick overview of what I’ve been doing</p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
            {/* vertical line */}
            <div aria-hidden className="absolute left-6 top-10 bottom-10 w-px bg-white/10" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={`${item.title}-${item.period}`} className="relative pl-12">
                  <div className="absolute left-5 top-1.5">
                    <TimelineDot />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <div className="text-white font-semibold text-lg">{item.title}</div>
                      <div className="text-white/70">{item.org}</div>
                    </div>
                    <div className="text-white/60 text-sm md:text-base">{item.period}</div>
                  </div>

                  <ul className="mt-4 space-y-2 text-white/75">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
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