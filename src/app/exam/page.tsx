import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Mock Tests & Exam Practice",
  description: "Tovernax Academy's Mock Test Platform — Full-length exams, sectional tests, detailed analytics, and performance tracking for JEE, NEET, UPSC, and more.",
};

const EXAM_FEATURES = [
  { icon: "📋", title: "Full-Length Mock Tests", desc: "Complete mock exams with realistic difficulty, time constraints, and exam-like interface." },
  { icon: "📊", title: "Detailed Analytics", desc: "Performance breakdown by subject, topic, difficulty level, and comparison with all-India ranking." },
  { icon: "⏱️", title: "Time Management Tools", desc: "Section-wise timing, speed vs accuracy analysis, and optimization recommendations." },
  { icon: "✅", title: "Auto-Evaluation", desc: "Instant results with detailed solutions for every question and expert explanations." },
  { icon: "📈", title: "Progress Tracking", desc: "Track improvement over time with visual graphs and weak-area identification." },
  { icon: "🏆", title: "All-India Ranking", desc: "Real-time rank prediction and comparison with thousands of mock test takers." },
  { icon: "🎯", title: "Adaptive Difficulty", desc: "Tests adapt to your performance level for personalized preparation." },
  { icon: "📱", title: "Mobile-Friendly", desc: "Take exams on any device with seamless experience and offline capability." },
];

export default function ExamPage() {
  return (
    <div>
      <PageHero
        label="Mock Tests"
        title="Master Your"
        highlight="Exam Strategy"
        description="Thousands of full-length and sectional mock tests with real-time analytics, performance tracking, and detailed solutions — all designed to maximize your score."
        emoji="🧪"
      />

      {/* Test Categories */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Available Exams</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              Choose Your <span className="text-gradient">Exam</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Comprehensive mock test series for every major competitive exam in India.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "⚛️", title: "JEE Main & Advanced", tests: "500+ Tests" },
              { icon: "🧬", title: "NEET UG & PG", tests: "450+ Tests" },
              { icon: "🏛️", title: "UPSC CSE", tests: "300+ Tests" },
              { icon: "🏦", title: "Banking & SSC", tests: "400+ Tests" },
              { icon: "📚", title: "Board Exams", tests: "600+ Tests" },
              { icon: "🎓", title: "CAT/MAT/CLAT", tests: "350+ Tests" },
              { icon: "🛡️", title: "Defence Exams", tests: "250+ Tests" },
              { icon: "👨‍⚖️", title: "Law Entrance", tests: "200+ Tests" },
            ].map((exam, i) => (
              <div key={exam.title} className="card-premium p-6 reveal text-center" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="text-4xl mb-3">{exam.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-1">{exam.title}</h3>
                <p className="text-gray-500 text-sm">{exam.tests}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-navy-950">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.06)", color: "white", borderColor: "rgba(255,255,255,0.1)" }}>
              Platform Features
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              Advanced <span style={{ color: "#ffd624" }}>Test Engine</span>
            </h2>
            <p className="text-blue-200 mt-4 max-w-xl mx-auto">
              Our mock test platform includes everything you need for comprehensive exam preparation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXAM_FEATURES.map((f, i) => (
              <div key={f.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 reveal hover:bg-white/10 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Getting Started</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              How the <span className="text-gradient">Test Engine</span> Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Choose Exam", desc: "Select your target exam and difficulty level" },
              { num: "2", title: "Take Test", desc: "Solve questions in exam-like environment" },
              { num: "3", title: "Get Analysis", desc: "Instant detailed performance report" },
              { num: "4", title: "Improve", desc: "Study weak areas and retake tests" },
            ].map((step, i) => (
              <div key={step.num} className="relative reveal">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center font-display text-2xl font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #3d57ff, #8b5cf6)" }}>
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-navy-950 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-navy-700 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Start Your Mock Test Practice Today</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Join thousands of students who have improved their scores through consistent mock test practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-gold">Enroll & Get Full Access</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/25 hover:border-white/50 transition-all">
              Take Free Sample Test
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
