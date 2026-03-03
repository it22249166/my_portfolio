"use client";

import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";

export default function CVSection() {
  // Put your CV in /public/Malith_Bandara_CV.pdf (or change this path)
  const cvPdf = "/Malith_Bandara_CV.pdf";

  return (
    <section id="cv" className="relative overflow-hidden bg-black py-24 px-6">
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-2 text-blue-200">
            <FiFileText />
            Academic Evidence
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
            Curriculum <span className="text-blue-500">Vitae</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />

          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed">
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
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white hover:brightness-110 active:brightness-95 transition"
          >
            <FiDownload />
            Download CV
          </a>

          <a
            href={cvPdf}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
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
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="text-white font-semibold">CV Preview</div>
            <div className="text-white/60 text-sm">PDF embedded (academic evidence)</div>
          </div>

          {/* PDF iframe */}
          <div className="w-full h-[75vh] bg-black">
            <iframe
              src={cvPdf}
              className="w-full h-full"
              title="Malith Bandara CV"
            />
          </div>
        </motion.div>

        {/* Note for marking */}
        <p className="mt-8 text-xs text-white/50 text-center">
          Note: This section is shown only in Academic Mode to satisfy PPW marking criteria.
        </p>
      </div>
    </section>
  );
}