import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Parent Counseling",
  description: "Dedicated parent counseling services at Tovernax Academy — helping parents support their child's academic journey with guidance, communication, and collaborative strategies.",
};

const SERVICES = [
  { icon: "📊", title: "Progress Review Sessions", desc: "Monthly one-on-one meetings with your child's mentor to review academic performance, attendance, and upcoming goals." },
  { icon: "🧭", title: "Career Path Guidance", desc: "Expert counselors help parents understand career options, entrance exam landscapes, and future opportunities for their child." },
  { icon: "🤝", title: "Parent-Teacher Collaboration", desc: "Structured communication channels between parents and faculty to ensure alignment on academic strategy and student support." },
  { icon: "😰", title: "Exam Stress Management", desc: "Guidance for parents on how to create a supportive home environment during high-pressure exam periods." },
  { icon: "💰", title: "Fee & Scholarship Guidance", desc: "Help navigating financial planning, EMI options, scholarship applications, and government schemes." },
  { icon: "📱", title: "Real-Time Updates", desc: "Automated SMS/WhatsApp alerts for attendance, test scores, homework completion, and important announcements." },
];

const FAQS = [
  { q: "How often will I receive updates about my child's progress?", a: "Weekly automated progress reports via WhatsApp/email, plus monthly detailed review sessions with your child's academic mentor." },
  { q: "What if my child is struggling — how do I know?", a: "Our early warning system flags underperformance after two consecutive weak assessments and triggers an immediate counselor outreach to parents." },
  { q: "Can I meet the faculty directly?", a: "Absolutely. Parent-teacher interaction is scheduled monthly, and our open-door policy allows you to connect anytime via the parent portal or by visiting our campus." },
  { q: "How do you handle exam anxiety in students?", a: "We have dedicated psychologists and counselors who conduct regular sessions. We also guide parents with strategies to reinforce calm, confidence, and balance at home." },
  { q: "Is there a parent community or group?", a: "Yes — we have an active parent WhatsApp community per batch, and we host quarterly parent townhalls for batch-wide updates and open discussions." },
];

export default function ParentCounselingPage() {
  return (
    <div>
      <PageHero
        label="Parent Counseling"
        title="Partnering with Parents"
        highlight="Every Step of the Way"
        description="At Tovernax Academy, we believe parents are essential partners in a student's success. Our dedicated counseling services keep you informed, empowered, and involved."
        emoji="👨‍👩‍👧"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="section-label mb-4">Why Parent Counseling</div>
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">
                Your Involvement <span className="text-gradient">Makes the Difference</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Research consistently shows that students with engaged parents perform significantly better. At Tovernax Academy, we've built a comprehensive parent engagement program that bridges the gap between home and institution.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you want to understand your child's study plan, discuss career options, or learn how to support them during exam stress — our counselors are here for you, not just your child.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "95%", label: "Parent Satisfaction Rate" },
                  { value: "Monthly", label: "Dedicated Review Sessions" },
                  { value: "24hr", label: "Response Guarantee" },
                  { value: "Free", label: "First Counseling Session" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl border border-navy-100 bg-navy-50">
                    <div className="font-display font-bold text-xl text-navy-700">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 reveal-right">
              <div className="p-6 rounded-2xl border border-amber-100 bg-amber-50">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="font-semibold text-navy-950 mb-2">The Parent Portal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access your child's attendance, test scores, homework submissions, and mentor notes anytime via our dedicated Parent Portal — available 24/7 on web and mobile.
                </p>
                <Link href="/lms" className="inline-flex items-center gap-1 text-navy-700 font-semibold text-sm mt-3 hover:underline">
                  Explore Parent Portal →
                </Link>
              </div>
              <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50">
                <div className="text-2xl mb-3">📣</div>
                <h3 className="font-semibold text-navy-950 mb-2">Quarterly Parent Townhalls</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every quarter, we host open townhall sessions where parents can interact with the academic director, batch mentors, and senior faculty to discuss outcomes and strategies.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-green-100 bg-green-50">
                <div className="text-2xl mb-3">🛡️</div>
                <h3 className="font-semibold text-navy-950 mb-2">Safe Communication Channel</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Express concerns privately through our secure parent helpline. All queries are addressed within 24 hours by a designated relationship manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Our Services</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Everything We Offer Parents</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="card-premium p-7 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">FAQ for Parents</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Common Questions Answered</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="font-semibold text-navy-950 mb-2 flex items-start gap-2">
                  <span className="text-navy-500 flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Book a Free Parent Counseling Session</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Speak directly with one of our experienced counselors. No fees, no obligations — just clarity and guidance for your child's future.
          </p>
          <Link href="/contact" className="btn-gold">Book Free Session Now</Link>
        </div>
      </section>
    </div>
  );
}
