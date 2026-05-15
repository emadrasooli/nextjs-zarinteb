import Hero from "./_components/Hero";
import MainContent from "./_components/MainContent";
import ServiceCards from "./_components/ServiceCards";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <main className="flex-grow">
        <Hero />
        <ServiceCards />
        <MainContent />
      </main>
    </div>
  );
}
