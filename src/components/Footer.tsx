type IconProps = { className?: string };

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
export default function Footer() {

  return (

    <footer className="border-t border-sky-100 bg-linear-to-b from-[#fffdf8] via-white to-[#eef8ff] text-slate-900 dark:border-vibrant-800 dark:from-dark-900 dark:to-dark-900 dark:text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center text-center">
          <h3 className="section-title text-3xl font-semibold">Malith Bandara</h3>
          <p className="mt-2 text-slate-600 dark:text-gray-300">
            Software Engineering Student | Full-Stack Developer
          </p>

          <div className="mt-6 flex items-center gap-6">
            <a
              href="mailto:malithb072@gmail.com"
              className="rounded-full border border-sky-100 bg-white/80 p-3 text-slate-500 transition hover:border-accent-cyan hover:text-accent-blue dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-vibrant-300"
              aria-label="Email"
            >
              <MailIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/malith-bandara-8681aa301"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-100 bg-white/80 p-3 text-slate-500 transition hover:border-accent-cyan hover:text-accent-blue dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/it22249166"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-100 bg-white/80 p-3 text-slate-500 transition hover:border-accent-cyan hover:text-accent-blue dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-10 h-px w-full bg-sky-100 dark:bg-slate-700" />

          <p className="mt-6 text-sm font-light text-slate-500 dark:text-gray-400">
            © {new Date().getFullYear()} Malith Bandara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
