"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] border-t border-stone-800 relative overflow-hidden">

      {/* Portfolio Showcase Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 z-10 relative">
        <div className="group relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl transition-all duration-700">
          
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
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C1917] to-transparent" />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <span
              className="font-black text-lg tracking-wider text-gradient-blue uppercase"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Someswararao Tarra
            </span>
            <span className="text-[10px] text-stone-400 font-bold tracking-wider uppercase font-mono">
              Cloud & DevOps Engineer | Data Science Professional
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/someshtarra"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-full bg-stone-800 border border-stone-700 text-stone-400 hover:text-white hover:bg-[#E23744] hover:border-transparent transition-all duration-300 shadow-md"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/someswararao-tarra-575b63203"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-full bg-stone-800 border border-stone-700 text-stone-400 hover:text-white hover:bg-[#E23744] hover:border-transparent transition-all duration-300 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:someswararaotarra@gmail.com"
              className="group p-2.5 rounded-full bg-stone-800 border border-stone-700 text-stone-400 hover:text-white hover:bg-[#E23744] hover:border-transparent transition-all duration-300 shadow-md"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="mt-10 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-bold">
          <div>
            &copy; {currentYear} Someswararao Tarra. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-stone-400">
            <span>Built with Next.js, Tailwind CSS & Framer Motion</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
