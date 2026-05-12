import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mesh pt-20">
      <div className="section-container text-center">
        <div className="text-8xl mb-6 animate-float inline-block">🎓</div>
        <div className="font-display font-bold text-9xl text-navy-100 leading-none select-none mb-4">
          404
        </div>
        <h1 className="font-display text-4xl font-bold text-navy-950 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">
          Looks like this page took a wrong turn. Let's get you back on the path to excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/courses" className="btn-outline">
            Explore Courses
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-16">
          <p className="text-gray-400 text-sm mb-5">Or jump to a popular page:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Admissions", href: "/admissions" },
              { label: "Academic Coaching", href: "/academic-coaching" },
              { label: "Competitive Prep", href: "/competitive-exam-prep" },
              { label: "LMS Portal", href: "/lms" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link key={link.label} href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-navy-50 hover:border-navy-200 hover:text-navy-700 transition-all shadow-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
