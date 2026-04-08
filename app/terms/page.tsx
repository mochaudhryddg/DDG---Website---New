import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Dot Dot Growth",
  description: "Terms and conditions governing the use of Dot Dot Growth's website and services.",
};

const sections = [
  {
    title: "1. About Us",
    content: `Dot Dot Growth LLC ("Dot Dot Growth", "we", "us", "our") is a performance marketing agency registered in the UAE. Our registered office is:

6th Floor, Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai, UAE
Email: hello@dotdotgrowth.com
Phone: +971 50 910 9588`,
  },
  {
    title: "2. Acceptance of Terms",
    content: `By accessing or using our website (dotdotgrowth.com) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.

We reserve the right to update these terms at any time. Continued use of the site after changes are posted constitutes your acceptance of the revised terms.`,
  },
  {
    title: "3. Services",
    content: `Dot Dot Growth provides performance marketing services including, but not limited to:

• Paid social and search advertising (Meta, Google, TikTok, LinkedIn)
• Performance creative production and testing
• Conversion rate optimisation (CRO)
• Revenue attribution and analytics
• Search and growth strategy
• Organic and social content
• AI and LLM search optimisation

The specific scope, deliverables, timelines, and fees for any engagement are set out in a separate written agreement or proposal agreed between Dot Dot Growth and the client.`,
  },
  {
    title: "4. Website Use",
    content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

• Use the site in any way that violates applicable local, national, or international law
• Transmit unsolicited commercial communications
• Attempt to gain unauthorised access to any part of the site
• Introduce viruses or malicious code
• Scrape or harvest data from the site without our prior written consent`,
  },
  {
    title: "5. Intellectual Property",
    content: `All content on this website — including text, graphics, logos, images, and code — is the property of Dot Dot Growth LLC or its content suppliers and is protected by applicable intellectual property laws.

You may not reproduce, distribute, or create derivative works from any content on this site without our express written permission.`,
  },
  {
    title: "6. Client Engagements",
    content: `All client engagements are governed by a separate written agreement (proposal, contract, or statement of work) entered into between Dot Dot Growth and the client. These Terms of Service apply to website use and do not constitute a service agreement.

Unless otherwise agreed in writing:
• All fees are due in accordance with the agreed payment schedule
• Dot Dot Growth retains ownership of all methodologies, frameworks, and proprietary tools
• Client-specific deliverables transfer to the client upon full payment`,
  },
  {
    title: "7. Confidentiality",
    content: `Both parties agree to keep confidential any non-public information shared during the course of an engagement. This obligation survives the termination of any agreement. Neither party will disclose confidential information to third parties without prior written consent, except as required by law.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the fullest extent permitted by law, Dot Dot Growth shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services, including loss of profits, data, or business opportunities.

Our total liability to you in connection with any claim arising from the use of this website shall not exceed AED 1,000 (or the equivalent in your local currency).`,
  },
  {
    title: "9. No Guarantees on Results",
    content: `Marketing results depend on many factors outside our control, including market conditions, platform algorithm changes, client-side execution, and product-market fit. While we work to achieve the best possible outcomes, Dot Dot Growth does not guarantee specific results, revenue targets, or return on ad spend figures.

Any case studies or metrics on our website represent past results for specific clients and are not guarantees of future performance.`,
  },
  {
    title: "10. Third-Party Links",
    content: `Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: "11. Privacy",
    content: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these terms by reference. Please review our Privacy Policy to understand our practices.`,
  },
  {
    title: "12. Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE, unless otherwise agreed in writing.`,
  },
  {
    title: "13. Severability",
    content: `If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.`,
  },
  {
    title: "14. Contact",
    content: `If you have any questions about these Terms of Service, please contact us:

Email: hello@dotdotgrowth.com
Phone: +971 50 910 9588
Address: 6th Floor, Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai, UAE`,
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-text-muted font-mono">
            Effective date: 1 April 2026 &nbsp;·&nbsp; Dot Dot Growth LLC
          </p>
        </div>

        {/* Intro */}
        <p className="text-base text-text-muted leading-relaxed mb-16 max-w-[65ch]">
          These Terms of Service govern your use of the Dot Dot Growth website and, together with any
          separate written agreement, your engagement with our services. Please read them carefully before
          proceeding.
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
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
