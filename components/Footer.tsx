"use client";

import { FacebookLogo, InstagramLogo, MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react";
import { useContact } from "@/components/ContactModal";

const workLinks = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Results", href: "#case-studies" },
  { label: "Clients", href: "#testimonials" },
];

const serviceLinks = [
  { label: "Paid Social & Search", href: "#services" },
  { label: "Performance Creative", href: "#services" },
  { label: "CRO", href: "#services" },
  { label: "Attribution", href: "#services" },
  { label: "Search & Growth Strategy", href: "#services" },
  { label: "Organic & Social Content", href: "#services" },
  { label: "AI & LLM Search", href: "#services" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { openModal } = useContact();

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 py-16 border-b border-border">

          {/* Brand column */}
          <div className="flex flex-col gap-8 max-w-[320px]">

            {/* Logo — clip whitespace padding from the PNG canvas */}
            <div
              className="overflow-hidden"
              style={{ width: 280, height: 52 }}
            >
              <img
                src="/logo-transparent.png"
                alt="Dot Dot Growth"
                style={{ width: 280, height: "auto", marginTop: -130 }}
              />
            </div>

            {/* Tagline */}
            <div>
              <p className="text-sm text-text-muted leading-relaxed">
                Performance marketing for ambitious businesses that want predictable,
                scalable revenue from paid media.
              </p>
              <p className="text-sm text-text-muted mt-2 tracking-wide">
                UK · US · UAE.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent mt-0.5 shrink-0" weight="fill" />
                <p className="text-xs text-text-muted leading-relaxed">
                  6th Floor, Meydan Grandstand, Meydan Road,<br />
                  Nad Al Sheba, Dubai
                </p>
              </div>
              <a
                href="tel:+971509109588"
                className="flex items-center gap-2.5 text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                <Phone size={14} className="text-accent shrink-0" weight="fill" />
                +971 50 910 9588
              </a>
              <a
                href="mailto:hello@dotdotgrowth.com"
                className="flex items-center gap-2.5 text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                <EnvelopeSimple size={14} className="text-accent shrink-0" weight="fill" />
                hello@dotdotgrowth.com
              </a>
            </div>

            {/* Let's Connect */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-mono text-text-muted tracking-widest uppercase">
                Let&apos;s connect
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/people/Dot-Dot-Growth-UAE/61573282944612/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-text-muted hover:text-accent transition-colors duration-200"
                >
                  <FacebookLogo size={22} weight="fill" />
                </a>
                <a
                  href="https://www.instagram.com/dotdotgrowth/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-text-muted hover:text-accent transition-colors duration-200"
                >
                  <InstagramLogo size={22} weight="fill" />
                </a>
              </div>
            </div>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-3 gap-8">

            {/* Work */}
            <div>
              <div className="text-sm font-mono font-semibold text-text-primary tracking-widest uppercase mb-5">
                Work
              </div>
              <ul className="flex flex-col gap-3">
                {workLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="text-sm font-mono font-semibold text-text-primary tracking-widest uppercase mb-5">
                Services
              </div>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="text-sm font-mono font-semibold text-text-primary tracking-widest uppercase mb-5">
                Company
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#services" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200">
                    Process
                  </a>
                </li>
                <li>
                  <button
                    onClick={openModal}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <span className="text-xs font-mono text-text-muted">
            &copy; {year} Dot Dot Growth LLC. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
