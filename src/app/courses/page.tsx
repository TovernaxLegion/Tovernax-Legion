import { Metadata } from "next";
import Link from "next/link";
import { FEATURED_COURSES, EXAM_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore all courses at Tovernax Academy — JEE, NEET, UPSC, Banking, Class 10 & 12, and more. Find the right program for your goals.",
};

export default function CoursesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-dark-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="section-container relative z-10 text-center">
          <div className="section-label mb-6" style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.12)" }}>
            All Programs
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect{" "}
            <span style={{ color: "#ffd624" }}>Learning Path</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            From board exams to UPSC — we have a program tailored for every goal, learning style, and schedule.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", "Engineering", "Medical", "Civil Services", "Academic", "Banking", "Defence"].map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${cat === "All" ? "bg-white text-navy-900" : "bg-white/10 text-white hover:bg-white/20"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60V20C1200 40 900 55 600 45C300 35 100 10 0 0V60Z" fill="white" />
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
                <div className={`h-36 bg-gradient-to-br ${course.color} p-6 relative overflow-hidden`}>
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
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Exam Coverage</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">All Major Exams Covered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAM_CATEGORIES.map((cat, i) => (
              <div key={cat.category} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="font-semibold text-navy-950 mb-3">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.exams.map((exam) => (
                    <span key={exam} className="text-xs px-3 py-1 rounded-lg font-medium bg-navy-50 text-navy-700">{exam}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Course is Right for You?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Our expert counselors will help you identify the perfect program based on your goals, current level, and target.</p>
          <Link href="/contact" className="btn-gold">Get Free Guidance</Link>
        </div>
      </section>
    </div>
  );
}
