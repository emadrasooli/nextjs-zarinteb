import Hero from "@/components/homePage/Hero";
import ProductList from "@/components/homePage/ProductList";
import LogoSection from "@/components/LogoSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import ContactCTA from "@/components/homePage/ContactCTA";
import StatsSection from "@/components/homePage/StatsSection";

export default async function Page() {
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
