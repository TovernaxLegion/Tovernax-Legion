interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;
  description: string;
  emoji?: string;
}

export function PageHero({ label, title, highlight, description, emoji }: PageHeroProps) {
  return (
    <section className="pt-24 pb-0 bg-dark-mesh relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="section-container relative z-10 py-20 text-center">
        {emoji && <div className="text-6xl mb-6">{emoji}</div>}
        <div className="section-label mb-6" style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.12)" }}>
          {label}
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          {title}{" "}
          {highlight && <span style={{ color: "#ffd624" }}>{highlight}</span>}
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60V20C1200 40 900 55 600 45C300 35 100 10 0 0V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
