import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Academic Coaching",
  description: "Personalized academic coaching at Tovernax Academy — concept-driven teaching, regular assessments, and expert mentoring for Class 6-12.",
};

export default function AcademicCoachingPage() {
  const features = [
    { icon: "🎯", title: "Diagnostic Assessment", desc: "Every student starts with a comprehensive diagnostic to identify strengths and learning gaps." },
    { icon: "📋", title: "Personalized Study Plan", desc: "Custom weekly and monthly schedules aligned with each student's pace and target exams." },
    { icon: "👨‍🏫", title: "Concept-First Teaching", desc: "We build strong foundational understanding before moving to applications and problem-solving." },
    { icon: "📊", title: "Regular Assessments", desc: "Chapter tests, unit tests, and mock exams to track progress and identify weak areas." },
    { icon: "🔄", title: "Doubt Resolution", desc: "Daily doubt-clearing sessions, dedicated helplines, and peer discussion forums." },
    { icon: "📈", title: "Progress Analytics", desc: "Detailed performance reports shared with students and parents every week." },
  ];

  const subjects = [
    { class: "Class 6–8", subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi/Gujarati"] },
    { class: "Class 9–10", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Social Science", "English", "Language"] },
    { class: "Class 11–12 Science", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "English"] },
    { class: "Class 11–12 Commerce", subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics", "English"] },
  ];

  return (
    <div>
      <PageHero
        label="Academic Coaching"
        title="Master Every Subject,"
        highlight="Ace Every Exam"
        description="Personalized, concept-driven academic coaching for Class 6 to 12. We don't just prepare students for exams — we build lifelong learners."
        emoji="📚"
      />

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">How We Coach</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">The Tovernax Coaching Method</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-navy-50 mb-4">{f.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Subjects & Classes</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Complete Coverage, Every Grade</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {subjects.map((s, i) => (
              <div key={s.class} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="font-display font-bold text-lg text-navy-950 mb-4">{s.class}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.subjects.map((sub) => (
                    <span key={sub} className="text-sm px-3 py-1.5 rounded-lg bg-navy-50 text-navy-700 font-medium">{sub}</span>
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Start Strong This Academic Year</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Book a free trial class and see the Tovernax teaching difference firsthand.</p>
          <Link href="/admissions" className="btn-gold">Book a Free Trial Class</Link>
        </div>
      </section>
    </div>
  );
}
