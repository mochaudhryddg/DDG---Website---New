import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Dot Dot Growth",
  description: "How Dot Dot Growth collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "1. Who We Are",
    content: `Dot Dot Growth LLC ("we", "us", "our") is a performance marketing agency operating globally, with offices in Dubai, UAE. We can be contacted at:

Email: hello@dotdotgrowth.com
Phone: +971 50 910 9588
Address: 6th Floor, Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai, UAE`,
  },
  {
    title: "2. What Data We Collect",
    content: `When you interact with our website or submit an enquiry, we may collect the following personal data:

• Full name
• Email address
• Company name and job title
• Phone number (if provided)
• Information about your business needs and goals
• IP address and browser information (collected automatically via cookies)
• Calendar booking information when you schedule a call with us`,
  },
  {
    title: "3. How We Use Your Data",
    content: `We use your personal data to:

• Respond to enquiries and provide our services
• Schedule and conduct strategy calls
• Send service-related communications
• Improve our website and user experience
• Comply with legal obligations

We do not sell, rent, or trade your personal data to third parties for marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your data on the following legal grounds:

• Contractual necessity — to fulfil a service agreement or pre-contractual request
• Legitimate interests — to respond to business enquiries and improve our services
• Consent — where you have explicitly agreed (e.g. subscribing to communications)
• Legal obligation — where required by applicable law`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses essential cookies to ensure it functions correctly. We may also use analytics cookies (such as Google Analytics) to understand how visitors use the site. You can control cookie settings through your browser. By continuing to use our site, you consent to our use of essential cookies.`,
  },
  {
    title: "6. Third-Party Services",
    content: `We use the following third-party services that may process your data:

• Calendly — for scheduling strategy calls (calendly.com/privacy)
• Google Analytics — for website analytics
• Email service providers — for communication

Each third party has its own privacy policy and is responsible for their own data handling practices.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal data for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law. Enquiry data is typically retained for up to 3 years. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your location, you may have the following rights:

• Right to access — request a copy of the data we hold about you
• Right to rectification — request correction of inaccurate data
• Right to erasure — request deletion of your data
• Right to restrict processing — request we limit how we use your data
• Right to data portability — request your data in a portable format
• Right to object — object to processing based on legitimate interests

To exercise any of these rights, please contact us at hello@dotdotgrowth.com.`,
  },
  {
    title: "9. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "10. International Transfers",
    content: `As a business operating across the UK, US, and UAE, your data may be transferred to and processed in countries outside your own. Where such transfers occur, we ensure appropriate safeguards are in place in accordance with applicable data protection law.`,
  },
  {
    title: "11. Children's Privacy",
    content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. The most current version will always be available on this page, with the effective date noted below. We encourage you to review this policy periodically.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: hello@dotdotgrowth.com
Phone: +971 50 910 9588
Address: 6th Floor, Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai, UAE`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-bg text-text-primary min-h-screen font-sans">
      {/* Nav bar */}
      <div className="border-b border-border bg-bg/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1">
              <span className="w-[9px] h-[9px] rounded-full bg-accent" />
              <span className="w-[9px] h-[9px] rounded-full bg-accent/50" />
            </div>
            <span className="font-display font-semibold text-base tracking-tight text-text-primary">
              dot dot growth
            </span>
          </a>
          <a
            href="/"
            className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors tracking-widest uppercase"
          >
            ← Back to site
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 md:px-12 py-20">
        {/* Header */}
        <div className="mb-16 pb-12 border-b border-border">
          <p className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tighter leading-none text-text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-text-muted font-mono">
            Effective date: 1 April 2026 &nbsp;·&nbsp; Dot Dot Growth LLC
          </p>
        </div>

        {/* Intro */}
        <p className="text-base text-text-muted leading-relaxed mb-16 max-w-[65ch]">
          This Privacy Policy explains how Dot Dot Growth LLC collects, uses, stores, and protects your
          personal information when you visit our website or engage with our services. Please read it carefully.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-border pt-10">
              <h2 className="font-display font-semibold text-xl tracking-tight text-text-primary mb-4">
                {s.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-border mt-20">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-text-muted">
            &copy; {new Date().getFullYear()} Dot Dot Growth LLC. All rights reserved.
          </span>
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
  );
}
