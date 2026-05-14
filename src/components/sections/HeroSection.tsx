"use client";
import Link from "next/link";
import { STATS } from "@/lib/constants";

export function HeroSection() {
  const academic = [
    { label: "Class 6", percent: 100, color: "#10b981", gradient: "linear-gradient(90deg,#10b981,#34d399)" },
    { label: "Class 7", percent: 100, color: "#3b82f6", gradient: "linear-gradient(90deg,#3b82f6,#60a5fa)" },
    { label: "Class 8", percent: 100, color: "#8b5cf6", gradient: "linear-gradient(90deg,#8b5cf6,#a78bfa)" },
    { label: "Class 9", percent: 100, color: "#f59e0b", gradient: "linear-gradient(90deg,#f59e0b,#fbbf24)" },
    { label: "Class 10", percent: 100, color: "#ef4444", gradient: "linear-gradient(90deg,#ef4444,#f87171)" },
    { label: "Class 11", percent: 98, color: "#ec4899", gradient: "linear-gradient(90deg,#ec4899,#f472b6)" },
    { label: "Class 12", percent: 97, color: "#14b8a6", gradient: "linear-gradient(90deg,#14b8a6,#2dd4bf)" },
  ];
  const comp = [
    { label: "JEE Main", percent: 96, color: "#1a27e1", gradient: "linear-gradient(90deg,#1a27e1,#3d57ff)", icon: "⚙️" },
    { label: "JEE Advanced", percent: 92, color: "#7c3aed", gradient: "linear-gradient(90deg,#7c3aed,#a78bfa)", icon: "🔬" },
    { label: "NEET UG", percent: 95, color: "#dc2626", gradient: "linear-gradient(90deg,#dc2626,#f87171)", icon: "🏥" },
    { label: "UPSC CSE", percent: 88, color: "#b45309", gradient: "linear-gradient(90deg,#b45309,#f59e0b)", icon: "🏛️" },
  ];
  const job = [
    { label: "Banking (IBPS/SBI)", percent: 90, color: "#0d9488", gradient: "linear-gradient(90deg,#0d9488,#2dd4bf)", icon: "🏦" },
    { label: "SSC CGL", percent: 89, color: "#c026d3", gradient: "linear-gradient(90deg,#c026d3,#e879f9)", icon: "📋" },
    { label: "Defence (NDA/CDS)", percent: 91, color: "#dc2626", gradient: "linear-gradient(90deg,#b91c1c,#ef4444)", icon: "🛡️" },
  ];

  const bar = (d: any) => (
    <div key={d.label}>
      <div className="flex justify-between text-xs mb-0.5">
        <span className="font-semibold flex items-center gap-1" style={{color:d.color}}>{d.icon&&<span className="text-sm">{d.icon}</span>}{d.label}</span>
        <span className="font-bold" style={{color:d.percent===100?"#ffd624":"rgba(255,255,255,0.8)"}}>{d.percent}%{d.percent===100&&<span className="ml-1 text-[10px]">✦</span>}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{background:"rgba(255,255,255,0.06)"}}>
        <div className="h-full rounded-full" style={{width:d.percent+"%",background:d.gradient,boxShadow:"0 0 8px "+d.color+"66",transition:"all 1s"}}/>
      </div>
    </div>
  );

  return (
    <section className="relative flex items-center overflow-hidden pt-2 pb-4" style={{background:"linear-gradient(135deg,#020818 0%,#040d2e 40%,#071050 70%,#0a1560 100%)"}}>
      <div className="absolute inset-0 bg-grid opacity-20"/>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none" style={{background:"radial-gradient(circle,#1a27e1,transparent)"}}/>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none" style={{background:"radial-gradient(circle,#f5b800,transparent)"}}/>
      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-up" style={{color:"#fff"}}>Shape Your <span style={{background:"linear-gradient(135deg,#ffd624,#f5b800,#d98e00)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Future</span> with Elite Education</h1>
            <p className="text-base leading-relaxed mb-5 max-w-xl animate-fade-up animate-delay-200" style={{color:"rgba(255,255,255,0.65)"}}>Tovernax Academy blends academic excellence with competitive exam mastery — through personalized coaching, hybrid learning, and expert mentorship designed for tomorrow&apos;s leaders.</p>
            <div className="flex flex-wrap gap-4 mb-6 animate-fade-up animate-delay-300">
              <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-base" style={{color:"#ffd624",border:"2px solid rgba(255,214,36,0.35)",transition:"all 0.3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,214,36,0.7)";e.currentTarget.style.background="rgba(255,214,36,0.06)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,214,36,0.35)";e.currentTarget.style.background="transparent"}}>Start Your Journey <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-base" style={{color:"#ffd624",border:"2px solid rgba(255,214,36,0.35)",transition:"all 0.3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,214,36,0.7)";e.currentTarget.style.background="rgba(255,214,36,0.06)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,214,36,0.35)";e.currentTarget.style.background="transparent"}}>Explore Courses</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up animate-delay-400">
              {STATS.map(s=><div key={s.label} className="text-center p-3 rounded-xl" style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"}}><div className="text-2xl mb-1">{s.icon}</div><div className="font-display font-bold text-2xl" style={{background:"linear-gradient(135deg,#ffd624,#f5b800)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{s.value}</div><div className="text-xs mt-0.5" style={{color:"rgba(255,255,255,0.5)"}}>{s.label}</div></div>)}
            </div>
          </div>
          <div className="relative animate-fade-in animate-delay-300 mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30" style={{background:"linear-gradient(135deg,#1a27e1,#3d57ff)"}}/>
            <div className="relative rounded-3xl overflow-hidden border shadow-2xl" style={{background:"rgba(255,255,255,0.04)",backdropFilter:"blur(24px)",borderColor:"rgba(255,214,36,0.15)"}}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div><div className="text-xs font-bold tracking-widest uppercase mb-1" style={{color:"rgba(255,255,255,0.4)"}}>Student Progress</div><div className="font-display text-xl font-bold animate-sky-gold-white">Academic &amp; Competitive Excellence</div></div>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl" style={{background:"rgba(245,184,0,0.15)",border:"1px solid rgba(245,184,0,0.25)"}}>🎓</div>
                </div>
                <div className="mb-4"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold animate-sky-gold-white" style={{background:"linear-gradient(90deg,rgba(16,185,129,0.15),rgba(59,130,246,0.15),rgba(139,92,246,0.15),rgba(245,158,11,0.15),rgba(239,68,68,0.15))",border:"1px solid rgba(0,191,255,0.3)"}}>⚡ We cover syllabus &amp; prepare for competitive exams ⚡</div></div>
                <div className="mb-4"><div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:"rgba(255,255,255,0.35)"}}>📚 Academic (Class 6–12)</div><div className="space-y-2">{academic.map(bar)}</div></div>
                <div className="mb-4"><div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:"rgba(255,255,255,0.35)"}}>🏆 Competitive Exams</div><div className="space-y-2">{comp.map(bar)}</div></div>
                <div className="mb-4"><div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:"rgba(255,255,255,0.35)"}}>💼 Job Exams</div><div className="space-y-2">{job.map(bar)}</div></div>
                <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl" style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,214,36,0.1)"}}>
                  <div className="text-center"><div className="font-bold text-sm" style={{background:"linear-gradient(135deg,#ffd624,#f5b800)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>15</div><div className="text-[10px] mt-0.5" style={{color:"rgba(255,255,255,0.4)"}}>Seats Left</div></div>
                  <div className="text-center"><div className="font-bold text-sm" style={{background:"linear-gradient(135deg,#ffd624,#f5b800)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>July 1</div><div className="text-[10px] mt-0.5" style={{color:"rgba(255,255,255,0.4)"}}>Start Date</div></div>
                  <div className="text-center"><div className="font-bold text-sm" style={{background:"linear-gradient(135deg,#ffd624,#f5b800)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>1 Yr</div><div className="text-[10px] mt-0.5" style={{color:"rgba(255,255,255,0.4)"}}>Duration</div></div>
                </div>
              </div>
              <div className="px-6 py-3 flex items-center justify-between" style={{borderTop:"1px solid rgba(255,255,255,0.07)"}}>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white" style={{background:"#3d57ff",borderColor:"#040d2e"}}>AM</div>
                  <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white" style={{background:"#10b981",borderColor:"#040d2e"}}>PS</div>
                  <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white" style={{background:"#f5b800",borderColor:"#040d2e"}}>RG</div>
                  <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white" style={{background:"#ec4899",borderColor:"#040d2e"}}>VK</div>
                  <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px]" style={{background:"rgba(255,255,255,0.08)",borderColor:"#040d2e",color:"rgba(255,255,255,0.5)"}}>+</div>
                </div>
                <Link href="/admissions" className="text-xs font-bold px-3 py-1.5 rounded-lg animate-gold-blue-cta" style={{border:"1px solid rgba(255,214,36,0.25)"}}>Reserve Seat →</Link>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 animate-float">
              <div className="rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl" style={{background:"#fff",boxShadow:"0 8px 32px rgba(0,0,0,0.25)"}}>
                <span className="text-2xl">🏆</span>
                <div><div className="text-xs font-bold" style={{color:"#0a1560"}}>Top Rankers</div><div className="text-xs text-gray-500">72% Toppers</div></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-6 animate-float" style={{animationDelay:"2s"}}>
              <div className="rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl" style={{background:"#fff",boxShadow:"0 8px 32px rgba(0,0,0,0.25)"}}>
                <span className="text-2xl">⭐</span>
                <div><div className="text-xs font-bold" style={{color:"#0a1560"}}>4.9/5 Rating</div><div className="text-xs text-gray-500">10,000+ reviews</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 2" xmlns="http://www.w3.org/2000/svg"><rect width="1440" height="2" fill="white"/></svg>
      </div>
    </section>
  );
}

