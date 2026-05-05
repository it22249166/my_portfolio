
"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

export default function Hero() {
  // Mouse-parallax values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the motion a bit
  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });

  // Convert mouse movement to subtle 3D tilt
  const rotateY = useTransform(xSpring, [-60, 60], [-10, 10]);
  const rotateX = useTransform(ySpring, [-60, 60], [10, -10]);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const dots = useMemo(
    () => [
      { className: "top-10 left-5 h-5 w-5 bg-amber-200", delay: 0.0 },
      { className: "top-16 right-8 h-3.5 w-3.5 bg-emerald-300/90", delay: 0.2 },
      { className: "bottom-32 left-2 h-4.5 w-4.5 bg-sky-300/70", delay: 0.35 },
      { className: "bottom-24 right-10 h-4 w-4 bg-rose-300/70", delay: 0.5 },
    ],
    []
  );
  const chips = useMemo(
    () => ["Interactive frontends", "Scalable APIs", "Thoughtful product design"],
    []
  );
  const stats = useMemo(
    () => [
      { value: "15+", label: "Projects shipped" },
      { value: "4+", label: "Years learning" },
      { value: "24h", label: "Typical response" },
    ],
    []
  );

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left; // 0..width
    const py = e.clientY - rect.top; // 0..height

    // Center the range around 0
    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <section className="paper-grid relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-[#fffdf8] via-[#fbf8f1] to-[#f4f8fc] dark:bg-linear-to-b dark:from-[#07111f] dark:via-[#0a1728] dark:to-[#10243e]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.88),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(20,184,166,0.1),transparent_20%),linear-gradient(135deg,rgba(249,115,22,0.04),transparent_42%,rgba(14,165,233,0.06)_78%)] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(20,184,166,0.12),transparent_20%),linear-gradient(135deg,rgba(15,23,42,0.16),transparent_42%,rgba(59,130,246,0.12)_78%)]"
        />
        {/* Ambient background blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-linear-to-tr from-amber-200/50 via-orange-200/30 to-transparent blur-3xl dark:from-cyan-400/18 dark:via-blue-500/12"
          animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-linear-to-tr from-sky-200/35 via-teal-200/20 to-transparent blur-3xl dark:from-teal-400/16 dark:via-sky-500/12"
          animate={{ x: [0, -26, 0], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-8 pt-28 md:grid-cols-[1.1fr_0.9fr] md:pt-32">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <div className="section-label mb-6">
              Software Engineer Portfolio
            </div>

            <h1 className="display-title mb-6 text-5xl font-semibold leading-[0.95] md:text-7xl">
              Building calm,
              <span className="relative mx-3 inline-block text-accent-blue dark:text-sky-300">
                useful
                <span className="absolute inset-x-0 bottom-1 -z-10 h-4 rounded-full bg-amber-200/80 dark:bg-sky-400/20" />
              </span>
              software experiences.
            </h1>

            <p className="mb-4 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
              I&apos;m Malith Bandara, a software engineering undergraduate focused on
              front-end polish, clean architecture, and reliable full-stack delivery.
            </p>
            <p className="mb-8 max-w-xl text-base text-slate-500 dark:text-slate-400 md:text-lg">
              Based in Ratnapura, building with React, Next.js, Node.js, Spring Boot, and a strong eye for product quality.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-3 md:justify-start">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200/80 bg-white/86 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/6 dark:text-slate-200 dark:shadow-[0_12px_24px_rgba(2,10,23,0.28)]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="primary-button"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="secondary-button"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="soft-panel rounded-[1.6rem] px-4 py-5 text-left">
                  <div className="section-title text-2xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: interactive photo */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[32rem] px-4 py-6 md:px-6"
            >
              {/* Glow ring */}
              <motion.div
                aria-hidden
                className="absolute inset-4 rounded-[3rem] bg-linear-to-tr from-sky-200/35 via-white/40 to-orange-200/35 blur-3xl"
                animate={{ opacity: [0.22, 0.38, 0.22] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(-40px)" }}
              />

              {/* Outer ring */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[3rem] border border-white/70 bg-white/15 backdrop-blur-[2px] dark:border-white/10 dark:bg-white/[0.03]"
                style={{ transform: "translateZ(-10px)" }}
              />

              {/* Floating dots */}
              {dots.map((d, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className={`absolute rounded-full ${d.className}`}
                  animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
                  style={{ transform: "translateZ(30px)" }}
                />
              ))}

              <div className="relative grid gap-4 md:gap-5">
                <motion.div
                  className="inline-flex w-max items-center gap-3 self-start rounded-full border border-white/85 bg-white/92 px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_18px_35px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0c1a2d]/88 dark:text-slate-200 dark:shadow-[0_18px_35px_rgba(0,0,0,0.32)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: "translateZ(46px)" }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_7px_rgba(52,211,153,0.14)]" />
                  Open to internships
                </motion.div>

                {/* Image frame */}
                <motion.div
                  className="relative mx-auto h-[25rem] w-full max-w-[21rem] overflow-hidden rounded-[2.75rem] border-[8px] border-white/90 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.16)] dark:border-[#11253d] dark:bg-[#0b1726] dark:shadow-[0_34px_85px_rgba(0,0,0,0.45)] md:h-[31rem] md:max-w-[23rem]"
                  style={{ transform: "translateZ(40px)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src="/malith.jpeg"
                    alt="Malith Bandara"
                    fill
                    priority
                    className="object-cover object-[62%_center]"
                  />

                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-slate-950/16 via-transparent to-white/18"
                  />

                  <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/70 bg-white/86 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-[#0c1a2d]/84">
                    <div className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                      Full-stack engineer
                    </div>
                    <div className="mt-1 section-title text-lg font-semibold text-slate-900 dark:text-white">
                      Malith Bandara
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <motion.div
                    className="rounded-[1.5rem] border border-white/85 bg-white/90 px-4 py-4 shadow-[0_18px_35px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0c1a2d]/88 dark:shadow-[0_18px_35px_rgba(0,0,0,0.32)]"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transform: "translateZ(48px)" }}
                  >
                    <div className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                      Primary stack
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      Next.js, React, Node.js
                    </div>
                  </motion.div>

                  <motion.div
                    className="rounded-[1.5rem] border border-white/85 bg-white/90 px-4 py-4 shadow-[0_18px_35px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0c1a2d]/88 dark:shadow-[0_18px_35px_rgba(0,0,0,0.32)]"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transform: "translateZ(44px)" }}
                  >
                    <div className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                      Based in
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      Ratnapura, Sri Lanka
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
