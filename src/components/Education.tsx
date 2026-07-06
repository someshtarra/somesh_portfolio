"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, Briefcase, Star, Award } from "lucide-react";

const coursework = [
  "Machine Learning & Pattern Recognition",
  "Deep Learning & Neural Networks",
  "Time Series Analysis & Forecasting",
  "Statistical Methods & Hypothesis Testing",
  "Database Management Systems (SQL)",
  "Data Structures & Algorithm Fundamentals",
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#FCFBF9]">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 blur-2xl top-10 left-[-8%] -z-10 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-[5px] border border-white/20 shadow-md bottom-20 right-[4%] -z-10 pointer-events-none"
      />

      {/* Vertical Axis Timeline Grid SVG */}
      <svg className="absolute left-[15%] top-0 h-full w-[2px] -z-10 opacity-[0.035] pointer-events-none select-none hidden lg:block" viewBox="0 0 2 1000" preserveAspectRatio="none">
        <line x1="1" y1="0" x2="1" y2="1000" stroke="#78716c" strokeWidth="2" strokeDasharray="6 6" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <GraduationCap className="w-3.5 h-3.5" />
            Education & Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Academic &{" "}
            <span className="text-gradient-blue">Career History</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        <div className="max-w-3xl mx-auto text-left">
          {/* Vertical timeline line with gradient stroke */}
          <div className="relative ml-4 md:ml-6 space-y-12">
            <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#E23744] via-[#FF7E00] to-[#FFB000] pointer-events-none" />

            {/* Work Experience: SentinelGuard AI */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-10 group"
            >
              <span
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-[#E23744] transition-colors duration-500 z-10"
                style={{ boxShadow: "0 0 10px rgba(226,55,68,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E23744] animate-pulse"></span>
              </span>
              <div
                className="glass-card p-6 rounded-[24px] group-hover:border-[#E23744]/30 transition duration-300 bg-white shadow-sm hover:scale-[1.01] transition-transform"
                style={{ borderLeft: "3px solid #E23744" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#E23744]" />
                    <h3 className="text-lg font-black text-stone-900 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                      Data Science Intern
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#E23744] bg-[#FFF0F0] border border-[#E23744]/20 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>Oct 2024 – Nov 2024</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-stone-850 text-xs font-bold mb-4">
                  <span className="text-stone-950 uppercase tracking-wider font-extrabold">SentinelGuard AI</span>
                  <span className="hidden sm:inline text-stone-300">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-650" />
                    <span>VIT, Vellore (Internship)</span>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Developed and integrated a custom CNN model on SentinelGuard AI platforms, improving prediction accuracy by 15% across real-world testing environments.",
                    "Managed preprocessing and feature extraction on structured datasets containing 5M+ sensor events using Python, pandas, and SQL databases.",
                    "Collaborated in design pipelines to write automation test scripts validating local server processes and deployment containers.",
                  ].map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-stone-900 font-bold leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E23744]/65 mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* M.Sc. VIT */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              <span
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-[#FF7E00] transition-colors duration-500 z-10"
                style={{ boxShadow: "0 0 10px rgba(255,126,0,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7E00]"></span>
              </span>
              <div
                className="glass-card p-6 rounded-[24px] group-hover:border-[#FF7E00]/30 transition duration-300 bg-white shadow-sm hover:scale-[1.01] transition-transform"
                style={{ borderLeft: "3px solid #FF7E00" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <h3 className="text-lg font-black text-stone-900 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                    Master of Science (M.Sc.) in Data Science
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2023 – 2025</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-stone-850 text-xs font-bold mb-3">
                  <span className="text-stone-950 uppercase tracking-wider font-extrabold">Vellore Institute of Technology (VIT), Vellore</span>
                  <span className="hidden sm:inline text-stone-300">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-650" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mb-5 bg-yellow-500/5 border border-yellow-500/20 px-3 py-1 rounded-lg self-start inline-flex">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-yellow-600">CGPA: 8.60</span>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <h4 className="text-[10px] uppercase tracking-widest text-stone-700 font-extrabold mb-3 flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                    Key Core Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {coursework.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60"></span>
                        <span className="text-xs text-stone-900 leading-normal font-bold">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* B.Sc. Padmavathi */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-8 md:pl-10 group"
            >
              <span
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-purple-500 transition-colors duration-500 z-10"
                style={{ boxShadow: "0 0 10px rgba(168,85,247,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              </span>
              <div
                className="glass-card p-6 rounded-[24px] group-hover:border-purple-500/30 transition duration-300 bg-white shadow-sm hover:scale-[1.01] transition-transform"
                style={{ borderLeft: "3px solid #a855f7" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <h3 className="text-lg font-black text-stone-900 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                    Bachelor of Science – Mathematics, Physics & Computer Science
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-purple-600 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2019 – 2022</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-stone-850 text-xs font-bold mb-3">
                  <span className="text-stone-950 uppercase tracking-wider font-extrabold">Padmavathi Degree College, Narasannapeta</span>
                  <span className="hidden sm:inline text-stone-300">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-650" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-yellow-500/5 border border-yellow-500/20 px-3 py-1 rounded-lg self-start inline-flex">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-yellow-600">CGPA: 8.50</span>
                </div>
              </div>
            </motion.div>

            {/* Intermediate - Santha Junior College */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-8 md:pl-10 group"
            >
              <span
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-amber-500 transition-colors duration-500 z-10"
                style={{ boxShadow: "0 0 10px rgba(245,158,11,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              </span>
              <div
                className="glass-card p-6 rounded-[24px] group-hover:border-amber-500/30 transition duration-300 bg-white shadow-sm hover:scale-[1.01] transition-transform"
                style={{ borderLeft: "3px solid #f59e0b" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-555" />
                    <h3 className="text-lg font-black text-stone-900 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                      Board of Intermediate Education
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2017 – 2019</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-stone-850 text-xs font-bold mb-3">
                  <span className="text-stone-950 uppercase tracking-wider font-extrabold">Santha Junior College, Narasannapeta</span>
                  <span className="hidden sm:inline text-stone-300">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-650" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2 bg-stone-55 border border-stone-200/60 px-3 py-1 rounded-lg self-start inline-flex text-xs font-extrabold text-stone-900">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500 mr-1" />
                  <span>Andhra Pradesh Board</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Education - ZP High School */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative pl-8 md:pl-10 group"
            >
              <span
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-teal-500 transition-colors duration-500 z-10"
                style={{ borderColor: "#14b8a6", boxShadow: "0 0 10px rgba(20,184,166,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              </span>
              <div
                className="glass-card p-6 rounded-[24px] group-hover:border-teal-500/30 transition duration-300 bg-white shadow-sm hover:scale-[1.01] transition-transform"
                style={{ borderLeft: "3px solid #14b8a6" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-500" />
                    <h3 className="text-lg font-black text-stone-900 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                      Board of Secondary Education
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2016 – 2017</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-stone-850 text-xs font-bold mb-3">
                  <span className="text-stone-950 uppercase tracking-wider font-extrabold">ZP High School, Peddagugram</span>
                  <span className="hidden sm:inline text-stone-300">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-650" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2 bg-stone-55 border border-stone-200/60 px-3 py-1 rounded-lg self-start inline-flex text-xs font-extrabold text-stone-900">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-500 mr-1" />
                  <span>Andhra Pradesh Board</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
