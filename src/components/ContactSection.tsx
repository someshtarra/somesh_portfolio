"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#FCFBF9] border-t border-stone-200">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#E23744]/6 to-[#FF7E00]/6 blur-3xl bottom-10 left-[-10%] -z-10 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-[6px] border border-white/20 shadow-md top-20 right-[5%] -z-10 pointer-events-none"
      />

      {/* Grid Network Connection SVG */}
      <svg className="absolute left-[8%] top-[10%] w-[320px] h-[240px] -z-10 opacity-[0.035] pointer-events-none select-none hidden lg:block" viewBox="0 0 320 240" fill="none">
        <circle cx="40" cy="40" r="4" fill="#E23744" />
        <circle cx="120" cy="80" r="4" fill="#FF7E00" />
        <circle cx="200" cy="40" r="4" fill="#E23744" />
        <circle cx="80" cy="160" r="4" fill="#FF7E00" />
        <circle cx="160" cy="120" r="4" fill="#E23744" />
        <circle cx="240" cy="180" r="4" fill="#FF7E00" />
        <line x1="40" y1="40" x2="120" y2="80" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="120" y1="80" x2="200" y2="40" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="80" y1="160" x2="160" y2="120" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="160" y1="120" x2="240" y2="180" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="120" y1="80" x2="160" y2="120" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Mail className="w-3.5 h-3.5" />
            Contact
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Let&apos;s Build{" "}
            <span className="text-gradient-blue">Something Meaningful</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #E23744, #FF7E00)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            <div>
              <h3 className="text-xl font-extrabold text-stone-900 mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                Get In Touch
              </h3>
              <p className="text-stone-600 leading-relaxed font-semibold text-sm sm:text-base">
                I&apos;m open to opportunities in Cloud Engineering, DevOps, Linux Systems Administration, Infrastructure Operations, Data Science, and Machine Learning engineering roles. Drop a message or connect through social channels.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FFF0F0] border border-[#E23744]/15 rounded-xl text-[#E23744] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase tracking-widest font-bold font-mono">Location</span>
                  <span className="text-stone-850 font-bold text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FFF0F0] border border-[#E23744]/15 rounded-xl text-[#E23744] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase tracking-widest font-bold font-mono">Phone</span>
                  <a href="tel:+916300795629" className="text-stone-850 hover:text-[#E23744] font-bold text-sm transition-colors duration-200">
                    +91 6300795629
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FFF0F0] border border-[#E23744]/15 rounded-xl text-[#E23744] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase tracking-widest font-bold font-mono">Email</span>
                  <a href="mailto:someshtarra@gmail.com" className="text-stone-850 hover:text-[#E23744] font-bold text-sm transition-colors duration-200">
                    someshtarra@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="pt-8 border-t border-stone-200">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold font-mono block mb-4">
                Connect Directly
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/someshtarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#E23744] hover:border-[#E23744]/30 transition-all duration-200 shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/someshtarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#E23744] hover:border-[#E23744]/30 transition-all duration-200 shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-stone-700" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-6 sm:p-8 rounded-[24px] text-left relative overflow-hidden bg-white shadow-sm border border-stone-200/60">
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 space-y-4"
                >
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: "var(--font-outfit)" }}>Message Sent Successfully!</h3>
                  <p className="text-xs text-stone-600 max-w-sm leading-relaxed font-semibold">
                    Thank you for reaching out. Since this form is running in demonstration mode, your message was logged locally. I will respond to your email shortly!
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-700 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition duration-300 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm input-premium ${
                          errors.name ? "input-error" : ""
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-xs text-rose-500 mt-1.5 block font-bold">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm input-premium ${
                          errors.email ? "input-error" : ""
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-xs text-rose-500 mt-1.5 block font-bold">{errors.email}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl text-sm input-premium ${
                        errors.subject ? "input-error" : ""
                      }`}
                      placeholder="Opportunities / Inquiries"
                    />
                    {errors.subject && <span className="text-xs text-rose-500 mt-1.5 block font-bold">{errors.subject}</span>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl text-sm input-premium resize-none ${
                        errors.message ? "input-error" : ""
                      }`}
                      placeholder="Hi Someswararao, we would like to talk about..."
                    />
                    {errors.message && <span className="text-xs text-rose-500 mt-1.5 block font-bold">{errors.message}</span>}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred while sending your message. Please try again.</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                    <span className="text-[10px] text-stone-400 font-bold font-mono">
                      * Messages are simulated locally (client-side only).
                    </span>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all duration-300 self-end overflow-hidden bg-gradient-to-r from-[#E23744] to-[#FF7E00] hover:opacity-95 shadow-md shadow-[#E23744]/25 hover:scale-[1.02]"
                    >
                      <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {status === "submitting" ? (
                        <span className="relative z-10">Sending...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 relative z-10" />
                          <span className="relative z-10">Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
