"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Terminal, Code, Cpu, Award } from "lucide-react";

const skillCategories = [
  {
    title: "AWS Cloud",
    icon: <Cloud className="w-5 h-5 text-blue-500" />,
    accent: "card-accent-blue",
    gridSpan: "col-span-1 lg:col-span-2",
    cardBg: "#F0F6FF",
    badgeColor: "#EFF6FF",
    badgeBorder: "#BFDBFE",
    badgeText: "#1E40AF",
    skills: [
      "AWS EC2", "VPC", "Amazon RDS", "IAM", "Route 53", "Certificate Manager (ACM)",
      "CloudFront", "Amazon S3", "Amazon EFS", "Amazon EBS", "Elastic Load Balancer (ALB)",
      "Auto Scaling", "CloudWatch", "Internet Gateway", "NAT Gateway", "Route Tables",
      "Security Groups", "NACL",
    ],
  },
  {
    title: "DevOps & Version Control",
    icon: <GitBranch className="w-5 h-5 text-purple-500" />,
    accent: "card-accent-purple",
    gridSpan: "col-span-1",
    cardBg: "#F5F3FF",
    badgeColor: "#F5F3FF",
    badgeBorder: "#DDD6FE",
    badgeText: "#5B21B6",
    skills: [
      "Git", "GitHub", "CI/CD Fundamentals", "Jenkins", "Infrastructure Troubleshooting",
    ],
  },
  {
    title: "Linux & Scripting",
    icon: <Terminal className="w-5 h-5 text-emerald-500" />,
    accent: "card-accent-teal",
    gridSpan: "col-span-1 lg:col-span-2",
    cardBg: "#F0FDF4",
    badgeColor: "#F0FDF4",
    badgeBorder: "#BBF7D0",
    badgeText: "#166534",
    skills: [
      "Linux Administration", "Bash Scripting", "Shell Automation", "SSH", "SCP",
      "File Permissions", "Process Management", "Disk Management", "Networking",
      "systemctl", "Log Analysis", "Troubleshooting",
    ],
  },
  {
    title: "Programming",
    icon: <Code className="w-5 h-5 text-amber-500" />,
    accent: "card-accent-amber",
    gridSpan: "col-span-1",
    cardBg: "#FFFBEB",
    badgeColor: "#FFFBEB",
    badgeBorder: "#FEF3C7",
    badgeText: "#92400E",
    skills: ["Python", "R Programming", "SQL", "Bash"],
  },
  {
    title: "Data Science & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-rose-500" />,
    accent: "card-accent-rose",
    gridSpan: "col-span-1 lg:col-span-3",
    cardBg: "#FFF1F2",
    badgeColor: "#FFF1F2",
    badgeBorder: "#FECDD3",
    badgeText: "#9F1239",
    skills: [
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras",
      "Time Series Analysis", "Machine Learning", "Deep Learning",
      "Data Visualization", "Statistical Analysis",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#F7F6F5]">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-pink-500/5 to-purple-500/5 blur-3xl bottom-10 left-[-10%] -z-10 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-purple-500/5 to-indigo-500/5 backdrop-blur-[6px] border border-white/20 shadow-md top-12 right-[8%] -z-10 pointer-events-none"
      />

      {/* Transparent Dashboard Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-[0.03] pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="skills-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#78716c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Award className="w-3.5 h-3.5" />
            Skills
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Technical{" "}
            <span className="text-gradient-blue">Competencies</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        {/* Skill Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className={`${category.accent} ${category.gridSpan} glass-card p-6 rounded-[24px] flex flex-col items-start text-left group`}
              style={{ background: category.cardBg }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-200/50 w-full">
                <div
                  className="p-2.5 rounded-xl border border-stone-200 bg-white group-hover:scale-110 transition-transform duration-300 shrink-0"
                >
                  {category.icon}
                </div>
                <h3 className="text-[15px] font-extrabold text-stone-900 tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 w-full">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-[11px] font-black font-mono rounded-lg transition-all duration-200 hover:scale-105"
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
