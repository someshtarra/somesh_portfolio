"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Server, Code, FileText } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      accent: "card-accent-purple",
      title: "M.Sc. Data Science — VIT Vellore",
      desc: "Completed M.Sc. in Data Science in 2025 from VIT Vellore (CGPA 8.60), building a strong foundation in statistics, ML, and programming.",
    },
    {
      icon: <Server className="w-6 h-6 text-blue-400" />,
      accent: "card-accent-blue",
      title: "Cloud, DevOps & Linux Enthusiast",
      desc: "Hands-on with AWS EC2/VPC/IAM/S3, Linux administration, Bash scripting, and automation pipelines. Passionate about infrastructure and cybersecurity.",
    },
    {
      icon: <Code className="w-6 h-6 text-teal-400" />,
      accent: "card-accent-teal",
      title: "Data-Driven Developer",
      desc: "Proficient in Python, R, SQL, Pandas, NumPy, Power BI, and ML frameworks — delivering predictive models and data insights from real datasets.",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-slate-950/30" />
      <div className="glow-blur glow-purple float-orb-slow w-[400px] h-[400px] top-0 right-0 translate-x-1/3 opacity-30" />
      <div className="glow-blur glow-blue float-orb w-[300px] h-[300px] bottom-0 left-0 -translate-x-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <User className="w-3.5 h-3.5" />
            About Me
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            My Journey &{" "}
            <span className="text-gradient-blue">Mission</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)" }} />
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
              {/* Multi-layer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-600/15 to-cyan-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/30 to-purple-600/25 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Animated border */}
              <div
                className="absolute -inset-[2px] rounded-2xl opacity-50 group-hover:opacity-100 transition duration-700"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #a855f7, #22d3ee, #3b82f6)",
                  backgroundSize: "300% 300%",
                  animation: "borderRotate 4s ease infinite",
                }}
              />

              {/* Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-side.jpg"
                  alt="Someswararao Tarra"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                />
                {/* Inner vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* View Resume Button */}
            <div className="mt-8 w-full flex justify-center">
              <a
                href="https://drive.google.com/file/d/1eg58aLQpJIHPvI5hxmGzMMp-T8uq7Nmg/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold rounded-xl border border-blue-500/25 hover:border-blue-400/50 bg-blue-500/8 hover:bg-blue-500/15 text-slate-200 hover:text-white transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FileText className="w-4 h-4 text-blue-400 relative z-10" />
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
              className="text-2xl sm:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Aspiring IT Professional bridging Cloud Infrastructure and Data-Driven Decision Making.
            </h3>

            <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
              <p>
                Hi! I&apos;m Someswararao Tarra, based in{" "}
                <span className="text-slate-200 font-medium">Hyderabad, Telangana, India</span>. I recently completed my{" "}
                <span className="text-slate-200 font-medium">M.Sc. in Data Science (2025) from VIT Vellore (CGPA 8.60)</span> and
                hold a B.Sc. in Mathematics, Physics & Computer Science from Padmavathi Degree College (CGPA 8.50).
              </p>
              <p>
                I have hands-on experience in{" "}
                <span className="text-slate-200 font-medium">Linux Administration, Bash Scripting, Git/GitHub, AWS fundamentals, Python, SQL, Data Analytics, and Machine Learning</span>.
                During my internship at SentinelGuard AI, I engineered ML models that improved predictive accuracy by 15% and processed 5M+ records using Python and SQL.
              </p>
              <p>
                I&apos;m passionate about <span className="text-slate-200 font-medium">automation, cloud technologies, cybersecurity, and data-driven decision-making</span> — building systems that host, process, and secure data at scale.
              </p>
              <p className="text-blue-300 font-medium">
                Seeking entry-level opportunities in Linux Administration, DevOps, SOC Analyst, or Data Science roles where I can add immediate value and continue growing technically.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-5 pt-5 border-t border-white/5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-slate-600 font-mono font-bold block mb-1">Location</span>
                <p className="text-slate-300 font-semibold">Hyderabad, Telangana, India</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-slate-600 font-mono font-bold block mb-1">Specialization</span>
                <p className="text-slate-300 font-semibold">Cloud / DevOps / Data Science / ML</p>
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
              className={`${card.accent} glass-card p-6 rounded-2xl text-left group hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl border border-white/8 shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(8,14,30,0.8)" }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 text-[15px] leading-snug">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
