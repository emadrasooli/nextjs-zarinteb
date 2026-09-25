"use client";

import { ServicesCard } from "../ServicesCard";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";
import { MotionStagger, MotionStaggerItem } from "@/components/motion/MotionStagger";

export default function ServicesSection() {
  const t = useTranslations("servicesSection");

  const features = useMemo(
    () => [
      {
        id: 1,
        name: t("F1.name"),
        description: t("F1.description"),
        image: "/services/labaratory-room.png",
        href: "/service",
      },
      {
        id: 2,
        name: t("F2.name"),
        description: t("F2.description"),
        image: "/services/machinery.png",
        href: "/service",
      },
      {
        id: 3,
        name: t("F3.name"),
        description: t("F3.description"),
        image: "/services/repair-equipment.png",
        href: "/service",
      },
    ],
    [t]
  );

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-zinc-50/70 via-zinc-100/40 to-zinc-50/70 border-y border-zinc-200/60 my-16 lg:my-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none space-y-10">
          <MotionFadeIn direction="up">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
              {t("heading")}
            </h2>
          </MotionFadeIn>
          <MotionStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <MotionStaggerItem key={feature.id} className="h-full">
                <ServicesCard
                  title={feature.name}
                  description={feature.description}
                  backgroundImage={feature.image}
                  href={feature.href}
                />
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
