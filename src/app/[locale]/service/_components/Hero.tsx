"use client";

import { useTranslations } from "next-intl";
import ServicePattern from "./Pattern";

export default function Hero() {
  const t = useTranslations("servicePage");
  return (
    <section className="relative bg-primary text-white rounded-3xl flex my-3 flex-col items-center justify-center max-w-7xl mx-auto h-[200px] md:h-[350px] lg:h-[450px]">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
        <ServicePattern colorClass="white" />
      </div>
      <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-8xl">
        {t("service")}
      </h1>
    </section>
  );
}
