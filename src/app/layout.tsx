import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "Tovernax Academy | Excellence in Education",
    template: "%s | Tovernax Academy",
  },
  description:
    "Tovernax Academy — a premier educational institution offering academic coaching, competitive exam preparation, hybrid learning, counseling, and teacher training. Part of Tovernax Legion.",
  keywords: [
    "Tovernax Academy",
    "educational institution",
    "academic coaching",
    "competitive exam preparation",
    "hybrid learning",
    "online classes",
    "offline classes",
    "student counseling",
    "parent counseling",
    "teacher training",
    "LMS",
    "Tovernax Legion",
  ],
  authors: [{ name: "Tovernax Legion" }],
  creator: "Tovernax Legion",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://academy.tovernax.com",
    siteName: "Tovernax Academy",
    title: "Tovernax Academy | Excellence in Education",
    description:
      "Premier educational institution offering academic coaching, competitive exam preparation, and hybrid learning solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tovernax Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tovernax Academy | Excellence in Education",
    description: "Premier educational institution. Part of Tovernax Legion.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
