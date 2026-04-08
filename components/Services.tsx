"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagnifyingGlass, Palette, Funnel, ChartBar, Compass, Camera, Robot } from "@phosphor-icons/react";

const services = [
  {
    number: "01",
    title: "Paid Social & Search",
    description:
      "Meta, Google, TikTok, LinkedIn — we don't run ads, we build revenue engines. Audience architecture, bid strategy, and creative rotation engineered around your unit economics.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn"],
    icon: MagnifyingGlass,
  },
  {
    number: "02",
    title: "Performance Creative",
    description:
      "Creative is the largest lever in paid media. We produce, test, and iterate ad creative at scale — UGC, motion graphics, static — until we find what converts at volume.",
    tags: ["Creative Testing", "UGC", "Motion", "Copywriting"],
    icon: Palette,
  },
  {
    number: "03",
    title: "Conversion Rate Optimisation",
    description:
      "Traffic without conversion is charity. We audit, hypothesise, and A/B test landing pages, PDPs, and checkout flows to squeeze more revenue from every session.",
    tags: ["A/B Testing", "Landing Pages", "UX Audit", "Heatmaps"],
    icon: Funnel,
  },
  {
    number: "04",
    title: "Revenue Attribution",
    description:
      "Most brands are flying blind. We install a proper attribution stack so you know precisely which channels, creatives, and audiences are generating real revenue — not just clicks.",
    tags: ["GA4", "Triple Whale", "Northbeam", "Custom Dashboards"],
    icon: ChartBar,
  },
  {
    number: "05",
    title: "Search & Growth Strategy",
    description:
      "Before we spend a dollar, we build the map. Market analysis, keyword opportunity, channel prioritisation, and a full growth roadmap anchored to your business model and margins.",
    tags: ["Market Research", "SEO Strategy", "Channel Mix", "Growth Planning"],
    icon: Compass,
  },
  {
    number: "06",
    title: "Organic & Social Content",
    description:
      "Paid media needs a content engine behind it. We build organic social strategies across Instagram, TikTok, and LinkedIn that compound brand equity and lower your paid CAC over time.",
    tags: ["Instagram", "TikTok", "LinkedIn", "Content Strategy"],
    icon: Camera,
  },
  {
    number: "07",
    title: "AI & LLM Search",
    description:
      "The next wave of search is AI-driven. We optimise your brand's presence for ChatGPT, Perplexity, and Google's AI Overviews — so you're found when buyers ask, not just when they click.",
    tags: ["LLM Optimisation", "AI Overviews", "Perplexity", "ChatGPT Visibility"],
    icon: Robot,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-28 md:py-36 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-12 lg:gap-24 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm font-mono text-text-muted tracking-widest uppercase mb-4"
            >
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="font-display font-bold text-4xl md:text-5xl tracking-tighter leading-none"
            >
              Built for<br />performance.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 18 }}
            className="text-base text-text-muted leading-relaxed max-w-[65ch] self-end"
          >
            We operate across the full paid acquisition stack. Not a generalist agency — a
            specialist team with one job: make your ad spend generate more revenue than you
            thought possible. Real estate. Healthcare. DTC. B2B. UK, US, and UAE.
          </motion.p>
        </div>

        {/* Zig-zag services — NOT 3 equal cards */}
        <div className="flex flex-col">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.08 }}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-0 border-t border-border py-12 hover:border-accent/40 transition-colors duration-300"
              >
                {/* Number + icon */}
                <div className={`flex items-center gap-6 ${isEven ? "lg:order-1" : "lg:order-3"}`}>
                  <span className="font-mono text-xs text-text-muted tracking-widest shrink-0">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                    <Icon size={18} weight="duotone" className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight leading-tight text-text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Divider dot */}
                <div className="hidden lg:flex justify-center order-2 px-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors duration-300" />
                </div>

                {/* Description */}
                <div className={`flex flex-col gap-4 mt-4 lg:mt-0 ${isEven ? "lg:order-3 lg:pl-8" : "lg:order-1 lg:pr-8 lg:text-right lg:items-end"}`}>
                  <p className="text-sm text-text-muted leading-relaxed max-w-[52ch]">
                    {service.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${!isEven ? "lg:justify-end" : ""}`}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-border text-xs font-mono text-text-muted group-hover:border-accent/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
