import { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Tovernax Academy — admissions queries, counseling requests, campus visits, and general enquiries. We respond within 24 hours.",
};

const CONTACT_CARDS = [
  {
    icon: "📞",
    title: "Call Us",
    lines: [SITE.phone, "+91 98765 43211"],
    sub: "Mon – Sat, 8 AM – 8 PM",
    action: { label: "Call Now", href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: [SITE.email, "admissions@tovernax.com"],
    sub: "We reply within 24 hours",
    action: { label: "Send Email", href: `mailto:${SITE.email}` },
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    lines: [SITE.phone, "Quick responses guaranteed"],
    sub: "Mon – Sun, 7 AM – 10 PM",
    action: { label: "Chat Now", href: SITE.social.whatsapp },
    color: "bg-green-50 text-green-700",
  },
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["Tovernax Tower, Knowledge Park", "Navrangpura, Ahmedabad 380009"],
    sub: "Open Mon – Sat, 8 AM – 8 PM",
    action: { label: "Get Directions", href: "https://maps.google.com" },
    color: "bg-amber-50 text-amber-700",
  },
];

const BRANCHES = [
  { city: "Ahmedabad HQ", area: "Navrangpura", phone: "+91 98765 43210" },
  { city: "Ahmedabad", area: "Satellite Branch", phone: "+91 98765 43211" },
  { city: "Surat", area: "Adajan Branch", phone: "+91 98765 43212" },
  { city: "Vadodara", area: "Alkapuri Branch", phone: "+91 98765 43213" },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 bg-dark-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="section-container relative z-10 text-center">
          <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.12)" }}>
            Get in Touch
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5">
            We'd Love to <span style={{ color: "#ffd624" }}>Hear From You</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Whether it's an admissions query, counseling request, or just a question — our team is ready to help. We guarantee a response within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60V20C1200 40 900 55 600 45C300 35 100 10 0 0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {CONTACT_CARDS.map((card, i) => (
              <div key={card.title} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center text-2xl mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-navy-950 mb-3">{card.title}</h3>
                <div className="space-y-1 mb-4">
                  {card.lines.map((line) => (
                    <div key={line} className="text-gray-700 text-sm font-medium">{line}</div>
                  ))}
                  <div className="text-gray-400 text-xs">{card.sub}</div>
                </div>
                <a href={card.action.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-navy-700 font-semibold text-sm hover:underline">
                  {card.action.label} →
                </a>
              </div>
            ))}
          </div>

          {/* Main grid: Form + Info */}
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3 reveal-left">
              <div className="section-label mb-4">Send a Message</div>
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">
                Drop Us a Line
              </h2>
              <div className="card-premium p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Your Name *</label>
                    <input type="text" placeholder="Full name" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Mobile Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">I'm enquiring about *</label>
                  <select className="input-field">
                    <option value="">Select a topic</option>
                    {[
                      "Admissions",
                      "Academic Coaching",
                      "Competitive Exam Preparation",
                      "Online Classes",
                      "Offline Classes",
                      "Hybrid Learning",
                      "Student Counseling",
                      "Parent Counseling",
                      "Teacher Training",
                      "Scholarships & Fees",
                      "LMS & Technology",
                      "Other",
                    ].map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Preferred Branch</label>
                  <select className="input-field">
                    <option value="">Any / Online</option>
                    {BRANCHES.map((b) => (
                      <option key={b.area}>{b.city} — {b.area}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="input-field resize-none"
                  />
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-navy-600" />
                    <span className="text-sm text-gray-600">
                      I agree to be contacted by Tovernax Academy via call/WhatsApp/email regarding my enquiry.
                    </span>
                  </label>
                </div>
                <button className="btn-primary w-full justify-center text-base">
                  Send Message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 space-y-6 reveal-right">
              {/* Branch List */}
              <div>
                <div className="section-label mb-4">Our Branches</div>
                <div className="space-y-3">
                  {BRANCHES.map((b) => (
                    <div key={b.area} className="card-premium p-4 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-navy-950 text-sm">{b.city}</div>
                        <div className="text-xs text-gray-500">{b.area}</div>
                      </div>
                      <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="text-xs font-semibold text-navy-700 hover:underline">
                        {b.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <div className="section-label mb-4">Quick Actions</div>
                <div className="space-y-3">
                  {[
                    { label: "📋 Apply for Admission", href: "/admissions" },
                    { label: "📅 Book Campus Visit", href: "/admissions" },
                    { label: "📞 Schedule Counseling Call", href: "/student-counseling" },
                    { label: "🎓 Download Brochure", href: "#" },
                    { label: "💻 Access LMS Portal", href: "/lms" },
                  ].map((link) => (
                    <a key={link.label} href={link.href}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white hover:bg-navy-50 hover:border-navy-100 transition-colors group">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-navy-700">{link.label}</span>
                      <span className="text-navy-400 group-hover:text-navy-700 transition-colors">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Guarantee */}
              <div className="p-5 rounded-2xl border border-green-100 bg-green-50">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">⚡</span>
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-1">24-Hour Response Guarantee</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We guarantee a response to every message within 24 business hours. For urgent queries, call or WhatsApp directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20 bg-white">
        <div className="section-container reveal">
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-card">
            <div className="h-72 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #f0f3ff, #e8ecff)" }}>
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="font-display font-bold text-2xl text-navy-950 mb-2">Find Us on the Map</h3>
                <p className="text-gray-500 text-sm mb-4">Tovernax Tower, Knowledge Park, Navrangpura, Ahmedabad</p>
                <a href="https://maps.google.com/?q=Navrangpura+Ahmedabad" target="_blank" rel="noopener noreferrer"
                  className="btn-primary px-6 py-2.5 text-sm">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
