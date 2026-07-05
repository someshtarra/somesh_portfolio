"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Labs", href: "#labs" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Gallery", href: "#certificates-gallery" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="group relative flex items-center justify-center font-mono text-xl font-bold tracking-wider text-white transition duration-300"
              aria-label="Someswararao Tarra Home"
            >
              <span className="relative z-10 text-gradient-blue group-hover:opacity-80 transition duration-300"
                style={{ fontFamily: "var(--font-outfit)" }}>
                ST
              </span>
              {/* Glow ring */}
              <span className="absolute -inset-2.5 rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 blur-sm transition duration-400" />
              {/* Dot accent */}
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-80" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative px-3.5 py-2 text-[13px] font-medium transition-all duration-200 group rounded-lg ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/5"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {/* Underline glow */}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 origin-center ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Resume CTA */}
            <div className="hidden lg:block">
              <a
                href="https://drive.google.com/file/d/1eg58aLQpJIHPvI5hxmGzMMp-T8uq7Nmg/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-white overflow-hidden rounded-full border border-blue-500/30 hover:border-blue-400/60 bg-blue-500/10 hover:bg-blue-500/18 shadow-md shadow-blue-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#020817] group"
              >
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FileText className="w-3.5 h-3.5 text-blue-400 relative z-10" />
                <span className="relative z-10">Resume / CV</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[60px] z-40 py-5 px-4 flex flex-col space-y-1 lg:hidden"
            style={{
              background: "rgba(2, 8, 23, 0.96)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.a
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500/10 text-white border border-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}
            <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5 mt-2">
              <a
                href="https://drive.google.com/file/d/1eg58aLQpJIHPvI5hxmGzMMp-T8uq7Nmg/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-[11px] font-semibold uppercase tracking-widest text-white border border-blue-500/30 rounded-xl hover:border-blue-500/60 bg-blue-500/10 hover:bg-blue-500/20 transition duration-300"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                View Resume / CV
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-[11px] font-semibold uppercase tracking-widest text-slate-300 border border-slate-800 rounded-xl hover:border-slate-700 bg-slate-900/60 hover:bg-slate-900 transition duration-300"
              >
                Contact / Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
