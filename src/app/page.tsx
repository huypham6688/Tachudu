import HeroSection from "@/Components/home/HeroSection";
import AboutSection from "@/Components/home/AboutSection";
import AdvantagesSection from "@/Components/home/AdvantagesSection";
import ContactSection from "@/Components/home/ContactSection";
import CTASection from "@/Components/home/CTASection";
import PartnersSection from "@/Components/home/PartnersSection";
import PromotionsSection from "@/Components/home/PromotionsSection";
import ServicesSection from "@/Components/home/ServicesSection";
import TestimonialsSection from "@/Components/home/TestimonialsSection";

export default function Home() {
  return (
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <ServicesSection />
        <PromotionsSection />
        <PartnersSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
  );
}
