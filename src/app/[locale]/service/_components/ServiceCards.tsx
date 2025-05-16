import ServiceCard from "./ServiceCard";

const services = [
  {
    iconSrc: "/services/service-page/1.svg",
    title: "Birthing Care",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,",
  },
  {
    iconSrc: "/services/service-page/2.svg",
    title: "Cancer Care",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, similique error sint aliquam doloremque rem repudiandae obcaecati, impedit.",
  },
  {
    iconSrc: "/services/service-page/3.svg",
    title: "Orthopedics",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, similique error sint aliquam doloremque rem repudiandae obcaecati, impedit.",
  },
  {
    iconSrc: "/services/service-page/4.svg",
    title: "Heart Care",
    description:
      "Lorem ipsum dolor sit amet cons aliquam doloremque rem repudiandae obcaecati, impedit.",
  },
  {
    iconSrc: "/services/service-page/5.svg",
    title: "Vaccine",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, srem repudiandae obcaecati, impedit.",
  },
  {
    iconSrc: "/services/service-page/6.svg",
    title: "Dental Clinic",
    description:
      "Lorem ipsum dolor sit amet consectetur, a sint aliquam doloremque rem repudiandae obcaecati, impedit.",
  },
];

export default function ServiceCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 lg:pt-24 px-8">
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
