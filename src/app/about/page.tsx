import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Tovernax Academy's history, mission, values, and the team behind India's premier educational institution.",
};

const LEADERSHIP = [
  { name: "Praveer Upadhyay", role: "Director & Founder", expertise: "Defence, Indutry and Academia • 09 Years in Education", avatar: "AB" },
  { name: "Priyanka Sharma", role: "Academic Director", expertise: "M.Ed, PhD • Curriculum Design Expert", avatar: "PS" },
  { name: "Rahul Tiwari", role: "Head of Competitive Prep", expertise: "IIT Alumni • JEE Expert Mentor", avatar: "RT" },
  { name: "Meena Krishnan", role: "Director of Counseling", expertise: "Psychologist • 18 Years Experience", avatar: "MK" },
  { name: "Aryan Shah", role: "Head of Technology", expertise: "Full-Stack Engineer • EdTech Innovator", avatar: "AS" },
  { name: "Sunita Patel", role: "Director of Operations", expertise: "MBA, IIM • Strategic Operations", avatar: "SP" },
];

const MILESTONES = [
  { year: "January 2024", event: "Started with 30 students in Ahmedabad" },
  { year: "January 2025", event: "Expanded to online platform — first 50 online students enrolled" },
  { year: "July 2025", event: "Launched hybrid learning model — first of its kind in the region" },
  { year: "January 2026", event: "With heavy demand, Founded Tovernax Academy Under Parent Company Tovernax Legion" },
  { year: "May 2026", event: "Tovernax Academy becomes flagship institution" },
  { year: "May 2026", event: "LMS platform launched — 50+ programs nationwide" },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-dark-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="section-container relative z-10 text-center">
          <div className="section-label mb-6" style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.12)" }}>
            About Tovernax Academy
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            14 Years of Shaping{" "}
            <span style={{ color: "#ffd624" }}>Exceptional Futures</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            From a single classroom in Ahmedabad to a nationwide institution — our journey is one of passion, perseverance and purpose.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60V20C1200 40 900 55 600 45C300 35 100 10 0 0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="section-label mb-4">Our Story</div>
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">
                Born from a Belief in Every Student's Potential
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            <div className="grid grid-cols-2 gap-4 reveal-right">
              {[
                { emoji: "🎓", value: "500+", label: "Students Enrolled" },
                { emoji: "👩‍🏫", value: "25+", label: "Expert Faculty" },
                { emoji: "📈", value: "98%", label: "Success Rate" },
                { emoji: "🏆", value: "50+", label: "Programs" },
                { emoji: "🌐", value: "5+", label: "Cities Served" },
                { emoji: "⭐", value: "4.9/5", label: "Student Rating" },
              ].map((stat) => (
                <div key={stat.label} className="card-premium p-5 text-center">
                  <div className="text-3xl mb-2">{stat.emoji}</div>
                  <div className="font-display font-bold text-2xl text-navy-950 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Our Journey</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Milestones That Define Us</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex items-start gap-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-display font-bold text-lg text-navy-700">{m.year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-4 border-navy-600 bg-white flex-shrink-0" />
                  {i < MILESTONES.length - 1 && <div className="w-0.5 h-12 bg-gradient-to-b from-navy-600 to-navy-200 mt-1" />}
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-gray-700 font-medium">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Our Team</div>
            <h2 className="font-display text-4xl font-bold text-navy-950 mb-4">
              The Minds Behind <span className="text-gradient">Tovernax Academy</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP.map((person, i) => (
              <div key={person.name} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, hsl(${210 + i * 30}, 80%, 45%), hsl(${230 + i * 30}, 80%, 55%))` }}>
                    {person.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950">{person.name}</h3>
                    <div className="text-sm font-medium text-navy-600 mb-1">{person.role}</div>
                    <div className="text-xs text-gray-500">{person.expertise}</div>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Be Part of the Tovernax Legacy
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Join thousands of students and families who have chosen Tovernax Academy as their partner in achieving excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-gold">Apply for Admission</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/25 hover:border-white/50 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
