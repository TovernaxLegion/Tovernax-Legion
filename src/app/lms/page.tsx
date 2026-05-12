import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Learning Management System (LMS)",
  description: "Tovernax Academy's LMS — your complete digital learning hub. Access lectures, assignments, tests, progress analytics, and connect with your mentors anytime.",
};

const LMS_FEATURES = [
  { icon: "🎬", title: "Video Lecture Library", desc: "Thousands of recorded lectures organized by subject, chapter, and difficulty — searchable, bookmarkable, resumable." },
  { icon: "📝", title: "Digital Assignments", desc: "Submit assignments online, receive faculty feedback, and track completion rates — all paperless." },
  { icon: "🧪", title: "Mock Test Engine", desc: "Full-length and sectional mock tests with timer, auto-evaluation, detailed solutions, and rank prediction." },
  { icon: "📊", title: "Performance Analytics", desc: "Visual dashboards showing chapter-wise scores, time spent, improvement graphs, and weak-area identification." },
  { icon: "💬", title: "Doubt Forum", desc: "Post doubts anytime, get answers from faculty within 6 hours, or peer-solve with batch-mates." },
  { icon: "📅", title: "Live Class Scheduler", desc: "View upcoming live classes, set reminders, join directly from LMS, and access recordings post-session." },
  { icon: "🏆", title: "Achievement System", desc: "Badges, streaks, and leaderboards to gamify learning and motivate consistent daily study habits." },
  { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Dedicated parent view showing their child's attendance, performance, and upcoming exams in real time." },
];

const UPCOMING = [
  { icon: "🤖", title: "AI-Powered Doubt Solver", desc: "Instant AI-assisted doubt resolution with step-by-step explanations — available 24/7.", eta: "Q3 2025" },
  { icon: "🎯", title: "Adaptive Learning Paths", desc: "LMS that adapts question difficulty and topic sequencing based on your performance patterns.", eta: "Q4 2025" },
  { icon: "📱", title: "Mobile App", desc: "Full-featured Android and iOS app for learning on the go — offline mode included.", eta: "Q2 2025" },
  { icon: "🔗", title: "LMS API for Schools", desc: "Institutional API allowing schools to integrate Tovernax LMS into their existing systems.", eta: "Q1 2026" },
];

export default function LMSPage() {
  return (
    <div>
      <PageHero
        label="LMS Portal"
        title="Your Complete"
        highlight="Digital Learning Hub"
        description="Everything you need to learn, practice, and excel — in one powerful platform. The Tovernax LMS is built for serious students who demand the best digital learning experience."
        emoji="💻"
      />

      {/* Login CTA */}
      <section className="py-10 bg-navy-950">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-xl text-white">Already Enrolled?</h2>
            <p className="text-gray-400 text-sm mt-1">Access your dashboard, lectures, and tests.</p>
          </div>
          <div className="flex gap-3">
            <a href="#"
              className="px-6 py-3 rounded-xl font-semibold text-white text-sm border border-white/20 hover:border-white/50 transition-all">
              Student Login
            </a>
            <a href="#"
              className="px-6 py-3 rounded-xl font-semibold text-navy-950 text-sm transition-all"
              style={{ background: "linear-gradient(135deg, #ffd624, #f5b800)" }}>
              Parent Login
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Platform Features</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              Everything in <span className="text-gradient">One Place</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Our LMS is designed to replace scattered tools — no more juggling YouTube, WhatsApp, Google Forms, and spreadsheets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LMS_FEATURES.map((f, i) => (
              <div key={f.title} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Dashboard Screenshot */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="section-container relative z-10">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.06)", color: "white", borderColor: "rgba(255,255,255,0.1)" }}>
              Platform Preview
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              A Peek at Your <span style={{ color: "#ffd624" }}>Dashboard</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto reveal">
            {/* Browser chrome */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4 px-4 py-1 rounded-lg text-xs text-gray-500 font-mono" style={{ background: "rgba(255,255,255,0.05)" }}>
                  lms.tovernax.com/dashboard
                </div>
              </div>

              {/* Dashboard UI */}
              <div className="grid grid-cols-4 min-h-64" style={{ background: "#0d1126" }}>
                {/* Sidebar */}
                <div className="col-span-1 border-r border-white/8 p-4 space-y-1">
                  <div className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">Menu</div>
                  {["📊 Dashboard", "🎬 Lectures", "📝 Assignments", "🧪 Mock Tests", "💬 Doubts", "📈 Progress", "👤 Profile"].map((item) => (
                    <div key={item} className={`text-xs px-3 py-2 rounded-lg cursor-pointer transition-colors ${item.includes("Dashboard") ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`}
                      style={item.includes("Dashboard") ? { background: "rgba(61,87,255,0.3)" } : {}}>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="col-span-3 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-white font-semibold text-sm">Welcome back, Arjun 👋</div>
                      <div className="text-gray-400 text-xs">JEE Advanced 2026 Batch</div>
                    </div>
                    <div className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "rgba(245,184,0,0.15)", color: "#ffd624" }}>
                      🔥 14-day streak
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Tests Done", value: "47", color: "#3d57ff" },
                      { label: "Avg Score", value: "82%", color: "#10b981" },
                      { label: "Rank (Mock)", value: "#312", color: "#f5b800" },
                    ].map((s) => (
                      <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <div className="font-bold text-lg" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Today's Schedule</div>
                  <div className="space-y-2">
                    {[
                      { subject: "Physics — Wave Optics", time: "10:00 AM", status: "live" },
                      { subject: "Chemistry — Organic Reactions", time: "2:00 PM", status: "upcoming" },
                      { subject: "Math Mock Test #23", time: "5:00 PM", status: "upcoming" },
                    ].map((c) => (
                      <div key={c.subject} className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                        <span className="text-xs text-gray-300 font-medium">{c.subject}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{c.time}</span>
                          {c.status === "live" && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold animate-pulse">● LIVE</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Roadmap</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              What's Coming <span className="text-gradient">Next</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              We're constantly building. Here's a preview of upcoming LMS features our team is working on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {UPCOMING.map((item, i) => (
              <div key={item.title} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-navy-950 text-sm">{item.title}</h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(245,184,0,0.12)", color: "#d98e00" }}>
                        {item.eta}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Get Access to the LMS Today</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            LMS access is included with all Tovernax Academy enrollments. Enroll now to unlock your complete learning dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-gold">Enroll & Get LMS Access</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/25 hover:border-white/50 transition-all">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
