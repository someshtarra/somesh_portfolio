"use client";

import { Mail, ArrowRight, FileText, Cloud, Terminal, Cpu, GitBranch, Code } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FCFBF9]"
    >
      {/* Subtle decorative background shapes */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FFF0F0] -top-40 -right-40 opacity-50 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FFF7ED] -bottom-20 -left-32 opacity-40 pointer-events-none" />

      {/* Transparent Data Science Graph background decoration */}
      <svg className="absolute left-10 bottom-24 w-[480px] h-[280px] -z-10 opacity-[0.06] pointer-events-none select-none hidden md:block" viewBox="0 0 500 300" fill="none">
        {/* Horizontal Grid Lines */}
        <line x1="0" y1="50" x2="500" y2="50" stroke="#E23744" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="100" x2="500" y2="100" stroke="#E23744" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="150" x2="500" y2="150" stroke="#E23744" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="200" x2="500" y2="200" stroke="#E23744" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="250" x2="500" y2="250" stroke="#E23744" strokeWidth="1" strokeDasharray="4 8" />

        {/* Vertical Grid Lines */}
        <line x1="100" y1="0" x2="100" y2="300" stroke="#FF7E00" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="#FF7E00" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="300" y1="0" x2="300" y2="300" stroke="#FF7E00" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="400" y1="0" x2="400" y2="300" stroke="#FF7E00" strokeWidth="1" strokeDasharray="4 8" />

        {/* Smooth Data Area 1 (Coral Red) */}
        <path d="M 0 240 Q 120 100 220 180 T 420 80 T 500 120" stroke="#E23744" strokeWidth="2.5" />
        <path d="M 0 240 Q 120 100 220 180 T 420 80 T 500 120 L 500 300 L 0 300 Z" fill="url(#coral-area-glow)" />

        {/* Smooth Data Area 2 (Orange) */}
        <path d="M 0 200 Q 100 60 180 220 T 380 90 T 500 50" stroke="#FF7E00" strokeWidth="2.5" strokeDasharray="6 4" />

        <defs>
          <linearGradient id="coral-area-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E23744" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E23744" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Translucent Balloons (Glassmorphic Spheres) */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, 15, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#E23744]/10 to-[#FF7E00]/10 backdrop-blur-[6px] border border-white/20 shadow-lg top-1/4 left-[10%] -z-10 pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -12, 0],
          scale: [1, 0.96, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#FF7E00]/5 to-transparent backdrop-blur-[4px] border border-white/10 shadow-md bottom-1/4 right-[8%] -z-10 pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-[8px] border border-white/25 shadow-inner top-[15%] right-[20%] -z-10 pointer-events-none"
      />

      {/* Translucent Vector Clouds */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[6%] top-[10%] -z-10 opacity-[0.04] pointer-events-none select-none w-28 h-14 text-[#E23744]"
      >
        <svg viewBox="0 0 100 50" fill="currentColor">
          <path d="M10 40 A15 15 0 0 1 25 20 A20 20 0 0 1 65 15 A15 15 0 0 1 85 25 A12 12 0 0 1 90 40 Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [35, -35, 35],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[12%] bottom-[12%] -z-10 opacity-[0.035] pointer-events-none select-none w-36 h-18 text-[#FF7E00]"
      >
        <svg viewBox="0 0 120 60" fill="currentColor">
          <path d="M15 45 A18 18 0 0 1 35 25 A24 24 0 0 1 80 20 A18 18 0 0 1 105 30 A15 15 0 0 1 110 45 Z" />
        </svg>
      </motion.div>

      {/* Translucent Bar Graph SVG */}
      <svg className="absolute right-12 top-28 w-[240px] h-[150px] -z-10 opacity-[0.05] pointer-events-none select-none hidden lg:block" viewBox="0 0 200 120" fill="none">
        <rect x="15" y="60" width="18" height="60" rx="3" fill="#E23744" />
        <rect x="45" y="40" width="18" height="80" rx="3" fill="#FF7E00" />
        <rect x="75" y="80" width="18" height="40" rx="3" fill="#E23744" />
        <rect x="105" y="30" width="18" height="90" rx="3" fill="#FF7E00" />
        <rect x="135" y="50" width="18" height="70" rx="3" fill="#E23744" />
        <rect x="165" y="15" width="18" height="105" rx="3" fill="#FF7E00" />
        <line x1="0" y1="120" x2="200" y2="120" stroke="#78716c" strokeWidth="1.5" />
      </svg>

      {/* Translucent Network Node Architecture Graph (DevOps Cloud Nodes) */}
      <svg className="absolute left-[35%] top-[10%] w-[300px] h-[200px] -z-10 opacity-[0.04] pointer-events-none select-none hidden md:block" viewBox="0 0 300 200" fill="none">
        <circle cx="50" cy="50" r="6" fill="#E23744" />
        <circle cx="150" cy="80" r="8" fill="#FF7E00" />
        <circle cx="250" cy="60" r="6" fill="#E23744" />
        <circle cx="100" cy="140" r="7" fill="#FF7E00" />
        <circle cx="200" cy="130" r="7" fill="#E23744" />
        <line x1="50" y1="50" x2="150" y2="80" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="150" y1="80" x2="250" y2="60" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="50" y1="50" x2="100" y2="140" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="100" y1="140" x2="200" y2="130" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="150" y1="80" x2="200" y2="130" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="200" y1="130" x2="250" y2="60" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bio & Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E23744]/20 bg-[#FFF0F0] text-[#E23744] text-[11px] font-black tracking-widest uppercase font-mono shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E23744] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E23744]"></span>
              </span>
              Open to Cloud, DevOps & Data Opportunities
            </motion.div>

            {/* Main Headings */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7.5xl font-black tracking-tight text-stone-955 leading-[1.02]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Hi, I&apos;m{" "}
                <span className="text-stone-955">
                  Someswararao{" "}
                </span>
                <span className="text-stone-955">
                  Tarra
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl font-extrabold tracking-wide text-stone-900 flex flex-wrap gap-2 items-center"
              >
                <span className="text-gradient-blue font-black uppercase tracking-wider text-sm sm:text-base">Cloud & DevOps Engineer</span>
                <span className="text-stone-300 font-light">|</span>
                <span className="text-gradient-blue font-black uppercase tracking-wider text-sm sm:text-base">Data Science Professional</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-stone-900 font-bold text-base sm:text-lg max-w-xl leading-relaxed"
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
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full overflow-hidden text-white transition-all duration-300 bg-gradient-to-r from-[#E23744] to-[#FF7E00] hover:opacity-95 shadow-md shadow-[#E23744]/20 hover:scale-[1.02]"
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full border border-stone-300 text-stone-900 bg-white hover:bg-stone-55 transition-all duration-300 shadow-sm"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                View Resume
              </a>

              {/* Contact CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-55 text-stone-900 transition-all duration-300 shadow-sm"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-5 pt-5 border-t border-stone-200 w-full"
            >
              <span className="text-[10px] uppercase tracking-widest text-stone-600 font-black font-mono">
                Connect
              </span>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/someshtarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-full bg-white border border-stone-200 hover:border-[#E23744]/30 hover:bg-[#FFF0F0] text-stone-600 hover:text-[#E23744] transition-all duration-300 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/someswararao-tarra-575b63203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-full bg-white border border-stone-200 hover:border-[#E23744]/30 hover:bg-[#FFF0F0] text-stone-600 hover:text-[#E23744] transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:someswararaotarra@gmail.com"
                  className="group p-2.5 rounded-full bg-white border border-stone-200 hover:border-[#E23744]/30 hover:bg-[#FFF0F0] text-stone-600 hover:text-[#E23744] transition-all duration-300 shadow-sm"
                  aria-label="Email Me"
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
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-[#E23744]/15 to-[#FF7E00]/12 rounded-full blur-3xl -z-10 float-orb" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-[340px] group">
              {/* Floating tech badges - AWS, Linux, Data Sci */}
              <div className="absolute -top-6 -left-8 px-4 py-2 rounded-full bg-white border border-stone-200 shadow flex items-center gap-1.5 text-xs text-stone-900 font-black tech-badge-float hidden sm:flex" style={{ animationDelay: '0s' }}>
                <Cloud className="w-3.5 h-3.5 text-[#E23744]" />
                AWS
              </div>
              <div className="absolute top-1/2 -right-10 px-4 py-2 rounded-full bg-white border border-stone-200 shadow flex items-center gap-1.5 text-xs text-stone-900 font-black tech-badge-float hidden sm:flex" style={{ animationDelay: '1.5s' }}>
                <Cpu className="w-3.5 h-3.5 text-[#FF7E00]" />
                Data Sci
              </div>
              <div className="absolute bottom-10 -left-10 px-4 py-2 rounded-full bg-white border border-stone-200 shadow flex items-center gap-1.5 text-xs text-stone-900 font-black tech-badge-float hidden sm:flex" style={{ animationDelay: '3s' }}>
                <Terminal className="w-3.5 h-3.5 text-amber-500" />
                Linux
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[3/4.2] rounded-[40px] rotate-3 hover:rotate-0 overflow-hidden border-2 border-[#E23744]/20 bg-slate-50 transition-transform duration-500"
                style={{ boxShadow: "0 20px 50px rgba(28,25,23,0.08)" }}>

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
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FCFBF9] to-transparent" />

                {/* Decorative corner overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-[40px]"
                  style={{
                    background: "radial-gradient(circle at top left, rgba(226,55,68,0.04) 0%, transparent 60%)",
                  }}
                />

                {/* Bottom status tag */}
                <div className="absolute bottom-4 left-4 right-4 py-2.5 px-3.5 rounded-2xl flex items-center justify-between text-xs text-stone-950 font-bold font-mono"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid #E7E5E4",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}>
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-stone-955 font-bold">Active Now</span>
                  </span>
                  <span className="text-stone-955 font-bold">Hyderabad, IN</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Quick Discovery Strip */}
        <div className="mt-20 pt-8 border-t border-stone-200 w-full flex flex-col sm:flex-row items-center justify-between gap-6 opacity-95 select-none">
          <span className="text-[10px] uppercase tracking-widest text-stone-600 font-black font-mono shrink-0">
            Quick Discovery
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-bold text-stone-955 font-mono">
            <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 hover:text-[#E23744] cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-[#FFF0F0] flex items-center justify-center border border-[#E23744]/20"><Cloud className="w-4 h-4 text-[#E23744]" /></span>
              Cloud
            </span>
            <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 hover:text-[#E23744] cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center border border-orange-200/50"><GitBranch className="w-4 h-4 text-[#FF7E00]" /></span>
              DevOps
            </span>
            <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 hover:text-[#E23744] cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center border border-yellow-200/50"><Terminal className="w-4 h-4 text-yellow-600" /></span>
              Linux
            </span>
            <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 hover:text-[#E23744] cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center border border-purple-200/50"><Code className="w-4 h-4 text-purple-600" /></span>
              Python
            </span>
            <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 hover:text-[#E23744] cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center border border-rose-200/50"><Cpu className="w-4 h-4 text-rose-600" /></span>
              Data Science
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
