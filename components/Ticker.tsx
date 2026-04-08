export default function Ticker() {
  const items = [
    "Paid Social",
    "Google Ads",
    "Meta Ads",
    "Performance Creative",
    "CRO",
    "Revenue Attribution",
    "AI Lead Qualification",
    "WhatsApp Automation",
    "Creative Testing",
    "ROAS Scaling",
    "Real Estate Marketing",
    "Healthcare",
    "DTC",
    "B2B",
    "Lead Scoring",
    "UK",
    "US",
    "UAE",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="border-y border-border py-4 overflow-hidden bg-surface/40">
      <div className="flex gap-0 w-full">
        <div className="flex gap-0 animate-marquee whitespace-nowrap shrink-0">
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
            </span>
          ))}
        </div>
        <div className="flex gap-0 animate-marquee whitespace-nowrap shrink-0" aria-hidden>
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
