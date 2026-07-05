"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Calendar, ShieldCheck, Hourglass } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="glow-blur glow-blue float-orb w-[300px] h-[300px] top-1/3 left-0 opacity-20" />
      <div className="glow-blur glow-purple float-orb-slow w-[300px] h-[300px] bottom-1/3 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Award className="w-3.5 h-3.5" />
            Credentials
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Certifications &{" "}
            <span className="text-gradient-blue">Goals</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)" }} />
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
              className="text-xl font-bold text-white flex items-center gap-2.5 mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Active Certifications
            </h3>
            
            <div
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 relative overflow-hidden"
              style={{ borderLeft: "3px solid #10b981" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 rounded-xl group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors duration-300">
                    Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 font-medium">Oracle Cloud Infrastructure (OCI)</p>
                  
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-4 font-mono font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    <span>Issued: 12 October 2025</span>
                  </div>
                </div>
              </div>

              {/* ID & Link Placeholders */}
              <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono">
                <div className="text-slate-500">
                  Credential ID:{" "}
                  <span className="text-slate-300 font-semibold">[Oracle Credential ID]</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-bold group-hover:translate-x-0.5 transition-transform"
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
              className="text-xl font-bold text-white flex items-center gap-2.5 mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Hourglass className="w-5 h-5 text-amber-400" />
              Currently Preparing For
            </h3>

            <div
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 relative overflow-hidden"
              style={{ borderLeft: "3px solid #f59e0b" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/5 border border-amber-500/20 text-amber-400 rounded-xl group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-snug group-hover:text-amber-400 transition-colors duration-300">
                    AWS Certifications
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 font-medium">Amazon Web Services</p>
                  <p className="text-xs text-slate-400/90 leading-relaxed mt-2.5">
                    Actively studying for AWS certifications (such as Cloud Practitioner or Solutions Architect Associate) to validate practical networking, IAM, VPC, and EC2 experience.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Target Date:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-bold uppercase tracking-widest text-[9px] animate-pulse">
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
