import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Apply to Tovernax Academy — admissions are open for all programs. Learn about our admission process, eligibility, and scholarship opportunities.",
};

export default function AdmissionsPage() {
  const steps = [
    { step: "01", icon: "📝", title: "Fill Application", desc: "Complete the online admission form with your academic details and program preference." },
    { step: "02", icon: "📞", title: "Counseling Call", desc: "Our expert counselor will connect within 24 hours to understand your goals and guide you." },
    { step: "03", icon: "📋", title: "Diagnostic Test", desc: "A short diagnostic assessment to place you in the right batch for your level." },
    { step: "04", icon: "✅", title: "Enroll & Begin", desc: "Complete enrollment, receive your study materials, and start your journey to excellence." },
  ];

  const programs = [
    { name: "JEE Preparation", duration: "1–2 Years", mode: "Hybrid / Online", fee: "₹45,000/yr" },
    { name: "NEET Preparation", duration: "1–2 Years", mode: "Hybrid / Online", fee: "₹42,000/yr" },
    { name: "UPSC Foundation", duration: "1 Year", mode: "Online + Offline", fee: "₹38,000/yr" },
    { name: "Class X Excellence", duration: "1 Year", mode: "All Modes", fee: "₹28,000/yr" },
    { name: "Class XII Science", duration: "1 Year", mode: "All Modes", fee: "₹35,000/yr" },
    { name: "Banking & SSC", duration: "6 Months", mode: "Online", fee: "₹18,000" },
  ];

  return (
    <div>
      <PageHero
        label="Admissions 2026–27"
        title="Your Journey to"
        highlight="Excellence Starts Here"
        description="Applications are now open for the 2026–27 academic year. Join hundreds of students who have transformed their futures with Tovernax Academy."
        emoji="🎓"
      />

      {/* Process */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">How to Apply</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Simple 4-Step Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="card-premium p-8 text-center reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-6xl mb-4">{s.icon}</div>
                <div className="text-xs font-mono font-bold text-navy-400 mb-2">{s.step}</div>
                <h3 className="font-semibold text-lg text-navy-950 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Fees */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.15)" }}>Fee Structure</div>
            <h2 className="font-display text-4xl font-bold text-white">Transparent Pricing</h2>
            <p className="text-blue-200 mt-3">Flexible EMI options available. Scholarships for meritorious students.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl reveal">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, #ffd624, #f5b800)" }}>
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy-950">Program</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy-950">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy-950">Mode</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-navy-950">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((p, i) => (
                    <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-semibold text-navy-900">{p.name}</td>
                      <td className="px-6 py-4 text-gray-600">{p.duration}</td>
                      <td className="px-6 py-4 text-gray-600">{p.mode}</td>
                      <td className="px-6 py-4 text-right font-bold text-lg" style={{ color: "#1a27e1" }}>{p.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-blue-300 text-sm mt-4">* Fees are indicative. Contact us for exact pricing and available scholarships.</p>
          </div>
        </div>
      </section>

            {/* Application Form */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #dde3ff 100%)" }}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 reveal">
              <div className="inline-block px-10 py-5 rounded-2xl mb-6 animate-red-blue">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Apply Now</h2>
              </div>
              <p className="text-navy-800 font-semibold text-lg">Register Your Interest</p>
            </div>
            <div className="card-premium p-8 reveal" style={{ background: "white", border: "2px solid rgba(26, 39, 225, 0.1)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Full Name *</label>
                  <input type="text" placeholder="Student's full name" className="input-field" style={{ border: "2px solid rgba(26, 39, 225, 0.2)", fontSize: "1rem", padding: "0.75rem 1rem" }} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Class / Year *</label>
                  <select className="input-field" style={{ border: "2px solid rgba(26, 39, 225, 0.2)", fontSize: "1rem", padding: "0.75rem 1rem" }}>
                    <option value="">Select class</option>
                    {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Appeared 12th", "Graduate"].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Mobile Number *</label>
                  <input type="tel" placeholder="+91 98765 43210" className="input-field" style={{ border: "2px solid rgba(26, 39, 225, 0.2)", fontSize: "1rem", padding: "0.75rem 1rem" }} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="input-field" style={{ border: "2px solid rgba(26, 39, 225, 0.2)", fontSize: "1rem", padding: "0.75rem 1rem" }} />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-navy-900 mb-2">Program of Interest *</label>
                  <select className="input-field" style={{ border: "2px solid rgba(26, 39, 225, 0.2)", fontSize: "1rem", padding: "0.75rem 1rem" }}>
                    <option value="">Select a program</option>
                    {["JEE Preparation", "NEET Preparation", "UPSC Foundation", "Class X Excellence", "Class XII Science", "Banking & SSC", "Academic Coaching", "Other"].map(p => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-navy-900 mb-2">Preferred Learning Mode</label>
                  <div className="flex flex-wrap gap-4">
                    {["Online", "Offline", "Hybrid"].map(mode => (
                      <label key={mode} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mode" value={mode} className="accent-navy-600 w-4 h-4" />
                        <span className="text-sm font-semibold text-gray-700">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-navy-900 mb-2">Additional Message</label>
                  <textarea rows={3} placeholder="Any specific requirements or questions..." className="input-field resize-none" style={{ border: "2px solid rgba(26, 39, 225, 0.2)", fontSize: "1rem", padding: "0.75rem 1rem" }} />
                </div>
                <div className="sm:col-span-2">
                  <button className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #1a27e1, #3d57ff)" }}>
                    Submit Application
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-medium" style={{ color: "#1a27e1" }}>
                    <span>✅ Free first counseling session</span>
                    <span>✅ Flexible Payment options</span>
                    <span>✅ Scholarship tests available</span>
                    <span>✅ Student Aptitude Test</span>
                  </div>
                  <p className="text-center text-gray-500 text-xs mt-3">We'll reach out within 24 hours. No spam, ever.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
