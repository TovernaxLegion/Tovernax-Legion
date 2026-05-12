import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_COURSES } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return FEATURED_COURSES.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = FEATURED_COURSES.find((c) => c.id === params.slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = FEATURED_COURSES.find((c) => c.id === params.slug);
  if (!course) notFound();

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className={`py-20 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-white" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full border border-white" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <Link href="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors">
              ← Back to Courses
            </Link>
            <div className="text-5xl mb-5">{course.icon}</div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4">
              {course.category}
            </span>
            <h1 className="font-display text-5xl font-bold text-white mb-5">{course.title}</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">{course.description}</p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: "⏱", label: "Duration", value: course.duration },
                { icon: "💻", label: "Mode", value: course.mode },
                { icon: "👨‍🎓", label: "Students", value: course.students },
                { icon: "⭐", label: "Rating", value: `${course.rating}/5` },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-2">
                  <span>{info.icon}</span>
                  <div>
                    <div className="text-white/60 text-xs">{info.label}</div>
                    <div className="text-white font-semibold text-sm">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions" className="btn-gold">Enroll Now →</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/30 hover:border-white/70 transition-all">
                Get Free Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* Highlights */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-navy-50 border border-navy-100">
                      <div className="w-5 h-5 rounded-full bg-navy-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-navy-800 font-medium text-sm">{h}</span>
                    </div>
                  ))}
                  {[
                    "LMS access with recorded sessions",
                    "Digital study materials & PDFs",
                    "Dedicated mentor support",
                    "Performance analytics dashboard",
                    "Parent progress reports",
                    "Certificate on completion",
                  ].map((h) => (
                    <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus Overview */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">Syllabus Overview</h2>
                <div className="space-y-3">
                  {[
                    { month: "Month 1–3", topic: "Foundation & Concept Building", status: "Core" },
                    { month: "Month 4–6", topic: "Advanced Problem Solving", status: "Core" },
                    { month: "Month 7–9", topic: "Mock Tests & Analysis", status: "Practice" },
                    { month: "Month 10–12", topic: "Revision, PYQs & Exam Strategy", status: "Revision" },
                  ].map((s) => (
                    <div key={s.month} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-navy-400 w-24 flex-shrink-0">{s.month}</span>
                        <span className="text-gray-800 font-medium text-sm">{s.topic}</span>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-navy-50 text-navy-700">{s.status}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-3">* Detailed syllabus provided upon enrollment. Sequence may vary by batch.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card-premium p-6 sticky top-24">
                <h3 className="font-display font-bold text-xl text-navy-950 mb-4">Ready to Enroll?</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Duration", value: course.duration },
                    { label: "Mode", value: course.mode },
                    { label: "Category", value: course.category },
                    { label: "Students Enrolled", value: course.students },
                    { label: "Rating", value: `⭐ ${course.rating}/5` },
                  ].map((info) => (
                    <div key={info.label} className="flex justify-between text-sm">
                      <span className="text-gray-500">{info.label}</span>
                      <span className="font-semibold text-navy-900">{info.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <Link href="/admissions" className="btn-primary w-full justify-center">
                    Enroll Now →
                  </Link>
                  <Link href="/contact" className="btn-outline w-full justify-center">
                    Ask a Question
                  </Link>
                </div>
                <p className="text-gray-400 text-xs text-center mt-4">
                  Free first counseling session included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
