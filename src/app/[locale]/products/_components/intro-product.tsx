"use client";

import { useTranslations } from "next-intl";

export default function IntroProducts() {
  const t = useTranslations("ProductPage");
  return (
    <section
      className="relative rounded-3xl flex my-3 flex-col items-center justify-center max-w-7xl mx-auto h-[200px] md:h-[350px] lg:h-[450px]"
      style={{
        backgroundImage: "url('/contactPage/banner-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      <h1 className="text-5xl font-bold text-primary sm:text-6xl lg:text-8xl">
        {t("products")}
      </h1>
    </section>
  );
}
