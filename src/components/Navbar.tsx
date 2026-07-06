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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled
            ? "py-3 px-4 lg:px-8"
            : "py-5 px-0"
        }`}
      >
        <div 
          className={`w-full transition-all duration-500 ${
            scrolled
              ? "glass-nav py-2.5 px-6 rounded-full max-w-5xl shadow-lg border border-slate-200/80"
              : "bg-transparent py-2 max-w-7xl px-4 sm:px-6 lg:px-8"
          }`}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="group relative flex items-center justify-center font-mono text-xl font-bold tracking-wider text-[#0B1B3D] transition duration-300"
              aria-label="Someswararao Tarra Home"
            >
              <span className="relative z-10 group-hover:opacity-80 transition duration-300"
                style={{ fontFamily: "var(--font-outfit)" }}>
                ST
              </span>
              {/* Dot accent */}
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#E23744] opacity-80" />
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
                    className={`relative px-4 py-2 text-[13px] font-bold transition-all duration-200 group rounded-full ${
                      isActive
                        ? "text-white"
                        : "text-stone-800 hover:text-stone-950"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E23744] to-[#FF7E00]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
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
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white overflow-hidden rounded-full bg-gradient-to-r from-[#E23744] to-[#FF7E00] hover:opacity-90 shadow-md shadow-[#E23744]/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E23744] focus:ring-offset-2 group"
              >
                <FileText className="w-3.5 h-3.5 text-white/80 relative z-10" />
                <span className="relative z-10">Resume / CV</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2D8CFF] transition-all duration-200"
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
              background: "rgba(252,251,249,0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid #E7E5E4",
              boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
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
                  className={`px-4 py-2.5 text-sm font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#E23744] to-[#FF7E00] text-white"
                      : "text-stone-800 hover:text-stone-900 hover:bg-stone-100/50"
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5 mt-2">
              <a
                href="https://drive.google.com/file/d/1eg58aLQpJIHPvI5hxmGzMMp-T8uq7Nmg/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-[11px] font-bold uppercase tracking-widest text-white rounded-full bg-gradient-to-r from-[#E23744] to-[#FF7E00] hover:opacity-95 transition duration-300"
              >
                <FileText className="w-4 h-4 text-white/80" />
                View Resume / CV
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-[11px] font-bold uppercase tracking-widest text-stone-700 border border-stone-200 rounded-full bg-stone-50 hover:bg-stone-100 transition duration-300"
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
