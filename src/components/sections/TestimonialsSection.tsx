import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-mesh overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="section-label mb-4">Student Stories</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-5">
            Voices of Our{" "}
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Real students, real results. Hear directly from those who have transformed their futures with Tovernax Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.name}
              className="card-premium p-7 flex flex-col reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <span className="absolute -top-2 -left-1 font-display text-6xl text-navy-100 leading-none select-none">"</span>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10 pt-4">
                  {t.quote}
                </p>
              </div>

              {/* Divider */}
              <div className="divider-gold mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br ${t.color} flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy-950 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.exam}</div>
                  <div className="text-xs text-navy-500 font-medium">{t.batch}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results banner */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 reveal">
          {[
            { emoji: "🎯", value: "98%", label: "Student Satisfaction" },
            { emoji: "🏆", value: "247", label: "Top JEE AIR" },
            { emoji: "🧬", value: "512", label: "Top NEET AIR" },
            { emoji: "🏛️", value: "23+", label: "IAS Officers Trained" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-card transition-shadow">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="font-display font-bold text-3xl text-navy-950 mb-1">{item.value}</div>
              <div className="text-gray-500 text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
