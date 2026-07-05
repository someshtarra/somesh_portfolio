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
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="glow-blur glow-blue float-orb w-[400px] h-[400px] top-1/4 left-1/4 opacity-20" />
      <div className="glow-blur glow-purple float-orb-slow w-[350px] h-[350px] bottom-1/4 right-1/4 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <GraduationCap className="w-3.5 h-3.5" />
            Education & Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Academic &{" "}
            <span className="text-gradient-blue">Career History</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)" }} />
        </div>

        <div className="max-w-3xl mx-auto text-left">
          {/* Vertical timeline line with gradient stroke */}
          <div className="relative ml-4 md:ml-6 space-y-12">
            <div className="absolute left-[9px] top-2 bottom-2 w-[2px] timeline-line pointer-events-none" />

            {/* Work Experience: SentinelGuard AI */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-10 group"
            >
              <span
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 border-2 transition-colors duration-500 z-10"
                style={{ borderColor: "#10b981", boxShadow: "0 0 10px rgba(16,185,129,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
              <div
                className="glass-card p-6 rounded-2xl group-hover:border-emerald-500/30 transition duration-300"
                style={{ borderLeft: "3px solid #10b981" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                      Data Science Intern
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/5 border border-emerald-400/15 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>Oct 2024 – Nov 2024</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-400 text-xs font-semibold mb-5">
                  <span className="text-emerald-300 font-bold uppercase tracking-wider">SentinelGuard AI</span>
                  <span className="hidden sm:inline text-slate-700">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Vellore (under VIT), India</span>
                  </div>
                </div>
                <ul className="space-y-2.5 pt-4 border-t border-white/5">
                  {[
                    "Engineered machine learning models that improved predictive accuracy by 15%, enhancing real-time decision-making capabilities.",
                    "Processed and analyzed 5M+ records using Python and SQL, extracting actionable insights that informed 3 strategic initiatives.",
                    "Automated data preprocessing and feature engineering pipelines, reducing manual workload by 25% and improving model training speed.",
                    "Designed and validated predictive models using RMSE and accuracy metrics, achieving up to 92% accuracy on test datasets.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-1.5 flex-shrink-0"></span>
                      {point}
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
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 border-2 transition-colors duration-500 z-10"
                style={{ borderColor: "#3b82f6", boxShadow: "0 0 10px rgba(59,130,246,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </span>
              <div
                className="glass-card p-6 rounded-2xl group-hover:border-blue-500/30 transition duration-300"
                style={{ borderLeft: "3px solid #3b82f6" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                    Master of Science (M.Sc.) in Data Science
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 bg-blue-400/5 border border-blue-400/15 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2023 – 2025</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-400 text-xs font-semibold mb-3">
                  <span className="text-slate-200 uppercase tracking-wider font-bold">Vellore Institute of Technology (VIT), Vellore</span>
                  <span className="hidden sm:inline text-slate-700">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mb-5 bg-yellow-500/5 border border-yellow-500/20 px-3 py-1 rounded-lg self-start inline-flex">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold text-yellow-400">CGPA: 8.60</span>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    Key Core Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {coursework.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></span>
                        <span className="text-xs text-slate-400 leading-normal font-normal">{course}</span>
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
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 border-2 transition-colors duration-500 z-10"
                style={{ borderColor: "#a855f7", boxShadow: "0 0 10px rgba(168,85,247,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              </span>
              <div
                className="glass-card p-6 rounded-2xl group-hover:border-purple-500/30 transition duration-300"
                style={{ borderLeft: "3px solid #a855f7" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                    Bachelor of Science – Mathematics, Physics & Computer Science
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-purple-400 bg-purple-400/5 border border-purple-400/15 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2019 – 2022</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-400 text-xs font-semibold mb-3">
                  <span className="text-slate-200 uppercase tracking-wider font-bold">Padmavathi Degree College, Narasannapeta</span>
                  <span className="hidden sm:inline text-slate-700">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-yellow-500/5 border border-yellow-500/20 px-3 py-1 rounded-lg self-start inline-flex">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold text-yellow-400">CGPA: 8.50</span>
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
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 border-2 transition-colors duration-500 z-10"
                style={{ borderColor: "#f59e0b", boxShadow: "0 0 10px rgba(245,158,11,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              </span>
              <div
                className="glass-card p-6 rounded-2xl group-hover:border-amber-500/30 transition duration-300"
                style={{ borderLeft: "3px solid #f59e0b" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                      Board of Intermediate Education
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-400/5 border border-amber-400/15 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2017 – 2019</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-400 text-xs font-semibold mb-3">
                  <span className="text-slate-200 uppercase tracking-wider font-bold">Santha Junior College, Narasannapeta</span>
                  <span className="hidden sm:inline text-slate-700">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2 bg-slate-900 border border-white/5 px-3 py-1 rounded-lg self-start inline-flex text-xs font-semibold text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400 mr-1" />
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
                className="absolute left-0 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 border-2 transition-colors duration-500 z-10"
                style={{ borderColor: "#14b8a6", boxShadow: "0 0 10px rgba(20,184,166,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              </span>
              <div
                className="glass-card p-6 rounded-2xl group-hover:border-teal-500/30 transition duration-300"
                style={{ borderLeft: "3px solid #14b8a6" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-400" />
                    <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                      Board of Secondary Education
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-teal-400 bg-teal-400/5 border border-teal-400/15 px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>2016 – 2017</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-400 text-xs font-semibold mb-3">
                  <span className="text-slate-200 uppercase tracking-wider font-bold">ZP High School, Peddagugram</span>
                  <span className="hidden sm:inline text-slate-700">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2 bg-slate-900 border border-white/5 px-3 py-1 rounded-lg self-start inline-flex text-xs font-semibold text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-400 mr-1" />
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
