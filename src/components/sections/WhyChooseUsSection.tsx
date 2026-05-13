import { WHY_CHOOSE_US } from "@/lib/constants";

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-mesh pt-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div
            className="inline-block px-8 py-4 rounded-2xl mb-6 animate-gold-blue"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Why Tovernax Academy
            </h2>
          </div>
          <p className="text-navy-900 text-2xl font-bold mb-5">
            Education Reimagined for{" "}
            <span className="text-gradient">Real Results</span>
          </p>
          <p className="text-gray-600 text-lg">
            We don't just teach — we transform. Here's what makes Tovernax Academy the preferred choice for thousands of students and parents.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="card-premium p-7 reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-5 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-navy-950 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      {/* Bottom CTA strip */}
        <div className="mt-16 p-8 rounded-3xl text-center reveal"
          style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)", border: "1px solid rgba(29,53,220,0.08)" }}>
          <p className="text-navy-800 font-semibold text-lg mb-2">
            Ready to experience the Tovernax difference?
          </p>
          <p className="text-gray-500 text-sm mb-6">Book a free counseling session today — no commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
