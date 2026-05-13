import { Metadata } from "next";
import Link from "next/link";
import { FEATURED_COURSES, EXAM_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore all courses at Tovernax Academy — JEE, NEET, UPSC, Banking, Class 10 & 12, and more. Find the right program for your goals.",
};

export default function CoursesPage() {
  const categoryColors: Record<string, { bg: string; border: string; header: string; tag: string }> = {
    "Engineering": { bg: "linear-gradient(135deg, #1a27e1, #3d57ff)", border: "rgba(61,87,255,0.3)", header: "#1a27e1", tag: "rgba(26,39,225,0.1)" },
    "Medical": { bg: "linear-gradient(135deg, #10b981, #34d399)", border: "rgba(16,185,129,0.3)", header: "#10b981", tag: "rgba(16,185,129,0.1)" },
    "Civil Services": { bg: "linear-gradient(135deg, #f5b800, #ffd624)", border: "rgba(245,184,0,0.3)", header: "#d98e00", tag: "rgba(245,184,0,0.1)" },
    "Commerce & Management": { bg: "linear-gradient(135deg, #8b5cf6, #a78bfa)", border: "rgba(139,92,246,0.3)", header: "#8b5cf6", tag: "rgba(139,92,246,0.1)" },
    "Banking & Finance": { bg: "linear-gradient(135deg, #ec4899, #f472b6)", border: "rgba(236,72,153,0.3)", header: "#ec4899", tag: "rgba(236,72,153,0.1)" },
    "Defence": { bg: "linear-gradient(135deg, #dc2626, #f87171)", border: "rgba(220,38,38,0.3)", header: "#dc2626", tag: "rgba(220,38,38,0.1)" },
  };

  return (
    <div className="pt-6">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 50%, #dde3ff 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold mb-6"
            style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
            All Programs
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "#0a1560" }}>
            Find Your Perfect{" "}
            <span style={{ color: "#ffd624" }}>Learning Path</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 font-medium" style={{ color: "#1a27e1" }}>
            From board exams to UPSC — we have a program tailored for every goal, learning style, and schedule.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", "Engineering", "Medical", "Civil Services", "Academic", "Banking", "Defence"].map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${cat === "All" ? "text-white" : "hover:opacity-80"}`}
                style={cat === "All" ? { background: "linear-gradient(135deg, #1a27e1, #3d57ff)" } : { background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 2" xmlns="http://www.w3.org/2000/svg">
            <rect width="1440" height="2" fill="white" />
          </svg>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_COURSES.map((course, i) => (
              <Link key={course.id} href={`/courses/${course.id}`}
                className="card-premium overflow-hidden group reveal"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className={`h-36 bg-gradient-to-br ${course.color || "from-purple-600 to-pink-500"} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white" />
                  </div>
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase text-white/70 block mb-1">{course.category}</span>
                      <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">{course.mode}</span>
                    </div>
                    <span className="text-4xl">{course.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{course.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500">{course.duration}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-500">{course.students} enrolled</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="text-sm font-bold text-navy-900">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.15)" }}>Exam Coverage</div>
            <h2 className="font-display text-4xl font-bold text-white">All Major Exams Covered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAM_CATEGORIES.map((cat, i) => {
              const colors = categoryColors[cat.category] || { bg: "linear-gradient(135deg, #6366f1, #818cf8)", border: "rgba(99,102,241,0.3)", header: "#6366f1", tag: "rgba(99,102,241,0.1)" };
              return (
                <div key={cat.category} className="rounded-2xl overflow-hidden shadow-xl reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="p-5" style={{ background: colors.bg }}>
                    <h3 className="font-bold text-white text-lg">{cat.category}</h3>
                  </div>
                  <div className="p-5" style={{ background: "white" }}>
                    <div className="flex flex-wrap gap-2">
                      {cat.exams.map((exam) => (
                        <span key={exam} className="text-xs px-3 py-1.5 rounded-lg font-semibold" style={{ background: colors.tag, color: colors.header }}>{exam}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #dde3ff 100%)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0a1560" }}>
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#1a27e1" }}>
            Our expert counselors will help you identify the perfect program based on your goals, current level, and target.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 rounded-2xl font-bold text-2xl text-white animate-tricolor-cta">
            Get Free Guidance
          </Link>
        </div>
      </section>
    </div>
  );
}
