"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Terminal, Code, Cpu, Award } from "lucide-react";

const skillCategories = [
  {
    title: "AWS Cloud",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    accent: "card-accent-blue",
    badgeColor: "rgba(59,130,246,0.1)",
    badgeBorder: "rgba(59,130,246,0.2)",
    badgeText: "#93c5fd",
    skills: [
      "AWS EC2", "VPC", "IAM", "S3", "Route Tables", "Internet Gateway",
      "NAT Gateway", "Security Groups", "NACL", "Elastic Load Balancing",
      "Auto Scaling", "CloudWatch", "Route 53", "RDS",
    ],
  },
  {
    title: "DevOps & Version Control",
    icon: <GitBranch className="w-5 h-5 text-purple-400" />,
    accent: "card-accent-purple",
    badgeColor: "rgba(168,85,247,0.1)",
    badgeBorder: "rgba(168,85,247,0.2)",
    badgeText: "#d8b4fe",
    skills: [
      "Git", "GitHub", "CI/CD Fundamentals", "Jenkins", "Infrastructure Troubleshooting",
    ],
  },
  {
    title: "Linux & Scripting",
    icon: <Terminal className="w-5 h-5 text-teal-400" />,
    accent: "card-accent-teal",
    badgeColor: "rgba(20,184,166,0.1)",
    badgeBorder: "rgba(20,184,166,0.2)",
    badgeText: "#5eead4",
    skills: [
      "Linux Administration", "Bash Scripting", "Shell Automation", "SSH", "SCP",
      "File Permissions", "Process Management", "Disk Management", "Networking",
      "systemctl", "Log Analysis", "Troubleshooting",
    ],
  },
  {
    title: "Programming",
    icon: <Code className="w-5 h-5 text-amber-400" />,
    accent: "card-accent-amber",
    badgeColor: "rgba(245,158,11,0.1)",
    badgeBorder: "rgba(245,158,11,0.2)",
    badgeText: "#fcd34d",
    skills: ["Python", "R Programming", "SQL", "Bash"],
  },
  {
    title: "Data Science & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-rose-400" />,
    accent: "card-accent-rose",
    badgeColor: "rgba(244,63,94,0.1)",
    badgeBorder: "rgba(244,63,94,0.2)",
    badgeText: "#fda4af",
    skills: [
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras",
      "Time Series Analysis", "Machine Learning", "Deep Learning",
      "Data Visualization", "Statistical Analysis",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="glow-blur glow-blue float-orb w-[400px] h-[400px] top-1/4 right-0 translate-x-1/3 opacity-30" />
      <div className="glow-blur glow-purple float-orb-slow w-[350px] h-[350px] bottom-1/4 left-0 -translate-x-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Award className="w-3.5 h-3.5" />
            Skills
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Technical{" "}
            <span className="text-gradient-blue">Arsenal</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)" }} />
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className={`${category.accent} glass-card p-6 rounded-2xl flex flex-col items-start text-left group hover:-translate-y-1`}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5 w-full">
                <div
                  className="p-2.5 rounded-xl border border-white/8 group-hover:scale-110 transition-transform duration-300 shrink-0"
                  style={{ background: "rgba(8,14,30,0.8)" }}
                >
                  {category.icon}
                </div>
                <h3 className="text-[15px] font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 w-full">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-[11px] font-semibold font-mono rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      background: category.badgeColor,
                      border: `1px solid ${category.badgeBorder}`,
                      color: category.badgeText,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
