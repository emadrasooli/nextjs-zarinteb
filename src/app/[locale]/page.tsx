import Hero from "@/components/homePage/Hero";
import ProductList from "@/components/homePage/ProductList";
import LogoSection from "@/components/LogoSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import ContactCTA from "@/components/homePage/ContactCTA";

export default async function Page() {
  return (
    <main>
      <Hero />
      <ProductList />
      <LogoSection />
      <ServicesSection />
      <ContactCTA />
    </main>
  );
}
