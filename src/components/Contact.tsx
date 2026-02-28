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
    <section id="contact" className="bg-white text-slate-900">
      {/* GET IN TOUCH */}
      <section id="contact" className="bg-[#f6f8ff] text-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold">Get In Touch</h2>
            <p className="mt-2 text-slate-500">Let&apos;s discuss opportunities</p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 items-stretch">
            {/* Left column */}
            <div className="space-y-8">
              {/* Contact information */}
              <div>
                <h3 className="text-xl font-semibold">Contact Information</h3>

                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm border border-slate-200">
                      <PhoneIcon className="h-5 w-5 text-blue-600" />
                    </span>
                    <span>+94 102 1815</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm border border-slate-200">
                      <MailIcon className="h-5 w-5 text-blue-600" />
                    </span>
                    <span>malithb072@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm border border-slate-200">
                      <PinIcon className="h-5 w-5 text-blue-600" />
                    </span>
                    <span>Ratnapura, Sri Lanka</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm border border-slate-200">
                      <LinkedInIcon className="h-5 w-5 text-blue-600" />
                    </span>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-600 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>

              {/* Currently available for */}
              <div>
                <h3 className="text-xl font-semibold">Currently Available For</h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Internship opportunities",
                    "Full-stack development projects",
                    "Freelance web development",
                    "Open source contributions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg bg-white/70 px-4 py-3 border border-slate-200 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                    >
                      <Bullet className="bg-blue-600" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column card */}
            <div className="rounded-2xl bg-gradient-to-b from-[#eef2ff] to-white p-10 shadow-md border border-slate-200">
              <h3 className="text-2xl font-bold">Let&apos;s Connect</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                I&apos;m always interested in hearing about new opportunities and
                exciting projects. Whether you want to discuss a potential
                collaboration or just say hello, feel free to reach out!
              </p>

              <div className="mt-10 space-y-5">
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
                  className="block w-full rounded-xl border-2 border-blue-600 px-6 py-3.5 text-center font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    
    </section>
  );
}
