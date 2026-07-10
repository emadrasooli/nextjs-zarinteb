import Hero from "@/components/homePage/Hero";
import ProductList from "@/components/homePage/ProductList";
import LogoSection from "@/components/LogoSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import ContactCTA from "@/components/homePage/ContactCTA";
import AboutSection from "@/components/homePage/AboutSection";
import OrthoSection from "@/components/homePage/OrthoSection";

export default async function Page() {
  return (
    <main>
      <Hero />
      {/* <LogoSection /> */}
      <AboutSection />
      <ProductList />
      <OrthoSection />
      <ServicesSection />
      <ContactCTA />
    </main>
  );
}
