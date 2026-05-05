"use client";

import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";

export default function CVSection() {
  // Put your CV in /public/Malith_Bandara_CV.pdf (or change this path)
  const cvPdf = "/Malith_Bandara_CV.pdf";

  return (
    <section id="cv" className="relative overflow-hidden bg-linear-to-b from-[#f8fcff] via-white to-[#eef8ff] px-6 py-24">
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
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
            <FiFileText />
            Academic Evidence
          </div>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Curriculum <span className="text-accent-blue">Vitae</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent-cyan to-accent-teal" />

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-600">
            My CV is included as part of the PPW portfolio requirements. You can download it or
            preview it below.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={cvPdf}
            download
            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-accent-cyan via-accent-teal to-accent-blue px-6 py-3 font-semibold text-white transition hover:brightness-110 active:brightness-95"
          >
            <FiDownload />
            Download CV
          </a>

          <a
            href={cvPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-sky-100 bg-white/82 px-6 py-3 font-semibold text-slate-700 transition hover:border-accent-cyan hover:bg-sky-50"
          >
            <FiExternalLink />
            Open in new tab
          </a>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-[30px] border border-sky-100 bg-white/84 shadow-premium backdrop-blur"
        >
          <div className="flex items-center justify-between border-b border-sky-100 px-5 py-4">
            <div className="font-semibold text-slate-900">CV Preview</div>
            <div className="text-sm text-slate-500">PDF embedded (academic evidence)</div>
          </div>

          {/* PDF iframe */}
          <div className="h-[75vh] w-full bg-white">
            <iframe
              src={cvPdf}
              className="w-full h-full"
              title="Malith Bandara CV"
            />
          </div>
        </motion.div>

        {/* Note for marking */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Note: This section is shown only in Academic Mode to satisfy PPW marking criteria.
        </p>
      </div>
    </section>
  );
}
