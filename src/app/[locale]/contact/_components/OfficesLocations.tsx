"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function OfficesLocations() {
  const t = useTranslations("ContactPage.ourOffices");
  const offices = useMemo(() => {
    return [
      {
        id: 1,
        name: t("locations.factory.name"),
        address: t("locations.factory.address"),
        phone: t("locations.factory.phone"),
      },
      {
        id: 2,
        name: t("locations.herat.name"),
        address: t("locations.herat.address"),
        phone: t("locations.herat.phone"),
      },
      {
        id: 3,
        name: t("locations.kabul.name"),
        address: t("locations.kabul.address"),
        phone: t("locations.kabul.phone"),
      },
      {
        id: 4,
        name: t("locations.mazar.name"),
        address: t("locations.mazar.address"),
        phone: t("locations.mazar.phone"),
      },
    ];
  }, [t]);
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">{t("description")}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.id}>
              <h3 className="border-l border-primary pl-6 font-semibold text-gray-900">
                {office.name}
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic">
                <p className="text-sm md:text-base text-zinc-600">
                  {office.address}
                </p>
                <p className="py-2 text-zinc-400">{office.phone}</p>
              </address>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
