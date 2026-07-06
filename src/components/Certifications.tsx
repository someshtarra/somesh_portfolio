"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Calendar, ShieldCheck, Hourglass } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-52 h-52 rounded-full bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 blur-2xl top-10 left-[-6%] -z-10 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-teal-500/5 to-transparent backdrop-blur-[4px] border border-white/20 shadow-md bottom-20 right-[5%] -z-10 pointer-events-none"
      />

      {/* Credentials Grid Pattern */}
      <svg className="absolute right-[8%] top-[10%] w-[180px] h-[180px] -z-10 opacity-[0.035] pointer-events-none select-none hidden lg:block" viewBox="0 0 100 100" fill="none">
        <path d="M 50 10 L 90 25 L 90 60 L 50 90 L 10 60 L 10 25 Z" stroke="#78716c" strokeWidth="1.5" />
        <path d="M 50 20 L 80 32 L 80 57 L 50 80 L 20 57 L 20 32 Z" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="8" fill="#FF7E00" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Award className="w-3.5 h-3.5" />
            Credentials
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Certifications &{" "}
            <span className="text-gradient-blue">Goals</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Active Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 text-left"
          >
            <h3
              className="text-xl font-extrabold text-stone-900 flex items-center gap-2.5 mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Active Certifications
            </h3>
            
            <div
              className="glass-card p-6 rounded-[24px] flex flex-col justify-between group hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden bg-white"
              style={{ borderLeft: "3px solid #10b981" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 border border-emerald-250 text-emerald-500 rounded-xl group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-stone-900 leading-snug group-hover:text-emerald-600 transition-colors duration-300">
                    Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
                  </h4>
                  <p className="text-xs text-stone-900 font-bold mt-1.5">Oracle Cloud Infrastructure (OCI)</p>
                  
                  <div className="flex items-center gap-2 text-[11px] text-stone-900 mt-4 font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5 text-stone-600" />
                    <span>Issued: 12 October 2025</span>
                  </div>
                </div>
              </div>

              {/* ID & Link Placeholders */}
              <div className="mt-6 pt-5 border-t border-stone-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono">
                <div className="text-stone-900 font-bold">
                  Credential ID:{" "}
                  <span className="text-stone-950 font-black">[Oracle Credential ID]</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-500 font-black group-hover:translate-x-0.5 transition-transform"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          </motion.div>

          {/* Preparing For */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 text-left"
          >
            <h3
              className="text-xl font-extrabold text-stone-900 flex items-center gap-2.5 mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Hourglass className="w-5 h-5 text-amber-500" />
              Currently Preparing For
            </h3>

            <div
              className="glass-card p-6 rounded-[24px] flex flex-col justify-between group hover:border-amber-500/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden bg-white"
              style={{ borderLeft: "3px solid #f59e0b" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 border border-amber-250 text-amber-500 rounded-xl group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-stone-900 leading-snug group-hover:text-amber-600 transition-colors duration-300">
                    AWS Certifications
                  </h4>
                  <p className="text-xs text-stone-900 font-bold mt-1.5">Amazon Web Services</p>
                  <p className="text-xs text-stone-900 font-bold leading-relaxed mt-2.5">
                    Actively studying for AWS certifications (such as Cloud Practitioner or Solutions Architect Associate) to validate practical networking, IAM, VPC, and EC2 experience.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-200/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-stone-900 font-bold">Target Date:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-400/40 bg-amber-50 text-amber-600 font-bold uppercase tracking-widest text-[9px] animate-pulse">
                  In Progress
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
