import Link from "next/link";
import { FEATURED_COURSES } from "@/lib/constants";

export function FeaturedProgramsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-xl">
            <div className="section-label mb-4">Featured Programs</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-950 leading-tight">
              Programs Built for{" "}
              <span className="text-gradient">Top Performance</span>
            </h2>
          </div>
          <Link href="/courses" className="btn-outline flex-shrink-0">
            View All Courses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_COURSES.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="card-premium overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Card Header */}
              <div className={`h-36 bg-gradient-to-br ${course.color} p-6 relative overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-white" />
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-white/70 block mb-1">
                      {course.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">
                      {course.mode}
                    </span>
                  </div>
                  <span className="text-4xl">{course.icon}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-1.5 mb-5">
                  {course.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <div className="w-1 h-1 rounded-full bg-navy-400 flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Duration</div>
                      <div className="text-sm font-bold text-navy-900">{course.duration}</div>
                    </div>
                    <div className="w-px h-8 bg-gray-100" />
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Students</div>
                      <div className="text-sm font-bold text-navy-900">{course.students}</div>
                    </div>
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
  );
}
