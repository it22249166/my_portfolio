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
    <section id="reflective" className="relative overflow-hidden bg-linear-to-b from-[#f5fbff] via-white to-[#eef8ff] px-6 py-24">
      {/* background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-accent-blue shadow-[0_12px_26px_rgba(14,165,233,0.08)]">
            <FiBookOpen />
            Academic Portfolio
          </div>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Reflective <span className="text-accent-blue">Journal</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent-cyan to-accent-teal" />
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-600">
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
            <div className="rounded-[28px] border border-sky-100 bg-white/82 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.06)] backdrop-blur">
              <p className="mb-3 text-sm text-slate-500">Select week</p>

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
                          ? "border-sky-200 bg-sky-50 text-slate-900 shadow-[0_12px_24px_rgba(14,165,233,0.08)]"
                          : "border-sky-100 bg-white/72 text-slate-700 hover:border-sky-200 hover:bg-sky-50/70",
                      ].join(" ")}
                      type="button"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold">{e.week}</div>
                          <div className="mt-0.5 text-xs text-slate-500">{e.title}</div>
                        </div>
                        {selected ? <FiCheckCircle className="text-accent-blue" /> : null}
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
            <div className="rounded-[30px] border border-sky-100 bg-linear-to-b from-white via-sky-50/45 to-orange-50/30 p-7 shadow-premium backdrop-blur md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-accent-blue">{current.week}</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">{current.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{current.focus}</p>
                </div>

                <div className="rounded-xl border border-sky-100 bg-white/82 px-4 py-3 text-sm text-slate-600">
                  Mode: <span className="font-semibold text-accent-blue">Academic</span>
                </div>
              </div>

              {/* learned */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-sky-100 bg-white/78 p-5">
                  <h4 className="mb-3 font-semibold text-slate-900">What I learned</h4>
                  <ul className="space-y-2 text-slate-600">
                    {current.learned.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-blue" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-sky-100 bg-white/78 p-5">
                  <h4 className="mb-3 font-semibold text-slate-900">Evidence / Application</h4>
                  <ul className="space-y-2 text-slate-600">
                    {current.evidence.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-teal" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* reflection */}
              <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50/75 p-5">
                <h4 className="mb-2 font-semibold text-slate-900">Reflection</h4>
                <p className="leading-relaxed text-slate-700">{current.reflection}</p>
              </div>

              {/* next steps */}
              <div className="mt-6 rounded-2xl border border-sky-100 bg-white/78 p-5">
                <h4 className="mb-3 font-semibold text-slate-900">Next steps</h4>
                <ul className="space-y-2 text-slate-600">
                  {current.nextSteps.map((x) => (
                    <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-xs text-slate-500">
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
