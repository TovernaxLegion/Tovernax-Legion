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
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
              Platform Features
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#0a1560" }}>
              Online Learning <span style={{ color: "#ffd624" }}>Redefined</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="p-7 rounded-2xl shadow-lg reveal group hover:shadow-xl transition-all duration-300"
                style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.08)", transitionDelay: `${i * 70}ms` }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(26, 39, 225, 0.08)" }}>{f.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1560" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1a27e1" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Platform Highlight */}
      <section className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #020818 0%, #040d2e 40%, #071050 70%, #0a1560 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #3d57ff, transparent)" }} />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.12)" }}>
                Our Platform
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                Built for <span style={{ color: "#ffd624" }}>Serious Learners</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Our proprietary online learning platform combines video streaming, interactive tools, and analytics to create the most engaging and effective online classroom experience available.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {TECH_STACK.map((t) => (
                  <div key={t.name} className="flex items-center gap-3 p-4 rounded-xl transition-colors hover:bg-white/5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="text-2xl">{t.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-500 font-mono">tovernax-lms.app/live</span>
                </div>
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
      <section className="pt-28 pb-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
              Class Schedule
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#0a1560" }}>
              Flexible Timings for <span style={{ color: "#ffd624" }}>Every Student</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8 reveal">
            {[
              { slot: "Morning Batch", time: "7:00 AM – 10:00 AM", icon: "🌅", best: "School going students", color: "#ffd624" },
              { slot: "Afternoon Batch", time: "2:00 PM – 5:00 PM", icon: "☀️", best: "Droppers & full-time", color: "#1a27e1" },
              { slot: "Evening Batch", time: "6:00 PM – 9:00 PM", icon: "🌆", best: "Working professionals", color: "#10b981" },
            ].map((b) => (
              <div key={b.slot} className="p-8 rounded-2xl text-center shadow-lg" style={{ background: "white", border: `2px solid ${b.color}22` }}>
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1560" }}>{b.slot}</h3>
                <div className="font-bold text-sm mb-2" style={{ color: b.color }}>{b.time}</div>
                <div className="text-xs" style={{ color: "#1a27e1" }}>Best for: {b.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Try a Free Online Demo Class
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Experience our online platform firsthand. Book a free demo session in your preferred subject.
          </p>
          <Link href="/admissions" className="inline-block px-14 py-6 rounded-2xl font-bold text-2xl text-white animate-red-blue">
            Book Free Demo Class
          </Link>
        </div>
      </section>
    </div>
  );
}
