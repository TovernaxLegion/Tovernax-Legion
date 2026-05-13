export function VisionMissionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Vision/Mission cards */}
          <div className="space-y-6 reveal-left">
            <div className="section-label">Our Foundation</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-950 leading-tight">
              Rooted in Purpose,{" "}
              <span className="text-gradient">Driven by Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Tovernax Academy, we believe every student carries untapped potential. Our mission is to unlock it through world-class education, caring mentorship, and proven methodologies.
            </p>

            {/* Vision Card */}
            <div className="p-6 rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-blue-50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(29,53,220,0.1), rgba(61,87,255,0.15))" }}>
                  🌟
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be India's most trusted educational institution — one that shapes not just academic achievers, but ethical, resilient, and visionary leaders who contribute meaningfully to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-6 rounded-2xl border border-gold-200 bg-gradient-to-br from-amber-50 to-yellow-50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "rgba(245, 184, 0, 0.12)" }}>
                  🎯
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver personalized, high-quality education through innovative teaching methodologies, technology-enabled learning, and unwavering student support — making excellence accessible to all.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Values */}
          <div className="reveal-right">
            <div className="bg-navy-950 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #3d57ff, transparent)" }} />

              <div className="section-label mb-6" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.9)", borderColor: "rgba(255,255,255,0.12)" }}>
                Core Values
              </div>
              <h3 className="font-display text-3xl font-bold mb-8">
                The Pillars of{" "}
                <span style={{ color: "#ffd624" }}>Tovernax Academy</span>
              </h3>

              <div className="space-y-4">
                {[
                  { value: "Trust", desc: "The unwavering foundation built through honesty, consistency, and responsible action.", icon: "🤝", num: "01" },
                  { value: "Responsibility", desc: "The commitment to act with accountability toward people, society, and the future.", icon: "⚖️", num: "02" },
                  { value: "Unity", desc: "The strength created when diverse minds work together with shared purpose and respect.", icon: "🔗", num: "03" },
                  { value: "Purpose", desc: "The clear reason behind every action, driving meaningful impact and lasting value.", icon: "🎯", num: "04" },
                  { value: "Timeless", desc: "The pursuit of principles and systems that remain relevant across generations.", icon: "⏳", num: "05" },
                  { value: "Integrity", desc: "The courage to uphold truth, ethics, and transparency in every circumstance.", icon: "🛡️", num: "06" },
                  { value: "Excellence", desc: "The relentless pursuit of the highest standards in thought, action, and results.", icon: "⭐", num: "07" },
                  { value: "Vision", desc: "The ability to see beyond the present and shape a better future with clarity and innovation.", icon: "🔭", num: "08" },
                  { value: "Ambition", desc: "The determination to grow, evolve, and achieve extraordinary possibilities without limits.", icon: "🚀", num: "09" },
                ].map((v) => (
                  <div key={v.value} className="flex items-start gap-4 p-3 rounded-xl transition-colors hover:bg-white/5 group">
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs font-mono text-gray-500">{v.num}</span>
                      <span className="text-xl">{v.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-0.5 group-hover:text-gold-400 transition-colors">{v.value}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Statement */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  "TOVERNAX is not just a brand — it is a disciplined ecosystem built on principles that inspire growth, leadership, and lasting impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
