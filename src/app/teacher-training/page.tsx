import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Teacher Training",
  description: "Professional teacher training programs at Tovernax Academy — pedagogy, EdTech tools, competitive exam coaching methods, and classroom management for educators.",
};

const PROGRAMS = [
  {
    icon: "🎓",
    title: "Foundation Teaching Certificate",
    duration: "4 Weeks",
    mode: "Online + Offline",
    desc: "For new educators entering competitive coaching or school teaching. Covers pedagogy, lesson planning, and student engagement techniques.",
    topics: ["Teaching methodology", "Lesson plan design", "Student psychology", "Classroom management"],
  },
  {
    icon: "🏆",
    title: "Competitive Exam Coaching Pro",
    duration: "8 Weeks",
    mode: "Hybrid",
    desc: "Advanced training for educators who want to coach for JEE, NEET, UPSC, or Banking exams with expert-level subject delivery.",
    topics: ["Exam pattern mastery", "PYQ analysis techniques", "Speed-accuracy drills", "Batch management"],
  },
  {
    icon: "💻",
    title: "EdTech & Digital Teaching",
    duration: "3 Weeks",
    mode: "Online",
    desc: "Master online and hybrid teaching tools — live sessions, LMS management, digital assessments, and student analytics.",
    topics: ["LMS platforms", "Interactive whiteboard", "Online engagement", "Digital assessment design"],
  },
  {
    icon: "🧠",
    title: "Student Psychology & Counseling",
    duration: "2 Weeks",
    mode: "Online",
    desc: "For educators who want to better understand and support their students — identifying struggles, building rapport, and motivating learners.",
    topics: ["Learning psychology", "Motivation frameworks", "Stress recognition", "Parent communication"],
  },
];

const OUTCOMES = [
  { emoji: "📈", stat: "45%", label: "Average improvement in student retention reported by trained teachers" },
  { emoji: "⭐", stat: "4.8/5", label: "Average rating given to our trained faculty by students" },
  { emoji: "👩‍🏫", stat: "500+", label: "Educators trained through our programs" },
  { emoji: "🏫", stat: "80+", label: "Institutions that have sent teachers for our training" },
];

export default function TeacherTrainingPage() {
  return (
    <div>
      <PageHero
        label="Teacher Training"
        title="Empowering the"
        highlight="Educators of Tomorrow"
        description="Great teachers make great students. Our professional development programs equip educators with modern pedagogy, EdTech skills, and competitive exam expertise to deliver exceptional learning experiences."
        emoji="👩‍🏫"
      />

      {/* Why Train */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="section-label mb-4">Why Teacher Training</div>
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">
                The Best Educators <span className="text-gradient">Never Stop Learning</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Education is evolving at an unprecedented pace. With hybrid classrooms, AI-powered tools, and increasingly competitive entrance exams, teachers need to continuously upgrade their skills to remain effective and impactful.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Tovernax Academy's teacher training programs are designed by experienced educators and subject matter experts — combining research-backed pedagogy with practical, classroom-ready techniques.
              </p>
              <div className="space-y-3">
                {[
                  "Recognized certification valid for academic institutions",
                  "Taught by IIT/IIM alumni and seasoned educators",
                  "Practical, hands-on workshops — not just theory",
                  "Flexible schedules for working teachers",
                  "Ongoing alumni network and support community",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal-right">
              {OUTCOMES.map((o) => (
                <div key={o.label} className="card-premium p-6 text-center">
                  <div className="text-3xl mb-2">{o.emoji}</div>
                  <div className="font-display font-bold text-2xl text-navy-700 mb-2">{o.stat}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Our Programs</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              Training for <span className="text-gradient">Every Educator</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROGRAMS.map((prog, i) => (
              <div key={prog.title} className="card-premium p-7 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl flex-shrink-0">{prog.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-navy-950">{prog.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-medium text-gray-500">⏱ {prog.duration}</span>
                      <span className="text-xs font-medium text-gray-500">📡 {prog.mode}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{prog.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {prog.topics.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-lg font-medium bg-teal-50 text-teal-700 border border-teal-100">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Who Is This For?</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Perfect for Every Educator</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { icon: "🆕", title: "New Teachers", desc: "Build a strong foundation in modern teaching before entering classrooms." },
              { icon: "🏫", title: "School Educators", desc: "Upgrade your pedagogy and integrate EdTech into your daily teaching." },
              { icon: "📚", title: "Coaching Faculty", desc: "Become a specialist in competitive exam coaching with proven techniques." },
              { icon: "🌐", title: "Online Tutors", desc: "Master digital teaching tools and build an engaging online presence." },
            ].map((w, i) => (
              <div key={w.title} className="card-premium p-6 text-center reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="section-container relative z-10 text-center reveal">
          <div className="section-label mb-6" style={{ background: "rgba(255,255,255,0.06)", color: "white", borderColor: "rgba(255,255,255,0.1)" }}>
            For Institutions
          </div>
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Train Your Entire <span style={{ color: "#ffd624" }}>Teaching Staff</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            We offer customized, on-site teacher training programs for schools, coaching institutes, and universities. Custom curriculum, flexible timing, and institutional pricing available.
          </p>
          <Link href="/contact" className="btn-gold">Request Institutional Training</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Become a Better Educator?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Enroll in our next teacher training cohort. Spots are limited — register early to secure your place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-gold">Enroll in Teacher Training</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/25 hover:border-white/50 transition-all">
              Talk to Training Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
