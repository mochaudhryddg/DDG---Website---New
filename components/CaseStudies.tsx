"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const featured = {
  brand: "Healthcare Chain — US",
  category: "Healthcare & Medical · US",
  headline: "$3.2M in revenue generated in 6 months — scaling a multi-location healthcare chain from minimal paid presence to market leader.",
  metrics: [
    { label: "Revenue Generated", value: "$3.2M" },
    { label: "ROAS", value: "9.1×" },
    { label: "CPL Reduction", value: "−61%" },
  ],
  image: "https://picsum.photos/seed/dental-clinic-interior/900/600",
  channels: ["Meta Ads", "Google Ads", "Creative Testing"],
};

const studies = [
  {
    brand: "DTC Brand — Global",
    category: "DTC Brand · Global",
    metric: "+218% CVR",
    detail: "Landing page rebuild and creative refresh lifted conversion rate by 218% in 8 weeks.",
    image: "https://picsum.photos/seed/ecommerce-product/600/400",
  },
  {
    brand: "Dental Group — US",
    category: "Dental & Aesthetics · US",
    metric: "312 Appts/mo",
    detail: "Meta + Google strategy generating 312 confirmed appointments per month at $47 cost per appointment.",
    image: "https://picsum.photos/seed/dentist-office/600/400",
  },
  {
    brand: "B2B SaaS — UK",
    category: "B2B Software · UK",
    metric: "4.2× pipeline",
    detail: "LinkedIn and Google demand-gen rebuilt from scratch. Qualified pipeline grew 4.2× in under 90 days.",
    image: "https://picsum.photos/seed/saas-dashboard-office/600/400",
  },
];

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" ref={ref} className="py-28 md:py-36 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm font-mono text-text-muted tracking-widest uppercase mb-4"
            >
              Selected work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="font-display font-bold text-4xl md:text-5xl tracking-tighter leading-none"
            >
              Real businesses.<br />Real numbers.
            </motion.h2>
          </div>
        </div>

        {/* Bento grid: 1 large + 3 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.brand}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-text-muted tracking-widest uppercase">{featured.category}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                {featured.channels.map((c) => (
                  <span key={c} className="text-xs font-mono text-text-muted">{c}</span>
                ))}
              </div>
              <h3 className="font-display font-semibold text-xl md:text-2xl tracking-tight text-text-primary mb-6 leading-snug">
                {featured.headline}
              </h3>
              <div className="flex gap-8">
                {featured.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono font-bold text-2xl text-accent">{m.value}</div>
                    <div className="text-xs text-text-muted mt-1 font-mono">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display font-semibold text-text-primary">{featured.brand}</span>
                <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-accent transition-colors">
                  View case study <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Smaller cards stacked */}
          <div className="flex flex-col gap-4">
            {studies.map((s, i) => (
              <motion.div
                key={s.brand}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300 flex gap-4 p-5"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={s.image}
                    alt={s.brand}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-1">{s.category}</div>
                    <div className="font-display font-semibold text-text-primary">{s.brand}</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-lg text-accent">{s.metric}</div>
                    <div className="text-xs text-text-muted mt-0.5 leading-relaxed line-clamp-2">{s.detail}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="absolute top-4 right-4 text-text-muted group-hover:text-accent transition-colors"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
