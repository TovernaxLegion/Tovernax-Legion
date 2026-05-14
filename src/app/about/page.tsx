import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Tovernax Academy's history, mission, values, and the team behind India's premier educational institution.",
};

const LEADERSHIP = [
  { name: "Praveer Upadhyay", role: "Director & Founder", expertise: "Defence, Industry and Academia • 09 Years in Education", avatar: "PU", color: "#1a27e1" },
  { name: "Priyanka Sharma", role: "Academic Director", expertise: "M.Ed, PhD • Curriculum Design Expert", avatar: "PS", color: "#10b981" },
  { name: "Rahul Tiwari", role: "Head of Competitive Prep", expertise: "IIT Alumni • JEE Expert Mentor", avatar: "RT", color: "#f5b800" },
  { name: "Meena Krishnan", role: "Director of Counseling", expertise: "Psychologist • 18 Years Experience", avatar: "MK", color: "#ec4899" },
  { name: "Aryan Shah", role: "Head of Technology", expertise: "Full-Stack Engineer • EdTech Innovator", avatar: "AS", color: "#8b5cf6" },
  { name: "Sunita Patel", role: "Director of Operations", expertise: "MBA, IIM • Strategic Operations", avatar: "SP", color: "#dc2626" },
];

const MILESTONES = [
  { year: "Jan 2024", event: "Started with 30 students in Ahmedabad", icon: "🌱" },
  { year: "Jan 2025", event: "Expanded to online platform — first 50 online students enrolled", icon: "💻" },
  { year: "Jul 2025", event: "Launched hybrid learning model — first of its kind in the region", icon: "🔄" },
  { year: "Jan 2026", event: "Founded Tovernax Academy Under Parent Company Tovernax Legion", icon: "🏛️" },
  { year: "May 2026", event: "Tovernax Academy becomes flagship institution", icon: "🏆" },
  { year: "May 2026", event: "LMS platform launched — 50+ programs nationwide", icon: "🚀" },
];

export default function AboutPage() {
  return (
    <div className="pt-6">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #020818 0%, #040d2e 30%, #071050 60%, #0a1560 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #1a27e1, transparent)" }} />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffd624, transparent)" }} />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold mb-8"
            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.12)" }}>
            About Tovernax Academy
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            14 Years of Shaping{" "}
            <span style={{ color: "#ffd624" }}>Exceptional Futures</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            From a single classroom in Ahmedabad to a nationwide institution — our journey is one of passion, perseverance and purpose.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 2" xmlns="http://www.w3.org/2000/svg">
            <rect width="1440" height="2" fill="white" />
          </svg>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="pt-24 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
                Our Story
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: "#0a1560" }}>
                Born from a Belief in Every Student's Potential
              </h2>
              <div className="space-y-5 text-lg leading-relaxed" style={{ color: "#1a27e1" }}>
                <p>
                  Tovernax Academy was founded in 2024 with a singular belief: every student, regardless of background, deserves access to world-class education and mentorship. What started as a small coaching center has grown into India's most innovative educational institution.
                </p>
                <p>
                  Our founders — educators, researchers and technologists — recognized that traditional education was failing students by treating them as numbers rather than individuals. They built Tovernax Academy on a fundamentally different premise: personalized learning, data-driven insights, and genuine human connection.
                </p>
                <p>
                  Today, Tovernax Academy is part of the Tovernax Legion ecosystem, with over 500 enrolled students, 25+ faculty members, and a track record of producing top rankers across JEE, NEET, UPSC, and board examinations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 reveal-right">
              {[
                { emoji: "🎓", value: "500+", label: "Students Enrolled" },
                { emoji: "👩‍🏫", value: "25+", label: "Expert Faculty" },
                { emoji: "📈", value: "98%", label: "Success Rate" },
                { emoji: "🏆", value: "50+", label: "Programs" },
                { emoji: "🌐", value: "5+", label: "Cities Served" },
                { emoji: "⭐", value: "4.9/5", label: "Student Rating" },
              ].map((stat, i) => (
                <div key={stat.label} className="p-6 rounded-2xl text-center shadow-lg"
                  style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.08)" }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3"
                    style={{ background: `rgba(26, 39, 225, ${0.06 + i * 0.02})` }}>
                    {stat.emoji}
                  </div>
                  <div className="font-display font-bold text-2xl mb-1" style={{ color: "#0a1560" }}>{stat.value}</div>
                  <div className="text-sm font-medium" style={{ color: "#1a27e1" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Premium */}
      <section className="pt-28 pb-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
              Our Journey
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#0a1560" }}>
              Milestones That Define Us
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ background: "linear-gradient(to bottom, #1a27e1, #ffd624, #1a27e1)" }} />

            {MILESTONES.map((m, i) => (
              <div key={i} className={`flex items-center mb-12 reveal ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="p-6 rounded-2xl shadow-lg inline-block"
                    style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #f0f3ff, #e8ecff)" : "linear-gradient(135deg, #fffbeb, #fef3c7)", border: "1px solid rgba(26, 39, 225, 0.08)" }}>
                    <div className="text-sm font-bold mb-2" style={{ color: "#1a27e1" }}>{m.year}</div>
                    <p className="font-semibold text-base" style={{ color: "#0a1560" }}>{m.event}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full items-center justify-center text-2xl z-10 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #1a27e1, #3d57ff)", border: "3px solid white" }}>
                  {m.icon}
                </div>
                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}>
              Our Team
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              The Minds Behind <span style={{ color: "#ffd624" }}>Tovernax Academy</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP.map((person, i) => (
              <div key={person.name} className="p-6 rounded-2xl text-center reveal"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", transitionDelay: `${i * 60}ms` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-5 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${person.color}, ${person.color}cc)`, boxShadow: `0 8px 24px ${person.color}44` }}>
                  {person.avatar}
                </div>
                <h3 className="font-bold text-lg text-white mb-1">{person.name}</h3>
                <div className="text-sm font-semibold mb-2" style={{ color: "#ffd624" }}>{person.role}</div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{person.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #dde3ff 100%)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0a1560" }}>
            Be Part of the Tovernax Legacy
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#1a27e1" }}>
            Join thousands of students and families who have chosen Tovernax Academy as their partner in achieving excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/admissions" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg text-white animate-red-blue">
              Apply for Admission
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg text-white animate-gold-blue-cta">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
