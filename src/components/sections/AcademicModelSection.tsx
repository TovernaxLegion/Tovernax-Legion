import { EXAM_CATEGORIES } from "@/lib/constants";

export function AcademicModelSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-navy-600 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.1)" }}>
            Academic + Competitive Model
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Academic Excellence Meets{" "}
            <span style={{ color: "#ffd624" }}>Competitive Mastery</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our dual-track preparation model ensures students excel in school boards while simultaneously building competitive exam readiness — no compromise, no stress.
          </p>
        </div>

        {/* Dual Track Visual */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Academic Track */}
          <div className="p-8 rounded-3xl border border-white/10 reveal-left"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "rgba(61,87,255,0.2)" }}>🎓</div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-navy-400 mb-0.5">Track A</div>
                <h3 className="font-display font-bold text-xl text-white">Academic Excellence</h3>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Board exam preparation (CBSE / GSEB / ICSE)",
                "Concept-first teaching methodology",
                "Chapter-wise assessment system",
                "Regular parent progress reports",
                "Doubt-clearing & peer learning sessions",
                "Score maximization strategies",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(61,87,255,0.2)" }}>
                    <svg className="w-3 h-3 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Track */}
          <div className="p-8 rounded-3xl border border-gold-500/20 reveal-right"
            style={{ background: "rgba(245, 184, 0, 0.04)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "rgba(245,184,0,0.15)" }}>🏆</div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-gold-500 mb-0.5">Track B</div>
                <h3 className="font-display font-bold text-xl text-white">Competitive Mastery</h3>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "JEE / NEET / UPSC / Banking preparation",
                "PYQ deep-dive analysis (10+ years)",
                "Topic-wise mock test series",
                "AIR tracking and performance benchmarking",
                "Time management and exam strategy",
                "Personalized mentor feedback loops",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(245,184,0,0.15)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#ffd624" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Categories */}
        <div className="reveal">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Exams We Prepare You For
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXAM_CATEGORIES.map((cat) => (
              <div key={cat.category} className="p-5 rounded-2xl border border-white/8 hover:border-white/20 transition-colors group"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <h4 className="font-semibold text-white mb-3 text-sm tracking-wide group-hover:text-gold-400 transition-colors">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.exams.map((exam) => (
                    <span key={exam} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{ background: "rgba(61,87,255,0.15)", color: "#93abff" }}>
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
