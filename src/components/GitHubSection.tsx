"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, ArrowUpRight, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "aws-three-tier",
    description: "Multi-AZ highly available 3-tier web application architecture on AWS (EC2, VPC, RDS, IAM, Route 53, ACM, CloudFront, S3, EFS, EBS, ALB, Auto Scaling).",
    html_url: "https://github.com/someshtarra/somesh_portfolio",
    stargazers_count: 0,
    forks_count: 0,
    language: "HCL / Terraform",
  },
  {
    id: 2,
    name: "linux-troubleshooting",
    description: "A compilation of common production-style Linux outage scenarios, resolution log templates, and troubleshooting tools.",
    html_url: "https://github.com/someshtarra/somesh_portfolio",
    stargazers_count: 0,
    forks_count: 0,
    language: "Shell",
  },
  {
    id: 3,
    name: "gdp-prediction",
    description: "Time-series forecasting models using deep learning architectures (TensorFlow/Keras) to analyze and predict national economic metrics.",
    html_url: "https://github.com/someshtarra/somesh_portfolio",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
  },
  {
    id: 4,
    name: "cryptocurrency-prediction",
    description: "Machine learning price forecasting algorithms applied to historical cryptocurrency transaction volumes and exchange prices.",
    html_url: "https://github.com/someshtarra/somesh_portfolio",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
  },
  {
    id: 5,
    name: "customer-churn",
    description: "End-to-end customer retention prediction analytics pipeline utilizing Scikit-learn random forests and hyperparameter optimization.",
    html_url: "https://github.com/someshtarra/somesh_portfolio",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
  },
  {
    id: 6,
    name: "shell-scripts",
    description: "Automated cron logs system backups, disk capacity warnings, health checks, and server monitoring scripts in Bash.",
    html_url: "https://github.com/someshtarra/somesh_portfolio",
    stargazers_count: 0,
    forks_count: 0,
    language: "Shell",
  },
];

const languageStyles: Record<string, { accent: string; bg: string; border: string }> = {
  Python: { accent: "#E23744", bg: "#FFF0F0", border: "#FECDD3" },
  Shell: { accent: "#FF7E00", bg: "#FFF7ED", border: "#FFD8A8" },
  Bash: { accent: "#FF7E00", bg: "#FFF7ED", border: "#FFD8A8" },
  HTML: { accent: "#EC4899", bg: "#FDF2F8", border: "#FBCFE8" },
  CSS: { accent: "#E11D48", bg: "#FFF1F2", border: "#FECDD3" },
  TypeScript: { accent: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
  JavaScript: { accent: "#EAB308", bg: "#FEF9C3", border: "#FEF08A" },
  "HCL / Terraform": { accent: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
};

const getLanguageStyle = (lang: string) => {
  return languageStyles[lang] || { accent: "#64748b", bg: "#F8FAFC", border: "#E2E8F0" };
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/someshtarra/repos?sort=updated&per_page=6");
        if (!res.ok) {
          throw new Error("GitHub API limit exceeded or failed request");
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const mapped: Repo[] = data.map((item: {
            id: number;
            name: string;
            description: string | null;
            html_url: string;
            stargazers_count: number;
            forks: number;
            language: string | null;
          }) => ({
            id: item.id,
            name: item.name,
            description: item.description || "No description provided.",
            html_url: item.html_url,
            stargazers_count: item.stargazers_count,
            forks_count: item.forks,
            language: item.language || "Markdown",
          }));
          setRepos(mapped);
        } else {
          setRepos(fallbackRepos);
        }
      } catch {
        setErrorOccurred(true);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="github-section" className="py-28 relative overflow-hidden bg-[#F7F6F5]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Building In{" "}
            <span className="text-gradient-blue">Public</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        {/* Repos Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card p-6 rounded-[24px] border border-stone-200/60 animate-pulse h-48 flex flex-col justify-between bg-white">
                <div className="space-y-3">
                  <div className="h-4 bg-stone-100 rounded w-2/3"></div>
                  <div className="h-3 bg-stone-100 rounded w-full"></div>
                  <div className="h-3 bg-stone-100 rounded w-5/6"></div>
                </div>
                <div className="h-4 bg-stone-100 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, idx) => {
              const langStyle = getLanguageStyle(repo.language);
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="glass-card rounded-[24px] group text-left flex flex-col justify-between overflow-hidden hover:scale-[1.01] transition-transform bg-white border border-stone-200/60"
                >
                  {/* Top accent border representing language color */}
                  <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${langStyle.accent}, transparent)` }} />
                  
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 text-stone-500">
                        <FolderGit2 className="w-5 h-5" style={{ color: langStyle.accent }} />
                        <span
                          className="text-[10px] font-bold font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-lg border"
                          style={{
                            background: langStyle.bg,
                            borderColor: langStyle.border,
                            color: langStyle.accent,
                          }}
                        >
                          {repo.language}
                        </span>
                      </div>

                      <h3
                        className="font-mono text-[14px] font-bold text-stone-900 mb-2 tracking-wide group-hover:text-[#E23744] transition-colors duration-300 truncate"
                      >
                        {repo.name}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed font-semibold line-clamp-3">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-5 border-t border-stone-200/50 text-[11px] font-mono text-stone-500">
                      <div className="flex gap-4 font-semibold">
                        <span className="flex items-center gap-1 hover:text-stone-900 transition">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1 hover:text-stone-900 transition">
                          <GitFork className="w-3.5 h-3.5 text-blue-400" />
                          {repo.forks_count}
                        </span>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-stone-400 hover:text-stone-950 transition duration-200 font-semibold"
                      >
                        <span>Source</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Info Notification if using local Fallback */}
        {errorOccurred && !loading && (
          <div className="text-center mt-6 text-xs text-stone-500 font-semibold">
            * Displaying offline replica of repositories due to GitHub API rate limits.
          </div>
        )}

        {/* Global profile CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/someshtarra"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-950 shadow-sm transition duration-300"
          >
            <GithubIcon className="w-4 h-4 text-stone-400" />
            <span>Explore Full GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
