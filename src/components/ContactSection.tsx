"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
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
    <section id="contact" className="py-28 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="glow-blur glow-blue float-orb w-[400px] h-[400px] top-1/2 left-1/4 opacity-20" />
      <div className="glow-blur glow-purple float-orb-slow w-[300px] h-[300px] bottom-1/4 right-1/4 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="section-label">
            <Mail className="w-3.5 h-3.5" />
            Contact
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Let&apos;s Build{" "}
            <span className="text-gradient-blue">Something Meaningful</span>
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                Get In Touch
              </h3>
              <p className="text-slate-400 leading-relaxed font-normal text-sm sm:text-base">
                I’m open to opportunities in Cloud Engineering, DevOps, Linux Systems Administration, Infrastructure Operations, Data Science, and Machine Learning engineering roles. Drop a message or connect through social channels.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/5 border border-blue-500/15 rounded-xl text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-widest font-bold font-mono">Location</span>
                  <span className="text-slate-300 font-semibold text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/5 border border-blue-500/15 rounded-xl text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-widest font-bold font-mono">Email</span>
                  <a href="mailto:someshtarra@gmail.com" className="text-slate-300 hover:text-white font-semibold text-sm transition-colors duration-200">
                    someshtarra@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="pt-8 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold font-mono block mb-4">
                Connect Directly
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/someshtarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-md"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/someshtarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-md"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-6 sm:p-8 rounded-2xl text-left border border-white/5 relative overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 space-y-4"
                >
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                    Thank you for reaching out. Since this form is running in demonstration mode, your message was logged locally. I will respond to your email shortly!
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 border border-white/5 rounded-xl hover:bg-slate-800 transition duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">
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
                      {errors.name && <span className="text-xs text-rose-400 mt-1.5 block font-semibold">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">
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
                      {errors.email && <span className="text-xs text-rose-400 mt-1.5 block font-semibold">{errors.email}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">
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
                    {errors.subject && <span className="text-xs text-rose-400 mt-1.5 block font-semibold">{errors.subject}</span>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">
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
                    {errors.message && <span className="text-xs text-rose-400 mt-1.5 block font-semibold">{errors.message}</span>}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2.5 p-3.5 bg-rose-500/5 border border-rose-500/20 text-rose-400 rounded-xl text-xs font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred while sending your message. Please try again.</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                    <span className="text-[10px] text-slate-500 font-semibold font-mono">
                      * Messages are simulated locally (client-side only).
                    </span>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all duration-300 self-end overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                        boxShadow: "0 0 20px rgba(59,130,246,0.15)",
                      }}
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
