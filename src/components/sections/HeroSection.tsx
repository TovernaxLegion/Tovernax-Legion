"use client";

import Link from "next/link";
import { STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-2 pb-4"
      style={{ background: "linear-gradient(135deg, #020818 0%, #040d2e 40%, #071050 70%, #0a1560 100%)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1a27e1, transparent)" }} />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f5b800, transparent)" }} />
      <div className="absolute top-10 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3d57ff, transparent)" }} />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-up" style={{ color: "#ffffff" }}>
              Shape Your{" "}
              <span style={{ background: "linear-gradient(135deg, #ffd624 0%, #f5b800 50%, #d98e00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Future
              </span>
              {" "}with Elite Education
            </h1>

            <p className="text-base leading-relaxed mb-5 max-w-xl animate-fade-up animate-delay-200" style={{ color: "rgba(255,255,255,0.65)" }}>
              Tovernax Academy blends academic excellence with competitive exam mastery — through personalized coaching, hybrid learning, and expert mentorship designed for tomorrow's leaders.
            </p>

            <div className="flex flex-wrap gap-4 mb-6 animate-fade-up animate-delay-300">
              <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300"
                style={{ color: "#ffd624", border: "2px solid rgba(255, 214, 36, 0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,214,36,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,214,36,0.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,214,36,0.35)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                Start Your Journey
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300"
                style={{ color: "#ffd624", border: "2px solid rgba(255, 214, 36, 0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,214,36,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,214,36,0.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,214,36,0.35)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                Explore Courses
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up animate-delay-400">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-display font-bold text-2xl" style={{ background: "linear-gradient(135deg, #ffd624, #f5b800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animate-delay-300 hidden lg:block">
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30" style={{ background: "linear-gradient(135deg, #1a27e1, #3d57ff)" }} />

            <div className="relative rounded-3xl overflow-hidden border shadow-2xl" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", borderColor: "rgba(255,214,36,0.15)" }}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Student Progress</div>
                    <div className="font-display text-2xl font-bold animate-sky-gold-white">Academic and Competitive Excellence</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "rgba(245, 184, 0, 0.15)", border: "1px solid rgba(245,184,0,0.25)" }}>🎓</div>
                </div>

                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold animate-sky-gold-white" style={{ border: "1px solid rgba(0, 191, 255, 0.3)", background: "rgba(0, 191, 255, 0.06)" }}>
                    <span className="text-base">⚡</span>
                    We cover syllabus and prepare students for competitive exams
                    <span className="text-base">⚡</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Class 6", percent: 100, color: "#f5b800" },
                    { label: "Class 7", percent: 100, color: "#f5b800" },
                    { label: "Class 8", percent: 100, color: "#f5b800" },
                    { label: "Class 9", percent: 100, color: "#f5b800" },
                    { label: "Class 10", percent: 100, color: "#10b981" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{item.label}</span>
                        <span className="font-bold" style={{ color: item.percent === 100 ? "#ffd624" : "rgba(255,255,255,0.9)" }}>
                          {item.percent}%{item.percent === 100 && <span className="ml-1 text-xs">✦ Perfect</span>}
                        </span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.percent}%`, background: item.percent === 100 ? "linear-gradient(90deg, #f5b800, #ffd624)" : item.color, boxShadow: item.percent === 100 ? "0 0 10px rgba(255,214,36,0.5)" : "none" }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,214,36,0.1)" }}>
                  {[
                    { label: "Seats Left", value: "15" },
                    { label: "Start Date", value: "July 1" },
                    { label: "Duration", value: "1 Yr" },
                  ].map((info) => (
                    <div key={info.label} className="text-center">
                      <div className="font-bold text-lg" style={{ background: "linear-gradient(135deg, #ffd624, #f5b800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{info.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{info.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex -space-x-2">
                  {["AM", "PS", "RG", "VK"].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white" style={{ background: ["#3d57ff", "#10b981", "#f5b800", "#ec4899"][i], borderColor: "#040d2e" }}>{init}</div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs" style={{ background: "rgba(255,255,255,0.08)", borderColor: "#040d2e", color: "rgba(255,255,255,0.5)" }}>+</div>
                </div>
                <Link href="/admissions" className="text-sm font-bold px-4 py-2 rounded-xl transition-colors animate-gold-blue-cta" style={{ border: "1px solid rgba(255,214,36,0.25)" }}>
                  Reserve Seat →
                </Link>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 animate-float">
              <div className="rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl" style={{ background: "#ffffff", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
                <span className="text-2xl">🏆</span>
                <div><div className="text-xs font-bold text-navy-900">Top Rankers</div><div className="text-xs text-gray-500">72% Toppers of Class</div></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-6 animate-float" style={{ animationDelay: "2s" }}>
              <div className="rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl" style={{ background: "#ffffff", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
                <span className="text-2xl">⭐</span>
                <div><div className="text-xs font-bold text-navy-900">4.9/5 Rating</div><div className="text-xs text-gray-500">10,000+ reviews</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 2" xmlns="http://www.w3.org/2000/svg"><rect width="1440" height="2" fill="white" /></svg>
      </div>
    </section>
  );
}
