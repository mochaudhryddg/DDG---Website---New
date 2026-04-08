"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const featured = {
  quote:
    "They rebuilt our entire paid media approach from scratch. Within three months our ROAS doubled, CAC dropped by 38%, and we finally had visibility into what was actually working. It wasn't magic — it was a proper system.",
  name: "Daniel Rivera",
  title: "Founder, Healthcare — US",
  metric: "9.1× ROAS",
  image: "https://picsum.photos/seed/daniel-rivera-founder/200/200",
};

const others = [
  {
    quote:
      "We'd worked with two other agencies before. Both were full of promises and short on results. Dot Dot Growth gave us weekly transparent reporting and actually moved the needle on qualified pipeline.",
    name: "James Calloway",
    title: "Managing Director, DTC Brand",
    image: "https://picsum.photos/seed/james-calloway-md/200/200",
  },
  {
    quote:
      "The creative testing framework they built changed how we think about our whole brand. Not just ads — how we communicate value full stop. Our CPL went from $183 to $47 over four months.",
    name: "Sarah Mitchell",
    title: "CEO - US Dental Group",
    image: "https://picsum.photos/seed/sophia-vrentas/200/200",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="py-28 md:py-36 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm font-mono text-text-muted tracking-widest uppercase mb-16"
        >
          What clients say
        </motion.p>

        {/* Asymmetric layout: large featured quote, two smaller below */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 mb-4">
          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative bg-surface border border-border rounded-3xl p-10 flex flex-col justify-between gap-10 overflow-hidden group hover:border-accent/30 transition-colors duration-300"
          >
            {/* Subtle accent gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/5 blur-[60px] pointer-events-none" />

            <Quotes size={32} weight="fill" className="text-accent/40" />
            <blockquote>
              <p className="text-xl md:text-2xl font-display font-medium leading-snug tracking-tight text-text-primary">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </blockquote>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={featured.image}
                  alt={featured.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-medium text-text-primary">{featured.name}</div>
                  <div className="text-sm text-text-muted">{featured.title}</div>
                </div>
              </div>
              <span className="font-mono font-bold text-xl text-accent">{featured.metric}</span>
            </div>
          </motion.div>

          {/* Side panel with summary metric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="bg-accent rounded-3xl p-10 flex flex-col justify-between"
          >
            <div className="text-bg/60 text-xs font-mono tracking-widest uppercase">Average across clients</div>
            <div>
              <div className="font-display font-bold text-bg text-6xl md:text-7xl tracking-tighter leading-none">8.4×</div>
              <div className="text-bg/70 text-sm font-mono mt-2">Return on ad spend</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-mono font-bold text-2xl text-bg">−47%</div>
                <div className="text-xs text-bg/60 font-mono">avg CPL drop</div>
              </div>
              <div>
                <div className="font-mono font-bold text-2xl text-bg">+312%</div>
                <div className="text-xs text-bg/60 font-mono">avg CVR lift</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Two smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 + i * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-accent/20 transition-colors duration-300"
            >
              <p className="text-sm text-text-muted leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="text-sm font-medium text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
