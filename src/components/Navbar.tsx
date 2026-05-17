"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lmsUrl = process.env.NEXT_PUBLIC_LMS_URL || "http://localhost:3000";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", external: false },
    { href: "/about", label: "About", external: false },
    { href: "/courses", label: "Courses", external: false },
    { href: "/online-classes", label: "Online", external: false },
    { href: "/offline-classes", label: "Offline", external: false },
    { href: "/hybrid-learning", label: "Hybrid", external: false },
    { href: "/counseling", label: "Counseling", external: false },
    { href: "/contact", label: "Contact", external: false },
    { href: lmsUrl, label: "📚 LMS", external: true, isLMS: true },
    { href: "/lms", label: "Exam", external: false },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Navbar */}
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 21, 96, 0.97)"
            : "rgba(10, 21, 96, 0.88)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 214, 36, 0.15)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.3)"
            : "0 4px 16px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0 -ml-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #ffd624, #3d57ff)" }} />
                <img src="/logo.png" alt="Logo" className="h-16 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div>
                <span className="text-lg font-bold transition-colors duration-300" style={{ color: "#ffd624" }}>
                  Tovernax Academy
                </span>
                <span className="block text-[10px] font-medium tracking-wider text-white/80">
                  A Unit of Tovernax Legion
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0.5 ml-1 min-w-0">

              {navLinks.map((link) => {
                const isLmsLink = link.isLMS;
                
                if (isLmsLink) {
                  // External LMS Link
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-3 py-2 text-xs font-bold text-white transition-all duration-300 group hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(59,130,246,0.3)",
                      }}
                    >
                      {link.label}
                      <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-[9px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-600 rounded-full"
                        style={{ fontSize: "9px" }}>
                        New
                      </span>
                    </a>
                  );
                } else {
                  // Internal Links
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative px-1 py-2 text-xs font-medium text-white/80 hover:text-white transition-colors duration-300 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-5"
                        style={{ background: "linear-gradient(90deg, #ffd624, #f5b800)" }} />
                    </Link>
                  );
                }
              })}

              {/* Divider */}
              <div className="mx-1 h-6 w-px bg-white/15" />

              {/* Flashing Contact Numbers */}
              <div className="flex items-center gap-1.5">
                <a href="tel:+91 959707 8806" className="text-[11px] font-bold animate-flash-phone whitespace-nowrap">
                  📞 9597078806
                </a>
                <a href="https://wa.me/919597078806" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold animate-flash-whatsapp whitespace-nowrap">
                  💬 Chat
                </a>
              </div>

              {/* Apply Now Button */}
              <div className="ml-1 flex-shrink-0">
                <Link
                  href="/admissions"
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #ffd624, #f5b800)",
                    color: "#0a1560",
                    boxShadow: "0 4px 15px rgba(255, 214, 36, 0.3)",
                  }}
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Mobile Right Side */}
            <div className="lg:hidden flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <a href="tel:9597078806" className="text-xs font-bold animate-flash-phone whitespace-nowrap">
                  📞 9597078806
                </a>
              </div>
              <Link
                href="/admissions"
                className="px-4 py-1.5 rounded-lg text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, #ffd624, #f5b800)",
                  color: "#0a1560",
                }}
              >
                Apply
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: isOpen ? "rgba(255,255,255,0.1)" : "transparent" }}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: isOpen ? "600px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="px-4 pb-4 pt-2 space-y-1" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {navLinks.map((link) => {
              const isLmsLink = link.isLMS;
              
              if (isLmsLink) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                      boxShadow: "0 4px 15px rgba(59,130,246,0.3)",
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label} 🆕
                  </a>
                );
              } else {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
            <div className="pt-2 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <a href="tel:+91 959707 8806" className="block px-4 py-2 rounded-xl text-sm font-bold animate-flash-phone">
                📞 Call: +91 959707 8806
              </a>
              <a href="https://wa.me/919597078806" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-xl text-sm font-bold animate-flash-whatsapp">
                💬 WhatsApp: 9597078806
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
