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
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #e8ecff 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
              Why Hybrid?
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5" style={{ color: "#0a1560" }}>
              The <span style={{ color: "#1a27e1" }}>Tovernax Hybrid Model</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#1a27e1" }}>
              We pioneered hybrid learning in 2016, long before it became mainstream. Our model is refined, battle-tested, and consistently produces better outcomes than pure online or offline alone.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className="p-7 rounded-2xl shadow-lg reveal group hover:shadow-xl transition-all duration-300"
                style={{ background: "white", border: "1px solid rgba(26, 39, 225, 0.08)", transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg" style={{ background: "rgba(26, 39, 225, 0.08)", color: "#1a27e1" }}>{item.step}</span>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "rgba(26, 39, 225, 0.08)" }}>{item.icon}</div>
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1560" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1a27e1" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pt-28 pb-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(26, 39, 225, 0.1)", color: "#1a27e1", border: "1px solid rgba(26, 39, 225, 0.2)" }}>
              Mode Comparison
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#0a1560" }}>
              See Why <span style={{ color: "#1a27e1" }}>Hybrid Wins</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl reveal" style={{ border: "1px solid rgba(26, 39, 225, 0.1)" }}>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold" style={{ background: "rgba(26, 39, 225, 0.05)", color: "#0a1560" }}>Feature</th>
                  <th className="px-6 py-5 text-center text-sm font-bold" style={{ background: "rgba(26, 39, 225, 0.05)", color: "#0a1560" }}>Online</th>
                  <th className="px-6 py-5 text-center text-sm font-bold" style={{ background: "rgba(26, 39, 225, 0.05)", color: "#0a1560" }}>Offline</th>
                  <th className="px-6 py-5 text-center text-sm font-bold" style={{ background: "linear-gradient(135deg, #0a1560, #1a27e1)", color: "#ffd624" }}>
                    Hybrid ✦
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? "white" : "rgba(26, 39, 225, 0.02)" }}>
                    <td className="px-6 py-4 text-sm font-semibold" style={{ color: "#0a1560" }}>{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.online ? <span className="text-lg" style={{ color: "#10b981" }}>✓</span> : <span className="text-lg text-gray-300">✗</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.offline ? <span className="text-lg" style={{ color: "#10b981" }}>✓</span> : <span className="text-lg text-gray-300">✗</span>}
                    </td>
                    <td className="px-6 py-4 text-center" style={{ background: "rgba(26, 39, 225, 0.03)" }}>
                      {row.hybrid ? <span className="text-lg font-bold" style={{ color: "#1a27e1" }}>✓</span> : <span className="text-lg text-gray-300">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0a1560 0%, #1a27e1 100%)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto reveal">
            <div className="p-10 rounded-3xl text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="text-5xl mb-5" style={{ color: "#ffd624" }}>"</div>
              <p className="text-xl font-display font-medium leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
                The hybrid model at Tovernax was perfect for me. I could attend live classes on weekdays and join online on weekends when I was travelling. The flexibility didn't compromise my preparation at all — I cracked NEET with AIR 512.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg"
                  style={{ background: "linear-gradient(135deg, #10b981, #34d399)" }}>PS</div>
                <div className="text-left">
                  <div className="font-bold text-white">Priya Sharma</div>
                  <div className="text-sm" style={{ color: "#ffd624" }}>NEET AIR 512 • 2024 Batch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #dde3ff 100%)" }}>
        <div className="section-container text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0a1560" }}>
            Experience Hybrid Learning Free
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#1a27e1" }}>
            Try one week of hybrid learning — attend one session in-person, one online — and feel the difference yourself.
          </p>
          <Link href="/admissions" className="inline-block px-14 py-6 rounded-2xl font-bold text-2xl text-white animate-red-blue">
            Start Free Trial Week
          </Link>
        </div>
      </section>
    </div>
  );
}
