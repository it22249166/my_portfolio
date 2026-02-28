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
      { className: "top-4 right-10 w-3 h-3 bg-yellow-400", delay: 0.0 },
      { className: "top-16 -left-2 w-4 h-4 bg-emerald-300/80", delay: 0.2 },
      { className: "bottom-10 -right-1 w-5 h-5 bg-sky-300/70", delay: 0.35 },
      { className: "-bottom-2 left-14 w-3.5 h-3.5 bg-pink-300/70", delay: 0.5 },
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
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Ambient background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/40 via-pink-500/30 to-blue-500/35 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/35 via-cyan-500/25 to-emerald-500/30 blur-3xl"
        animate={{ x: [0, -26, 0], y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 py-0 md:py-0 grid gap-14 md:grid-cols-2 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hi, I&apos;m <span className="text-blue-500">Malith Bandara</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Software Engineering Undergraduate passionate about building scalable
            web applications using modern technologies.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-6 py-3 border border-gray-500 rounded-lg hover:border-blue-500 hover:text-blue-500 transition text-white"
            >
              Contact Me
            </motion.a>
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
            className="relative"
          >
            {/* Glow ring */}
            <motion.div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-30"
              animate={{ opacity: [0.22, 0.38, 0.22] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(-40px)" }}
            />

            {/* Outer ring */}
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full border border-white/10"
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

            {/* Image frame */}
            <motion.div
              className="relative h-72 w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl"
              style={{ transform: "translateZ(40px)" }}
              whileTap={{ scale: 0.98 }}
            >
              {/* IMPORTANT: put your image in /public/profile.jpg and keep this src */}
              <Image
                src="/malith.jpeg"
                alt="Malith Bandara"
                fill
                priority
                className="object-cover"
              />

              {/* Soft highlight overlay */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}