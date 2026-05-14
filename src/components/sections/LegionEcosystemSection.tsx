const LEGION_UNITS = [
  {
    id: "academy",
    name: "Tovernax Academy",
    tagline: "Education & Learning",
    description: "Premier educational institution offering academic coaching, competitive exam prep, and hybrid learning solutions.",
    icon: "🎓",
    color: "linear-gradient(135deg, #1a27e1, #3d57ff)",
    href: "/",
    status: "active",
    statusLabel: "You are here",
  },
  {
    id: "skills",
    name: "Tovernax Skills",
    tagline: "Vocational & Professional",
    description: "Skill development programs, vocational training, and professional certification courses for career advancement.",
    icon: "🛠️",
    color: "linear-gradient(135deg, #10b981, #34d399)",
    href: "#",
    status: "coming",
    statusLabel: "Coming Soon",
  },
  {
    id: "roots",
    name: "Tovernax Roots",
    tagline: "Culture & Heritage",
    description: "Cultural education, heritage preservation, traditional arts, and connecting communities with their roots.",
    icon: "🌿",
    color: "linear-gradient(135deg, #f5b800, #ffd624)",
    href: "#",
    status: "coming",
    statusLabel: "Coming Soon",
  },
  {
    id: "media",
    name: "Tovernax Media",
    tagline: "Content & Broadcasting",
    description: "Educational content creation, documentaries, podcasts, and media production for knowledge dissemination.",
    icon: "📡",
    color: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    href: "#",
    status: "coming",
    statusLabel: "Coming Soon",
  },
  {
    id: "expeditions",
    name: "Tovernax Expeditions",
    tagline: "Exploration & Adventure",
    description: "Educational expeditions, experiential learning journeys, field research programs, and adventure-based education.",
    icon: "🧭",
    color: "linear-gradient(135deg, #ec4899, #f472b6)",
    href: "#",
    status: "coming",
    statusLabel: "Coming Soon",
  },
  {
    id: "estates",
    name: "Tovernax Estates",
    tagline: "Infrastructure & Spaces",
    description: "State-of-the-art educational campuses, co-learning spaces, and infrastructure development for institutions.",
    icon: "🏛️",
    color: "linear-gradient(135deg, #dc2626, #f87171)",
    href: "#",
    status: "coming",
    statusLabel: "Coming Soon",
  },
];

export function LegionEcosystemSection() {
  return (
    <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}>
            The Tovernax Legion
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            One Legion,{" "}
            <span style={{ color: "#ffd624" }}>Many Horizons</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Tovernax Academy is part of the larger Tovernax Legion ecosystem — a family of units dedicated to empowering people across education, skills, culture, and beyond.
          </p>
        </div>

        {/* Legion Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEGION_UNITS.map((unit, index) => (
            <div
              key={unit.id}
              className={`rounded-2xl overflow-hidden shadow-xl reveal ${unit.status === "active" ? "ring-2 ring-yellow-400" : ""}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Header gradient */}
              <div className="h-28 p-5 relative overflow-hidden" style={{ background: unit.color }}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-3 right-3 w-14 h-14 rounded-full border border-white" />
                </div>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-4xl">{unit.icon}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    unit.status === "active"
                      ? "bg-white/90 text-navy-800"
                      : "bg-white/20 text-white"
                  }`}>
                    {unit.statusLabel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>{unit.tagline}</div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{unit.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{unit.description}</p>
                {unit.status === "active" ? (
                  <a href={unit.href} className="text-sm font-semibold hover:underline flex items-center gap-1" style={{ color: "#ffd624" }}>
                    Explore Academy →
                  </a>
                ) : (
                  <span className="text-sm flex items-center gap-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    Launching Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legion tagline */}
        <div className="mt-14 text-center reveal">
          <p className="text-sm font-bold italic animate-sky-gold-white">
            Tovernax Legion — Building tomorrow's leaders across every dimension of human potential.
          </p>
        </div>
      </div>
    </section>
  );
}
