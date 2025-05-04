"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function ContentSection() {
  const t = useTranslations("ContentSection-AboutPage");

  const stats = useMemo(
    () => [
      { id: 1, label: t("stats1.name"), value: t("stats1.value") },
      { id: 2, label: t("stats2.name"), value: t("stats2.value") },
      { id: 3, label: t("stats3.name"), value: t("stats3.value") },
    ],
    [t]
  );

  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {t("title")}
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">{t("description1")}</p>
            <p className="mt-10 max-w-xl text-base/7 text-gray-700">
              {t("description2")}
            </p>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
