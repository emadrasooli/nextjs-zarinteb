import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";

export default function ServiceCards() {
  const t = useTranslations("services");
  const S = useTranslations("servicePage");

  const services = [
    {
      iconSrc: "/services/service-page/11.svg",
      title: t("service1.title"),
      description: t("service1.description"),
    },
    {
      iconSrc: "/services/service-page/12.svg",
      title: t("service2.title"),
      description: t("service2.description"),
    },
    {
      iconSrc: "/services/service-page/13.svg",
      title: t("service3.title"),
      description: t("service3.description"),
    },
    {
      iconSrc: "/services/service-page/14.svg",
      title: t("service4.title"),
      description: t("service4.description"),
    },
    {
      iconSrc: "/services/service-page/8.svg",
      title: t("service5.title"),
      description: t("service5.description"),
    },
    {
      iconSrc: "/services/service-page/9.svg",
      title: t("service6.title"),
      description: t("service6.description"),
    },
  ];

  return (
    <div className="my-24 flex flex-col items-center space-y-4 px-4">
      <div className="mx-auto max-w-4xl lg:text-center px-4">
        <h2 className="text-base/7 font-semibold text-primary">
          {S("serviceSubTitle")}
        </h2>
        <p className="mt-2 text-3xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl lg:text-balance">
          {S("serviceTitle")}
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 lg:pt-24">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>
    </div>
  );
}
