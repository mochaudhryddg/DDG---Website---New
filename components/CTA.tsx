"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useContact } from "@/components/ContactModal";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openModal } = useContact();

  return (
    <section id="contact" ref={ref} className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-surface border border-border p-12 md:p-20"
        >
          {/* Background accent gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
            <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] rounded-full bg-accent/4 blur-[60px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-mono text-text-muted tracking-widest uppercase mb-6">
                  Ready to grow?
                </p>
                <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter leading-none text-text-primary">
                  Let&apos;s build something<br />
                  <span className="text-accent">incredible, together.</span>
                </h2>
              </div>
              <p className="text-base text-text-muted leading-relaxed max-w-[52ch]">
                We take on a limited number of new clients each quarter. If you&apos;re serious
                about scaling paid media, let&apos;s talk.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-accent text-bg text-sm font-medium hover:bg-accent-dim active:scale-[0.98] transition-all duration-200"
                >
                  Start a conversation
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: "Response time", value: "< 24 hours" },
                { label: "Onboarding", value: "2 weeks" },
                { label: "First results", value: "30–60 days" },
                { label: "Contracts", value: "No lock-in" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 + i * 0.08 }}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-b-0"
                >
                  <span className="text-sm text-text-muted">{item.label}</span>
                  <span className="text-sm font-mono font-medium text-text-primary">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
