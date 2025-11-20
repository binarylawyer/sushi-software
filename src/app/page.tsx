import { CTASection } from "@/components/CTASection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { FaqSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { InstantPaySection } from "@/components/InstantPaySection";
import { LogosSections } from "@/components/LogosSection";
import { MainFeatureSection } from "@/components/MainFeatureSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden ">
      <HeroSection />
      <LogosSections />
      <EcosystemSection />
      <HowItWorksSection />
      <InstantPaySection />
      <MainFeatureSection />
      <CTASection />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
