const LEGION_UNITS = [
  {
    id: "academy",
    name: "Tovernax Academy",
    tagline: "Education & Learning",
    description: "Premier educational institution offering academic coaching, competitive exam prep, and hybrid learning solutions.",
    icon: "🎓",
    color: "from-blue-600 to-indigo-700",
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
    color: "from-emerald-600 to-teal-700",
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
    color: "from-amber-600 to-orange-700",
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
    color: "from-violet-600 to-purple-700",
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
    color: "from-rose-600 to-pink-700",
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
    color: "from-slate-600 to-gray-700",
    href: "#",
    status: "coming",
    statusLabel: "Coming Soon",
  },
];

export function LegionEcosystemSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="section-label mb-4">The Tovernax Legion</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-5">
            One Legion,{" "}
            <span className="text-gradient">Many Horizons</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Tovernax Academy is part of the larger Tovernax Legion ecosystem — a family of units dedicated to empowering people across education, skills, culture, and beyond.
          </p>
        </div>

        {/* Legion Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEGION_UNITS.map((unit, index) => (
            <div
              key={unit.id}
              className={`relative rounded-2xl overflow-hidden reveal ${unit.status === "active" ? "ring-2 ring-navy-600" : ""}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Header gradient */}
              <div className={`h-24 bg-gradient-to-br ${unit.color} p-5 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-3 right-3 w-14 h-14 rounded-full border border-white" />
                </div>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-3xl">{unit.icon}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    unit.status === "active"
                      ? "bg-white/90 text-navy-800"
                      : "bg-white/20 text-white"
                  }`}>
                    {unit.statusLabel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-5 border border-t-0 border-gray-100 rounded-b-2xl">
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">{unit.tagline}</div>
                <h3 className="font-display font-bold text-lg text-navy-950 mb-2">{unit.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{unit.description}</p>
                {unit.status === "active" ? (
                  <a href={unit.href} className="text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors flex items-center gap-1">
                    Explore Academy →
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Launching Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legion tagline */}
        <div className="mt-12 text-center reveal">
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-navy-800">Tovernax Legion</span> — Building tomorrow's leaders across every dimension of human potential.
          </p>
        </div>
      </div>
    </section>
  );
}
