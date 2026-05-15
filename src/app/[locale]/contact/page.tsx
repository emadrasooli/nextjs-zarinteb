import Pattern from "@/components/Pattern";
import ContactHero from "./_components/ContactHero";
import ContactSection from "./_components/ContactSection";
import OfficesLocations from "./_components/OfficesLocations";

export default function ContactPage() {
  return (
    <div>
      <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden">
        <Pattern />
      </div>
      <ContactHero />
      <ContactSection />
      <OfficesLocations />
    </div>
  );
}
