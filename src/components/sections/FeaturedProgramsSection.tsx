import Link from "next/link";
import { FEATURED_COURSES } from "@/lib/constants";

export function FeaturedProgramsSection() {
  return (
    <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
              Featured Programs
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#0a1560" }}>
              Programs Built for{" "}
              <span style={{ color: "#ffd624" }}>Top Performance</span>
            </h2>
          </div>
          <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ color: "#1a27e1", border: "2px solid rgba(26, 39, 225, 0.25)" }}>
            View All Courses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_COURSES.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="rounded-2xl overflow-hidden shadow-lg group reveal hover:shadow-xl transition-all duration-300"
              style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.06)", transitionDelay: `${index * 60}ms` }}
            >
              {/* Card Header */}
              <div className={`h-40 bg-gradient-to-br ${course.color || "from-purple-600 to-pink-500"} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-white" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-white/70 block mb-1">{course.category}</span>
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">{course.mode}</span>
                  </div>
                  <span className="text-4xl">{course.icon}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors" style={{ color: "#0a1560" }}>
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#1a27e1" }}>
                  {course.description}
                </p>

                {/* Highlights */}
                {course.highlights && (
                  <div className="grid grid-cols-2 gap-1.5 mb-5">
                    {course.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-xs" style={{ color: "#1a27e1" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ffd624" }} />
                        {h}
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(26, 39, 225, 0.08)" }}>
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Duration</div>
                      <div className="text-sm font-bold" style={{ color: "#0a1560" }}>{course.duration}</div>
                    </div>
                    <div className="w-px h-8" style={{ background: "rgba(26, 39, 225, 0.08)" }} />
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Students</div>
                      <div className="text-sm font-bold" style={{ color: "#0a1560" }}>{course.students}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm font-bold" style={{ color: "#0a1560" }}>{course.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
