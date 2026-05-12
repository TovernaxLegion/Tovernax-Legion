import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Hybrid Learning",
  description: "Tovernax Academy's hybrid learning model combines the best of online and offline education — flexible, powerful, and proven to deliver top results.",
};

const HOW_IT_WORKS = [
  { step: "01", icon: "📅", title: "Flexible Scheduling", desc: "Choose which sessions to attend in-person and which to join online. Your schedule, your way." },
  { step: "02", icon: "📡", title: "Live Sync", desc: "Physical classroom and online students experience the same lesson simultaneously — fully integrated." },
  { step: "03", icon: "🎬", title: "Session Recordings", desc: "Every class recorded and uploaded within 2 hours for review, revision, or catch-up." },
  { step: "04", icon: "💬", title: "Unified Doubt System", desc: "One platform for all doubts — whether you're at home or in class, get answers from the same faculty." },
  { step: "05", icon: "📊", title: "Combined Analytics", desc: "Your performance across online tests, offline assessments, and class participation tracked in one dashboard." },
  { step: "06", icon: "🔄", title: "Seamless Switching", desc: "Switch between online and offline modes anytime — no admin hassle, no re-enrollment needed." },
];

const COMPARISON = [
  { feature: "Live Classes", online: true, offline: true, hybrid: true },
  { feature: "Recorded Sessions", online: true, offline: true, hybrid: true },
  { feature: "Physical Lab Access", online: false, offline: true, hybrid: true },
  { feature: "Attend from Home", online: true, offline: false, hybrid: true },
  { feature: "Campus Peer Interaction", online: false, offline: true, hybrid: true },
  { feature: "Flexible Timing", online: true, offline: false, hybrid: true },
  { feature: "Physical Study Materials", online: false, offline: true, hybrid: true },
  { feature: "Digital Resources", online: true, offline: true, hybrid: true },
  { feature: "Mode Switching", online: false, offline: false, hybrid: true },
];

export default function HybridLearningPage() {
  return (
    <div>
      <PageHero
        label="Hybrid Learning"
        title="Best of Both Worlds,"
        highlight="Zero Compromise"
        description="Our hybrid model gives you the flexibility of online learning and the depth of classroom education — simultaneously. Attend in person or join live online, your choice every day."
        emoji="🔄"
      />

      {/* The Hybrid Advantage */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Why Hybrid?</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              The <span className="text-gradient">Tovernax Hybrid Model</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We pioneered hybrid learning in 2016, long before it became mainstream. Our model is refined, battle-tested, and consistently produces better outcomes than pure online or offline alone.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className="card-premium p-7 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-navy-400">{item.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-xl">{item.icon}</div>
                </div>
                <h3 className="font-semibold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="text-center mb-12 reveal">
            <div className="section-label mb-4">Mode Comparison</div>
            <h2 className="font-display text-4xl font-bold text-navy-950">
              See Why Hybrid Wins
            </h2>
          </div>
          <div className="max-w-3xl mx-auto card-premium overflow-hidden reveal">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600 bg-gray-50">Feature</th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600 bg-gray-50">Online</th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600 bg-gray-50">Offline</th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-navy-700 bg-navy-50">
                    Hybrid ✦
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.online ? <span className="text-green-500 text-lg">✓</span> : <span className="text-gray-300 text-lg">✗</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.offline ? <span className="text-green-500 text-lg">✓</span> : <span className="text-gray-300 text-lg">✗</span>}
                    </td>
                    <td className="px-6 py-4 text-center bg-navy-50/30">
                      {row.hybrid ? <span className="text-navy-600 text-lg font-bold">✓</span> : <span className="text-gray-300 text-lg">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto reveal">
            <div className="p-10 rounded-3xl text-center border border-navy-100 bg-gradient-to-br from-navy-50 to-blue-50">
              <div className="text-4xl mb-5">"</div>
              <p className="text-navy-900 text-xl font-display font-medium leading-relaxed mb-6">
                The hybrid model at Tovernax was perfect for me. I could attend live classes on weekdays and join online on weekends when I was travelling. The flexibility didn't compromise my preparation at all — I cracked NEET with AIR 512.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">PS</div>
                <div className="text-left">
                  <div className="font-semibold text-navy-950">Priya Sharma</div>
                  <div className="text-sm text-gray-500">NEET AIR 512 • 2024 Batch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0e1154, #1a27e1)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Experience Hybrid Learning Free</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Try one week of hybrid learning — attend one session in-person, one online — and feel the difference yourself.
          </p>
          <Link href="/admissions" className="btn-gold">Start Free Trial Week</Link>
        </div>
      </section>
    </div>
  );
}
