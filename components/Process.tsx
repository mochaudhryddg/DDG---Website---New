"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Binoculars, Compass, Rocket, ArrowsClockwise } from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We start by understanding exactly where you are. Account audits, creative analysis, attribution review, and a full competitive landscape map. No guesswork.",
    duration: "Week 1–2",
    icon: Binoculars,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on the audit, we build a channel and creative strategy anchored to your specific growth targets — not generic best practices.",
    duration: "Week 2–3",
    icon: Compass,
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Campaigns go live with tight tracking in place. Every creative variant is tagged, every audience segment tracked. We move fast without cutting corners.",
    duration: "Week 3–4",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Optimise",
    description:
      "Weekly analysis, monthly strategy reviews, and continuous creative iteration. As data accumulates, decisions get sharper and returns compound.",
    duration: "Ongoing",
    icon: ArrowsClockwise,
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-28 md:py-36 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-12 lg:gap-24 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm font-mono text-text-muted tracking-widest uppercase mb-4"
            >
              How we work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="font-display font-bold text-4xl md:text-5xl tracking-tighter leading-none"
            >
              No fluff.<br />Just a system<br />that works.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 18 }}
            className="text-base text-text-muted leading-relaxed max-w-[65ch] self-end"
          >
            Most agencies move slowly and talk a lot. We do the opposite. Four phases,
            clear deliverables at every stage, and transparent reporting that shows
            exactly what your money is doing.
          </motion.p>
        </div>

        {/* Steps — horizontal timeline on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 relative">
          {/* Connecting line on desktop */}
          <div className="hidden xl:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.12 }}
                className="relative flex flex-col gap-5 p-6 border-t border-border xl:border-t-0 xl:border-l xl:first:border-l-0 xl:py-0 xl:px-8 xl:first:pl-0 xl:last:pr-0 group hover:bg-surface/40 xl:hover:bg-transparent transition-colors"
              >
                {/* Icon with dot for timeline */}
                <div className="relative flex items-center gap-4">
                  <div className="relative z-10 w-[52px] h-[52px] rounded-2xl bg-surface border border-border flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300 shrink-0">
                    <Icon size={20} weight="duotone" className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <span className="font-mono text-xs text-text-muted">{step.number}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display font-semibold text-xl tracking-tight text-text-primary">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-accent/70 whitespace-nowrap">{step.duration}</span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
