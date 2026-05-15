import Hero from "./_components/Hero";
import ContentSection from "./_components/ContentSection";
import TimelineSection from "./_components/TimelineSection";
import LogoSliderSection from "./_components/LogoSliderSection";
import OurPeopleSection from "./_components/OurPeopleSection";

export default function Page() {
  return (
    <div className="pb-24">
      <Hero />
      <ContentSection />

      <div className="py-16 lg:py-24" />

      <TimelineSection />
      <LogoSliderSection />
      <OurPeopleSection />
    </div>
  );
}
