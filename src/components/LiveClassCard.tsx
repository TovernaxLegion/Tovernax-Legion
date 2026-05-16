"use client";

import { useState, useEffect } from "react";
import { LIVE_CLASSES } from "@/lib/constants";

function getViewerCount(base: number): number {
  const hour = new Date().getHours();
  const multiplier = hour >= 16 && hour <= 22 ? 1.3
    : hour >= 9 && hour <= 15 ? 1.0
    : 0.5;
  const jitter = Math.floor(Math.random() * 30) - 15;
  return Math.max(10, Math.round(base * multiplier + jitter));
}

export function LiveClassCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewers, setViewers] = useState(getViewerCount(LIVE_CLASSES[0].baseViewers));

  const liveClass = LIVE_CLASSES[activeIndex];

  useEffect(() => {
    setViewers(getViewerCount(liveClass.baseViewers));
  }, [activeIndex, liveClass.baseViewers]);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(getViewerCount(liveClass.baseViewers));
    }, 3600000);
    return () => clearInterval(interval);
  }, [liveClass.baseViewers]);

  return (
    <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl" style={{ background: "rgba(255,255,255,0.05)" }}>
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-500 font-mono">tovernax-lms.app/live</span>
      </div>
      <div className="aspect-video bg-navy-900 flex items-center justify-center relative">
        <iframe
          src={`${liveClass.videoUrl}?autoplay=0&rel=0`}
          title={liveClass.topic}
          className="w-full h-full"
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute top-3 right-3">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">● LIVE</span>
        </div>
      </div>
      <div className="px-5 py-3 flex items-center justify-between border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold"
            style={{ background: "#3d57ff" }}>
            {liveClass.teacherInitial}
          </div>
          <span className="text-xs text-gray-400">{liveClass.teacher}</span>
          <span className="text-xs text-gray-500">• {viewers} students watching</span>
        </div>
        <div className="flex gap-2">
          <div className="text-xs px-3 py-1 rounded-lg font-medium" style={{ background: "rgba(61,87,255,0.25)", color: "#93abff" }}>
            💬 Ask Doubt
          </div>
          <div className="text-xs px-3 py-1 rounded-lg font-medium" style={{ background: "rgba(245,184,0,0.15)", color: "#ffd624" }}>
            📝 Notes
          </div>
        </div>
      </div>
      {/* Class selector tabs */}
      <div className="px-5 py-3 border-t border-white/10 flex gap-2 overflow-x-auto">
        {LIVE_CLASSES.map((cls, i) => (
          <button
            key={cls.id}
            onClick={() => setActiveIndex(i)}
            className={`text-xs px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              i === activeIndex
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
            style={i === activeIndex ? { background: "rgba(255,214,36,0.2)", border: "1px solid rgba(255,214,36,0.4)" } : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {cls.icon} {cls.subject}
          </button>
        ))}
      </div>
    </div>
  );
}
