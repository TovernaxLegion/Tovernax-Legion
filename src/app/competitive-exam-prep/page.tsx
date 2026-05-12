import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { EXAM_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Competitive Exam Preparation",
  description: "Expert competitive exam preparation at Tovernax Academy — JEE, NEET, UPSC, Banking, Defence and more. Proven methodology, expert faculty, top results.",
};

const METHODOLOGY = [
  { icon: "🔍", title: "Deep PYQ Analysis", desc: "10+ years of previous year questions analyzed topic-wise to identify patterns, trends, and high-weightage areas." },
  { icon: "📐", title: "Conceptual Foundation", desc: "Every competitive exam concept taught from scratch — no assumption of prior knowledge. Build it rock solid." },
  { icon: "⏱️", title: "Speed & Accuracy Drills", desc: "Daily timed practice sessions that train the brain to solve questions faster without compromising accuracy." },
  { icon: "📊", title: "AIR Benchmarking", desc: "Regular all-India level mock tests with detailed rank analysis so students know exactly where they stand." },
  { icon: "🧠", title: "Exam Strategy", desc: "Subject-wise and section-wise time management, question-selection strategy, and revision plans." },
  { icon: "🎯", title: "Personalized Feedback", desc: "Every mock test is followed by a 1-on-1 mentor review session to address specific weak areas." },
];

const RESULTS = [
  { exam: "JEE Advanced", metric: "AIR 247", year: "2024", student: "Arjun Mehta" },
  { exam: "NEET UG", metric: "AIR 512", year: "2024", student: "Priya Sharma" },
  { exam: "UPSC CSE", metric: "Rank 89", year: "2023", student: "Rahul Gupta" },
  { exam: "IBPS PO", metric: "Selected", year: "2024", student: "Vikram Singh" },
  { exam: "NDA", metric: "Merit List", year: "2024", student: "Karan Joshi" },
  { exam: "CA Foundation", metric: "All India 1st", year: "2023", student: "Neha Agarwal" },
];

export default function CompetitiveExamPrepPage() {
  return (
    <div>
      <PageHero
        label="Competitive Exam Preparation"
        title="From Aspirant to"
        highlight="Top Ranker"
        description="Structured, data-driven preparation for India's most competitive exams. Our methodology has produced hundreds of top rankers across JEE, NEET, UPSC, and beyond."
        emoji="🏆"
      />

      {/* Stats Strip */}
      <section className="py-10 bg-navy-950">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "JEE AIR 247", label: "Best JEE Rank (2024)" },
              { value: "NEET AIR 512", label: "Best NEET Rank (2024)" },
              { value: "23+", label: "IAS Officers Produced" },
              { value: "500+", label: "Bank PO Selections" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-2xl text-gold-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Exams We Cover</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              Every Major Exam. <span className="text-gradient">One Academy.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAM_CATEGORIES.map((cat, i) => (
              <div key={cat.category} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="font-display font-bold text-lg text-navy-950 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center text-sm">📌</span>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.exams.map((exam) => (
                    <span key={exam} className="text-xs px-3 py-1.5 rounded-lg font-semibold bg-navy-50 text-navy-700 border border-navy-100">
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Our Methodology</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              The <span className="text-gradient">Tovernax Prep System</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              A battle-tested, six-pillar system refined over 14 years and thousands of success stories.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODOLOGY.map((m, i) => (
              <div key={m.title} className="card-premium p-7 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-2xl mb-4">
                  {m.icon}
                </div>
                <h3 className="font-semibold text-navy-950 mb-2 text-lg">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Results */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="section-container relative z-10">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.06)", color: "white", borderColor: "rgba(255,255,255,0.1)" }}>
              Hall of Fame
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              Our <span style={{ color: "#ffd624" }}>Top Achievers</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESULTS.map((r, i) => (
              <div key={r.student} className="p-5 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors reveal"
                style={{ background: "rgba(255,255,255,0.04)", transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">{r.exam}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(245,184,0,0.12)", color: "#ffd624" }}>
                    {r.year}
                  </span>
                </div>
                <div className="font-display font-bold text-2xl text-white mb-1">{r.metric}</div>
                <div className="text-gray-400 text-sm">{r.student}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch schedule */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Batch Schedule</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Upcoming Batches</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 reveal">
            {[
              { name: "JEE 2026 Foundation Batch", starts: "June 1, 2025", seats: 47, mode: "Hybrid" },
              { name: "NEET 2026 Intensive Batch", starts: "June 5, 2025", seats: 35, mode: "Hybrid" },
              { name: "UPSC 2026 Foundation", starts: "June 10, 2025", seats: 28, mode: "Online" },
              { name: "Banking SSC Fast Track", starts: "June 15, 2025", seats: 60, mode: "Online" },
              { name: "Class XII Science Batch", starts: "June 1, 2025", seats: 80, mode: "All Modes" },
            ].map((b) => (
              <div key={b.name} className="card-premium p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-navy-950">{b.name}</h3>
                  <div className="text-sm text-gray-500 mt-0.5">Starts: {b.starts} • Mode: {b.mode}</div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-center">
                    <div className="font-bold text-navy-700 text-lg">{b.seats}</div>
                    <div className="text-xs text-gray-400">Seats Left</div>
                  </div>
                  <Link href="/admissions" className="btn-primary px-5 py-2.5 text-sm">
                    Reserve Seat
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Your Name Belongs on This List
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Start your competitive exam journey with Tovernax Academy. Expert guidance + proven system = your dream rank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-gold">Apply for Competitive Prep</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/25 hover:border-white/50 transition-all">
              Free Counseling Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
