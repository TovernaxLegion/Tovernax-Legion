import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Counseling | Tovernax Academy",
  description: "Academic pressure, career confusion, exam anxiety — whatever you're facing, you don't have to face it alone. Our counselors are trained to guide, support, and empower you.",
};

export default function CounselingPage() {
  const struggles = [
    { icon: "😰", label: "Exam Anxiety" },
    { icon: "😵", label: "Burnout" },
    { icon: "🤷", label: "Career Confusion" },
    { icon: "📉", label: "Low Motivation" },
  ];

  const services = [
    { icon: "🎯", title: "Academic Strategy", desc: "Personalized study plans, time management frameworks, and goal-setting sessions aligned with your target exam and timeline." },
    { icon: "🧠", title: "Mental Wellness", desc: "Trained psychologists available for stress, anxiety, burnout, and confidence issues — completely confidential." },
    { icon: "🚀", title: "Career Counseling", desc: "Explore career paths, understand entrance exam landscapes, and map your interests to future opportunities." },
    { icon: "😓", title: "Exam Stress Support", desc: "Pre-exam anxiety, test day strategies, and post-result guidance — we're with you through every phase." },
    { icon: "👥", title: "Peer Mentoring", desc: "Connect with senior students who've cracked your target exam — real guidance from those who've been there." },
    { icon: "💪", title: "Motivation & Mindset", desc: "Regular group sessions and individual conversations to rebuild motivation, set positive habits, and maintain focus." },
  ];

  const steps = [
    { num: "1", title: "Initial Assessment", desc: "A structured session to understand your goals, challenges, learning style, and current mindset." },
    { num: "2", title: "Personalized Plan", desc: "Your counselor creates a tailored action plan — academic + personal — with clear milestones." },
    { num: "3", title: "Regular Check-ins", desc: "Fortnightly 30-minute sessions to track progress, adjust strategies, and address new challenges." },
    { num: "4", title: "Ongoing Support", desc: "Access to counselors via chat, drop-in sessions, and emergency helplines whenever you need it." },
  ];

  const counselors = [
    { initials: "MK", name: "Dr. Meena Krishnan", role: "Chief Counselor", specialty: "Academic Psychology, Career Guidance", exp: "18 yrs experience", colors: ["#3d57ff", "#6380ff"] },
    { initials: "RD", name: "Rohan Desai", role: "Senior Counselor", specialty: "Stress Management, Motivation", exp: "10 yrs experience", colors: ["#10b981", "#34d399"] },
    { initials: "AS", name: "Ananya Singh", role: "Student Mentor", specialty: "Peer Support, Exam Strategy", exp: "6 yrs experience", colors: ["#f5b800", "#ffd624"] },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-6 pb-0 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #020818 0%, #040d2e 40%, #071050 70%, #0a1560 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="section-container relative z-10 py-16 text-center">
          <div className="text-8xl mb-6">🧠</div>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold mb-6"
            style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}>
            Student Counseling
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Your Success is Our{" "}
            <span style={{ color: "#ffd624" }}>Priority</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Academic pressure, career confusion, exam anxiety — whatever you're facing, you don't have to face it alone. Our counselors are trained to guide, support, and empower you.
          </p>
        </div>
        <div className="relative">
          <svg viewBox="0 0 1440 2" xmlns="http://www.w3.org/2000/svg">
            <rect width="1440" height="2" fill="white" />
          </svg>
        </div>
      </section>

      {/* It's Okay to Ask for Help */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0a1560" }}>
              It's Okay to Ask for Help
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#1a27e1" }}>
              The path to academic success is rarely linear. Every student faces moments of doubt, burnout, confusion, and fear. At Tovernax Academy, we normalize seeking support — because the strongest students aren't those who never struggle, they're the ones who know how to rise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {struggles.map((s) => (
                <div key={s.label} className="p-6 rounded-2xl text-center" style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.1)" }}>
                  <div className="text-5xl mb-3">{s.icon}</div>
                  <div className="font-bold text-sm" style={{ color: "#0a1560" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p className="font-semibold text-lg" style={{ color: "#1a27e1" }}>
              We help with all of these — and more.
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="section-label mb-4">What We Cover</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#0a1560" }}>
              Holistic Student Support
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="card-premium p-7" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "#0a1560" }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="section-label mb-4" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.15)" }}>The Process</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Your Counseling Journey
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="p-6 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #ffd624, #f5b800)", color: "#0a1560" }}>
                  {s.num}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="section-label mb-4">Our Team</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#0a1560" }}>
              Meet Your Counselors
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {counselors.map((c) => (
              <div key={c.name} className="card-premium p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${c.colors[0]}, ${c.colors[1]})` }}>
                  {c.initials}
                </div>
                <h3 className="font-bold text-lg" style={{ color: "#0a1560" }}>{c.name}</h3>
                <div className="text-sm font-semibold" style={{ color: "#1a27e1" }}>{c.role}</div>
                <div className="text-xs text-gray-500 mt-1">{c.specialty}</div>
                <div className="text-xs text-gray-400 mt-1">{c.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-10" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl text-center" style={{ background: "white", border: "2px solid rgba(16, 185, 129, 0.2)" }}>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "#0a1560" }}>100% Confidential</h3>
            <p className="text-gray-600 leading-relaxed">
              All counseling sessions are strictly confidential. Nothing discussed in your sessions is shared with faculty, parents, or peers without your explicit consent. Your safe space is protected.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Talk? We're Listening.
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Book a free, no-pressure counseling session today. The first step to clarity is just one conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-lg text-white animate-red-blue">
                Book Free Counseling Session
              </Link>
              <a href="tel:9597078806" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white"
                style={{ border: "2px solid rgba(255,255,255,0.3)" }}>
                📞 9597078806
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
