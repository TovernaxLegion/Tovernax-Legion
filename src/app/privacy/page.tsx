import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Tovernax Academy's Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-mesh">
      <div className="section-container max-w-3xl">
        <div className="section-label mb-4">Legal</div>
        <h1 className="font-display text-4xl font-bold text-navy-950 mb-3">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly to us, such as name, email address, phone number, and academic details when you register, enroll, or contact us. We also collect usage data about how you interact with our platform and LMS.",
            },
            {
              title: "2. How We Use Your Information",
              content: "We use the information we collect to provide, maintain, and improve our educational services; communicate with you about programs, updates, and promotions; process enrollments and payments; and comply with legal obligations.",
            },
            {
              title: "3. Information Sharing",
              content: "We do not sell your personal information. We may share information with service providers who assist us in operating our platform, with your consent, or as required by law. Parent/guardian information may be shared with faculty for academic coordination purposes.",
            },
            {
              title: "4. Data Security",
              content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
            },
            {
              title: "5. Cookies",
              content: "We use cookies and similar tracking technologies to enhance your experience on our website and LMS platform. You can control cookie settings through your browser preferences.",
            },
            {
              title: "6. Your Rights",
              content: "You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time. Contact us at privacy@tovernax.com to exercise these rights.",
            },
            {
              title: "7. Contact Us",
              content: "If you have any questions about this Privacy Policy, please contact us at privacy@tovernax.com or call +91 98765 43210.",
            },
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
