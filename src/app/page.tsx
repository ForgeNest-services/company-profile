import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import { generateWebsiteSchema, generateLocalBusinessSchema } from "@/lib/seo";

export default function Home() {
  const websiteSchema = generateWebsiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="relative max-w-screen-4xl mx-auto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
