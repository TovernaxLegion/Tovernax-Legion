interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;
  description: string;
  emoji?: string;
}

export function PageHero({ label, title, highlight, description, emoji }: PageHeroProps) {
  return (
    <section className="pt-6 pb-0 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 50%, #dde3ff 100%)" }}>
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10 py-12 text-center">
        {emoji && <div className="text-9xl mb-6">{emoji}</div>}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
          {label}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight" style={{ color: "#0a1560" }}>
          {title}{" "}
          {highlight && <span style={{ color: "#1a27e1" }}>{highlight}</span>}
        </h1>
        <p className="text-lg max-w-2xl mx-auto font-medium" style={{ color: "#1a27e1" }}>{description}</p>
      </div>
      <div className="relative">
        <svg viewBox="0 0 1440 2" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="2" fill="white" />
        </svg>
      </div>
    </section>
  );
}
