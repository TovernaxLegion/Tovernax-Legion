import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { AcademicModelSection } from "@/components/sections/AcademicModelSection";
import { FeaturedProgramsSection } from "@/components/sections/FeaturedProgramsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { LegionEcosystemSection } from "@/components/sections/LegionEcosystemSection";

export const metadata: Metadata = {
  title: "Tovernax Academy | Excellence in Education",
  description:
    "Tovernax Academy — premier educational institution offering academic coaching, competitive exam preparation, hybrid learning, and expert mentorship. Part of Tovernax Legion.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <AcademicModelSection />
      <FeaturedProgramsSection />
      <TestimonialsSection />
      <LegionEcosystemSection />
      <CTASection />
    </>
  );
}
