"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Server, Code, FileText } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      accent: "card-accent-purple",
      iconBg: "#FAF5FF",
      title: "M.Sc. Data Science — VIT Vellore",
      desc: "Completed M.Sc. in Data Science in 2025 from VIT Vellore (CGPA 8.60), building a strong foundation in statistics, ML, and programming.",
    },
    {
      icon: <Server className="w-6 h-6 text-[#E23744]" />,
      accent: "card-accent-blue",
      iconBg: "#FFF0F0",
      title: "Cloud, DevOps & Linux Enthusiast",
      desc: "Hands-on with AWS (EC2, VPC, RDS, IAM, Route 53, ACM, CloudFront, S3, EFS, EBS), Linux administration, Bash scripting, and automation pipelines.",
    },
    {
      icon: <Code className="w-6 h-6 text-[#FF7E00]" />,
      accent: "card-accent-amber",
      iconBg: "#FFF7ED",
      title: "Data-Driven Developer",
      desc: "Proficient in Python, R, SQL, Pandas, NumPy, Power BI, and ML frameworks — delivering predictive models and data insights from real datasets.",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#FCFBF9]">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-500/8 to-blue-500/5 blur-xl top-10 right-[-10%] -z-10 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-[4px] border border-white/20 shadow-md bottom-12 left-[5%] -z-10 pointer-events-none"
      />

      {/* Translucent Scatter Plot SVG */}
      <svg className="absolute left-[8%] top-[15%] w-[200px] h-[120px] -z-10 opacity-[0.04] pointer-events-none select-none hidden lg:block" viewBox="0 0 200 120" fill="none">
        <circle cx="20" cy="90" r="3" fill="#E23744" />
        <circle cx="40" cy="70" r="4" fill="#FF7E00" />
        <circle cx="60" cy="80" r="3" fill="#2563eb" />
        <circle cx="80" cy="50" r="5" fill="#E23744" />
        <circle cx="100" cy="60" r="3.5" fill="#FF7E00" />
        <circle cx="120" cy="30" r="4" fill="#2563eb" />
        <circle cx="140" cy="40" r="3" fill="#E23744" />
        <circle cx="160" cy="20" r="5.5" fill="#FF7E00" />
        <line x1="0" y1="110" x2="180" y2="110" stroke="#78716c" strokeWidth="1" />
        <line x1="10" y1="10" x2="10" y2="120" stroke="#78716c" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <User className="w-3.5 h-3.5" />
            About Me
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            My Journey &{" "}
            <span className="text-gradient-blue">Mission</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center mb-20">

          {/* Left Column: Profile Picture & Resume CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden border-2 border-stone-200 shadow-lg bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-side.jpg"
                  alt="Someswararao Tarra"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                />
              </div>
            </div>

            {/* View Resume Button */}
            <div className="mt-8 w-full flex justify-center">
              <a
                href="https://drive.google.com/file/d/1eg58aLQpJIHPvI5hxmGzMMp-T8uq7Nmg/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full border border-stone-200 bg-white hover:bg-[#FFF0F0] hover:border-[#E23744]/20 text-stone-700 transition-all duration-300 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#E23744] relative z-10" />
                <span className="relative z-10">View Full Resume / CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
          >
            <h3
              className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Aspiring IT Professional bridging Cloud Infrastructure and Data-Driven Decision Making.
            </h3>

            <div className="space-y-4 text-stone-850 font-bold leading-relaxed text-[15px]">
              <p>
                Hi! I&apos;m Someswararao Tarra, based in{" "}
                <span className="text-stone-950 font-black underline decoration-[#E23744]/20">Hyderabad, Telangana, India</span>. I recently completed my{" "}
                <span className="text-stone-950 font-black">M.Sc. in Data Science (2025) from VIT Vellore (CGPA 8.60)</span> and
                hold a B.Sc. in Mathematics, Physics & Computer Science from Padmavathi Degree College (CGPA 8.50).
              </p>
              <p>
                I have hands-on experience in{" "}
                <span className="text-stone-950 font-black">Linux Administration, Bash Scripting, Git/GitHub, AWS fundamentals, Python, SQL, Data Analytics, and Machine Learning</span>.
                During my internship at SentinelGuard AI, I engineered ML models that improved predictive accuracy by 15% and processed 5M+ records using Python and SQL.
              </p>
              <p>
                I&apos;m passionate about <span className="text-stone-950 font-black">automation, cloud technologies, cybersecurity, and data-driven decision-making</span> — building systems that host, process, and secure data at scale.
              </p>
              <p className="text-[#E23744] font-extrabold uppercase tracking-wider text-xs bg-[#FFF0F0] px-4 py-2 rounded-xl inline-flex self-start border border-[#E23744]/10">
                Seeking entry-level opportunities in Linux Administration, DevOps, SOC Analyst, or Data Science roles.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-5 pt-6 border-t border-stone-200">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-600 font-mono font-black block mb-1">Location</span>
                <p className="text-stone-950 font-black">Hyderabad, Telangana, India</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-600 font-mono font-black block mb-1">Specialization</span>
                <p className="text-stone-950 font-black">Cloud / DevOps / Data Science / ML</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="section-divider mb-14" />

        {/* Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className={`${card.accent} glass-card p-6 rounded-[24px] text-left group`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-2xl border border-stone-250 shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: card.iconBg }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 mb-1.5 text-[15px] leading-snug">{card.title}</h3>
                  <p className="text-sm text-stone-800 font-bold leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
