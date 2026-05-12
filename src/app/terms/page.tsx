import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Tovernax Academy Terms of Use — the rules and guidelines governing use of our platform and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-mesh">
      <div className="section-container max-w-3xl">
        <div className="section-label mb-4">Legal</div>
        <h1 className="font-display text-4xl font-bold text-navy-950 mb-3">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8">
          {[
            { title: "1. Acceptance of Terms", content: "By accessing or using Tovernax Academy's website, LMS, or any of our services, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services." },
            { title: "2. Use of Services", content: "Our services are intended for educational purposes. You agree not to misuse our platform, share login credentials, distribute copyrighted content, or engage in any activity that disrupts other users' learning experience." },
            { title: "3. Enrollment & Fees", content: "Enrollment is confirmed upon receipt of payment. Fee structures, refund policies, and EMI terms are communicated at the time of enrollment and may be subject to change with notice." },
            { title: "4. Intellectual Property", content: "All content on our platform — including lectures, notes, question banks, and study materials — is the intellectual property of Tovernax Academy. Unauthorized distribution or reproduction is strictly prohibited." },
            { title: "5. Code of Conduct", content: "All students are expected to maintain respectful conduct toward faculty, peers, and staff. Violations may result in suspension or termination of enrollment without refund." },
            { title: "6. Limitation of Liability", content: "Tovernax Academy strives for excellence but cannot guarantee specific academic outcomes or rank improvements. Our liability is limited to the fees paid for the enrolled program." },
            { title: "7. Changes to Terms", content: "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms." },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-display font-bold text-xl text-navy-950 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
