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
  { city: "Ahmedabad", area: "Navrangpura (HQ)", address: "Tovernax Tower, Near IIM Road", phone: "+91 98765 43210", timing: "7 AM – 9 PM" },
  { city: "Ahmedabad", area: "Satellite", address: "503, Shyamal Complex, Satellite", phone: "+91 98765 43211", timing: "7 AM – 9 PM" },
  { city: "Surat", area: "Adajan", address: "201, Lakeview Plaza, Adajan", phone: "+91 98765 43212", timing: "8 AM – 8 PM" },
  { city: "Vadodara", area: "Alkapuri", address: "Tovernax Center, Alkapuri", phone: "+91 98765 43213", timing: "8 AM – 8 PM" },
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
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="section-label mb-4">Why Offline Learning</div>
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">
                Deep Focus, Real Connections, <span className="text-gradient">Lasting Results</span>
              </h2>
              <div className="space-y-5">
                {[
                  { icon: "🧠", title: "Immersive Focus Environment", desc: "A dedicated learning space separates study from home distractions — students report 40% better focus in our classrooms." },
                  { icon: "🤝", title: "Peer Learning Effect", desc: "Learning alongside peers drives healthy competition, collaboration, and faster problem-solving skills." },
                  { icon: "👨‍🏫", title: "Instant Doubt Resolution", desc: "Raise your hand, get an answer. Real-time interaction with faculty dramatically reduces confusion and builds confidence." },
                  { icon: "📅", title: "Structured Discipline", desc: "Fixed schedules and physical attendance instill the study discipline critical for cracking competitive exams." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-navy-950 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 reveal-right">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-card">
                <div className="h-48 flex items-center justify-center text-6xl" style={{ background: "linear-gradient(135deg, #f0f3ff, #e8ecff)" }}>
                  🏛️
                </div>
                <div className="p-5">
                  <div className="font-semibold text-navy-950 mb-1">Tovernax HQ Campus — Ahmedabad</div>
                  <div className="text-gray-500 text-sm">25,000 sq ft • 18 classrooms • 3 labs • Library • Cafeteria</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "4", label: "Campuses" },
                  { value: "18+", label: "Classrooms" },
                  { value: "5000+", label: "Offline Students" },
                ].map((s) => (
                  <div key={s.label} className="card-premium p-4 text-center">
                    <div className="font-display font-bold text-2xl text-navy-700">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Campus Facilities</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Everything You Need to Excel</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((f, i) => (
              <div key={f.title} className="card-premium p-7 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Our Campuses</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Find a Branch Near You</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {BRANCHES.map((b, i) => (
              <div key={b.address} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg text-navy-950">{b.city}</h3>
                    <div className="text-navy-600 font-semibold text-sm">{b.area}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-semibold">Open</span>
                </div>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-start gap-2"><span>📍</span> {b.address}</div>
                  <div className="flex items-start gap-2"><span>📞</span> <a href={`tel:${b.phone}`} className="hover:text-navy-700">{b.phone}</a></div>
                  <div className="flex items-start gap-2"><span>⏰</span> {b.timing}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Visit Our Campus Today</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Schedule a campus tour and see our facilities, meet our faculty, and experience the Tovernax environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Book Campus Visit</Link>
            <Link href="/admissions" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/25 hover:border-white/50 transition-all">
              Apply for Offline Batch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
