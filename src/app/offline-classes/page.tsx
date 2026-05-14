import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Offline Classes",
  description: "Experience immersive classroom learning at Tovernax Academy. State-of-the-art facilities, expert faculty, and a collaborative environment designed for deep learning.",
};

const FACILITIES = [
  { icon: "🏛️", title: "Modern Classrooms", desc: "Air-conditioned, tech-enabled classrooms with smart boards, projectors, and ergonomic seating for 30–40 students." },
  { icon: "📚", title: "Resource Library", desc: "Extensive physical library with reference books, previous year papers, test booklets, and a quiet study zone." },
  { icon: "🧪", title: "Science Labs", desc: "Fully equipped physics, chemistry, and biology labs for hands-on experiments — critical for NEET & board prep." },
  { icon: "💻", title: "Computer Lab", desc: "High-speed computer lab for online mock tests, LMS access, and digital assessments in a supervised environment." },
  { icon: "🍽️", title: "Student Lounge", desc: "A comfortable space for breaks, group study, peer discussion, and relaxation between sessions." },
  { icon: "🎥", title: "Recorded Backup", desc: "Every offline class is also recorded so students can revisit lectures and never miss a concept." },
];

const BRANCHES = [
  { city: "Ahmedabad HQ", area: "Vrundavan Skylines, 6th Floor, Vastral", phone: "+91 9597078806", timing: "7 AM – 9 PM" },
  { city: "Ahmedabad", area: "Nikol Branch", phone: "+91 9597078806", timing: "7 AM – 9 PM" },
  { city: "Ahmedabad", area: "Nava Naroda Branch", phone: "+91 9597078806", timing: "8 AM – 8 PM" },
];

export default function OfflineClassesPage() {
  return (
    <div>
      <PageHero
        label="Offline Classes"
        title="The Power of the"
        highlight="Classroom Experience"
        description="Nothing replaces the energy and depth of face-to-face learning. Our state-of-the-art campuses are designed to inspire, engage, and accelerate your learning journey."
        emoji="🏛️"
      />

      {/* Why Offline */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
                Why Offline Learning
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: "#0a1560" }}>
                Deep Focus, Real Connections, <span style={{ color: "#1a27e1" }}>Lasting Results</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "🧠", title: "Immersive Focus Environment", desc: "A dedicated learning space separates study from home distractions — students report 40% better focus in our classrooms." },
                  { icon: "🤝", title: "Peer Learning Effect", desc: "Learning alongside peers drives healthy competition, collaboration, and faster problem-solving skills." },
                  { icon: "👨‍🏫", title: "Instant Doubt Resolution", desc: "Raise your hand, get an answer. Real-time interaction with faculty dramatically reduces confusion and builds confidence." },
                  { icon: "📅", title: "Structured Discipline", desc: "Fixed schedules and physical attendance instill the study discipline critical for cracking competitive exams." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.08)" }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: "rgba(26, 39, 225, 0.08)" }}>{item.icon}</div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1" style={{ color: "#0a1560" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#1a27e1" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: "1px solid rgba(26, 39, 225, 0.1)" }}>
                <div className="h-52 flex items-center justify-center text-7xl" style={{ background: "linear-gradient(135deg, #0a1560, #1a27e1)" }}>
                  🏛️
                </div>
                <div className="p-6" style={{ background: "white" }}>
                  <div className="font-display font-bold text-lg mb-1" style={{ color: "#0a1560" }}>Tovernax HQ Campus — Ahmedabad</div>
                  <div className="text-sm" style={{ color: "#1a27e1" }}>25,000 sq ft • 18 classrooms • 3 labs • Library • Cafeteria</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                {[
                  { value: "3", label: "Campuses" },
                  { value: "18+", label: "Classrooms" },
                  { value: "500+", label: "Offline Students" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl text-center shadow-lg" style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.08)" }}>
                    <div className="font-display font-bold text-2xl" style={{ color: "#0a1560" }}>{s.value}</div>
                    <div className="text-xs mt-1" style={{ color: "#1a27e1" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="pt-28 pb-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
              Campus Facilities
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#0a1560" }}>
              Everything You Need to <span style={{ color: "#1a27e1" }}>Excel</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((f, i) => (
              <div key={f.title} className="p-7 rounded-2xl shadow-lg reveal group hover:shadow-xl transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #f0f3ff, #ffffff)", border: "1px solid rgba(26, 39, 225, 0.08)", transitionDelay: `${i * 60}ms` }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(26, 39, 225, 0.08)" }}>{f.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1560" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1a27e1" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}>
              Our Branches
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Visit us at any of our centres
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {BRANCHES.map((b, i) => (
              <div key={b.area} className="p-8 rounded-2xl text-center reveal shadow-xl"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", transitionDelay: `${i * 70}ms` }}>
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="font-display font-bold text-lg text-white mb-1">{b.city}</h3>
                <div className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{b.area}</div>
                <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <div className="flex items-center justify-center gap-2">
                    <span>📞</span>
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="font-bold hover:underline" style={{ color: "#00bfff" }}>{b.phone}</a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>⏰</span>
                    <span>{b.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #dde3ff 100%)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0a1560" }}>
            Visit Our Campus Today
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#1a27e1" }}>
            Schedule a campus tour and see our facilities, meet our faculty, and experience the Tovernax environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg text-white animate-red-blue">
              Book Campus Visit
            </Link>
            <Link href="/admissions" className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg text-white animate-gold-blue-cta">
              Apply for Offline Batch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
