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
export default function Footer() {

  return (

      <footer className="bg-gradient-to-b from-[#0b1b3a] to-[#07142d] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl font-extrabold text-purple-300">Malith Bandara</h3>
            <p className="mt-2 text-white/70">
              Software Engineering Student | Full-Stack Developer
            </p>

            <div className="mt-6 flex items-center gap-6">
              <a
                href="mailto:malithb072@gmail.com"
                className="text-white/70 hover:text-white transition"
                aria-label="Email"
              >
                <MailIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
            </div>

            <div className="mt-10 h-px w-full bg-white/10" />

            <p className="mt-6 text-sm text-white/55">
              © {new Date().getFullYear()} Malith Bandara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}