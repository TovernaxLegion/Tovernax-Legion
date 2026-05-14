import { WHY_CHOOSE_US } from "@/lib/constants";

export function WhyChooseUsSection() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-block px-10 py-5 rounded-2xl mb-6 animate-gold-blue">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Why Tovernax Academy
            </h2>
          </div>
          <p className="text-2xl font-bold mb-5" style={{ color: "#0a1560" }}>
            Education Reimagined for{" "}
            <span style={{ color: "#ffd624" }}>Real Results</span>
          </p>
          <p className="text-lg" style={{ color: "#1a27e1" }}>
            We don't just teach — we transform. Here's what makes Tovernax Academy the preferred choice for hundreds of students and parents.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div key={item.title} className="p-8 rounded-2xl shadow-lg reveal group hover:shadow-xl transition-all duration-300"
              style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.08)", transitionDelay: `${index * 80}ms` }}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3" style={{ color: "#0a1560" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#1a27e1" }}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-20 p-10 rounded-3xl text-center reveal"
          style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)", border: "1px solid rgba(255,214,36,0.2)" }}>
          <p className="text-white font-bold text-xl mb-2">
            Ready to experience the Tovernax difference?
          </p>
          <p className="text-gray-300 text-base mb-8">Book a free counseling session today — no commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg text-white animate-red-blue">
              Book Free Session
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="/about" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg text-white animate-red-blue">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
