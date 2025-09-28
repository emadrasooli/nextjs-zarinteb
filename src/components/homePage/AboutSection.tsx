import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("statsSection");

  const stats = [
    { id: 1, name: t("employeesStats.name"), value: t("employeesStats.value") },
    { id: 2, name: t("productsStats.name"), value: t("productsStats.value") },
    { id: 3, name: t("costumersStats.name"), value: t("costumersStats.value") },
    { id: 4, name: t("yearsStats.name"), value: t("yearsStats.value") },
  ];

  return (
    <div className="px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:gap-8 gap-4 py-6 md:py-12 xl:py-24">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <p className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          {t("title")}
        </p>
        <p className="mt-6 text-zinc-500">{t("description")}</p>
        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 rtl:border-r ltr:border-l border-gray-900/10 rtl:pr-6 ltr:pl-6"
            >
              <dt className="text-sm/6 text-zinc-500">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="lg:w-1/2 w-full order-1 lg:order-2">
        <Image
          alt="statsBanner"
          src="/stats/statsBanner.jpeg"
          className="object-cover w-full h-[200px] md:h-[300px] lg:h-[500px] rounded-3xl"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
