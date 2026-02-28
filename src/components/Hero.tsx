
"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

type IconProps = { className?: string };

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.5 5.5c0-1.1.9-2 2-2h2.1c.8 0 1.5.5 1.8 1.2l.9 2.2c.3.7.1 1.6-.5 2.1l-1.2 1c1.1 2 2.8 3.7 4.8 4.8l1-1.2c.5-.6 1.4-.8 2.1-.5l2.2.9c.7.3 1.2 1 1.2 1.8V19.5c0 1.1-.9 2-2 2h-1c-8.3 0-15-6.7-15-15v-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.5 7.5A2.5 2.5 0 0 1 7 5h10a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 17 19H7a2.5 2.5 0 0 1-2.5-2.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 8l5.1 4.1c.8.6 1.9.6 2.6 0L19.5 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.5a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.02h3.56V9H3.56v11.45Z" />
    </svg>
  );
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.64.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.1c-3.2.71-3.87-1.39-3.87-1.39-.53-1.37-1.29-1.73-1.29-1.73-1.06-.74.08-.73.08-.73 1.17.08 1.78 1.22 1.78 1.22 1.04 1.82 2.74 1.29 3.41.99.1-.77.41-1.29.74-1.59-2.56-.3-5.26-1.31-5.26-5.82 0-1.29.45-2.35 1.19-3.17-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.21.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.53 3.18-1.21 3.18-1.21.63 1.64.23 2.86.11 3.16.74.82 1.19 1.88 1.19 3.17 0 4.52-2.71 5.51-5.29 5.81.42.37.79 1.1.79 2.22v3.29c0 .31.21.68.8.57 4.56-1.53 7.85-5.85 7.85-10.95C23.25 5.64 18.27.5 12 .5Z" />
    </svg>
  );
}

function Bullet({ className }: IconProps) {
  return <span className={`inline-block h-2 w-2 rounded-full ${className}`} aria-hidden />;
}

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
    <>
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

      </>
  );
}