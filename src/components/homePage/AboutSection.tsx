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
    <section className="px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:gap-12 gap-8 py-12 md:py-20 xl:py-28">
      <div className="lg:w-1/2 order-2 lg:order-1 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl leading-tight">
          {t("title")}
        </h2>
        <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
          {t("description")}
        </p>
        <dl className="mt-10 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2 pt-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-2 border-s-2 border-primary/40 ps-5"
            >
              <dt className="text-sm font-medium text-zinc-500">{stat.name}</dt>
              <dd className="order-first text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
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
          className="object-cover w-full h-[240px] md:h-[340px] lg:h-[480px] rounded-3xl shadow-card border border-zinc-200/60"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
