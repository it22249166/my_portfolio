"use client";

import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiClock } from "react-icons/fi";

export default function CareerPlan() {
  return (
    <section id="career-plan" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* background glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Career Development <span className="text-blue-500">Plan</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-blue-500 rounded-full" />
          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed">
            A structured roadmap outlining my short-term, mid-term, and long-term
            goals as a Software Engineering undergraduate aiming to become a
            highly competent full-stack engineer.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Short Term */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <div className="flex items-center gap-3 text-blue-400 mb-4">
              <FiClock />
              <h3 className="font-semibold text-lg">Short-Term (1–2 Years)</h3>
            </div>

            <ul className="space-y-3 text-white/75">
              <li>✔ Graduate with strong academic performance</li>
              <li>✔ Secure a full-time Software Engineering role</li>
              <li>✔ Strengthen testing & system design fundamentals</li>
              <li>✔ Deploy production-level full-stack applications</li>
              <li>✔ Earn at least one cloud or testing certification</li>
            </ul>
          </div>

          {/* Mid Term */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <div className="flex items-center gap-3 text-indigo-400 mb-4">
              <FiTrendingUp />
              <h3 className="font-semibold text-lg">Mid-Term (3–5 Years)</h3>
            </div>

            <ul className="space-y-3 text-white/75">
              <li>✔ Become a strong full-stack engineer</li>
              <li>✔ Lead small technical features or modules</li>
              <li>✔ Gain expertise in scalable system architecture</li>
              <li>✔ Contribute to open-source or community projects</li>
              <li>✔ Mentor junior developers</li>
            </ul>
          </div>

          {/* Long Term */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <FiTarget />
              <h3 className="font-semibold text-lg">Long-Term (5+ Years)</h3>
            </div>

            <ul className="space-y-3 text-white/75">
              <li>✔ Become a Senior Software Engineer</li>
              <li>✔ Architect scalable distributed systems</li>
              <li>✔ Build impactful real-world digital products</li>
              <li>✔ Continuously upgrade skills in emerging tech</li>
              <li>✔ Possibly start or scale a tech venture</li>
            </ul>
          </div>
        </div>

        {/* Skill Gap Section */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur p-10">
          <h3 className="text-2xl font-bold text-white mb-6">
            Skill Gap Analysis & Action Plan
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-white/75">
            <div>
              <h4 className="font-semibold text-white mb-3">
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
              <h4 className="font-semibold text-white mb-3">
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

          <p className="mt-8 text-sm text-white/60 leading-relaxed">
            This development plan ensures continuous growth through structured
            learning, practical application, and measurable progress tracking.
            It aligns my academic journey with real industry expectations.
          </p>
        </div>
      </div>
    </section>
  );
}