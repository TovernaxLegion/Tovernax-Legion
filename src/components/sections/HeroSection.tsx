"use client";

import Link from "next/link";
import { STATS } from "@/lib/constants";

export function HeroSection() {
  const allCards = [
    // 📚 Academic
    { label: "Class 6", percent: 100, icon: "📖", color: "#10b981", glow: "0 0 20px rgba(16,185,129,0.5), 0 0 40px rgba(16,185,129,0.2)", border: "rgba(16,185,129,0.5)", bg: "linear-gradient(135deg,rgba(16,185,129,0.12),rgba(16,185,129,0.04))" },
    { label: "Class 7", percent: 100, icon: "📘", color: "#3b82f6", glow: "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2)", border: "rgba(59,130,246,0.5)", bg: "linear-gradient(135deg,rgba(59,130,246,0.12),rgba(59,130,246,0.04))" },
    { label: "Class 8", percent: 100, icon: "📗", color: "#8b5cf6", glow: "0 0 20px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.2)", border: "rgba(139,92,246,0.5)", bg: "linear-gradient(135deg,rgba(139,92,246,0.12),rgba(139,92,246,0.04))" },
    { label: "Class 9", percent: 100, icon: "📙", color: "#f59e0b", glow: "0 0 20px rgba(245,158,11,0.5), 0 0 40px rgba(245,158,11,0.2)", border: "rgba(245,158,11,0.5)", bg: "linear-gradient(135deg,rgba(245,158,11,0.12),rgba(245,158,11,0.04))" },
    { label: "Class 10", percent: 100, icon: "📕", color: "#ef4444", glow: "0 0 20px rgba(239,68,68,0.5), 0 0 40px rgba(239,68,68,0.2)", border: "rgba(239,68,68,0.5)", bg: "linear-gradient(135deg,rgba(239,68,68,0.12),rgba(239,68,68,0.04))" },
    { label: "Class 11", percent: 98, icon: "📓", color: "#ec4899", glow: "0 0 20px rgba(236,72,153,0.5), 0 0 40px rgba(236,72,153,0.2)", border: "rgba(236,72,153,0.5)", bg: "linear-gradient(135deg,rgba(236,72,153,0.12),rgba(236,72,153,0.04))" },
    { label: "Class 12", percent: 97, icon: "🎓", color: "#14b8a6", glow: "0 0 20px rgba(20,184,166,0.5), 0 0 40px rgba(20,184,166,0.2)", border: "rgba(20,184,166,0.5)", bg: "linear-gradient(135deg,rgba(20,184,166,0.12),rgba(20,184,166,0.04))" },
    // 🏆 Competitive Exams
    { label: "JEE Main", percent: 96, icon: "⚙️", color: "#1a27e1", glow: "0 0 20px rgba(26,39,225,0.5), 0 0 40px rgba(26,39,225,0.2)", border: "rgba(26,39,225,0.5)", bg: "linear-gradient(135deg,rgba(26,39,225,0.12),rgba(26,39,225,0.04))" },
    { label: "JEE Advanced", percent: 92, icon: "🔬", color: "#7c3aed", glow: "0 0 20px rgba(124,58,237,0.5), 0 0 40px rgba(124,58,237,0.2)", border: "rgba(124,58,237,0.5)", bg: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(124,58,237,0.04))" },
    { label: "NEET UG", percent: 95, icon: "🏥", color: "#dc2626", glow: "0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.2)", border: "rgba(220,38,38,0.5)", bg: "linear-gradient(135deg,rgba(220,38,38,0.12),rgba(220,38,38,0.04))" },
    { label: "UPSC CSE", percent: 88, icon: "🏛️", color: "#b45309", glow: "0 0 20px rgba(180,83,9,0.5), 0 0 40px rgba(180,83,9,0.2)", border: "rgba(180,83,9,0.5)", bg: "linear-gradient(135deg,rgba(180,83,9,0.12),rgba(180,83,9,0.04))" },
    // 💼 Job Exams
    { label: "Banking (IBPS/SBI)", percent: 90, icon: "🏦", color: "#0d9488", glow: "0 0 20px rgba(13,148,136,0.5), 0 0 40px rgba(13,148,136,0.2)", border: "rgba(13,148,136,0.5)", bg: "linear-gradient(135deg,rgba(13,148,136,0.12),rgba(13,148,136,0.04))" },
    { label: "SSC CGL", percent: 89, icon: "📋", color: "#c026d3", glow: "0 0 20px rgba(192,38,211,0.5), 0 0 40px rgba(192,38,211,0.2)", border: "rgba(192,38,211,0.5)", bg: "linear-gradient(135deg,rgba(192,38,211,0.12),rgba(192,38,211,0.04))" },
    { label: "Defence (NDA/CDS)", percent: 91, icon: "🛡️", color: "#b91c1c", glow: "0 0 20px rgba(185,28,28,0.5), 0 0 40px rgba(185,28,28,0.2)", border: "rgba(185,28,28,0.5)", bg: "linear-gradient(135deg,rgba(185,28,28,0.12),rgba(185,28,28,0.04))" },
  ];

  const sectionHeaders = [
    { index: 0, title: "📚 Academic (Class 6–12)" },
    { index: 7, title: "🏆 Competitive Exams" },
    { index: 11, title: "💼 Job Exams" },
  ];

  return (
    <section
      className="relative flex items-center overflow-hidden pt-2 pb-4"
      style={{
        background:
          "linear-gradient(135deg,#020818 0%,#040d2e 40%,#071050 70%,#0a1560 100%)",
      }}
    >
      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .flash-card {
          animation: glowPulse 3s ease-in-out infinite;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .flash-card:hover {
          transform: translateY(-6px) scale(1.04);
          z-index: 10;
        }
        .flash-card:nth-child(1) { animation-delay: 0s; }
        .flash-card:nth-child(2) { animation-delay: 0.3s; }
        .flash-card:nth-child(3) { animation-delay: 0.6s; }
        .flash-card:nth-child(4) { animation-delay: 0.9s; }
        .percent-shimmer {
          background: linear-gradient(90deg, var(--card-color) 0%, #ffd624 50%, var(--card-color) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .percent-gold {
          background: linear-gradient(135deg, #ffd624, #f5b800, #d98e00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .badge-float {
          animation: floatBadge 4s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle,#1a27e1,transparent)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle,#f5b800,transparent)" }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT COLUMN */}
          <div>
            <h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-up"
              style={{ color: "#fff" }}
            >
              Shape Your{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#ffd624,#f5b800,#d98e00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Future
              </span>{" "}
              with Elite Education
            </h1>
            <p
              className="text-base leading-relaxed mb-5 max-w-xl animate-fade-up animate-delay-200"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Tovernax Academy blends academic excellence with competitive exam
              mastery — through personalized coaching, hybrid learning, and
              expert mentorship designed for tomorrow&apos;s leaders.
            </p>
            <div className="flex flex-wrap gap-4 mb-6 animate-fade-up animate-delay-300">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-base"
                style={{
                  color: "#ffd624",
                  border: "2px solid rgba(255,214,36,0.35)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,214,36,0.7)";
                  e.currentTarget.style.background = "rgba(255,214,36,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,214,36,0.35)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Start Your Journey{" "}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-base"
                style={{
                  color: "#ffd624",
                  border: "2px solid rgba(255,214,36,0.35)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,214,36,0.7)";
                  e.currentTarget.style.background = "rgba(255,214,36,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,214,36,0.35)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Explore Courses
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up animate-delay-400">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div
                    className="font-display font-bold text-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg,#ffd624,#f5b800)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — FLASH CARDS */}
          <div className="relative animate-fade-in animate-delay-300 mt-8 lg:mt-0">
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
              style={{
                background: "linear-gradient(135deg,#1a27e1,#3d57ff)",
              }}
            />
            <div
              className="relative rounded-3xl overflow-hidden border shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(24px)",
                borderColor: "rgba(255,214,36,0.15)",
              }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Student Progress
                    </div>
                    <div className="font-display text-xl font-bold animate-sky-gold-white">
                      Academic &amp; Competitive Excellence
                    </div>
                  </div>
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: "rgba(245,184,0,0.15)",
                      border: "1px solid rgba(245,184,0,0.25)",
                    }}
                  >
                    🎓
                  </div>
                </div>

                <div className="mb-5">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold animate-sky-gold-white"
                    style={{
                      background:
                        "linear-gradient(90deg,rgba(16,185,129,0.15),rgba(59,130,246,0.15),rgba(139,92,246,0.15),rgba(245,158,11,0.15),rgba(239,68,68,0.15))",
                      border: "1px solid rgba(0,191,255,0.3)",
                    }}
                  >
                    ⚡ We cover syllabus &amp; prepare for competitive exams ⚡
                  </div>
                </div>

                {/* Flash Cards Grid */}
                <div className="space-y-5">
                  {sectionHeaders.map((section) => (
                    <div key={section.title}>
                      <div
                        className="text-xs font-bold tracking-widest uppercase mb-3"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {section.title}
                      </div>
                      <div className="grid grid-cols-4 gap-2.5">
                        {allCards
                          .slice(
                            section.index,
                            section.index === 7
                              ? 11
                              : section.index === 11
                              ? 14
                              : 7
                          )
                          .map((card) => (
                            <div
                              key={card.label}
                              className="flash-card relative rounded-xl p-3 text-center cursor-default group"
                              style={{
                                background: card.bg,
                                border: `1px solid ${card.border}`,
                                boxShadow: card.glow,
                                "--card-color": card.color,
                              } as React.CSSProperties}
                            >
                              {/* Top glow accent */}
                              <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                                style={{
                                  background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                                }}
                              />

                              <div className="text-lg mb-1">{card.icon}</div>
                              <div
                                className="text-[10px] font-semibold mb-1.5 leading-tight"
                                style={{ color: "rgba(255,255,255,0.75)" }}
                              >
                                {card.label}
                              </div>
                              <div
                                className={`font-display font-extrabold text-lg leading-none ${
                                  card.percent === 100
                                    ? "percent-gold"
                                    : "percent-shimmer"
                                }`}
                                style={
                                  card.percent === 100
                                    ? undefined
                                    : { "--card-color": card.color } as React.CSSProperties
                                }
                              >
                                {card.percent}%
                              </div>
                              {card.percent === 100 && (
                                <div
                                  className="text-[9px] mt-0.5 font-bold"
                                  style={{ color: "#ffd624" }}
                                >
                                  ✦ Perfect
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Info Bar */}
                <div
                  className="grid grid-cols-3 gap-3 mt-5 p-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,214,36,0.1)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="font-bold text-sm"
                      style={{
                        background:
                          "linear-gradient(135deg,#ffd624,#f5b800)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      15
                    </div>
                    <div
                      className="text-[10px] mt-0.5"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Seats Left
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-bold text-sm"
                      style={{
                        background:
                          "linear-gradient(135deg,#ffd624,#f5b800)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      July 1
                    </div>
                    <div
                      className="text-[10px] mt-0.5"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Start Date
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-bold text-sm"
                      style={{
                        background:
                          "linear-gradient(135deg,#ffd624,#f5b800)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      1 Yr
                    </div>
                    <div
                      className="text-[10px] mt-0.5"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Duration
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className="px-6 py-3 flex items-center justify-between"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex -space-x-2">
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: "#3d57ff",
                      borderColor: "#040d2e",
                    }}
                  >
                    AM
                  </div>
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: "#10b981",
                      borderColor: "#040d2e",
                    }}
                  >
                    PS
                  </div>
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: "#f5b800",
                      borderColor: "#040d2e",
                    }}
                  >
                    RG
                  </div>
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: "#ec4899",
                      borderColor: "#040d2e",
                    }}
                  >
                    VK
                  </div>
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px]"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderColor: "#040d2e",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    +
                  </div>
                </div>
                <Link
                  href="/admissions"
                  className="text-xs font-bold px-3 py-1.5 rounded-lg animate-gold-blue-cta"
                  style={{
                    border: "1px solid rgba(255,214,36,0.25)",
                  }}
                >
                  Reserve Seat →
                </Link>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 badge-float">
              <div
                className="rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                style={{
                  background: "#fff",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                <span className="text-2xl">🏆</span>
                <div>
                  <div
                    className="text-xs font-bold"
                    style={{ color: "#0a1560" }}
                  >
                    Top Rankers
                  </div>
                  <div className="text-xs text-gray-500">72% Toppers</div>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -left-6 badge-float"
              style={{ animationDelay: "2s" }}
            >
              <div
                className="rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                style={{
                  background: "#fff",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                <span className="text-2xl">⭐</span>
                <div>
                  <div
                    className="text-xs font-bold"
                    style={{ color: "#0a1560" }}
                  >
                    4.9/5 Rating
                  </div>
                  <div className="text-xs text-gray-500">10,000+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="2" fill="white" />
        </svg>
      </div>
    </section>
  );
}
