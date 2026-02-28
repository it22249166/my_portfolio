"use client";

import { motion } from "framer-motion";

type IconProps = { className?: string };

function PhoneIcon({ className }: IconProps) {
  return (
    <span className={className}>📞</span>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <span className={className}>✉️</span>
  );
}

function PinIcon({ className }: IconProps) {
  return (
    <span className={className}>📍</span>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <span className={className}>🔗</span>
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
  return <span className={`inline-block h-2 w-2 rounded-full ${className}`} />;
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-900">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/25 via-pink-500/20 to-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-500/20 to-emerald-500/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Get In Touch</h2>
          <p className="mt-2 text-white/70">Let&apos;s discuss opportunities</p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-stretch">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>

            <ul className="mt-6 space-y-4 text-white/75">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <PhoneIcon className="h-5 w-5 text-blue-400" />
                </span>
                <span className="font-medium">+94 102 1815</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <MailIcon className="h-5 w-5 text-blue-400" />
                </span>
                <a
                  href="mailto:malithb072@gmail.com"
                  className="font-medium hover:text-white"
                >
                  malithb072@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <PinIcon className="h-5 w-5 text-blue-400" />
                </span>
                <span className="font-medium">Ratnapura, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <LinkedInIcon className="h-5 w-5 text-blue-400" />
                </span>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-white">Currently Available For</h4>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Internship opportunities",
                  "Full-stack projects",
                  "Freelance web development",
                  "Open source contributions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                  >
                    <Bullet />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 shadow-2xl backdrop-blur"
          >
            <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting
                projects. If you have something in mind—or just want to say hi—
                feel free to reach out.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="mailto:malithb072@gmail.com"
                  className="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-center font-semibold text-white shadow-lg hover:brightness-110 active:brightness-95"
                >
                  Send Email
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-center font-semibold text-white/90 hover:bg-white/10"
                >
                  Connect on LinkedIn
                </a>

                <div className="pt-3 text-center text-sm text-white/60">
                  Typical reply time: within 24 hours
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>

      
    
   
  );
}
