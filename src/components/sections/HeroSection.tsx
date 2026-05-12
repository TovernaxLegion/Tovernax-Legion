"use client";

import Link from "next/link";
import { STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-mesh pt-24 pb-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3d57ff, transparent)" }} />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f5b800, transparent)" }} />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Logo + Legion badge */}
<div className="flex items-center gap-4 mb-8 animate-fade-in">
  <img src="/logo.png" alt="Tovernax Legion" className="h-16 w-auto" />
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
    style={{ background: "rgba(245, 184, 0, 0.12)", color: "#ffd624", border: "1px solid rgba(245, 184, 0, 0.2)" }}>
    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
    A Tovernax Legion Institution
  </div>
</div>


            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
              Shape Your{" "}
              <span className="relative">
                <span style={{
                  background: "linear-gradient(135deg, #ffd624 0%, #f5b800 50%, #d98e00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Future
                </span>
              </span>
              {" "}with Elite Education
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl animate-fade-up animate-delay-200">
              Tovernax Academy blends academic excellence with competitive exam mastery — through personalized coaching, hybrid learning, and expert mentorship designed for tomorrow's leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-14 animate-fade-up animate-delay-300">
              <Link href="/admissions" className="btn-gold text-base px-8 py-4">
                Start Your Journey
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white border-2 border-white/20 hover:border-white/50 transition-all duration-300">
                Explore Courses
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up animate-delay-400">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual panel */}
          <div className="relative animate-fade-in animate-delay-300 hidden lg:block">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}>
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Upcoming Batch</div>
                    <div className="font-display text-2xl font-bold text-white">JEE Advanced 2026</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: "rgba(61, 87, 255, 0.2)" }}>
                    ⚛️
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4 mb-8">
                  {[
                    { label: "Physics", percent: 78, color: "#3d57ff" },
                    { label: "Chemistry", percent: 65, color: "#f5b800" },
                    { label: "Mathematics", percent: 92, color: "#10b981" },
                  ].map((subject) => (
                    <div key={subject.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-medium">{subject.label}</span>
                        <span className="font-bold text-white">{subject.percent}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${subject.percent}%`, background: subject.color }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Batch info */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                  {[
                    { label: "Seats Left", value: "47" },
                    { label: "Start Date", value: "Jun 1" },
                    { label: "Duration", value: "2 Yrs" },
                  ].map((info) => (
                    <div key={info.label} className="text-center">
                      <div className="font-bold text-white text-lg">{info.value}</div>
                      <div className="text-gray-400 text-xs">{info.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-8 py-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {["AM", "PS", "RG", "VK"].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-900 flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: ["#3d57ff", "#10b981", "#f5b800", "#ec4899"][i] }}>
                      {init}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-navy-900 bg-white/10 flex items-center justify-center text-xs text-gray-300">
                    +
                  </div>
                </div>
                <Link href="/admissions"
                  className="text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                  style={{ background: "rgba(61, 87, 255, 0.3)", color: "#93abff" }}>
                  Reserve Seat →
                </Link>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 animate-float">
              <div className="bg-white rounded-2xl shadow-premium px-4 py-3 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-xs font-bold text-navy-900">Top Rankers</div>
                  <div className="text-xs text-gray-500">JEE AIR 247</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 animate-float" style={{ animationDelay: "2s" }}>
              <div className="bg-white rounded-2xl shadow-premium px-4 py-3 flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="text-xs font-bold text-navy-900">4.9/5 Rating</div>
                  <div className="text-xs text-gray-500">10,000+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 42.5C1200 35 1320 20 1380 12.5L1440 5V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
