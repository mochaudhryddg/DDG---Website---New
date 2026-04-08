"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 11.2, prefix: "$", suffix: "M", label: "in verified client revenue generated", note: "across all channels" },
  { value: 50, prefix: "", suffix: "+", label: "brands scaled across multiple verticals", note: "DTC, B2B, real estate, healthcare" },
  { value: 8.4, prefix: "", suffix: "×", label: "average ROAS across active clients", note: "vs 2.3× baseline" },
  { value: 312, prefix: "+", suffix: "%", label: "avg conversion lift from creative testing", note: "" },
];

function AnimatedNumber({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef(false);

  useEffect(() => {
    if (!inView || ref.current) return;
    ref.current = true;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(parseFloat((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span className="font-display font-bold text-5xl md:text-6xl tracking-tighter text-text-primary tabular-nums font-mono">
      {prefix}
      {displayed % 1 !== 0 ? displayed.toFixed(1) : displayed}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 md:py-36 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-sm font-mono text-text-muted tracking-widest uppercase mb-16"
        >
          Results that compound
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.12 }}
              className="flex flex-col gap-3 px-0 lg:px-10 py-8 first:pl-0 last:pr-0"
            >
              <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} />
              <div>
                <div className="text-base text-text-primary font-medium">{s.label}</div>
                <div className="text-xs text-text-muted font-mono mt-1">{s.note}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
