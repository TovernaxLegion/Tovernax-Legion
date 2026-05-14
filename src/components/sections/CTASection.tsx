import Link from "next/link";

export function CTASection() {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 50%, #dde3ff 100%)" }}>
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffd624, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3d57ff, transparent)" }} />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="text-8xl mb-8">🎓</div>

          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold mb-8"
            style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
            Admissions 2026–27
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#0a1560" }}>
            Your Journey to{" "}
            <span style={{ color: "#1a27e1" }}>Excellence</span>
            {" "}Starts Here
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-medium" style={{ color: "#1a27e1" }}>
            Applications are now open for the 2026–27 academic year. Join hundreds of students who have transformed their futures with Tovernax Academy.
          </p>

          {/* Action area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
            <Link href="/admissions" className="inline-flex items-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 animate-gold-blue-cta">
              Apply for Admission Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-semibold text-base transition-all duration-300"
              style={{ color: "#1a27e1", border: "2px solid rgba(26, 39, 225, 0.3)" }}>
              Schedule a Counseling Call
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium" style={{ color: "#1a27e1" }}>
            <span>✅ Free first counseling session</span>
            <span>✅ Flexible Payment options</span>
            <span>✅ Scholarship tests available</span>
            <span>✅ Student Aptitude Test</span>
          </div>
        </div>
      </div>
    </section>
  );
}
