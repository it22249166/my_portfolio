"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FiAward,
  FiExternalLink,
  FiX,
  FiSearch,
  FiDownload,
  FiFileText,
} from "react-icons/fi";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  type: "Technical" | "Soft Skill";
  skillImproved: string;
  proof: string;
  file: string; // <-- can be .jpg/.png OR .pdf (in /public)
  link?: string;
};

function isPdf(path: string) {
  return /\.pdf(\?.*)?$/i.test(path);
}

export default function Certificates() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<"All" | Cert["type"]>("All");
  const [open, setOpen] = useState<Cert | null>(null);

  const certs: Cert[] = useMemo(
    () => [
      {
        title: "Python for Beginners",
        issuer: "University of Moratuwa",
        date: "2024",
        type: "Technical",
        skillImproved: "Python fundamentals",
        proof:
          "Strengthened core Python syntax, data types, control flow, and problem solving.",
        file: "/certificates/pythonbeginners.pdf",
      },
      {
        title: "Python Programming",
        issuer: "University of Moratuwa",
        date: "2024",
        type: "Technical",
        skillImproved: "Python programming practice",
        proof: "Improved hands-on programming and writing cleaner, reusable code.",
        file: "/certificates/PythonProgramming.pdf",
      },
      {
        title: "GE Aerospace – Explore Digital Technology (Forage)",
        issuer: "Forage / GE Aerospace",
        date: "Dec 2024",
        type: "Technical",
        skillImproved: "Frontend + requirements translation",
        proof:
          "Built a Vue UI demo and drafted technical requirements aligned to business needs.",
        // ✅ put this PDF inside: public/certificates/GEaerospace.pdf
        file: "/certificates/GEaerospace.pdf"
        // link: "https://verify-link-if-you-have"
      },
      {
        title: "Skyscanner – Front-End Software Engineering (Forage)",
        issuer: "Forage / Skyscanner",
        date: "Dec 2024",
        type: "Technical",
        skillImproved: "React UI development",
        proof:
          "Built a travel date picker using Backpack components and automated tests.",
        file: "/certificates/skyscanner.pdf", // or .jpg
      },
      {
        title: "Goldman Sachs – Governance Analyst (Forage)",
        issuer: "Forage / Goldman Sachs",
        date: "Dec 2024",
        type: "Technical",
        skillImproved: "Security awareness (password hashing)",
        proof:
          "Identified weak hashing, tested using Hashcat, and proposed security uplifts.",
        file: "/certificates/goldsmansachs.pdf"
      },
      {
        title: "Verizon – Cloud VPN Simulation (Forage)",
        issuer: "Forage / Verizon",
        date: "Dec 2024",
        type: "Technical",
        skillImproved: "Cloud-native traits & security",
        proof:
          "Tested VPN traits (redundancy, resiliency, least privilege) and presented findings.",
        file: "/certificates/verizon.pdf",
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certs.filter((c) => {
      const matchesType = activeType === "All" ? true : c.type === activeType;
      const matchesQuery = !q
        ? true
        : `${c.title} ${c.issuer} ${c.skillImproved} ${c.proof} ${c.type}`
            .toLowerCase()
            .includes(q);
      return matchesType && matchesQuery;
    });
  }, [certs, query, activeType]);

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-linear-to-b from-white via-[#f7fcff] to-[#eef8ff] px-6 py-24"
    >
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-accent-blue shadow-[0_12px_26px_rgba(14,165,233,0.08)]">
            <FiAward />
            Certifications
          </div>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Certificates <span className="text-accent-blue">& Evidence</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent-cyan to-accent-teal" />

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-600">
            Certificates obtained within the last year (technical/soft skills),
            showing evidence of continuous learning and skill improvement.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          {/* search */}
          <div className="w-full md:w-[420px]">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search certificates (e.g., Python, Forage, Security)..."
                className="w-full rounded-2xl border border-sky-100 bg-white/88 py-3 pl-11 pr-10 text-slate-800 shadow-[0_14px_30px_rgba(15,23,42,0.06)] outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/15"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  aria-label="Clear search"
                  type="button"
                >
                  ✕
                </button>
              ) : null}
            </div>
          </div>

          {/* type pills */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Technical", "Soft Skill"] as const).map((t) => {
              const active = t === activeType;
              return (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  type="button"
                  className={[
                    "rounded-full px-4 py-2 text-sm border transition",
                    active
                      ? "border-accent-cyan bg-sky-50 text-accent-blue shadow-[0_12px_22px_rgba(14,165,233,0.12)]"
                      : "border-sky-100 bg-white/82 text-slate-700 hover:border-accent-cyan hover:text-accent-blue",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, idx) => {
            const pdf = isPdf(c.file);

            return (
              <motion.button
                key={c.title}
                type="button"
                onClick={() => setOpen(c)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.2) }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[28px] border border-sky-100 bg-white/84 text-left shadow-[0_18px_36px_rgba(15,23,42,0.06)] transition hover:border-accent-cyan"
              >
                <div className="relative h-44 w-full">
                  {/* Thumbnail */}
                  {pdf ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-orange-50">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200 bg-white text-accent-blue shadow-[0_12px_22px_rgba(14,165,233,0.08)]">
                          <FiFileText size={22} />
                        </div>
                        <div className="font-semibold text-slate-900">PDF</div>
                        <div className="px-4 text-center text-xs text-slate-500">
                          Click to preview
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={c.file}
                      alt={`${c.title} certificate`}
                      fill
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white font-semibold leading-tight">
                      {c.title}
                    </div>
                    <div className="text-white/70 text-xs mt-1">
                      {c.issuer} • {c.date}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-accent-blue">
                      {c.type}
                    </span>
                    <span className="text-xs text-slate-400 transition group-hover:text-accent-blue">
                      Click to view
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    <span className="font-medium text-slate-900">
                      Skill improved:
                    </span>{" "}
                    {c.skillImproved}
                  </p>

                  <p className="mt-2 line-clamp-2 text-xs text-slate-500">
                    {c.proof}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-sky-100 bg-white/82 p-8 text-slate-600">
            No certificates match your search. Try another keyword.
          </div>
        ) : null}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-5 py-10 bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl overflow-hidden rounded-[30px] border border-sky-100 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-sky-100 px-5 py-4">
                <div>
                  <div className="font-semibold text-slate-900">{open.title}</div>
                  <div className="text-sm text-slate-500">
                    {open.issuer} • {open.date}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={open.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-sky-100 bg-white px-3 py-2 text-slate-700 transition hover:border-accent-cyan hover:text-accent-blue"
                  >
                    <FiExternalLink /> Open
                  </a>

                  <a
                    href={open.file}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-sky-100 bg-white px-3 py-2 text-slate-700 transition hover:border-accent-cyan hover:text-accent-blue"
                  >
                    <FiDownload /> Download
                  </a>

                  {open.link ? (
                    <a
                      href={open.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-sky-100 bg-white px-3 py-2 text-slate-700 transition hover:border-accent-cyan hover:text-accent-blue"
                    >
                      <FiExternalLink /> Verify
                    </a>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center justify-center rounded-xl border border-sky-100 bg-white px-3 py-2 text-slate-700 transition hover:border-accent-cyan"
                    aria-label="Close"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* LEFT: Preview */}
                <div className="min-h-[360px] bg-slate-50 md:min-h-[520px]">
                  {isPdf(open.file) ? (
                    <iframe
                      src={open.file}
                      className="w-full h-full"
                      title={`${open.title} certificate preview`}
                    />
                  ) : (
                    <div className="relative w-full h-full min-h-[360px] md:min-h-[520px]">
                      <Image
                        src={open.file}
                        alt={`${open.title} certificate preview`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  )}
                </div>

                {/* RIGHT: Details */}
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-accent-blue">
                      {open.type}
                    </span>
                    <span className="rounded-full border border-sky-100 bg-white px-3 py-1 text-xs text-slate-600">
                      {open.skillImproved}
                    </span>
                    <span className="rounded-full border border-sky-100 bg-white px-3 py-1 text-xs text-slate-600">
                      {isPdf(open.file) ? "PDF" : "Image"}
                    </span>
                  </div>

                  <h4 className="mt-4 font-semibold text-slate-900">
                    Evidence of skill improvement
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {open.proof}
                  </p>

                  <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/65 p-4">
                    <p className="text-xs text-slate-500">Use in PPW marking</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      <li>• Certificate preview included</li>
                      <li>• Issuer and date included</li>
                      <li>• Skill improved clearly stated</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
