"use client";

import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiClock } from "react-icons/fi";

export default function CareerPlan() {
  return (
    <section id="career-plan" className="relative overflow-hidden bg-linear-to-b from-white via-[#f7fcff] to-[#eef8ff] px-6 py-24">
      {/* background glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Career Development <span className="text-accent-blue">Plan</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent-cyan to-accent-teal" />
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-600">
            A structured roadmap outlining my short-term, mid-term, and long-term
            goals as a Software Engineering undergraduate aiming to become a
            highly competent full-stack engineer.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Short Term */}
          <div className="rounded-[28px] border border-sky-100 bg-white/82 p-8 shadow-[0_18px_36px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="mb-4 flex items-center gap-3 text-accent-blue">
              <FiClock />
              <h3 className="font-semibold text-lg">Short-Term (1–2 Years)</h3>
            </div>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Graduate with strong academic performance</li>
              <li>✔ Secure a full-time Software Engineering role</li>
              <li>✔ Strengthen testing & system design fundamentals</li>
              <li>✔ Deploy production-level full-stack applications</li>
              <li>✔ Earn at least one cloud or testing certification</li>
            </ul>
          </div>

          {/* Mid Term */}
          <div className="rounded-[28px] border border-sky-100 bg-white/82 p-8 shadow-[0_18px_36px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="mb-4 flex items-center gap-3 text-accent-teal">
              <FiTrendingUp />
              <h3 className="font-semibold text-lg">Mid-Term (3–5 Years)</h3>
            </div>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Become a strong full-stack engineer</li>
              <li>✔ Lead small technical features or modules</li>
              <li>✔ Gain expertise in scalable system architecture</li>
              <li>✔ Contribute to open-source or community projects</li>
              <li>✔ Mentor junior developers</li>
            </ul>
          </div>

          {/* Long Term */}
          <div className="rounded-[28px] border border-sky-100 bg-white/82 p-8 shadow-[0_18px_36px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="mb-4 flex items-center gap-3 text-accent-coral">
              <FiTarget />
              <h3 className="font-semibold text-lg">Long-Term (5+ Years)</h3>
            </div>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Become a Senior Software Engineer</li>
              <li>✔ Architect scalable distributed systems</li>
              <li>✔ Build impactful real-world digital products</li>
              <li>✔ Continuously upgrade skills in emerging tech</li>
              <li>✔ Possibly start or scale a tech venture</li>
            </ul>
          </div>
        </div>

        {/* Skill Gap Section */}
        <div className="mt-16 rounded-[30px] border border-sky-100 bg-linear-to-b from-white via-sky-50/45 to-orange-50/30 p-10 shadow-premium backdrop-blur">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Skill Gap Analysis & Action Plan
          </h3>

          <div className="grid gap-8 text-slate-600 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold text-slate-900">
                Areas to Improve
              </h4>
              <ul className="space-y-2">
                <li>• Advanced system design principles</li>
                <li>• Automated testing & CI/CD pipelines</li>
                <li>• Cloud deployment (AWS / Azure)</li>
                <li>• Performance optimization & monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-slate-900">
                Action Strategy
              </h4>
              <ul className="space-y-2">
                <li>• Complete structured online certifications</li>
                <li>• Build and deploy scalable projects</li>
                <li>• Study system design case studies weekly</li>
                <li>• Seek mentorship and continuous feedback</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-slate-500">
            This development plan ensures continuous growth through structured
            learning, practical application, and measurable progress tracking.
            It aligns my academic journey with real industry expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
