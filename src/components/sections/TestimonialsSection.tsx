import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
            Student Stories
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5" style={{ color: "#0a1560" }}>
            Voices of Our{" "}
            <span style={{ color: "#ffd624" }}>Success Stories</span>
          </h2>
          <p className="text-lg" style={{ color: "#1a27e1" }}>
            Real students, real results. Hear directly from those who have transformed their futures with Tovernax Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl shadow-lg flex flex-col reveal group hover:shadow-xl transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #f0f3ff, #ffffff)", border: "1px solid rgba(26, 39, 225, 0.08)", transitionDelay: `${index * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <span className="absolute -top-2 -left-1 font-display text-6xl leading-none select-none" style={{ color: "rgba(26, 39, 225, 0.08)" }}>"</span>
                <p className="text-sm leading-relaxed relative z-10 pt-4" style={{ color: "#1a27e1" }}>
                  {t.quote}
                </p>
              </div>

              {/* Divider */}
              <div className="h-0.5 mb-5 rounded-full" style={{ background: "linear-gradient(90deg, #ffd624, transparent)" }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br ${t.color} flex-shrink-0 shadow-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#0a1560" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "#1a27e1" }}>{t.exam}</div>
                  <div className="text-xs font-medium" style={{ color: "#ffd624" }}>{t.batch}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results banner */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 reveal">
          {[
            { emoji: "🎯", value: "98%", label: "Student Satisfaction" },
            { emoji: "🏆", value: "247", label: "Top JEE AIR" },
            { emoji: "🧬", value: "512", label: "Top NEET AIR" },
            { emoji: "🏛️", value: "23+", label: "IAS Officers Trained" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              style={{ background: "linear-gradient(135deg, #0a1560, #1a27e1)", border: "1px solid rgba(255,214,36,0.15)" }}>
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="font-display font-bold text-3xl mb-1" style={{ color: "#ffd624" }}>{item.value}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
