import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Tovernax Academy — admissions queries, counseling requests, campus visits, and general enquiries. We respond within 24 hours.",
};

const BRANCHES = [
  { city: "Ahmedabad HQ", area: "Vrundavan Skylines, 6th Floor, Vastral", phone: "+91 9597078806" },
  { city: "Ahmedabad", area: "Nikol Branch", phone: "+91 9597078806" },
  { city: "Ahmedabad", area: "Nava Naroda Branch", phone: "+91 9597078806" },
];

export default function ContactPage() {
  return (
    <div className="pt-6">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 50%, #2034f5 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-5">
            <span style={{ color: "#ffd624" }}>Get in Touch</span>
          </h1>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            We'd Love to <span style={{ color: "#ffd624" }}>Hear From You</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Whether it's an admissions query, counseling request, or just a question — our team is ready to help. We guarantee a response within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 2" xmlns="http://www.w3.org/2000/svg">
            <rect width="1440" height="2" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📞",
                title: "Call Us",
                lines: ["+91 9597078806"],
                sub: "Mon – Sat, 8 AM – 8 PM",
                action: { label: "Call Now", href: "tel:+919597078806" },
                color: "bg-blue-50 text-blue-700",
              },
              {
                icon: "✉️",
                title: "Email Us",
                lines: ["tovernaxacademy@gmail.com", "Contact@tovernaxlegion.com"],
                sub: "We reply within 24 hours",
                action: { label: "Send Email", href: "mailto:tovernaxacademy@gmail.com" },
                color: "bg-emerald-50 text-emerald-700",
              },
              {
                icon: "💬",
                title: "WhatsApp",
                lines: ["+91 9597078806", "Quick responses guaranteed"],
                sub: "Mon – Sun, 7 AM – 10 PM",
                action: { label: "Chat Now", href: "https://wa.me/919597078806" },
                color: "bg-green-50 text-green-700",
              },
              {
                icon: "📍",
                title: "Visit Us",
                lines: ["Vrundavan Skylines, 6th Floor", "Vastral, Ahmedabad - 382418"],
                sub: "Open Mon – Sat, 8 AM – 8 PM",
                action: { label: "Get Directions", href: "https://maps.google.com/?q=Vrundavan+Skylines+Vastral+Ahmedabad" },
                color: "bg-amber-50 text-amber-700",
              },
            ].map((card, i) => (
              <div key={card.title} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center text-2xl mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "#0a1560" }}>{card.title}</h3>
                <div className="space-y-1 mb-4">
                  {card.lines.map((line) => (
                    <div key={line} className="text-gray-700 text-sm font-medium">{line}</div>
                  ))}
                  <div className="text-gray-400 text-xs">{card.sub}</div>
                </div>
                <a href={card.action.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-sm hover:underline" style={{ color: "#1a27e1" }}>
                  {card.action.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-copper-flash">
                Send a Message
              </h2>
              <p className="text-blue-200 text-lg">Drop Us a Line</p>
            </div>
            <div className="p-8 rounded-3xl space-y-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(24px)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Your Name *</label>
                  <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Mobile Number *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">I'm enquiring about *</label>
                <select className="w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}>
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
                    "Scholarships & Fees",
                    "Other",
                  ].map((opt) => <option key={opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Preferred Branch</label>
                <select className="w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}>
                  <option value="">Any / Online</option>
                  {BRANCHES.map((b) => (
                    <option key={b.area}>{b.city} — {b.area}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Your Message *</label>
                <textarea rows={4} placeholder="Tell us how we can help you..." className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} />
              </div>
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" style={{ accentColor: "#ffd624" }} />
                  <span className="text-sm text-gray-300">
                    I agree to be contacted by Tovernax Academy via call/WhatsApp/email regarding my enquiry.
                  </span>
                </label>
              </div>
              <button className="w-full px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #ffd624, #f5b800)", color: "#0a1560" }}>
                Send Message
                <svg className="w-5 h-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #dde3ff 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-copper-flash">
              Our Branches
            </h2>
            <p className="text-lg" style={{ color: "#1a27e1" }}>Visit us at any of our centres</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {BRANCHES.map((b, i) => (
              <div key={b.area} className="p-6 rounded-2xl text-center shadow-lg" style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.1)" }}>
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#0a1560" }}>{b.city}</h3>
                <p className="text-sm text-gray-500 mb-3">{b.area}</p>
                <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="text-sm font-bold hover:underline" style={{ color: "#1a27e1" }}>
                  📞 {b.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-2">Quick Actions</h2>
            <p className="text-blue-200">Get started with one click</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { label: "📋 Apply for Admission", href: "/admissions" },
              { label: "📅 Book Campus Visit", href: "/admissions" },
              { label: "📞 Schedule Counseling Call", href: "/counseling" },
              { label: "🎓 Download Brochure", href: "#" },
              { label: "💻 Access LMS Portal", href: "#" },
            ].map((link) => (
              <a key={link.label} href={link.href}
                className="flex items-center justify-between p-4 rounded-xl transition-all group"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <span className="text-sm font-medium text-white group-hover:text-yellow-300 transition-colors">{link.label}</span>
                <span className="text-gray-400 group-hover:text-yellow-300 transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pt-28 pb-20 bg-white">
        <div className="section-container reveal">
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: "1px solid rgba(26, 39, 225, 0.1)" }}>
            <div className="h-72 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #f0f3ff, #e8ecff)" }}>
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "#0a1560" }}>Find Us on the Map</h3>
                <p className="text-gray-500 text-sm mb-4">Vrundavan Skylines, 6th Floor, Vastral, Ahmedabad - 382418</p>
                <a href="https://maps.google.com/?q=Vrundavan+Skylines+Vastral+Ahmedabad" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #1a27e1, #3d57ff)" }}>
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
