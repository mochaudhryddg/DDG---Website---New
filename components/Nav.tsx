"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useContact } from "@/components/ContactModal";

const links = [
  { label: "Work", href: "#case-studies" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#services" },
];

function NavButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}

function LogoImage({ className }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden shrink-0 ${className}`}
      style={{ width: 220, height: 48 }}
    >
      <img
        src="/logo-transparent.png"
        alt="Dot Dot Growth"
        style={{ width: 220, height: "auto", marginTop: -90 }}
      />
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-bg/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="group">
            <LogoImage />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-base text-text-muted hover:text-text-primary transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <NavButton
              onClick={openModal}
              className="px-6 py-3 rounded-full text-sm font-medium bg-accent text-bg hover:bg-accent-dim transition-colors duration-200 cursor-pointer"
            >
              Start a project
            </NavButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu — drops from h-[72px] */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -16, pointerEvents: "none" }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="fixed top-[72px] left-0 right-0 z-40 bg-bg/95 backdrop-blur-md border-b border-border md:hidden"
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-text-muted hover:text-text-primary transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="mt-2 px-5 py-3 rounded-full text-sm font-medium bg-accent text-bg text-center"
          >
            Start a project
          </button>
        </div>
      </motion.div>
    </>
  );
}
