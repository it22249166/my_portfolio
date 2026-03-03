"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiBookOpen, FiCheckCircle } from "react-icons/fi";

type JournalEntry = {
  week: string;
  title: string;
  focus: string;
  learned: string[];
  evidence: string[];
  reflection: string;
  nextSteps: string[];
};

export default function ReflectiveJournal() {
  const [active, setActive] = useState(0);

  const entries: JournalEntry[] = useMemo(
    () => [
      {
        week: "Week 1",
        title: "Starting PPW & building self-awareness",
        focus:
          "Understanding the purpose of PPW and identifying my strengths, gaps, and learning goals.",
        learned: [
          "How to evaluate myself using evidence (projects, coursework, feedback).",
          "Why planning matters: goals → skills → actions → outcomes.",
          "How a portfolio supports employability and professional identity.",
        ],
        evidence: [
          "Reviewed my existing projects (React, Node, MongoDB) and identified what to improve (testing, deployment, documentation).",
          "Outlined a personal brand direction for my portfolio (clean UI, premium style).",
        ],
        reflection:
          "I realized that being “good at coding” is not enough. PPW pushed me to think about how I communicate my value, how I structure my growth, and how I prove skills with artifacts. This helped me shift from a student mindset to a professional mindset.",
        nextSteps: [
          "Define measurable goals for the semester (e.g., deploy 2 projects with CI/CD).",
          "Start tracking progress weekly in a journal format.",
        ],
      },
      {
        week: "Week 2",
        title: "Portfolio structure & professional presentation",
        focus:
          "Designing a portfolio that is recruiter-friendly and aligned with a personal brand.",
        learned: [
          "How to structure a portfolio: About → Skills → Projects → Evidence → Contact.",
          "Why storytelling matters: problem → approach → results → impact.",
          "How micro-interactions (animation, UX) make the portfolio feel premium.",
        ],
        evidence: [
          "Implemented interactive sections (Skills filters, Projects spotlight, animated SVG logo).",
          "Created a separate Academic mode to keep the professional portfolio clean.",
        ],
        reflection:
          "This week made me understand that the portfolio is a product. Small details like clarity, navigation, and consistency of design can change how a recruiter perceives competence. I also learned how to separate audiences: recruiters want impact; lecturers want structured evidence.",
        nextSteps: [
          "Add clear project outcomes (performance, features, user stories).",
          "Create certificate and CV sections with proper evidence and dates.",
        ],
      },
      {
        week: "Week 3",
        title: "Career planning & building employability skills",
        focus:
          "Creating a Career Development Plan based on roles, required skills, and realistic milestones.",
        learned: [
          "How to map a target role (Software Engineer) to skills: frontend, backend, databases, testing, DevOps.",
          "How to identify skill gaps and turn them into weekly learning tasks.",
          "How to use certifications strategically (not just collecting, but proving skill improvement).",
        ],
        evidence: [
          "Drafted a career plan with short-term / mid-term / long-term goals.",
          "Identified improvement areas: test automation, system design basics, deployment & monitoring.",
        ],
        reflection:
          "PPW helped me stop thinking randomly about the future. I now plan with clear targets and actions. Instead of “I want a good job,” I define “I will become strong in full-stack development + testing + deployment” and create measurable steps. This approach reduces uncertainty and increases confidence.",
        nextSteps: [
          "Complete one certification focused on testing or cloud deployment.",
          "Add measurable project metrics (load time, API performance, Lighthouse score).",
        ],
      },
      {
        week: "Week 4",
        title: "Communication, professionalism & continuous improvement",
        focus:
          "Improving professional communication: email writing, clarity, documentation, and teamwork mindset.",
        learned: [
          "How to write formal emails and communicate issues clearly.",
          "How to document features and decisions (README, technical notes).",
          "How reflection helps continuous improvement: review → learn → adjust.",
        ],
        evidence: [
          "Improved portfolio wording to be concise and professional.",
          "Added structured sections for academic submission without harming the professional brand.",
        ],
        reflection:
          "The biggest change is how I present myself. PPW made me more intentional: I write clearly, I document work, and I think about outcomes. These skills matter in real teams just as much as programming skills.",
        nextSteps: [
          "Maintain a monthly reflection even after PPW ends.",
          "Seek feedback from mentors and iterate the portfolio continuously.",
        ],
      },
    ],
    []
  );

  const current = entries[active];

  return (
    <section id="reflective" className="relative overflow-hidden bg-black py-24 px-6">
      {/* background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-2 text-blue-200">
            <FiBookOpen />
            Academic Portfolio
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
            Reflective <span className="text-blue-500">Journal</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed">
            This journal summarizes what I learned during PPW, how I applied it to my portfolio and
            career thinking, and how I plan to continue improving as a software engineering undergraduate.
          </p>
        </motion.div>

        {/* layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* left: week selector */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <p className="text-white/70 text-sm mb-3">Select week</p>

              <div className="space-y-2">
                {entries.map((e, i) => {
                  const selected = i === active;
                  return (
                    <button
                      key={e.week}
                      onClick={() => setActive(i)}
                      className={[
                        "w-full text-left rounded-xl px-4 py-3 border transition",
                        selected
                          ? "border-blue-500/50 bg-blue-600/10 text-white"
                          : "border-white/10 bg-black/20 text-white/80 hover:border-blue-500/30",
                      ].join(" ")}
                      type="button"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold">{e.week}</div>
                          <div className="text-xs text-white/60 mt-0.5">{e.title}</div>
                        </div>
                        {selected ? <FiCheckCircle className="text-blue-400" /> : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* right: content */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur p-7 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="text-blue-300 text-sm font-semibold">{current.week}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{current.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">{current.focus}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/80 text-sm">
                  Mode: <span className="text-blue-300 font-semibold">Academic</span>
                </div>
              </div>

              {/* learned */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="text-white font-semibold mb-3">What I learned</h4>
                  <ul className="space-y-2 text-white/75">
                    {current.learned.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="text-white font-semibold mb-3">Evidence / Application</h4>
                  <ul className="space-y-2 text-white/75">
                    {current.evidence.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* reflection */}
              <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-600/10 p-5">
                <h4 className="text-white font-semibold mb-2">Reflection</h4>
                <p className="text-white/80 leading-relaxed">{current.reflection}</p>
              </div>

              {/* next steps */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <h4 className="text-white font-semibold mb-3">Next steps</h4>
                <ul className="space-y-2 text-white/75">
                  {current.nextSteps.map((x) => (
                    <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-xs text-white/50">
                Note: Content is presented in Academic Mode for PPW assessment requirements. Professional Mode
                keeps recruiter-focused sections only.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}