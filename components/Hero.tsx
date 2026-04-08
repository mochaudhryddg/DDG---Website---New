"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendUp, ChartLine, CurrencyDollar } from "@phosphor-icons/react";
import { useContact } from "@/components/ContactModal";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
};

function MetricCard({
  label,
  value,
  sub,
  icon: Icon,
  className,
}: {
  label: string;
  value: string;
  sub: string;
  icon: React.ElementType;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.8 }}
      className={`absolute bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-4 min-w-[160px] ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
          <Icon size={14} weight="bold" className="text-accent" />
        </div>
        <span className="text-xs text-text-muted font-mono tracking-wide">{label}</span>
      </div>
      <div className="font-display font-bold text-2xl tracking-tight text-text-primary">{value}</div>
      <div className="text-xs text-text-muted mt-0.5 font-mono">{sub}</div>
    </motion.div>
  );
}

function FloatingOrb({ className }: { className?: string }) {
  return (
    <div className={`absolute rounded-full pointer-events-none blur-[80px] ${className}`} />
  );
}

export default function Hero() {
  const { openModal } = useContact();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-[72px]">
      {/* Background orbs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-accent/5 top-[-100px] right-[-80px]" />
      <FloatingOrb className="w-[300px] h-[300px] bg-accent/3 bottom-[10%] left-[30%]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] min-h-[80vh] items-center gap-12 lg:gap-0">
          {/* Left — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 py-16 lg:py-0"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              </span>
              <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
                Performance Marketing Agency
              </span>
            </motion.div>

            <div className="flex flex-col gap-2">
              <motion.h1
                variants={itemVariants}
                className="font-display font-bold text-5xl md:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-text-primary"
              >
                <span className="text-accent">Revenue</span> is<br />
                the only<br />
                metric that<br />
                <span className="text-accent">matters.</span>
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-base text-text-muted leading-relaxed max-w-[52ch] font-sans"
            >
              We build paid media systems for ambitious businesses. From creative
              to conversion — every dollar tracked, tested, and scaled with precision.<br />
              UK. US. UAE.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-bg text-sm font-medium hover:bg-accent-dim active:scale-[0.98] transition-all duration-200"
              >
                Start growing
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                View our work
                <ArrowRight size={14} />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex -space-x-2">
                {["https://picsum.photos/seed/mktg1/40/40", "https://picsum.photos/seed/mktg2/40/40", "https://picsum.photos/seed/mktg3/40/40"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-bg object-cover grayscale"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-text-primary">50+ brands scaled</div>
                <div className="text-xs text-text-muted">across healthcare, DTC, B2B and real estate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — floating metrics */}
          <div className="relative hidden lg:block" style={{ height: 520 }}>
            {/* Subtle grid bg */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(#C8F53E 1px, transparent 1px), linear-gradient(90deg, #C8F53E 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
            />

            {/* Animated growth line */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 420 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 20 460 C 80 400 100 340 160 300 C 220 260 240 240 280 190 C 320 140 360 100 400 60"
                stroke="#C8F53E"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              />
            </svg>

            {/* Conversion Lift — top left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <MetricCard
                label="Conversion Lift"
                value="+312%"
                sub="landing page tests"
                icon={ChartLine}
                className="top-[30px] left-[20px]"
              />
            </motion.div>

            {/* Revenue Generated — middle right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <MetricCard
                label="Revenue Generated"
                value="$11.2M"
                sub="across all clients"
                icon={CurrencyDollar}
                className="top-[140px] right-[10px]"
              />
            </motion.div>

            {/* ROAS — middle left */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <MetricCard
                label="ROAS"
                value="8.4×"
                sub="vs 2.1× industry avg"
                icon={TrendUp}
                className="top-[240px] left-[20px]"
              />
            </motion.div>

            {/* CPL reduction badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 1.2 }}
              className="absolute bottom-[50px] right-[30px] bg-accent text-bg rounded-xl px-4 py-3 text-sm font-display font-bold"
            >
              <span className="block text-2xl font-bold font-mono">−47%</span>
              <span className="text-xs font-sans font-normal opacity-70 tracking-wide">CPL reduction</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
