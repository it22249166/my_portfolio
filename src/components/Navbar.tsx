// "use client";

// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
// import Logo from "./Logo";
// import { usePortfolioMode } from "@/context/PortfolioModeContext";


// export default function Navbar() {
//   const { mode, toggle } = usePortfolioMode();
//   const [scrolled, setScrolled] = useState(false);
//   const [dark, setDark] = useState(true);

//   // Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Dark mode toggle
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//   }, [dark]);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white dark:bg-black shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Logo size={44} withText />


//         <div className="flex items-center gap-6">

//           {/* Navigation Links */}
//           <div className="space-x-6 text-gray-300 hidden md:flex">
//             <a href="#" className="hover:text-blue-500 transition">
//               Home
//             </a>
//             <a href="#about" className="hover:text-blue-500 transition">
//               About
//             </a>
//             <a href="#projects" className="hover:text-blue-500 transition">
//               Projects
//             </a>
//             <a href="#skills" className="hover:text-blue-500 transition">
//               Skills
//             </a>
//             <a href="#contact" className="hover:text-blue-500 transition">
//               Contact
//             </a>
//           </div>



//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import Logo from "./Logo";
import { usePortfolioMode } from "@/context/PortfolioModeContext";

export default function Navbar() {
  const { mode, toggle } = usePortfolioMode();
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  const isAcademic = mode === "academic";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = useMemo(() => {
    const base = [
      { href: "#", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Contact" },
    ];

    const academicExtra = [
      { href: "#reflective", label: "Journal" },
      { href: "#career-plan", label: "Career Plan" },
      { href: "#certificates", label: "Certificates" },
      { href: "#cv", label: "CV" },
    ];

    return isAcademic ? [...base, ...academicExtra] : base;
  }, [isAcademic]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${scrolled
          ? "border border-white/75 bg-white/82 shadow-[0_22px_60px_rgba(15,23,42,0.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-dark-900/90"
          : "border border-white/55 bg-white/66 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-dark-900/60"
          }`}
      >
        <Logo size={44} withText />

        <div className="flex items-center gap-3">
          {/* Navigation Links */}
          <div className="hidden items-center gap-1 rounded-full bg-white/58 px-2 py-1 text-slate-700 shadow-inner shadow-white/70 md:flex dark:bg-white/5 dark:text-gray-300">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-accent-blue hover:shadow-[0_10px_24px_rgba(14,165,233,0.12)] dark:hover:bg-white/10 dark:hover:text-vibrant-300"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-accent-cyan via-accent-teal to-accent-coral transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Mode Switch (Premium) */}
          <button
            onClick={toggle}
            className={[
              "hidden sm:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-sm",
              isAcademic
                ? "border-sky-200 bg-linear-to-r from-sky-50 via-white to-teal-50 text-sky-800 hover:border-sky-300 hover:from-sky-100 hover:to-teal-100 dark:border-vibrant-400/40 dark:from-dark-900/30 dark:to-dark-800/20 dark:text-vibrant-300"
                : "border-white/80 bg-white/72 text-slate-800 shadow-[0_10px_28px_rgba(15,23,42,0.06)] hover:border-vibrant-300 hover:bg-white dark:border-dark-700 dark:bg-dark-800/40 dark:text-gray-200 dark:hover:bg-dark-900/20",
            ].join(" ")}
            title="Switch portfolio mode"
          >
            {isAcademic ? <FiBookOpen /> : <FiBriefcase />}
            <span className="font-medium">
              {isAcademic ? "Academic" : "Professional"}
            </span>
            <span className="opacity-70">Mode</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border border-white/80 bg-white/72 p-2 text-lg text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-vibrant-300 hover:text-accent-blue hover:shadow-glow-sm dark:border-white/10 dark:bg-dark-800/50 dark:text-gray-300 dark:hover:text-vibrant-300"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {dark ? <FaSun className="text-amber-500" /> : <FaMoon className="text-slate-600" />}
          </button>
        </div>
      </div>

      {/* Academic badge (premium style) */}
      {isAcademic ? (
        <div className="w-full border-t border-sky-100/80 bg-linear-to-r from-sky-50/80 via-white to-teal-50/80 text-sky-800 text-xs font-medium dark:border-vibrant-500/20 dark:from-dark-900/20 dark:via-dark-900/10 dark:to-transparent dark:text-vibrant-300">
          <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-coral animate-pulse" />
            Academic Portfolio Mode
          </div>
        </div>
      ) : null}
    </nav>
  );
}
