"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "@phosphor-icons/react";

// ── Context ────────────────────────────────────────────────────────────────
const ContactContext = createContext<{ openModal: () => void }>({
  openModal: () => {},
});

export function useContact() {
  return useContext(ContactContext);
}

// ── Provider ───────────────────────────────────────────────────────────────
export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <ContactContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactContext.Provider>
  );
}

// ── Input shared styles ─────────────────────────────────────────────────────
const inputClass =
  "w-full px-4 py-3 rounded-xl bg-bg border border-border text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/60 transition-colors duration-200";

const labelClass = "text-xs font-mono text-text-muted tracking-widest uppercase";

// ── Calendly URL builder ───────────────────────────────────────────────────
function buildCalendlyUrl(name: string, email: string) {
  const base = "https://calendly.com/mo-chaudhry/strategy-meeting-dot-dot-growth";
  const params = new URLSearchParams({
    background_color: "111111",
    text_color: "F5F5F4",
    primary_color: "C8F53E",
    hide_gdpr_banner: "1",
    embed_type: "Inline",
    ...(name && { name }),
    ...(email && { email }),
  });
  return `${base}?${params.toString()}`;
}

// ── Modal ──────────────────────────────────────────────────────────────────
function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    services: "",
    region: "",
    message: "",
  });

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", jobTitle: "", services: "", region: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal card — widens when showing calendar */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 200, damping: 28 }}
              className={`w-full pointer-events-auto bg-surface border border-border rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] flex flex-col ${
                submitted ? "max-w-3xl" : "max-w-lg"
              } max-h-[92dvh]`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar — always visible */}
              <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-border shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-[10px] h-[10px] rounded-full bg-accent" />
                    <span className="w-[10px] h-[10px] rounded-full bg-accent/50" />
                  </div>
                  <span className="font-display font-semibold text-base tracking-tight text-text-primary">
                    dot dot growth
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent/30 transition-all duration-200"
                  aria-label="Close"
                >
                  <X size={13} weight="bold" />
                </button>
              </div>

              {/* Body */}
              <div className={`overflow-y-auto ${submitted ? "" : "px-8 py-7"}`}>
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    /* ── FORM ── */
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="mb-6">
                        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-text-primary leading-tight mb-1">
                          Start a project
                        </h2>
                        <p className="text-sm text-text-muted">
                          Tell us about your brand and what you&apos;re looking to achieve.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Full Name */}
                        <div className="flex flex-col gap-1.5">
                          <label className={labelClass}>Full Name *</label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={set("name")}
                            placeholder="Alex Johnson"
                            className={inputClass}
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <label className={labelClass}>Email *</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={set("email")}
                            placeholder="you@company.com"
                            className={inputClass}
                          />
                        </div>

                        {/* Company + Job Title */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex flex-col gap-1.5">
                            <label className={labelClass}>Company *</label>
                            <input
                              required
                              type="text"
                              value={form.company}
                              onChange={set("company")}
                              placeholder="Brand Co."
                              className={inputClass}
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className={labelClass}>Job Title</label>
                            <input
                              type="text"
                              value={form.jobTitle}
                              onChange={set("jobTitle")}
                              placeholder="Head of Growth"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-1.5">
                          <label className={labelClass}>What services are you interested in?</label>
                          <select
                            value={form.services}
                            onChange={set("services")}
                            className={`${inputClass} cursor-pointer`}
                          >
                            <option value="" className="bg-surface text-text-muted">Select a service</option>
                            <option value="paid-social" className="bg-surface">Paid Social</option>
                            <option value="search-growth" className="bg-surface">Search &amp; Growth Strategy</option>
                            <option value="organic-social" className="bg-surface">Organic &amp; Social Content</option>
                            <option value="seo" className="bg-surface">SEO</option>
                            <option value="ai-llm" className="bg-surface">AI &amp; LLM Search</option>
                          </select>
                        </div>

                        {/* Region */}
                        <div className="flex flex-col gap-1.5">
                          <label className={labelClass}>Region</label>
                          <select
                            value={form.region}
                            onChange={set("region")}
                            className={`${inputClass} cursor-pointer`}
                          >
                            <option value="" className="bg-surface text-text-muted">Select your region</option>
                            <option value="uk-europe" className="bg-surface">UK &amp; Europe</option>
                            <option value="us" className="bg-surface">United States</option>
                            <option value="middle-east" className="bg-surface">Middle East</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                          <label className={labelClass}>What are you looking to achieve?</label>
                          <textarea
                            rows={3}
                            value={form.message}
                            onChange={set("message")}
                            placeholder="Tell us about your brand, current challenges, and growth goals..."
                            className={`${inputClass} resize-none`}
                          />
                        </div>

                        <button
                          type="submit"
                          className="group mt-1 w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-bg text-sm font-medium hover:bg-accent-dim active:scale-[0.98] transition-all duration-200"
                        >
                          Send enquiry
                          <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                        </button>

                        <p className="text-center text-xs text-text-muted pb-1">
                          We respond within 24 hours. No spam, ever.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    /* ── CALENDAR ── */
                    <motion.div
                      key="calendar"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
                      className="flex flex-col"
                    >
                      {/* Confirmation strip */}
                      <div className="flex items-center gap-3 px-8 py-5 border-b border-border bg-accent/5">
                        <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                          <CheckCircle size={16} weight="fill" className="text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            Enquiry received — now book your strategy call
                          </p>
                          <p className="text-xs text-text-muted mt-0.5">
                            Pick a time below and we&apos;ll come prepared.
                          </p>
                        </div>
                      </div>

                      {/* Calendly inline embed */}
                      <iframe
                        src={buildCalendlyUrl(form.name, form.email)}
                        width="100%"
                        height="660"
                        frameBorder="0"
                        title="Book a strategy call"
                        className="block"
                        style={{ minHeight: 660 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
