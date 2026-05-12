import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Online Classes",
  description: "Join live and recorded online classes at Tovernax Academy. Learn from anywhere with interactive sessions, real-time doubt solving, and flexible schedules.",
};

const FEATURES = [
  { icon: "📡", title: "Live Interactive Classes", desc: "Real-time sessions with full two-way interaction — ask doubts, answer polls, collaborate with peers." },
  { icon: "🎬", title: "Recorded Lecture Library", desc: "Miss a class? Every session is recorded and available on-demand in your LMS dashboard." },
  { icon: "💬", title: "Live Chat & Q&A", desc: "In-session chat window, hand-raise feature, and dedicated post-class doubt-clearing rounds." },
  { icon: "📱", title: "Multi-Device Access", desc: "Attend classes from any device — laptop, tablet, or mobile. Seamless experience across all platforms." },
  { icon: "📋", title: "Digital Notes & Resources", desc: "All study materials, PDFs, and practice sheets shared digitally before or during each class." },
  { icon: "📊", title: "Attendance & Progress Tracker", desc: "Automated attendance, quiz scores, and progress dashboards for students and parents." },
];

const TECH_STACK = [
  { name: "HD Video Streaming", icon: "📹" },
  { name: "Interactive Whiteboard", icon: "🖊️" },
  { name: "Screen Sharing", icon: "🖥️" },
  { name: "Breakout Rooms", icon: "👥" },
  { name: "In-Class Polls", icon: "📊" },
  { name: "Digital Assignments", icon: "📝" },
  { name: "Parent Portal", icon: "👨‍👩‍👧" },
  { name: "Progress Analytics", icon: "📈" },
];

export default function OnlineClassesPage() {
  return (
    <div>
      <PageHero
        label="Online Classes"
        title="World-Class Learning,"
        highlight="From Anywhere"
        description="Attend live, interactive classes from the comfort of home. Our online platform delivers the same quality as our physical classrooms — with even more flexibility."
        emoji="💻"
      />

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Platform Features</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              Online Learning <span className="text-gradient">Redefined</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="card-premium p-7 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Platform Highlight */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.06)", color: "white", borderColor: "rgba(255,255,255,0.1)" }}>
                Our Platform
              </div>
              <h2 className="font-display text-4xl font-bold text-white mb-5">
                Built for <span style={{ color: "#ffd624" }}>Serious Learners</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our proprietary online learning platform combines video streaming, interactive tools, and analytics to create the most engaging and effective online classroom experience available.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {TECH_STACK.map((t) => (
                  <div key={t.name} className="flex items-center gap-3 p-3 rounded-xl border border-white/8 hover:border-white/20 transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    <span className="text-xl">{t.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              {/* Mock platform UI */}
              <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                {/* Window bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-500 font-mono">tovernax-lms.app/live</span>
                </div>
                {/* Video area */}
                <div className="aspect-video bg-navy-900 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-5xl mb-3">⚛️</div>
                    <div className="text-white font-semibold">JEE Physics — Wave Optics</div>
                    <div className="text-gray-400 text-sm mt-1">Live • 234 students watching</div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {["🎤", "📷", "💬", "👋"].map((icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-colors">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">● LIVE</span>
                  </div>
                </div>
                {/* Bottom toolbar */}
                <div className="px-5 py-3 flex items-center justify-between border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy-600 flex items-center justify-center text-xs text-white font-bold">T</div>
                    <span className="text-xs text-gray-400">Dr. Anand Kulkarni</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-xs px-3 py-1 rounded-lg font-medium" style={{ background: "rgba(61,87,255,0.25)", color: "#93abff" }}>
                      💬 Ask Doubt
                    </div>
                    <div className="text-xs px-3 py-1 rounded-lg font-medium" style={{ background: "rgba(245,184,0,0.15)", color: "#ffd624" }}>
                      📝 Notes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Class Schedule</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Flexible Timings for Every Student</h2>
          </div>
          <div className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-5 reveal">
            {[
              { slot: "Morning Batch", time: "7:00 AM – 10:00 AM", icon: "🌅", best: "School going students" },
              { slot: "Afternoon Batch", time: "2:00 PM – 5:00 PM", icon: "☀️", best: "Droppers & full-time" },
              { slot: "Evening Batch", time: "6:00 PM – 9:00 PM", icon: "🌆", best: "Working professionals" },
            ].map((b) => (
              <div key={b.slot} className="card-premium p-6 text-center">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-1">{b.slot}</h3>
                <div className="text-navy-700 font-bold text-sm mb-2">{b.time}</div>
                <div className="text-xs text-gray-400">Best for: {b.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Try a Free Online Demo Class</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Experience our online platform firsthand. Book a free demo session in your preferred subject.
          </p>
          <Link href="/admissions" className="btn-gold">Book Free Demo Class</Link>
        </div>
      </section>
    </div>
  );
}
