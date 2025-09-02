import Hero from "@/components/homePage/Hero";
import StatsSection from "@/components/homePage/statsSection";
import ProductList from "@/components/homePage/ProductList";
import LogoSection from "@/components/LogoSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import ContactCTA from "@/components/homePage/ContactCTA";

export default async function IndexPage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ProductList />
      <LogoSection />
      <ServicesSection />
      <ContactCTA />
    </main>
  );
}
