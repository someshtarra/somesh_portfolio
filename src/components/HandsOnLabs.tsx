"use client";

import { motion } from "framer-motion";
import { Terminal, Network, ShieldAlert, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

const labs = [
  {
    title: "AWS VPC Architecture",
    icon: <Network className="w-5 h-5 text-blue-400" />,
    accent: "#3b82f6",
    accentBg: "rgba(59,130,246,0.08)",
    num: "01",
    problem: "Recruiters and applications require secure network isolation patterns where backend infrastructure is hidden from public access while maintaining controlled internet gateways.",
    architecture: "Designed a VPC with public and private subnets across multiple availability zones, route tables, an Internet Gateway (IGW) for public servers, and a NAT Gateway for secure outbound private subnet routing.",
    tech: ["AWS VPC", "Subnets", "Route Tables", "Internet Gateway", "NAT Gateway"],
    learning: "Understood public vs. private subnets, routing tables, and the role of NAT Gateways in preventing incoming traffic to private instances while permitting outgoing requests.",
    github: "https://github.com/someshtarra/aws-labs",
  },
  {
    title: "Private EC2 Connectivity",
    icon: <ShieldAlert className="w-5 h-5 text-purple-400" />,
    accent: "#a855f7",
    accentBg: "rgba(168,85,247,0.08)",
    num: "02",
    problem: "Direct SSH access to private subnet instances poses severe security risks and exposes resources to public penetration attempts.",
    architecture: "Configured secure connectivity models utilizing Bastion Hosts (Jump Boxes) and AWS Systems Manager Session Manager, restricting port access via Security Groups.",
    tech: ["AWS EC2", "Security Groups", "SSH Key Management", "SSM Session Manager"],
    learning: "Mastered multi-hop SSH routing configurations, transit rules, and IAM permissions required to execute secure, keyless SSM-based shell access.",
    github: "https://github.com/someshtarra/aws-labs",
  },
  {
    title: "VPC Peering Lab",
    icon: <Layers className="w-5 h-5 text-teal-400" />,
    accent: "#14b8a6",
    accentBg: "rgba(20,184,166,0.08)",
    num: "03",
    problem: "Applications residing in separate isolated AWS networks (VPCs) need to exchange data securely without traversing the public internet.",
    architecture: "Built VPC peering connectivity between two distinct VPCs. Configured corresponding route tables, resolved CIDR block conflicts, and security rules.",
    tech: ["VPC Peering", "CIDR blocks", "Route Tables", "Security Groups"],
    learning: "Learned how CIDR blocks overlap checks work, how to create peering requests and accept them, and how route tables handle trans-VPC network routes.",
    github: "https://github.com/someshtarra/aws-labs",
  },
  {
    title: "Load Balancer & Health Checks",
    icon: <Cpu className="w-5 h-5 text-rose-400" />,
    accent: "#f43f5e",
    accentBg: "rgba(244,63,94,0.08)",
    num: "04",
    problem: "Ensuring high availability and load distribution across multiple web servers while isolating unhealthy node failures.",
    architecture: "Configured target groups and an Application Load Balancer (ALB) to handle incoming requests. Established custom HTTP path checks to run regular health monitors.",
    tech: ["AWS ALB", "Target Groups", "Health Checks", "Security Groups"],
    learning: "Acquired deep understanding of load balancing layers (Layer 7), path-based routing, target group registrations, and automatic traffic redirection from failing instances.",
    github: "https://github.com/someshtarra/aws-labs",
  },
  {
    title: "Linux Server Troubleshooting",
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    num: "05",
    problem: "Servers routinely crash due to disk capacity exhausts, permission blocks, high CPU/Memory load spikes, or listening port conflicts.",
    architecture: "Simulated and successfully resolved real-world production outages: diagnosing SSH failures, high CPU/memory spikes, disk-full bottlenecks, systemd service crashes, and port conflicts.",
    tech: ["Linux Administration", "systemctl", "df / du", "top / htop", "netstat / lsof", "chmod / chown"],
    learning: "Learned to triage system limits, read service logs via journalctl, isolate disk bloats, and identify process port usage dynamically to restore operation.",
    github: "https://github.com/someshtarra/linux-troubleshooting",
  },
  {
    title: "Shell Automation",
    icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    accent: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
    num: "06",
    problem: "Repetitive system maintenance, log rotation, and server backups consume manual hours and are prone to human operational error.",
    architecture: "Created production-ready Bash scripts that automate system health checks, log file rotations, folder backups, conditional process checks, and cron scheduling.",
    tech: ["Bash Scripting", "Shell Utilities", "Cron Jobs", "Process Automation"],
    learning: "Gained proficiency in write-safe bash scripting using error handling (set -e), environment variables, conditional checks, loop structures, and automated scheduling.",
    github: "https://github.com/someshtarra/shell-scripts",
  },
];

export default function HandsOnLabs() {
  return (
    <section id="labs" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="glow-blur glow-purple float-orb-slow w-[450px] h-[450px] bottom-1/4 left-0 -translate-x-1/3 opacity-25" />
      <div className="glow-blur glow-cyan w-[300px] h-[300px] top-1/3 right-0 translate-x-1/4 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Terminal className="w-3.5 h-3.5" />
            Hands-On Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Cloud &{" "}
            <span className="text-gradient-blue">DevOps Labs</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)" }} />
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {labs.map((lab, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="glass-card rounded-2xl flex flex-col justify-between group hover:-translate-y-1 text-left overflow-hidden"
            >
              {/* Accent top bar */}
              <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${lab.accent}, transparent)` }} />

              <div className="p-6 flex flex-col flex-1">
                <div>
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-5">
                    <div
                      className="p-2.5 rounded-xl border border-white/8 group-hover:scale-110 transition-transform duration-300 shrink-0"
                      style={{ background: lab.accentBg }}
                    >
                      {lab.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-bold text-white tracking-wide leading-snug">
                        {lab.title}
                      </h3>
                    </div>
                    {/* Lab number badge */}
                    <span
                      className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-lg border flex-shrink-0"
                      style={{
                        color: lab.accent,
                        borderColor: `${lab.accent}30`,
                        background: `${lab.accent}10`,
                      }}
                    >
                      LAB-{lab.num}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 block mb-1.5 font-mono">
                        Problem Statement
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">{lab.problem}</p>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 block mb-1.5 font-mono">
                        Lab Architecture / Approach
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">{lab.architecture}</p>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 block mb-1.5 font-mono">
                        Key Learning
                      </span>
                      <p className="text-xs leading-relaxed" style={{ color: lab.accent, opacity: 0.85 }}>
                        {lab.learning}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {lab.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-semibold font-mono rounded-md"
                        style={{
                          background: `${lab.accent}0d`,
                          border: `1px solid ${lab.accent}25`,
                          color: `${lab.accent}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {lab.github && (
                    <a
                      href={lab.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white transition duration-200 self-start"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Lab Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
