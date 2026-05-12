"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-950/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Clean Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-xl text-white shadow-glow"
            style={{
              background: "linear-gradient(135deg, #1a27e1 0%, #3d57ff 100%)",
            }}
          >
            T
          </div>
          <span
            className="font-display text-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #ffd624 0%, #f5b800 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tovernax Academy
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</Link>
          <Link href="/programs" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Programs</Link>
          <Link href="/admissions" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Admissions</Link>
          <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/lms" 
            className="hidden sm:block text-sm font-semibold px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
            style={{ color: "#3d57ff" }}
          >
            LMS Portal
          </Link>
          <Link href="/apply" className="btn-gold text-sm px-6 py-2.5">
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
