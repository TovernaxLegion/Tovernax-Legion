import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0e1154 0%, #1a27e1 50%, #2034f5 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffd624, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6380ff, transparent)" }} />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}>
            🎓 Admissions Open — 2025–26
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your Rank is{" "}
            <span style={{ color: "#ffd624" }}>Waiting</span>
            .<br />Are You?
          </h2>
          <p className="text-blue-200 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Don't let another year pass by. Join Tovernax Academy and get the expert guidance, proven system, and unwavering support you need to achieve your dream rank.
          </p>

          {/* Action area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/admissions" className="btn-gold text-base px-10 py-4">
              Apply for Admission Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base border-2 border-white/25 hover:border-white/60 transition-all">
              Schedule a Counseling Call
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-8 text-blue-300 text-sm">
            {[
              "✅ Free first counseling session",
              "✅ Flexible EMI options",
              "✅ Scholarship tests available",
              "✅ Cancel anytime",
            ].map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
