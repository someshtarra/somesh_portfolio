"use client";

import { Mail, ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern animate-grid"
    >
      {/* Multi-layer Background Glow Orbs */}
      <div className="glow-blur glow-blue float-orb w-[600px] h-[600px] top-0 left-0 -translate-x-1/3 -translate-y-1/4 opacity-70" />
      <div className="glow-blur glow-purple float-orb-slow w-[500px] h-[500px] bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-60" />
      <div className="glow-blur glow-cyan w-[300px] h-[300px] top-1/2 right-1/3 opacity-40" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bio & Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/8 to-purple-500/5 text-blue-300 text-[11px] font-semibold tracking-widest uppercase font-mono shadow-inner shadow-blue-500/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              Open to Cloud, DevOps & Data Opportunities
            </motion.div>

            {/* Main Headings */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Hi, I&apos;m{" "}
                <span className="text-gradient-blue">
                  Someswararao{" "}
                </span>
                <span className="text-gradient-blue">
                  Tarra
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl font-medium tracking-wide text-slate-400 flex flex-wrap gap-2 items-center"
              >
                <span className="text-slate-300">Cloud & DevOps Engineer</span>
                <span className="text-blue-500/60 font-light">|</span>
                <span className="text-slate-300">Data Science Professional</span>
              </motion.h2>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              I build cloud infrastructure, automate workflows, troubleshoot Linux systems, and develop data-driven solutions using AWS, DevOps tools, Python, and machine learning.
            </motion.p>

            {/* Action Buttons (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl overflow-hidden text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                  boxShadow: "0 0 30px rgba(59,130,246,0.25), 0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10">View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>

              {/* Resume CTA */}
              <a
                href="https://drive.google.com/file/d/1eg58aLQpJIHPvI5hxmGzMMp-T8uq7Nmg/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-blue-500/25 hover:border-blue-400/50 bg-blue-500/8 hover:bg-blue-500/15 text-slate-200 hover:text-white transition-all duration-300"
                style={{ boxShadow: "0 0 0 1px rgba(59,130,246,0.06), 0 4px 16px rgba(0,0,0,0.2)" }}
              >
                <FileText className="w-4 h-4 text-blue-400" />
                View Resume
              </a>

              {/* Contact CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-white/8 hover:border-white/15 bg-white/4 hover:bg-white/7 text-slate-400 hover:text-slate-200 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-5 pt-5 border-t border-white/6 w-full"
            >
              <span className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold font-mono">
                Connect
              </span>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/someshtarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-xl bg-slate-900/60 border border-white/6 hover:border-blue-500/40 hover:bg-blue-500/8 text-slate-500 hover:text-blue-400 transition-all duration-300"
                  aria-label="GitHub Profile"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/someswararao-tarra-575b63203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-xl bg-slate-900/60 border border-white/6 hover:border-blue-500/40 hover:bg-blue-500/8 text-slate-500 hover:text-blue-400 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:someswararaotarra@gmail.com"
                  className="group p-2.5 rounded-xl bg-slate-900/60 border border-white/6 hover:border-blue-500/40 hover:bg-blue-500/8 text-slate-500 hover:text-blue-400 transition-all duration-300"
                  aria-label="Email Me"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex justify-center items-center relative"
          >
            {/* Ambient glow behind image */}
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-blue-500/15 to-purple-600/12 rounded-full blur-3xl -z-10 float-orb" />

            {/* Outer animated gradient ring */}
            <div className="relative w-full max-w-[340px] group">
              {/* Animated border ring */}
              <div
                className="absolute -inset-[2px] rounded-[28px] opacity-50 group-hover:opacity-90 transition duration-700 blur-[1px]"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #a855f7, #22d3ee, #3b82f6)",
                  backgroundSize: "300% 300%",
                  animation: "borderRotate 5s ease infinite",
                }}
              />

              {/* Main Image Container */}
              <div className="relative aspect-[3/4.2] rounded-[26px] overflow-hidden border border-white/8 bg-slate-950/60"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)" }}>

                {/* Image Frame */}
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile-front.jpg"
                    alt="Someswararao Tarra Portrait"
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Gradient overlay — bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent" />

                {/* Decorative corner grid overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-[26px]"
                  style={{
                    background: "radial-gradient(circle at top left, rgba(59,130,246,0.06) 0%, transparent 60%)",
                  }}
                />

                {/* Bottom status tag */}
                <div className="absolute bottom-4 left-4 right-4 py-2.5 px-3.5 rounded-2xl flex items-center justify-between text-xs text-slate-300 font-mono"
                  style={{
                    background: "rgba(5, 10, 22, 0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}>
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-slate-300">Active Now</span>
                  </span>
                  <span className="text-slate-500">Hyderabad, IN</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
