"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AWS / DevOps", "Data Science", "Machine Learning", "Deep Learning"];

const categoryAccents: Record<string, { color: string; bg: string; border: string }> = {
  "AWS / DevOps": { color: "#FF7E00", bg: "#FFF7ED", border: "#FFD8A8" },
  "Data Science": { color: "#E23744", bg: "#FFF0F0", border: "#FFC9C9" },
  "Machine Learning": { color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
  "Deep Learning": { color: "#EC4899", bg: "#FDF2F8", border: "#FBCFE8" },
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
    github: "https://github.com/someshtarra/somesh_portfolio",
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
    github: "https://github.com/someshtarra/somesh_portfolio",
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
    github: "https://github.com/someshtarra/somesh_portfolio",
    demo: "#",
    demoLabel: "View Project",
  },
  {
    id: 4,
    title: "AWS Three-Tier Web Architecture",
    description:
      "Architected and deployed a highly available, secure, and resilient 3-tier web architecture on AWS across multiple Availability Zones, implementing Web, Application, and Database tier isolation.",
    highlights: [
      "Multi-AZ VPC with public, private app, and isolated DB subnets across 2 Availability Zones",
      "CloudFront CDN & S3 static frontend with SSL/TLS termination via AWS Certificate Manager (ACM) & Route 53 DNS",
      "App Tier EC2 Auto Scaling Groups behind ALB with Amazon EFS & EBS for scalable state & persistent storage",
      "Database Tier Multi-AZ Amazon RDS with automated failover, IAM authentication, and Security Group / NACL isolation",
    ],
    tech: [
      "AWS EC2",
      "VPC",
      "Amazon RDS",
      "IAM",
      "Route 53",
      "ACM",
      "CloudFront",
      "Amazon S3",
      "EFS",
      "EBS",
      "ALB",
      "Auto Scaling",
    ],
    categories: ["AWS / DevOps"],
    github: "https://github.com/someshtarra/somesh_portfolio",
    demo: "/aws-vpc-nat.png",
    demoLabel: "View Architecture",
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
    github: "https://github.com/someshtarra/somesh_portfolio",
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
    <section id="projects" className="py-28 relative overflow-hidden bg-[#F7F6F5]">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#E23744]/6 to-pink-500/5 blur-3xl bottom-12 left-[-8%] -z-10 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 backdrop-blur-[4px] border border-white/20 shadow-md top-20 right-[5%] -z-10 pointer-events-none"
      />

      {/* Translucent Analytics Curve SVG */}
      <svg className="absolute left-[12%] top-[15%] w-[350px] h-[200px] -z-10 opacity-[0.035] pointer-events-none select-none hidden lg:block" viewBox="0 0 350 200" fill="none">
        <path d="M 0 160 C 50 140, 80 40, 150 100 C 220 160, 250 30, 350 60" stroke="#E23744" strokeWidth="2.5" />
        <path d="M 0 140 C 60 120, 90 60, 140 120 C 190 180, 240 50, 350 40" stroke="#FF7E00" strokeWidth="2" strokeDasharray="5 5" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="section-label">
            <FolderGit2 className="w-3.5 h-3.5" />
            Projects
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Featured{" "}
            <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-stone-600 text-sm max-w-xl text-center leading-relaxed">
            Academic and personal projects demonstrating applied Data Science, Machine Learning, and Cloud Engineering skills.
          </p>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#E23744] to-[#FF7E00] text-white border-transparent shadow-md shadow-[#E23744]/15 scale-102"
                    : "bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300 border shadow-sm"
                }`}
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
              const accent = categoryAccents[primaryCat] || { color: "#2563eb", bg: "#EFF6FF", border: "#BFDBFE" };
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="glass-card rounded-[24px] flex flex-col justify-between group text-left overflow-hidden hover:scale-[1.01] transition-transform"
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
                            className="text-[10px] font-extrabold font-mono uppercase tracking-widest"
                            style={{ color: accent.color }}
                          >
                            {project.categories.join(" / ")}
                          </span>
                        </div>
                        {project.upcoming && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-400/40 bg-amber-50 text-amber-600 text-[9px] font-bold font-mono tracking-wider uppercase animate-pulse">
                            Upcoming
                          </span>
                        )}
                      </div>

                      <h3
                        className="text-lg font-black text-stone-900 mb-3 group-hover:text-[#E23744] transition-colors duration-300 leading-snug"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-[13px] text-stone-900 font-bold leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Key highlights */}
                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-stone-900 font-bold">
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
                            className="px-2.5 py-1 text-[10px] font-mono font-black rounded-lg"
                            style={{
                              background: accent.bg,
                              border: `1px solid ${accent.border}`,
                              color: accent.color,
                              opacity: 1,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5 pt-4 border-t border-stone-200/50">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-stone-600 hover:text-stone-950 transition duration-200 group/link"
                        >
                          <GithubIcon className="w-4 h-4 text-stone-500 group-hover/link:scale-110 transition-transform duration-200" />
                          <span>GitHub Code</span>
                        </a>

                        {project.upcoming ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-600 cursor-not-allowed">
                            <ExternalLink className="w-4 h-4" />
                            <span>Work In Progress</span>
                          </span>
                        ) : project.demo === "#" ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-stone-850 cursor-not-allowed">
                            <ExternalLink className="w-4 h-4" />
                            <span>{project.demoLabel} (Code Only)</span>
                          </span>
                        ) : (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-black transition duration-200 group/link"
                            style={{ color: accent.color }}
                          >
                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
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
