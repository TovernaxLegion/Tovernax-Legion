import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://academy.tovernax.com";

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/courses", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/academic-coaching", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/competitive-exam-prep", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/online-classes", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/offline-classes", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/hybrid-learning", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/parent-counseling", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/student-counseling", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/teacher-training", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/admissions", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/lms", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
