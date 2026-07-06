"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, Download, ExternalLink, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  file: string;
  fileType: "pdf" | "image";
  color: string;
  icon: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "October 2025",
    category: "Cloud",
    file: "/certificates/oracle-oci-ai.pdf",
    fileType: "pdf",
    color: "from-red-500/20 to-orange-500/20",
    icon: "☁️",
    description: "Validates foundational knowledge of AI services and capabilities on Oracle Cloud Infrastructure.",
  },
  {
    id: 2,
    title: "Data Science Internship – SentinelGuard AI (VIT)",
    issuer: "SentinelGuard AI / VIT",
    date: "Oct 2024 – Nov 2024",
    category: "Internship",
    file: "/certificates/intern.jpeg",
    fileType: "image",
    color: "from-blue-500/20 to-indigo-500/20",
    icon: "🏆",
    description: "Certificate of Achievement awarded for Data Science internship at SentinelGuard AI during Oct–Nov 2024.",
  },
  {
    id: 3,
    title: "BCG X Generative AI Job Simulation",
    issuer: "BCG X / Forage",
    date: "2025",
    category: "Data Science",
    file: "/certificates/bcg-gen-ai.pdf",
    fileType: "pdf",
    color: "from-green-500/20 to-emerald-500/20",
    icon: "🤖",
    description: "Completed BCG X's Generative AI virtual experience program, focusing on AI strategy and implementation.",
  },
  {
    id: 4,
    title: "TATA Group – GenAI Data Analytics Job Simulation",
    issuer: "TATA / Forage",
    date: "2025",
    category: "Data Science",
    file: "/certificates/tata-genai.pdf",
    fileType: "pdf",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: "📊",
    description: "Completed Tata Group's GenAI Data Analytics virtual experience, applying AI to real business analytics problems.",
  },
  {
    id: 5,
    title: "Deloitte Data Analytics Virtual Experience",
    issuer: "Deloitte / Forage",
    date: "2025",
    category: "Data Science",
    file: "/certificates/deloitte-analytics.pdf",
    fileType: "pdf",
    color: "from-green-500/20 to-teal-500/20",
    icon: "📈",
    description: "Completed Deloitte's data analytics job simulation covering forensic technology and data-driven decision making.",
  },
  {
    id: 6,
    title: "JP Morgan – Quantitative Research Job Simulation",
    issuer: "JP Morgan / Forage",
    date: "2025",
    category: "Data Science",
    file: "/certificates/jp-morgan.pdf",
    fileType: "pdf",
    color: "from-blue-500/20 to-violet-500/20",
    icon: "💹",
    description: "Completed JP Morgan's quantitative research virtual experience covering financial modelling and data analysis.",
  },
  {
    id: 7,
    title: "British Airways Data Science Job Simulation",
    issuer: "British Airways / Forage",
    date: "2025",
    category: "Data Science",
    file: "/certificates/british-airlines.pdf",
    fileType: "pdf",
    color: "from-sky-500/20 to-blue-500/20",
    icon: "✈️",
    description: "Completed British Airways virtual experience in data science, including web scraping and predictive modelling.",
  },
  {
    id: 8,
    title: "SQL Using AI Workshop",
    issuer: "Workshop Certification",
    date: "2025",
    category: "Technical",
    file: "/certificates/sql-ai-workshop.pdf",
    fileType: "pdf",
    color: "from-amber-500/20 to-yellow-500/20",
    icon: "🗄️",
    description: "Completed hands-on workshop covering SQL fundamentals combined with AI-assisted database querying techniques.",
  },
  {
    id: 9,
    title: "Microsoft Power BI",
    issuer: "Power BI Certification",
    date: "2025",
    category: "Technical",
    file: "/certificates/power-bi.pdf",
    fileType: "pdf",
    color: "from-yellow-500/20 to-amber-500/20",
    icon: "📊",
    description: "Certification demonstrating proficiency in Microsoft Power BI for data visualization and business intelligence.",
  },
  {
    id: 10,
    title: "LCAT Certificate",
    issuer: "LCAT",
    date: "2025",
    category: "Achievement",
    file: "/certificates/lcat.pdf",
    fileType: "pdf",
    color: "from-purple-500/20 to-pink-500/20",
    icon: "🎓",
    description: "LCAT certification awarded to Tarra Someswararao.",
  },
  {
    id: 11,
    title: "CSS Development – CodeKaro",
    issuer: "CodeKaro",
    date: "2025",
    category: "Technical",
    file: "/certificates/codekaro-css.png",
    fileType: "image",
    color: "from-pink-500/20 to-rose-500/20",
    icon: "🎨",
    description: "Certificate of completion for the 'How To CSS' course from CodeKaro covering modern CSS techniques.",
  },
];

const categoryColors: Record<string, string> = {
  Cloud: "bg-orange-50 border-orange-200 text-orange-600",
  Internship: "bg-blue-50 border-blue-200 text-blue-600",
  "Data Science": "bg-emerald-50 border-emerald-200 text-emerald-600",
  Technical: "bg-purple-50 border-purple-200 text-purple-600",
  Achievement: "bg-pink-50 border-pink-200 text-pink-600",
};

const allCategories = ["All", "Cloud", "Internship", "Data Science", "Technical", "Achievement"];

export default function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIdx, setCurrentIdx] = useState(0);

  const filtered = useMemo(() => certificates.filter(
    (c) => activeFilter === "All" || c.category === activeFilter
  ), [activeFilter]);

  const openCert = (cert: Certificate) => {
    setSelectedCert(cert);
    setCurrentIdx(filtered.findIndex((c) => c.id === cert.id));
  };

  const closeCert = useCallback(() => setSelectedCert(null), []);

  const navigateCert = useCallback(
    (direction: "prev" | "next") => {
      const newIdx =
        direction === "prev"
          ? (currentIdx - 1 + filtered.length) % filtered.length
          : (currentIdx + 1) % filtered.length;
      setCurrentIdx(newIdx);
      setSelectedCert(filtered[newIdx]);
    },
    [currentIdx, filtered]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedCert) return;
      if (e.key === "Escape") closeCert();
      if (e.key === "ArrowLeft") navigateCert("prev");
      if (e.key === "ArrowRight") navigateCert("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedCert, closeCert, navigateCert]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedCert]);

  return (
    <section id="certificates-gallery" className="py-24 relative overflow-hidden bg-[#FCFBF9]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="section-label">
            <Award className="w-3.5 h-3.5" />
            Gallery
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Certificates &{" "}
            <span className="text-gradient-blue">Achievements</span>
          </h2>
          <p className="text-stone-600 text-sm max-w-xl text-center leading-relaxed">
            A collection of certifications, virtual job simulations, and achievement badges earned through dedicated learning and practical experience.
          </p>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-[#E23744] to-[#FF7E00] text-white border-transparent shadow-md shadow-[#E23744]/15 scale-102"
                  : "bg-white border-stone-200 text-stone-850 hover:text-stone-950 hover:border-stone-300 border shadow-sm font-bold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, idx) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => openCert(cert)}
                className="group cursor-pointer glass-card rounded-[24px] overflow-hidden border border-stone-200/60 hover:border-[#E23744]/30 hover:shadow-lg transition-all duration-300 text-left bg-white"
              >
                {/* Card Preview / Thumbnail Area */}
                <div className={`relative h-36 bg-gradient-to-br ${cert.color} flex items-center justify-center overflow-hidden`}>
                  {cert.fileType === "image" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.file}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl select-none">{cert.icon}</span>
                      <span className="text-xs font-mono text-stone-850 uppercase tracking-widest font-black">PDF Certificate</span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#E23744] to-[#FF7E00] px-4 py-2 rounded-full shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" />
                      View Certificate
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-extrabold text-stone-900 leading-snug group-hover:text-[#E23744] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-stone-950 font-black">{cert.issuer}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${categoryColors[cert.category]}`}>
                      {cert.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-850 font-mono font-bold">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Certificates", value: certificates.length },
            { label: "Cloud Certifications", value: certificates.filter(c => c.category === "Cloud").length },
            { label: "Job Simulations", value: certificates.filter(c => c.category === "Data Science").length },
            { label: "Technical Skills", value: certificates.filter(c => c.category === "Technical").length },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-[20px] p-5 text-center border border-stone-200/60 bg-white"
            >
              <p className="text-3xl font-black bg-gradient-to-r from-[#E23744] to-[#FF7E00] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-stone-750 mt-1.5 font-extrabold uppercase tracking-wider text-[10px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && closeCert()}
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate: ${selectedCert.title}`}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col bg-white border border-stone-200 rounded-[24px] overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 p-4 sm:p-5 border-b border-stone-200/60 flex-shrink-0 bg-white">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug truncate">
                    {selectedCert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs text-stone-900 font-extrabold">{selectedCert.issuer}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs text-stone-900 font-mono font-bold">{selectedCert.date}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${categoryColors[selectedCert.category]}`}>
                      {selectedCert.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={selectedCert.file}
                    download
                    className="p-2 rounded-lg bg-stone-50 border border-stone-200 text-stone-500 hover:text-[#E23744] hover:border-[#E23744]/20 transition"
                    title="Download Certificate"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <a
                    href={selectedCert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-stone-50 border border-stone-200 text-stone-500 hover:text-[#E23744] hover:border-[#E23744]/20 transition"
                    title="Open in new tab"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={closeCert}
                    className="p-2 rounded-lg bg-stone-50 border border-stone-200 text-stone-500 hover:text-red-500 hover:border-red-200 transition"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Certificate Preview */}
              <div className="flex-1 overflow-hidden relative min-h-0">
                {selectedCert.fileType === "pdf" ? (
                  <iframe
                    src={`${selectedCert.file}#toolbar=1&view=FitH`}
                    className="w-full h-full"
                    style={{ minHeight: "500px" }}
                    title={selectedCert.title}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full p-4 bg-stone-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedCert.file}
                      alt={selectedCert.title}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
                    />
                  </div>
                )}

                {/* Prev / Next Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigateCert("prev"); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-stone-250 text-stone-600 hover:text-[#E23744] hover:border-stone-300 transition backdrop-blur-sm shadow-sm"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateCert("next"); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-stone-250 text-stone-600 hover:text-[#E23744] hover:border-stone-300 transition backdrop-blur-sm shadow-sm"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer with description and navigation count */}
              <div className="flex items-center justify-between gap-4 px-5 py-3 border-t border-stone-200/60 flex-shrink-0 bg-white">
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 max-w-xl font-semibold">
                  {selectedCert.description}
                </p>
                <span className="text-xs font-mono text-stone-500 flex-shrink-0 font-bold">
                  {currentIdx + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
