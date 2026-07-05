"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 relative overflow-hidden bg-grid-fine">
      {/* Background glow orb */}
      <div className="glow-blur glow-blue float-orb w-[250px] h-[250px] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-15" />

      {/* Portfolio Showcase Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 z-10 relative">
        <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-700">
          {/* Glow border effect on hover */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
          
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/portfolio-banner.jpg"
              alt="Somesh Tarra — Portfolio Showcase"
              width={1200}
              height={630}
              quality={90}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority={false}
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <span
              className="font-bold text-lg tracking-wider text-gradient-blue"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Someswararao Tarra
            </span>
            <span className="text-xs text-slate-500 font-semibold tracking-wide uppercase font-mono">
              Cloud & DevOps Engineer | Data Science Professional
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/someshtarra"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 shadow-md"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/someswararao-tarra-575b63203"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:someswararaotarra@gmail.com"
              className="group p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 shadow-md"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            &copy; {currentYear} Someswararao Tarra. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
            <span>Built with Next.js, Tailwind CSS & Framer Motion</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
