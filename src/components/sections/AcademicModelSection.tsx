import { EXAM_CATEGORIES } from "@/lib/constants";

export function AcademicModelSection() {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #020818 0%, #040d2e 40%, #071050 70%, #0a1560 100%)" }}>
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3d57ff, transparent)" }} />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffd624, transparent)" }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.12)" }}>
            Academic + Competitive Model
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            Academic Excellence Meets{" "}
            <span style={{ color: "#ffd624" }}>Competitive Mastery</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Our dual-track preparation model ensures students excel in school boards while simultaneously building competitive exam readiness — no compromise, no stress.
          </p>
        </div>

        {/* Dual Track Visual */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Academic Track */}
          <div className="p-8 rounded-3xl reveal-left" style={{ background: "rgba(61,87,255,0.08)", border: "1px solid rgba(61,87,255,0.2)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "rgba(61,87,255,0.2)" }}>🎓</div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "#93abff" }}>Track A</div>
                <h3 className="font-display font-bold text-xl text-white">Academic Excellence</h3>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Board exam preparation (CBSE / GSEB / ICSE)",
                "Concept-first teaching methodology",
                "Chapter-wise assessment system",
                "Regular parent progress reports",
                "Doubt-clearing & peer learning sessions",
                "Score maximization strategies",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(61,87,255,0.2)" }}>
                    <svg className="w-3.5 h-3.5" style={{ color: "#93abff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Track */}
          <div className="p-8 rounded-3xl reveal-right" style={{ background: "rgba(245,184,0,0.06)", border: "1px solid rgba(245,184,0,0.2)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "rgba(245,184,0,0.15)" }}>🏆</div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "#ffd624" }}>Track B</div>
                <h3 className="font-display font-bold text-xl text-white">Competitive Mastery</h3>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "JEE / NEET / UPSC / Banking preparation",
                "PYQ deep-dive analysis (10+ years)",
                "Topic-wise mock test series",
                "AIR tracking and performance benchmarking",
                "Time management and exam strategy",
                "Personalized mentor feedback loops",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(245,184,0,0.15)" }}>
                    <svg className="w-3.5 h-3.5" style={{ color: "#ffd624" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Categories */}
        <div className="reveal">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-10 animate-sky-gold-white">
            Exams We Prepare You For
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAM_CATEGORIES.map((cat) => {
              const colors: Record<string, { bg: string; header: string; tag: string }> = {
                "Engineering": { bg: "linear-gradient(135deg, #1a27e1, #3d57ff)", header: "#1a27e1", tag: "rgba(26,39,225,0.15)" },
                "Medical": { bg: "linear-gradient(135deg, #10b981, #34d399)", header: "#10b981", tag: "rgba(16,185,129,0.15)" },
                "Civil Services": { bg: "linear-gradient(135deg, #f5b800, #ffd624)", header: "#d98e00", tag: "rgba(245,184,0,0.15)" },
                "Commerce & Management": { bg: "linear-gradient(135deg, #8b5cf6, #a78bfa)", header: "#8b5cf6", tag: "rgba(139,92,246,0.15)" },
                "Banking & Finance": { bg: "linear-gradient(135deg, #ec4899, #f472b6)", header: "#ec4899", tag: "rgba(236,72,153,0.15)" },
                "Defence": { bg: "linear-gradient(135deg, #dc2626, #f87171)", header: "#dc2626", tag: "rgba(220,38,38,0.15)" },
              };
              const c = colors[cat.category] || { bg: "linear-gradient(135deg, #6366f1, #818cf8)", header: "#6366f1", tag: "rgba(99,102,241,0.15)" };
              return (
                <div key={cat.category} className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="p-4" style={{ background: c.bg }}>
                    <h4 className="font-bold text-white text-sm">{cat.category}</h4>
                  </div>
                  <div className="p-4" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="flex flex-wrap gap-2">
                      {cat.exams.map((exam) => (
                        <span key={exam} className="text-xs px-3 py-1.5 rounded-lg font-semibold" style={{ background: c.tag, color: "#ffffffcc" }}>{exam}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
