import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Student Counseling",
  description: "Comprehensive student counseling at Tovernax Academy — academic guidance, mental wellness, career planning, and peer support for every student.",
};

const COUNSELING_AREAS = [
  { icon: "🎯", title: "Academic Strategy", desc: "Personalized study plans, time management frameworks, and goal-setting sessions aligned with your target exam and timeline." },
  { icon: "🧠", title: "Mental Wellness", desc: "Trained psychologists available for stress, anxiety, burnout, and confidence issues — completely confidential." },
  { icon: "🚀", title: "Career Counseling", desc: "Explore career paths, understand entrance exam landscapes, and map your interests to future opportunities." },
  { icon: "😓", title: "Exam Stress Support", desc: "Pre-exam anxiety, test day strategies, and post-result guidance — we're with you through every phase." },
  { icon: "👥", title: "Peer Mentoring", desc: "Connect with senior students who've cracked your target exam — real guidance from those who've been there." },
  { icon: "💪", title: "Motivation & Mindset", desc: "Regular group sessions and individual conversations to rebuild motivation, set positive habits, and maintain focus." },
];

const JOURNEY_STEPS = [
  { step: "1", title: "Initial Assessment", desc: "A structured session to understand your goals, challenges, learning style, and current mindset." },
  { step: "2", title: "Personalized Plan", desc: "Your counselor creates a tailored action plan — academic + personal — with clear milestones." },
  { step: "3", title: "Regular Check-ins", desc: "Fortnightly 30-minute sessions to track progress, adjust strategies, and address new challenges." },
  { step: "4", title: "Ongoing Support", desc: "Access to counselors via chat, drop-in sessions, and emergency helplines whenever you need it." },
];

export default function StudentCounselingPage() {
  return (
    <div>
      <PageHero
        label="Student Counseling"
        title="Your Success is"
        highlight="Our Priority"
        description="Academic pressure, career confusion, exam anxiety — whatever you're facing, you don't have to face it alone. Our counselors are trained to guide, support, and empower you."
        emoji="🧠"
      />

      {/* Emotional Hook */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">
              It's Okay to Ask for Help
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The path to academic success is rarely linear. Every student faces moments of doubt, burnout, confusion, and fear. At Tovernax Academy, we normalize seeking support — because the strongest students aren't those who never struggle, they're the ones who know how to rise.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { emoji: "😰", label: "Exam Anxiety" },
                { emoji: "😵", label: "Burnout" },
                { emoji: "🤷", label: "Career Confusion" },
                { emoji: "📉", label: "Low Motivation" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl border border-gray-100 bg-gray-50 text-center hover:bg-navy-50 hover:border-navy-100 transition-colors">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="text-sm font-medium text-gray-700">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-navy-700 font-semibold mt-6">We help with all of these — and more.</p>
          </div>
        </div>
      </section>

      {/* Counseling Areas */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">What We Cover</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              Holistic <span className="text-gradient">Student Support</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNSELING_AREAS.map((area, i) => (
              <div key={area.title} className="card-premium p-7 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center text-2xl mb-4">{area.icon}</div>
                <h3 className="font-semibold text-navy-950 mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Counseling Journey */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">The Process</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Your Counseling Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {JOURNEY_STEPS.map((step, i) => (
                <div key={step.step} className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-white text-lg flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #1a27e1, #3d57ff)" }}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950 mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Counselors */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Our Team</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">Meet Your Counselors</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Dr. Meena Krishnan", role: "Chief Counselor", spec: "Academic Psychology, Career Guidance", exp: "18 yrs", avatar: "MK", color: "from-violet-500 to-purple-600" },
              { name: "Rohan Desai", role: "Senior Counselor", spec: "Stress Management, Motivation", exp: "10 yrs", avatar: "RD", color: "from-blue-500 to-indigo-600" },
              { name: "Ananya Singh", role: "Student Mentor", spec: "Peer Support, Exam Strategy", exp: "6 yrs", avatar: "AS", color: "from-rose-500 to-pink-600" },
            ].map((c, i) => (
              <div key={c.name} className="card-premium p-6 text-center reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                  {c.avatar}
                </div>
                <h3 className="font-semibold text-navy-950">{c.name}</h3>
                <div className="text-sm font-medium text-navy-600 mb-1">{c.role}</div>
                <div className="text-xs text-gray-500 mb-1">{c.spec}</div>
                <div className="text-xs font-semibold text-gold-600">{c.exp} experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality note */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-green-100 bg-green-50 text-center reveal">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-navy-950 mb-2">100% Confidential</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All counseling sessions are strictly confidential. Nothing discussed in your sessions is shared with faculty, parents, or peers without your explicit consent. Your safe space is protected.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Talk? We're Listening.
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Book a free, no-pressure counseling session today. The first step to clarity is just one conversation away.
          </p>
          <Link href="/contact" className="btn-gold">Book Free Counseling Session</Link>
        </div>
      </section>
    </div>
  );
}
