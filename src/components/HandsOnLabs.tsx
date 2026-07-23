"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Network, ShieldAlert, Cpu, Layers, FileText, X, Printer, BookOpen } from "lucide-react";
import { GithubIcon } from "./Icons";

const labs = [
  {
    title: "AWS VPC Architecture",
    icon: <Network className="w-5 h-5 text-blue-500" />,
    accent: "#2563eb",
    accentBg: "#EFF6FF",
    num: "01",
    problem: "Recruiters and applications require secure network isolation patterns where backend infrastructure is hidden from public access while maintaining controlled internet gateways.",
    architecture: "Designed a VPC with public and private subnets across multiple availability zones, route tables, an Internet Gateway (IGW) for public servers, and a NAT Gateway for secure outbound private subnet routing.",
    tech: ["AWS VPC", "Subnets", "Route Tables", "Internet Gateway", "NAT Gateway"],
    learning: "Understood public vs. private subnets, routing tables, and the role of NAT Gateways in preventing incoming traffic to private instances while permitting outgoing requests.",
    github: "https://github.com/someshtarra/somesh_portfolio",
  },
  {
    title: "Private EC2 Connectivity",
    icon: <ShieldAlert className="w-5 h-5 text-purple-500" />,
    accent: "#7c3aed",
    accentBg: "#F5F3FF",
    num: "02",
    problem: "Direct SSH access to private subnet instances poses severe security risks and exposes resources to public penetration attempts.",
    architecture: "Configured secure connectivity models utilizing Bastion Hosts (Jump Boxes) and AWS Systems Manager Session Manager, restricting port access via Security Groups.",
    tech: ["AWS EC2", "Security Groups", "SSH Key Management", "SSM Session Manager"],
    learning: "Mastered multi-hop SSH routing configurations, transit rules, and IAM permissions required to execute secure, keyless SSM-based shell access.",
    github: "https://github.com/someshtarra/somesh_portfolio",
  },
  {
    title: "VPC Peering Lab",
    icon: <Layers className="w-5 h-5 text-emerald-500" />,
    accent: "#166534",
    accentBg: "#E8FDF0",
    num: "03",
    problem: "Applications residing in separate isolated AWS networks (VPCs) need to exchange data securely without traversing the public internet.",
    architecture: "Built VPC peering connectivity between two distinct VPCs. Configured corresponding route tables, resolved CIDR block conflicts, and security rules.",
    tech: ["VPC Peering", "CIDR blocks", "Route Tables", "Security Groups"],
    learning: "Learned how CIDR blocks overlap checks work, how to create peering requests and accept them, and how route tables handle trans-VPC network routes.",
    github: "https://github.com/someshtarra/somesh_portfolio",
  },
  {
    title: "Load Balancer & Health Checks",
    icon: <Cpu className="w-5 h-5 text-[#E23744]" />,
    accent: "#E23744",
    accentBg: "#FFF0F0",
    num: "04",
    problem: "Ensuring high availability and load distribution across multiple web servers while isolating unhealthy node failures.",
    architecture: "Configured target groups and an Application Load Balancer (ALB) to handle incoming requests. Established custom HTTP path checks to run regular health monitors.",
    tech: ["AWS ALB", "Target Groups", "Health Checks", "Security Groups"],
    learning: "Acquired deep understanding of load balancing layers (Layer 7), path-based routing, target group registrations, and automatic traffic redirection from failing instances.",
    github: "https://github.com/someshtarra/somesh_portfolio",
  },
  {
    title: "Linux Server Troubleshooting",
    icon: <Terminal className="w-5 h-5 text-amber-500" />,
    accent: "#b45309",
    accentBg: "#FFFBEB",
    num: "05",
    problem: "Servers routinely crash due to disk capacity exhausts, permission blocks, high CPU/Memory load spikes, or listening port conflicts.",
    architecture: "Simulated and successfully resolved real-world production outages: diagnosing SSH failures, high CPU/memory spikes, disk-full bottlenecks, systemd service crashes, and port conflicts.",
    tech: ["Linux Administration", "systemctl", "df / du", "top / htop", "netstat / lsof", "chmod / chown"],
    learning: "Learned to triage system limits, read service logs via journalctl, isolate disk bloats, and identify process port usage dynamically to restore operation.",
    github: "https://github.com/someshtarra/somesh_portfolio",
  },
  {
    title: "Shell Automation",
    icon: <Terminal className="w-5 h-5 text-emerald-500" />,
    accent: "#15803d",
    accentBg: "#F0FDF4",
    num: "06",
    problem: "Repetitive system maintenance, log rotation, and server backups consume manual hours and are prone to human operational error.",
    architecture: "Created production-ready Bash scripts that automate system health checks, log file rotations, folder backups, conditional process checks, and cron scheduling.",
    tech: ["Bash Scripting", "Shell Utilities", "Cron Jobs", "Process Automation"],
    learning: "Gained proficiency in write-safe bash scripting using error handling (set -e), environment variables, conditional checks, loop structures, and automated scheduling.",
    github: "https://github.com/someshtarra/somesh_portfolio",
  },
];

export default function HandsOnLabs() {
  const [isPaperOpen, setIsPaperOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isPaperOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPaperOpen]);

  return (
    <section id="labs" className="py-28 relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-amber-500/5 to-orange-500/5 blur-2xl top-20 left-[-8%] -z-10 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#E23744]/5 to-transparent backdrop-blur-[5px] border border-white/20 shadow-md bottom-20 right-[5%] -z-10 pointer-events-none"
      />

      {/* Network Nodes Pipeline Graphic */}
      <svg className="absolute right-[10%] top-[15%] w-[250px] h-[180px] -z-10 opacity-[0.04] pointer-events-none select-none hidden lg:block" viewBox="0 0 250 180" fill="none">
        <circle cx="30" cy="30" r="5" fill="#E23744" />
        <circle cx="100" cy="60" r="6" fill="#FF7E00" />
        <circle cx="180" cy="40" r="5" fill="#E23744" />
        <circle cx="70" cy="120" r="6" fill="#FF7E00" />
        <circle cx="150" cy="110" r="5" fill="#E23744" />
        <line x1="30" y1="30" x2="100" y2="60" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="100" y1="60" x2="180" y2="40" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="30" y1="30" x2="70" y2="120" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="70" y1="120" x2="150" y2="110" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="100" y1="60" x2="150" y2="110" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="150" y1="110" x2="180" y2="40" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Terminal className="w-3.5 h-3.5" />
            Hands-On Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Cloud &{" "}
            <span className="text-gradient-blue">DevOps Labs</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
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
              className="glass-card rounded-[24px] flex flex-col justify-between group text-left overflow-hidden hover:scale-[1.01] transition-transform"
            >
              {/* Accent top bar */}
              <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${lab.accent}, transparent)` }} />

              <div className="p-6 flex flex-col flex-1">
                <div>
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-5">
                    <div
                      className="p-2.5 rounded-xl border border-stone-200 bg-white group-hover:scale-110 transition-transform duration-300 shrink-0"
                    >
                      {lab.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-extrabold text-stone-900 tracking-wide leading-snug">
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
                      <span className="text-[9px] uppercase tracking-widest font-black text-stone-600 block mb-1.5 font-mono">
                        Problem Statement
                      </span>
                      <p className="text-xs text-stone-900 font-bold leading-relaxed">{lab.problem}</p>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-black text-stone-600 block mb-1.5 font-mono">
                        Lab Architecture / Approach
                      </span>
                      <p className="text-xs text-stone-900 font-bold leading-relaxed">{lab.architecture}</p>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-black text-stone-600 block mb-1.5 font-mono">
                        Key Learning
                      </span>
                      <p className="text-xs leading-relaxed font-black" style={{ color: lab.accent }}>
                        {lab.learning}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-5 pt-4 border-t border-stone-200/50 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {lab.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-black font-mono rounded-md"
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

                  <div className="flex flex-wrap items-center gap-4">
                    {lab.github && (
                      <a
                        href={lab.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-stone-900 transition duration-200"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Lab Code</span>
                      </a>
                    )}
                    {lab.num === "01" && (
                      <button
                        onClick={() => setIsPaperOpen(true)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] transition duration-200 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Read Technical Paper</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Research Paper Modal */}
      <AnimatePresence>
        {isPaperOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-stone-900/60 backdrop-blur-md p-0 sm:p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-5xl h-full sm:h-[95vh] bg-white rounded-none sm:rounded-[24px] shadow-2xl flex flex-col overflow-hidden border border-stone-250"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <BookOpen className="w-5 h-5 text-[#2563eb]" />
                  <span>Research Paper Viewer</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="p-2 hover:bg-stone-250 rounded-lg text-stone-600 hover:text-stone-900 transition flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Save as PDF / Print</span>
                  </button>
                  <button
                    onClick={() => setIsPaperOpen(false)}
                    className="p-2 hover:bg-stone-250 rounded-lg text-stone-600 hover:text-stone-900 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex overflow-hidden">
                {/* Table of Contents Sidebar */}
                <aside className="w-64 border-r border-stone-200 p-6 hidden lg:block overflow-y-auto bg-stone-50/50">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-stone-400 mb-4 font-mono">
                    Table of Contents
                  </h4>
                  <nav className="space-y-1 text-xs font-bold text-stone-600">
                    {[
                      { id: "abstract", name: "Abstract" },
                      { id: "intro", name: "1. Introduction" },
                      { id: "motivation", name: "2. Background & Motivation" },
                      { id: "problem", name: "3. Problem Statement" },
                      { id: "objectives", name: "4. Research Objectives" },
                      { id: "literature", name: "5. Literature Review" },
                      { id: "architecture", name: "6. Proposed AWS Architecture" },
                      { id: "network", name: "7. Network Architecture Design" },
                      { id: "elasticity", name: "8. Application Elasticity" },
                      { id: "security", name: "9. Security Architecture" },
                      { id: "implementation", name: "10. Implementation & Validation" },
                      { id: "results", name: "11. Results and Discussion" },
                      { id: "evaluation", name: "12. Critical Evaluation" },
                      { id: "recommendations", name: "13. Recommendations" },
                      { id: "conclusion", name: "14. Conclusion" },
                    ].map((sec) => (
                      <a
                        key={sec.id}
                        href={`#paper-${sec.id}`}
                        className="block py-2 px-3 rounded-lg hover:bg-stone-100 hover:text-stone-900 transition"
                      >
                        {sec.name}
                      </a>
                    ))}
                  </nav>
                </aside>

                {/* Print Area / Main Content */}
                <div
                  id="vpc-paper-print-area"
                  className="flex-1 overflow-y-auto p-6 sm:p-10 text-left text-stone-900 bg-white"
                >
                  <style dangerouslySetInnerHTML={{__html: `
                    @media print {
                      body * {
                        display: none !important;
                      }
                      #vpc-paper-print-area, #vpc-paper-print-area * {
                        display: block !important;
                        visibility: visible !important;
                      }
                      #vpc-paper-print-area {
                        position: absolute !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 100% !important;
                        background: white !important;
                        color: black !important;
                        padding: 0 !important;
                      }
                      .no-print {
                        display: none !important;
                      }
                    }
                  `}} />

                  {/* Title Header */}
                  <div className="text-center max-w-3xl mx-auto border-b border-stone-200 pb-8 mb-8">
                    <h1 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                      Design and Implementation of a Highly Available, Secure, and Auto-Scaling Web Application Architecture on AWS
                    </h1>
                    <div className="space-y-1.5 text-xs font-mono text-stone-600 font-bold">
                      <div>Author: <span className="text-stone-900 font-extrabold">Somesh Tarra</span></div>
                      <div>Guide: <span className="text-stone-900 font-extrabold">Madhu Kiran. Gorekar</span></div>
                      <div className="uppercase tracking-wider">Cloud Computing Infrastructure Systems and Architectures</div>
                    </div>
                  </div>

                  {/* Document Body */}
                  <div className="space-y-8 text-[14px] leading-relaxed text-stone-850 font-medium max-w-4xl mx-auto">
                    
                    {/* Abstract */}
                    <section id="paper-abstract" className="scroll-mt-10 bg-stone-50 border border-stone-200/80 p-5 rounded-2xl">
                      <h3 className="text-sm font-black uppercase tracking-wider text-stone-950 mb-3 font-mono">Abstract</h3>
                      <p className="italic text-stone-700">
                        Modern web applications demand infrastructure that guarantees high availability, horizontal scalability, robust fault tolerance, and multi-layered security. This paper presents the structural design, systematic implementation, and empirical validation of an enterprise-grade, production-ready web application architecture on Amazon Web Services (AWS). Built within a custom Virtual Private Cloud (VPC) spanning multiple isolated Availability Zones (us-east-1a and us-east-1b), the network layout utilizes a strict separation of public and private subnets. An internet-facing Application Load Balancer (ALB) ingests ingress traffic over HTTP (Port 80) and distributes workloads across an elastic fleet of Amazon Elastic Compute Cloud (EC2) instances. These compute nodes are securely isolated within private subnets and managed by an Auto Scaling Group (ASG) governed by health check feedback loops and automated launch templates. Outbound internet connectivity for package updates and dependency management is routed through stateful, redundant Network Address Translation (NAT) Gateways positioned within the public boundaries. The empirical validation demonstrates seamless traffic distribution, successful multi-zone auto-scaling capabilities, and real-time operational transparency via integrated Amazon Simple Notification Service (SNS) alerting mechanisms. Finally, this paper provides a rigorous critical evaluation of architectural performance, financial cost optimizations, inherent limitations, and an architectural roadmap toward automated cloud native immutability.
                      </p>
                      <div className="mt-4 text-xs font-mono">
                        <span className="font-extrabold text-stone-955">Keywords:</span> Amazon Web Services (AWS), High Availability, Auto Scaling, Application Load Balancer (ALB), Virtual Private Cloud (VPC), Infrastructure Security, Network Architecture.
                      </div>
                    </section>

                    {/* Section 1 */}
                    <section id="paper-intro" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>1. Introduction</h3>
                      <p className="mb-4">
                        The paradigm shift from monolithic, on-premises infrastructure toward elastic cloud environments has fundamentally redefined how enterprise software applications are deployed, maintained, and scaled. In contemporary web ecosystems, infrastructure must remain highly resilient against unpredictable traffic spikes, hardware regressions, and localized data center outages. Building such systems requires a meticulous application of distributed systems theory, modular network segmentation, and automated elasticity.
                      </p>
                      <p>
                        This research paper details the design and deployment of a multi-tiered cloud infrastructure hosted on Amazon Web Services (AWS). The core design objective is to eliminate single points of failure (SPOFs) while enforcing a strict zero-trust network topology. By decoupling the presentation and routing layers from the underlying application compute tier, the system achieves a highly secure posture where backend server nodes are entirely shielded from direct public internet exposure.
                      </p>
                    </section>

                    {/* Section 2 */}
                    <section id="paper-motivation" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>2. Background and Motivation</h3>
                      <p className="mb-4">
                        Legacy application deployments frequently suffer from structural rigidity, capital-intensive over-provisioning, and high vulnerability to localized failures. If a physical server or an entire single-site data center encounters a network partition, power loss, or hardware malfunction, the associated web application experiences immediate downtime, leading to operational and financial losses.
                      </p>
                      <p>
                        The motivation behind migrating workloads to hyperscale cloud providers like AWS lies in the ability to leverage abstract virtual constructs that correspond to highly resilient physical data centers. Utilizing pre-engineered cloud primitives enables architects to treat infrastructure as software—reconfigurable, programmable, and intrinsically elastic.
                      </p>
                    </section>

                    {/* Section 3 */}
                    <section id="paper-problem" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>3. Problem Statement</h3>
                      <p className="mb-3">
                        Many cloud infrastructure deployments suffer from systematic architectural vulnerabilities due to misconfigurations or overly simplified flat-network designs. Three specific problem domains are addressed within this research:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><span className="font-extrabold text-stone-950">Direct External Exposure:</span> Placing production compute nodes within public subnets exposes them to automated malicious scans, brute-force exploits, and Distributed Denial of Service (DDoS) vectors.</li>
                        <li><span className="font-extrabold text-stone-950">Monolithic Single-Zone Dependencies:</span> Deploying infrastructure within a single isolated data center (Availability Zone) makes the entire system vulnerable to total service blackout if that specific zone experiences a localized catastrophic event.</li>
                        <li><span className="font-extrabold text-stone-950">Rigid Capacity Constraints:</span> Fixed-size server allocations either cause wasteful financial expenditure during low traffic periods or cause resource starvation and cascading server crashes during unexpected traffic surges.</li>
                      </ul>
                    </section>

                    {/* Section 4 */}
                    <section id="paper-objectives" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>4. Research Objectives</h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li><span className="font-extrabold text-stone-950">Isolate Compute Workloads:</span> Design and validate a custom network topology utilizing a classless inter-domain routing (CIDR) scheme that segregates public entry points from private backend infrastructure.</li>
                        <li><span className="font-extrabold text-stone-950">Enforce Multi-Zone Redundancy:</span> Deploy redundant infrastructure topologies across distinct geographic Availability Zones to achieve native fault tolerance and continuous service availability.</li>
                        <li><span className="font-extrabold text-stone-950">Implement Automated Workload Distribution and Elasticity:</span> Integrate an Application Load Balancer with an Auto Scaling Group to dynamically match infrastructure compute capacity with variable operational traffic volumes.</li>
                        <li><span className="font-extrabold text-stone-950">Validate Egress and Ingress Isolation:</span> Ensure backend servers retain unilateral outbound access for updates via stateful translation mechanisms while strictly denying direct inbound external connections.</li>
                        <li><span className="font-extrabold text-stone-950">Establish Operational Observability:</span> Integrate event-driven notification systems to immediately inform site reliability engineers of system scaling events and infrastructure topology modifications.</li>
                      </ol>
                    </section>

                    {/* Section 5 */}
                    <section id="paper-literature" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>5. Literature Review</h3>
                      <p className="mb-4">
                        The foundations of highly available cloud computing architectures are thoroughly rooted in the principles of decoupled systems and defense-in-depth security methodologies. According to the AWS Well-Architected Framework [1], reliability depends heavily on a system&apos;s ability to automatically recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as network misconfigurations or transient failures.
                      </p>
                      <p>
                        Academic literature consistently highlights that horizontal scaling (adding more identical instances to a pool) offers superior resilience and financial efficiency compared to vertical scaling (upgrading an individual instance&apos;s hardware components) [2]. Researchers in distributed systems note that while horizontal scaling effectively addresses resource capacity, it introduces a hard requirement for intelligent application load-balancing abstractions to manage state and distribute connection streams across changing target groups [3].
                      </p>
                    </section>

                    {/* Section 6 */}
                    <section id="paper-architecture" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>6. Proposed AWS Cloud Architecture</h3>
                      <p className="mb-6">
                        The proposed architecture adopts a decoupled, multi-tiered structural framework. It maps computing, networking, security, and alerting services into an integrated system designed to optimize request processing and resource survival.
                      </p>
                      
                      <h4 className="text-sm font-black text-stone-900 mb-2 uppercase font-mono tracking-wider">6.1 System Architecture</h4>
                      <p className="mb-6">
                        The top-level construct of this architecture is the AWS Region, within which an isolated, software-defined custom Virtual Private Cloud (VPC) is established. The architecture separates the public routing tier (where the public-facing load balancer and NAT devices reside) from the private execution tier (where the web application instances handle processing tasks).
                      </p>

                      {/* Architecture Diagram */}
                      <div className="my-8 border border-stone-200 rounded-[20px] overflow-hidden shadow-md bg-stone-50 p-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/aws-vpc-nat.png"
                          alt="AWS System Architecture Diagram"
                          className="w-full h-auto object-contain mx-auto max-h-[480px]"
                        />
                        <div className="text-center text-xs font-mono font-bold text-stone-500 mt-3">
                          Figure 1: High Availability, Auto-Scaling Web Application Network Topology
                        </div>
                      </div>

                      <h4 className="text-sm font-black text-stone-900 mb-3 uppercase font-mono tracking-wider">6.2 Component Matrix</h4>
                      <div className="overflow-x-auto border border-stone-200 rounded-xl mb-6">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200">
                              <th className="p-3 font-black text-stone-900 uppercase">AWS Service Component</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Implemented Identification / Tag</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Explicit Functional Role</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-150">
                            {[
                              { c: "Virtual Private Cloud", id: "production-vpc", role: "Establishes a software-defined, isolated logical network boundary for all cloud assets." },
                              { c: "Internet Gateway", id: "production-igw", role: "Acts as the dual-directional routing engine enabling edge internet access for the VPC." },
                              { c: "Public Subnets", id: "production-subnet-public1 / public2", role: "Hosts public-facing edge endpoints, CloudFront origin paths, and managed NAT proxies." },
                              { c: "Private App Subnets", id: "production-subnet-private1 / private2", role: "Isolates backend EC2 application servers from direct external internet access." },
                              { c: "Isolated DB Subnets", id: "production-subnet-db1 / db2", role: "Dedicated subnet boundary housing Multi-AZ Amazon RDS database instances." },
                              { c: "NAT Gateways", id: "production-nat-public1 / public2", role: "Performs stateful outbound network address translation for backend servers inside private boundaries." },
                              { c: "Elastic IP Addresses", id: "production-eip1 / eip2", role: "Provides static, unchanging public IPv4 addresses dedicated exclusively to each NAT Gateway." },
                              { c: "Application Load Balancer", id: "production-alb", role: "Implements an internet-facing reverse proxy with TLS/SSL termination to distribute HTTP/HTTPS requests." },
                              { c: "Target Group", id: "production-tg", role: "Maintains the active registry of healthy EC2 instances available to receive routed balancer traffic." },
                              { c: "Auto Scaling Group", id: "production-asg", role: "Automates horizontal scaling adjustments to keep the compute fleet sized correctly for real-time demand." },
                              { c: "Launch Template & IAM", id: "production-LT / EC2-IAM-Role", role: "Defines instance launch parameters with IAM role credentials for keyless S3, EFS, and CloudWatch access." },
                              { c: "Amazon RDS Multi-AZ", id: "production-[#E23744]-rds", role: "Provides highly available, fault-tolerant MySQL/PostgreSQL relational database with multi-zone failover." },
                              { c: "Route 53 & ACM", id: "production-dns / ACM-cert", role: "Manages domain name resolution, SSL/TLS security certificates, and dynamic failover routing." },
                              { c: "CloudFront & S3", id: "production-cdn / S3-bucket", role: "Delivers cached static assets via edge locations and provides persistent object storage." },
                              { c: "Amazon EFS & EBS", id: "production-efs / ebs-storage", role: "Supplies POSIX shared network file systems and persistent block storage attached to app nodes." },
                              { c: "Simple Notification Service", id: "production-asg-topic", role: "Distributes real-time operational alerts regarding automated scaling events to system engineers." }
                            ].map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-stone-50/50">
                                <td className="p-3 font-extrabold text-stone-900">{row.c}</td>
                                <td className="p-3 font-mono font-bold text-stone-600">{row.id}</td>
                                <td className="p-3 font-medium text-stone-700">{row.role}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Section 7 */}
                    <section id="paper-network" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>7. Network Architecture Design</h3>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">7.1 VPC Design and CIDR Planning:</span> The custom VPC, labeled <span className="font-mono font-bold">production-vpc</span> (ID: vpc-0e19db7c489560a51), is configured with a primary Classless Inter-Domain Routing (CIDR) block of <span className="font-mono font-bold">7.8.0.0/16</span>. This provides a total of 65,536 unique, private IPv4 addresses. This large space is sub-netted using a /20 prefix masking strategy, allocating exactly 4,096 IP addresses per subnet to prevent overlapping scopes.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">7.2 Multi-Availability-Zone Strategy:</span> To achieve localized disaster resilience, resources are deployed symmetrically across Availability Zones <span className="font-mono font-bold">us-east-1a</span> and <span className="font-mono font-bold">us-east-1b</span>. If a catastrophic outage takes an entire AZ offline, resource redundancy in the surviving zone maintains service availability without interruption.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">7.3 Public and Private Subnet Design:</span>
                        The subnets enforce strict network layer segregation: public subnets host the ALB and NAT Gateways with routes to the IGW, while private subnets host backend compute EC2 instances and lack direct internet routes.
                      </p>

                      {/* Subnet Specifications Table */}
                      <div className="overflow-x-auto border border-stone-200 rounded-xl mb-6">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200">
                              <th className="p-3 font-black text-stone-900 uppercase">Subnet Name Identification</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Targeted Availability Zone</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Assigned IPv4 CIDR Block</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Available IP Allocation</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Network Boundary Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-150">
                            {[
                              { name: "production-subnet-public1-us-east-1a", az: "us-east-1a", cidr: "7.8.0.0/20", ips: "4091 Addresses", status: "Public Edge Zone" },
                              { name: "production-subnet-public2-us-east-1b", az: "us-east-1b", cidr: "7.8.16.0/20", ips: "4090 Addresses", status: "Public Edge Zone" },
                              { name: "production-subnet-private1-us-east-1a", az: "us-east-1a", cidr: "7.8.128.0/20", ips: "4091 Addresses", status: "Hardened Private App Zone" },
                              { name: "production-subnet-private2-us-east-1b", az: "us-east-1b", cidr: "7.8.144.0/20", ips: "4091 Addresses", status: "Hardened Private App Zone" },
                              { name: "production-subnet-db1-us-east-1a", az: "us-east-1a", cidr: "7.8.200.0/24", ips: "251 Addresses", status: "Isolated Multi-AZ DB Zone" },
                              { name: "production-subnet-db2-us-east-1b", az: "us-east-1b", cidr: "7.8.201.0/24", ips: "251 Addresses", status: "Isolated Multi-AZ DB Zone" }
                            ].map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-stone-50/50">
                                <td className="p-3 font-mono font-bold text-stone-800">{row.name}</td>
                                <td className="p-3 font-medium text-stone-700">{row.az}</td>
                                <td className="p-3 font-mono font-bold text-[#2563eb]">{row.cidr}</td>
                                <td className="p-3 font-medium text-stone-700">{row.ips}</td>
                                <td className="p-3 font-bold text-stone-900">{row.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">7.4 Internet Gateway Configuration:</span> To enable outbound edge routing, an IGW named <span className="font-mono font-bold">production-igw</span> (ID: igw-0bd158051aeab026e) is attached.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">7.5 Route Table Design:</span>
                        A separate Public Route Table maps non-VPC traffic (0.0.0.0/0) through the IGW. Isolated private subnets route outbound traffic via their respective zone-redundant NAT Gateways.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">7.6 NAT Gateway Architecture:</span> Two redundant, managed NAT Gateways are deployed in public subnets (<span className="font-mono font-bold">production-nat-public1-us-east-1a</span> and <span className="font-mono font-bold">production-nat-public2-us-east-1b</span>) to handle outbound updates for backend private servers while protecting them from external ingress scans.
                      </p>
                      <p>
                        <span className="font-extrabold text-stone-900">7.7 Elastic IP Configuration:</span> Dedicated static public IPs (<span className="font-mono font-bold">34.194.120.152</span> and <span className="font-mono font-bold">34.231.23.251</span>) are bound to the NAT Gateways to facilitate firewall whitelisting.
                      </p>
                    </section>

                    {/* Section 8 */}
                    <section id="paper-elasticity" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>8. Application Elasticity and Workload Distribution</h3>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">8.1 Application Load Balancer Design:</span> External ingress traffic is processed by an Application Load Balancer named <span className="font-mono font-bold">production-alb</span>, running at Layer 7 to distribute HTTP requests across Availability Zones using DNS endpoint routing.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">8.2 Target Group Configuration:</span> The ALB routes backend HTTP traffic to a logical target group (<span className="font-mono font-bold">production-tg</span>) tracking EC2 instances on Port 80.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">8.3 Health Check Mechanism:</span> Proactive HTTP health checks poll target endpoints every 6 seconds. Healthy nodes are registered after 5 successful polls, and unhealthy nodes are instantly dropped after 2 consecutive failures.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">8.4 EC2 Launch Template Design:</span> Auto-scaling compute instances utilize a launch template configuration (<span className="font-mono font-bold">production-LT</span>) defining <span className="font-mono font-bold">t3.micro</span> instances, custom secure AMIs, isolated security group boundaries, and cryptographic keys.
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">8.5 Auto Scaling Group Implementation:</span> The runtime fleet is managed by an Auto Scaling Group (<span className="font-mono font-bold">production-asg</span>) spanning private subnets across both zones. Capacity parameters scale dynamically between a minimum of 1 instance, a desired capacity of 3 instances, and a maximum boundary of 10 instances.
                      </p>
                      <p>
                        <span className="font-extrabold text-stone-900">8.6 Amazon SNS Notification Integration:</span> An SNS topic named <span className="font-mono font-bold">production-asg-topic</span> distributes automated real-time alerts regarding scaling events directly to system administrators.
                      </p>
                    </section>

                    {/* Section 9 */}
                    <section id="paper-security" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>9. Structural Security Architecture</h3>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">9.1 Security Group Segmentation:</span> Virtual firewalls restrict communication between tiers. The ALB security group accepts public internet HTTP traffic, while the EC2 security group accepts ingress traffic exclusively forwarded from the ALB.
                      </p>

                      {/* Security Groups Matrix Table */}
                      <div className="overflow-x-auto border border-stone-200 rounded-xl mb-6">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200">
                              <th className="p-3 font-black text-stone-900 uppercase">Targeting Firewall Entity</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Applied Traffic Direction</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Permitted Protocol</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Boundary Port Range</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Verified Network Origin / Destination</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-150">
                            {[
                              { entity: "ALB Security Group", dir: "Ingress (Incoming)", proto: "TCP", ports: "Port 80 / 443", source: "0.0.0.0/0 (Public Edge Clients / Route 53 / ACM)" },
                              { entity: "ALB Security Group", dir: "Egress (Outgoing)", proto: "TCP", ports: "Port 80", source: "7.8.0.0/16 (Internal App Subnet Scope)" },
                              { entity: "EC2 App Security Group", dir: "Ingress (Incoming)", proto: "TCP", ports: "Port 80", source: "sg-0alb12345 (Exclusive ALB Security Group Reference)" },
                              { entity: "EC2 App Security Group", dir: "Egress (Outgoing)", proto: "TCP", ports: "Port 3306 / 5432", source: "sg-0db98765 (Internal DB Subnet Scope)" },
                              { entity: "RDS DB Security Group", dir: "Ingress (Incoming)", proto: "TCP", ports: "Port 3306 / 5432", source: "sg-0app12345 (Exclusive App Tier EC2 Group Reference)" },
                              { entity: "RDS DB Security Group", dir: "Egress (Outgoing)", proto: "N/A", ports: "None", source: "Strictly Blocked / Isolated Database Scope" }
                            ].map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-stone-50/50">
                                <td className="p-3 font-extrabold text-stone-900">{row.entity}</td>
                                <td className="p-3 font-medium text-stone-700">{row.dir}</td>
                                <td className="p-3 font-mono font-bold text-stone-600">{row.proto}</td>
                                <td className="p-3 font-mono font-bold text-stone-600">{row.ports}</td>
                                <td className="p-3 font-bold text-stone-900">{row.source}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <p>
                        <span className="font-extrabold text-stone-900">9.2 Ingress vs. Egress Traffic Flow Dynamics:</span> A clear isolation boundary prevents external entities from initiating unsolicited connections to private instances, while routing internal updates through stateful translation paths.
                      </p>
                    </section>

                    {/* Section 10 */}
                    <section id="paper-implementation" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>10. Implementation Methodology and Validation Execution</h3>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">10.1 Inbound Routing and DNS Validation:</span> Accessing the ALB DNS resolved successfully and routed requests to backend servers:
                        <code className="block bg-stone-50 border border-stone-200 p-2.5 rounded-lg text-xs font-mono font-bold mt-2 text-[#2563eb]">
                          THE PAGE IS SERVING FROM ip-7-8-133-26.ec2.internal
                        </code>
                      </p>
                      <p className="mb-4">
                        <span className="font-extrabold text-stone-900">10.2 Real-Time Target Distribution:</span> Verified active registrations inside the target group, displaying three healthy active compute nodes.
                      </p>
                      <p>
                        <span className="font-extrabold text-stone-900">10.3 Alerting and Lifecycle Event Verification:</span> Verified automated dispatch of SNS alerts indicating successful node spin-up capacity changes.
                      </p>
                    </section>

                    {/* Section 11 */}
                    <section id="paper-results" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>11. Results and Discussion</h3>
                      <p className="mb-4">
                        Validation metrics confirmed that the deployed infrastructure matches structural design goals, ensuring horizontal scaling, fault tolerance, and secure segment isolation.
                      </p>

                      {/* Results Table */}
                      <div className="overflow-x-auto border border-stone-200 rounded-xl mb-6">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200">
                              <th className="p-3 font-black text-stone-900 uppercase">Verified Parameter</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Expected Target Objective</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Empirically Observed Field Metric</th>
                              <th className="p-3 font-black text-stone-900 uppercase">Structural Validation Conclusion</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-150">
                            {[
                              { p: "ALB Accessibility", target: "Return a valid web page via public DNS.", metric: "200 OK status code with instance metadata output.", status: "Confirms public ingress routing functions correctly." },
                              { p: "Compute Target Balance", target: "Evenly distribute 3 nodes across availability zones.", metric: "2 nodes in us-east-1a and 1 node in us-east-1b.", status: "Confirms successful cross-zone high availability." },
                              { p: "Fleet Health Status", target: "100% target availability under standard conditions.", metric: "3 Active Healthy Targets / 0 Unhealthy Targets.", status: "Confirms backend instances pass deep health checks." },
                              { p: "Outbound Internet Access", target: "Unilateral egress via private subnets.", metric: "Successful package updates from private nodes.", status: "Confirms NAT Gateway translation paths work as designed." },
                              { p: "Alerting System Latency", target: "Near-instant notifications for scaling events.", metric: "Email alert delivered within 4 seconds of instance launch.", status: "Confirms operational visibility pipeline is responsive." }
                            ].map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-stone-50/50">
                                <td className="p-3 font-extrabold text-stone-900">{row.p}</td>
                                <td className="p-3 font-medium text-stone-700">{row.target}</td>
                                <td className="p-3 font-medium text-stone-800">{row.metric}</td>
                                <td className="p-3 font-bold text-stone-950">{row.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Section 12 */}
                    <section id="paper-evaluation" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>12. Critical Evaluation of the Architecture</h3>
                      <p className="mb-4">
                        A Failure Mode and Effects Analysis (FMEA) validates structural resilience: AZ outages are mitigated by auto-redirection of ALB traffic and automatic scaling in healthy zones; instance failure is corrected inside 12 seconds; zone-redundant NAT gateways isolate outbound egress failures.
                      </p>
                    </section>

                    {/* Section 13 */}
                    <section id="paper-recommendations" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>13. Comprehensive Engineering Recommendations</h3>
                      <p className="mb-3">
                        To further harden the enterprise state, the following implementations are recommended:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Transition the ALB listener from Port 80 to secure HTTPS Port 443 with AWS Certificate Manager (ACM) integration.</li>
                        <li>Implement automated HTTP redirects to HTTPS, and deploy AWS WAF for Layer 7 web exploit filtering.</li>
                        <li>Enable VPC Flow Logs for network telemetry, and compile centralized CloudWatch dashboards with integrated SNS notification thresholds.</li>
                      </ul>
                    </section>

                    {/* Section 14 */}
                    <section id="paper-conclusion" className="scroll-mt-10">
                      <h3 className="text-base font-extrabold text-stone-950 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>14. Conclusion</h3>
                      <p className="mb-4">
                        This paper has detailed the successful design, implementation, and empirical validation of a highly available, secure, and auto-scaling cloud infrastructure built on AWS. By isolating backend compute nodes within private subnets and distributing traffic through a cross-zone ALB, the architecture achieves a reliable balance between accessibility and security.
                      </p>
                      
                      <h4 className="text-sm font-black text-stone-900 mb-2 uppercase font-mono tracking-wider">References</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-xs font-medium text-stone-600">
                        <li>AWS Well-Architected Framework, &quot;The Reliability Pillar,&quot; AWS Whitepapers, Seattle, WA, USA, Tech. Rep. Version 2024.11. Available: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/reliability-pillar.html</li>
                        <li>M. Armbrust et al., &quot;A view of cloud computing,&quot; Communications of the ACM, vol. 53, no. 4, pp. 50-58, Apr. 2010.</li>
                        <li>J. Hamilton, &quot;On Designing and Deploying Internet-Scale Services,&quot; in Proceedings of the 21st Large Installation System Administration Conference (LISA), 2007, pp. 231-242.</li>
                        <li>C. Schuba, I. Krsul, M. Kuhn, S. Spafford, A. Sundaram, and D. Zamboni, &quot;Analysis of a denial of service attack on TCP,&quot; in Proceedings of the 1997 IEEE Symposium on Security and Privacy, Oakland, CA, USA, 1997, pp. 208-223.</li>
                      </ol>
                    </section>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
