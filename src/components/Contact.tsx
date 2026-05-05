"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

function Bullet({ className }: IconProps) {
  return <span className={`inline-block h-2 w-2 rounded-full ${className}`} />;
}

export default function Contact() {
  const qrLink = "https://www.linkedin.com/in/malith-bandara-8681aa301";

  return (
    <section id="contact" className="relative bg-linear-to-b from-[#fffdf8] via-white to-[#f1f7fd] dark:bg-dark-800">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl dark:bg-vibrant-500/15" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-200/35 blur-3xl dark:bg-vibrant-500/15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Title */}
        <div className="text-center">
          <div className="section-label mx-auto mb-5">Start a conversation</div>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">Get In Touch</h2>
          <p className="mt-2 text-slate-600 dark:text-gray-400">Let&apos;s discuss opportunities</p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent-cyan via-accent-teal to-accent-coral" />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-stretch">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="surface-panel rounded-[2rem] p-8 dark:border-vibrant-700 dark:bg-dark-800/50"
          >
            <h3 className="section-title text-xl font-semibold dark:text-white">Contact Information</h3>

            <ul className="mt-6 space-y-4 text-slate-700 dark:text-gray-300">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50/70 dark:border-dark-700 dark:bg-dark-900/30">
                  <PhoneIcon className="h-5 w-5 text-accent-blue dark:text-vibrant-300" />
                </span>
                <span className="font-medium">+94 74 102 1815</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50/70 dark:border-dark-700 dark:bg-dark-900/30">
                  <MailIcon className="h-5 w-5 text-accent-blue dark:text-vibrant-300" />
                </span>
                <a
                  href="mailto:malithb072@gmail.com"
                  className="font-medium transition hover:text-accent-blue"
                >
                  malithb072@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50/70 dark:border-dark-700 dark:bg-dark-900/30">
                  <PinIcon className="h-5 w-5 text-accent-blue dark:text-vibrant-300" />
                </span>
                <span className="font-medium">Ratnapura, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50/70 dark:border-dark-700 dark:bg-dark-900/30">
                  <LinkedInIcon className="h-5 w-5 text-accent-blue dark:text-vibrant-300" />
                </span>
                <a
                  href={qrLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium transition hover:text-accent-blue"
                >
                  LinkedIn Profile
                </a>

              </li>
              <li className="pt-2">
                <Image
                  src={`/api/qr?text=${encodeURIComponent(qrLink)}`}
                  alt="Profile QR"
                  width={160}
                  height={160}
                  className="rounded-2xl border border-sky-100 bg-white p-2 shadow-[0_14px_28px_rgba(15,23,42,0.06)] dark:border-vibrant-700"
                />
              </li>
            </ul>

            <div className="mt-10">
              <h4 className="section-title text-lg font-semibold dark:text-white">Currently Available For</h4>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Internship opportunities",
                  "Full-stack projects",
                  "Freelance web development",
                  "Open source contributions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/78 px-4 py-3 font-medium text-slate-700 dark:border-vibrant-700 dark:bg-dark-900/30 dark:text-gray-300"
                  >
                    <Bullet className="bg-accent-coral" />
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
            className="soft-panel relative rounded-[2rem] p-10 backdrop-blur-sm dark:border-vibrant-700 dark:from-slate-800/60 dark:to-dark-900/40"
          >
            <div aria-hidden className="absolute inset-0 rounded-[2rem] bg-linear-to-tr from-sky-200/15 via-transparent to-orange-200/15 dark:from-vibrant-500/10 dark:via-vibrant-500/10 dark:to-vibrant-500/10" />
            <div className="relative">
              <h3 className="section-title text-2xl font-semibold dark:text-white">Let&apos;s Connect</h3>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-gray-300">
                I&apos;m always interested in new opportunities and exciting
                projects. If you have something in mind—or just want to say hi—
                feel free to reach out.
              </p>

              <div className="mt-10 space-y-4">
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfydFkJv8imGUYJBYfou3a8_Ksyv17ItIYqON4bmx1HaLcXIw/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  className="space-y-6"
                >
                  <input
                    type="text"
                    name="entry.NAME_ID"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-2xl border border-sky-100 bg-white/88 px-4 py-3 text-slate-800 outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-vibrant-400/20 dark:border-vibrant-700 dark:bg-black/40 dark:text-white dark:placeholder:text-slate-500"
                  />

                  <input
                    type="email"
                    name="entry.EMAIL_ID"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-2xl border border-sky-100 bg-white/88 px-4 py-3 text-slate-800 outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-vibrant-400/20 dark:border-vibrant-700 dark:bg-black/40 dark:text-white dark:placeholder:text-slate-500"
                  />

                  <textarea
                    name="entry.MESSAGE_ID"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-sky-100 bg-white/88 px-4 py-3 text-slate-800 outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-vibrant-400/20 dark:border-vibrant-700 dark:bg-black/40 dark:text-white dark:placeholder:text-slate-500"
                  />

                  <button
                    type="submit"
                    className="primary-button !flex w-full"
                  >
                    Send Message
                  </button>

                  <iframe name="hidden_iframe" style={{ display: "none" }} />
                </form>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/94770183365?text=Hi%20Malith%20I%20saw%20your%20portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    WhatsApp Chat
                  </a>

                  <a
                    href="mailto:malithb072@gmail.com?subject=Portfolio%20Inquiry"
                    className="primary-button"
                  >
                    Send Email
                  </a>
                </div>

                <a
                  href="https://www.linkedin.com/in/malith-bandara-8681aa301"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button !flex w-full"
                >
                  Connect on LinkedIn
                </a>

                <div className="pt-3 text-center text-sm font-medium text-slate-500 dark:text-gray-400">
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
