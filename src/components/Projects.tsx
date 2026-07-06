"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AWS / DevOps", "Data Science", "Machine Learning", "Deep Learning"];

const categoryAccents: Record<string, { color: string; bg: string; border: string }> = {
  "AWS / DevOps": { color: "#fb923c", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)" },
  "Data Science": { color: "#22d3ee", bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.2)" },
  "Machine Learning": { color: "#a855f7", bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.2)" },
  "Deep Learning": { color: "#ec4899", bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)" },
};

const projectsList = [
  {
    id: 1,
    title: "Disease & Pest Detection in Coffee Leaves using Efficient DET Algorithm & CNN",
    description:
      "Designed and deployed a CNN with the Efficient DET algorithm achieving 96.71% accuracy for early disease detection in coffee plants. The model enables early intervention strategies that minimize crop losses at scale.",
    highlights: [
      "96.71% test accuracy on disease classification",
      "Deployed CNN + Efficient DET pipeline",
      "Enables early-stage crop loss prevention",
    ],
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Efficient DET", "OpenCV", "NumPy"],
    categories: ["Machine Learning", "Deep Learning"],
    github: "https://github.com/someshtarra",
    demo: "#",
    demoLabel: "View Project",
  },
  {
    id: 2,
    title: "National GDP Prediction using Time Series, Deep Learning & Hybrid Models",
    description:
      "Engineered a hybrid ARIMA-GRU model to forecast national GDP with a 37% reduction in forecast error (RMSE 122, R² 0.9998). Applied wavelet transforms and outlier smoothing to optimize data quality before modelling.",
    highlights: [
      "37% reduction in forecast error vs. traditional methods",
      "RMSE: 122, R²: 0.9998",
      "Hybrid ARIMA-GRU architecture",
    ],
    tech: ["Python", "TensorFlow", "Keras", "ARIMA", "GRU", "Time Series", "Pandas", "statsmodels"],
    categories: ["Data Science", "Deep Learning"],
    github: "https://github.com/someshtarra/gdp-prediction",
    demo: "#",
    demoLabel: "View Project",
  },
  {
    id: 3,
    title: "Cryptocurrency Price Prediction using Time Series Analysis",
    description:
      "Built and compared ARIMA and LSTM forecasting models to predict volatile cryptocurrency price trends using historical exchange data. Enhanced model reliability by 18% through iterative architecture improvements.",
    highlights: [
      "18% improvement in prediction reliability",
      "ARIMA vs LSTM model comparison",
      "Historical price trend forecasting",
    ],
    tech: ["Python", "Pandas", "ARIMA", "LSTM", "Scikit-learn", "Matplotlib", "Seaborn"],
    categories: ["Data Science", "Machine Learning"],
    github: "https://github.com/someshtarra/cryptocurrency-prediction",
    demo: "#",
    demoLabel: "View Project",
  },
  {
    id: 4,
    title: "AWS Three-Tier Web Architecture",
    description:
      "Designed a highly available, secure AWS three-tier architecture with VPC, EC2 instances across public and private subnets, Application Load Balancer, Auto Scaling Groups, and NAT Gateway routing.",
    highlights: [
      "Custom VPC with public & private subnets",
      "Application Load Balancer + Auto Scaling",
      "NAT Gateway & Security Group isolation",
    ],
    tech: ["AWS", "VPC", "EC2", "Application Load Balancer", "Auto Scaling", "NAT Gateway", "Security Groups"],
    categories: ["AWS / DevOps"],
    github: "https://github.com/someshtarra/aws-three-tier",
    demo: "#",
    demoLabel: "View Architecture",
    upcoming: true,
  },
  {
    id: 5,
    title: "AWS VPC with Servers in Private Subnets & NAT Gateway",
    description:
      "Designed and implemented a secure AWS network infrastructure featuring a custom VPC, public and private subnets, NAT Gateways for outbound internet connectivity, and isolated application servers, based on AWS official guidelines.",
    highlights: [
      "Configured NAT Gateways to enable private subnet resources to reach the internet securely",
      "Implemented robust network isolation using private subnets for application servers",
      "Set up custom route tables, security groups, and internet gateways for strict access control",
    ],
    tech: ["AWS", "VPC", "NAT Gateway", "Subnets", "Route Tables", "EC2", "Security Groups"],
    categories: ["AWS / DevOps"],
    github: "https://github.com/someshtarra/aws-vpc-private-subnets-nat",
    demo: "/aws-vpc-nat.png",
    demoLabel: "View Architecture",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsList.filter((project) => {
    if (activeFilter === "All") return true;
    return project.categories.includes(activeFilter);
  });

  const getPrimaryCategory = (cats: string[]) => cats[0] || "All";

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="glow-blur glow-blue float-orb w-[400px] h-[400px] top-1/4 left-0 -translate-x-1/3 opacity-25" />
      <div className="glow-blur glow-cyan float-orb-slow w-[300px] h-[300px] bottom-1/4 right-0 translate-x-1/3 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="section-label">
            <FolderGit2 className="w-3.5 h-3.5" />
            Projects
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Featured{" "}
            <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl text-center leading-relaxed">
            Academic and personal projects demonstrating applied Data Science, Machine Learning, and Cloud Engineering skills.
          </p>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)" }} />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const accent = categoryAccents[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? "text-white shadow-lg"
                    : "text-slate-500 hover:text-slate-300"
                }`}
                style={
                  activeFilter === cat
                    ? {
                        background: accent
                          ? `linear-gradient(135deg, ${accent.color}30, ${accent.color}15)`
                          : "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(168,85,247,0.2))",
                        border: `1px solid ${accent ? accent.border : "rgba(59,130,246,0.35)"}`,
                        boxShadow: accent ? `0 0 20px ${accent.color}20` : "0 0 20px rgba(59,130,246,0.15)",
                        color: accent ? accent.color : "#93c5fd",
                      }
                    : {
                        background: "rgba(8,14,30,0.6)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const primaryCat = getPrimaryCategory(project.categories);
              const accent = categoryAccents[primaryCat] || { color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" };
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="glass-card rounded-2xl flex flex-col justify-between group hover:-translate-y-1 text-left overflow-hidden"
                >
                  {/* Accent top bar */}
                  <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${accent.color}, transparent)` }} />

                  <div className="p-7 flex flex-col flex-1">
                    <div>
                      {/* Category Tag Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5" style={{ color: accent.color }} />
                          <span
                            className="text-[10px] font-bold font-mono uppercase tracking-widest"
                            style={{ color: accent.color }}
                          >
                            {project.categories.join(" / ")}
                          </span>
                        </div>
                        {project.upcoming && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-[9px] font-bold font-mono tracking-wider uppercase animate-pulse">
                            Upcoming
                          </span>
                        )}
                      </div>

                      <h3
                        className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-snug"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-[13px] text-slate-400 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Key highlights */}
                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: accent.color }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges & Buttons */}
                    <div className="space-y-5 mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, tidx) => (
                          <span
                            key={tidx}
                            className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-lg"
                            style={{
                              background: accent.bg,
                              border: `1px solid ${accent.border}`,
                              color: accent.color,
                              opacity: 0.85,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5 pt-4 border-t border-white/5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white transition duration-200"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>GitHub Code</span>
                        </a>

                        {project.upcoming ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 cursor-not-allowed">
                            <ExternalLink className="w-4 h-4" />
                            <span>Work In Progress</span>
                          </span>
                        ) : project.demo === "#" ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 cursor-not-allowed">
                            <ExternalLink className="w-4 h-4" />
                            <span>{project.demoLabel} (Code Only)</span>
                          </span>
                        ) : (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold transition duration-200"
                            style={{ color: accent.color }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{project.demoLabel}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
