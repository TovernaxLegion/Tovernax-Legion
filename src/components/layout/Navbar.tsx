"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        )}
      >
        {/* Top announcement bar */}
        <div className="bg-navy-950 text-white text-xs py-2 px-4 text-center hidden md:block">
          <span>🎓 New Batch Starting June 1st, 2025 — </span>
          <Link href="/admissions" className="underline font-semibold hover:text-gold-400 transition-colors">
            Register Now
          </Link>
          <span className="mx-3">|</span>
          <span>📞 {SITE.phone}</span>
        </div>

        <nav className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Tovernax Academy Home">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-glow transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1a27e1 0%, #3d57ff 100%)" }}>
              T
            </div>
            <div>
              <div className="font-display font-bold text-navy-950 text-lg leading-tight">
                Tovernax
              </div>
              <div className="text-xs font-semibold tracking-widest text-gold-600 uppercase -mt-0.5">
                Academy
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button className={cn("nav-link px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-50 transition-colors", activeDropdown === link.label && "text-navy-700")}>
                    {link.label}
                    <svg className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === link.label && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link href={link.href} className="nav-link px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors block">
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden animate-fade-in">
                    <div className="p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-navy-50 transition-colors group"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-navy-700 transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/lms" className="btn-outline text-sm px-5 py-2.5">
              LMS Portal
            </Link>
            <Link href="/admissions" className="btn-primary text-sm px-5 py-2.5">
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 pb-8">
          <div className="px-4 space-y-1">
            {/* Mobile announcement */}
            <div className="bg-navy-950 text-white text-xs py-3 px-4 rounded-xl text-center mb-4">
              📞 {SITE.phone} | New batch: June 1st
            </div>

            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div>
                    <div className="px-4 py-2 text-xs font-bold tracking-widest uppercase text-gray-400 mt-4">
                      {link.label}
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-navy-50 transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium text-gray-700">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl font-semibold text-navy-900 hover:bg-navy-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6 space-y-3">
              <Link href="/lms" onClick={() => setMobileOpen(false)} className="btn-outline w-full justify-center">
                LMS Portal
              </Link>
              <Link href="/admissions" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
