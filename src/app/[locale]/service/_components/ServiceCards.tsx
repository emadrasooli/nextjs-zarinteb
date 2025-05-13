import ServiceCard from "./ServiceCard";

const services = [
  {
    iconSrc: "https://via.placeholder.com/40",
    title: "Birthing Care",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    iconSrc: "https://via.placeholder.com/40",
    title: "Cancer Care",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    iconSrc: "https://via.placeholder.com/40",
    title: "Orthopedics",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    iconSrc: "https://via.placeholder.com/40",
    title: "Heart Care",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    iconSrc: "https://via.placeholder.com/40",
    title: "Vaccine",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    iconSrc: "https://via.placeholder.com/40",
    title: "Dental Clinic",
    description: "Lorem ipsum dolor sit amet...",
  },
];

export default function ServiceCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          iconSrc={service.iconSrc}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}
