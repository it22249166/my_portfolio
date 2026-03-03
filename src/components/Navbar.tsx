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
  const [dark, setDark] = useState(true);

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 dark:bg-black/60 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo size={44} withText />

        <div className="flex items-center gap-4">
          {/* Navigation Links */}
          <div className="space-x-6 text-gray-700 dark:text-gray-300 hidden md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue-500 transition">
                {l.label}
              </a>
            ))}
          </div>

          {/* Mode Switch (Premium) */}
          <button
            onClick={toggle}
            className={[
              "hidden sm:inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition",
              isAcademic
                ? "border-blue-500/40 bg-blue-600/10 text-blue-600 dark:text-blue-300 hover:bg-blue-600/15"
                : "border-slate-300/60 dark:border-slate-700 bg-white/60 dark:bg-black/30 text-slate-800 dark:text-slate-200 hover:border-blue-500/50",
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
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Academic badge (optional but looks premium) */}
      {isAcademic ? (
        <div className="w-full border-t border-blue-500/20 bg-blue-600/10 text-blue-700 dark:text-blue-200 text-xs">
          <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Academic Portfolio Mode 
          </div>
        </div>
      ) : null}
    </nav>
  );
}