"use client";

import { ServicesCard } from "../ServicesCard"
import { useTranslations } from "next-intl"
import { useMemo } from "react"

export default function ServicesSection() {
  const t = useTranslations('servicesSection')

  const features = useMemo(() => [
    {
      id: 1,
      name: t('F1.name'),
      description: t('F1.description'),      
      image: "/services/labaratory-room.png",
      href: '#'
    },
    {
      id: 2,
      name: t('F2.name'),
      description: t('F2.description'),
      image: "/services/machinery.png",
      href: '#'
    },
    {
      id: 3,
      name: t('F3.name'),
      description: t('F3.description'),
      image: "/services/repair-equipment.png",
      href: '#'
    },
  ], [t])

  return (
    <div className="py-24 sm:py-32 bg-zinc-100 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none space-y-12">
          <h2 className="text-3xl/6 font-semibold tracking-tighter text-pretty text-gray-900 sm:text-5xl/10 max-w-lg">
            {t('heading')}
          </h2>
          <div className="flex flex-col gap-6 md:flex-row">
            {features.map((feature) => (
              <ServicesCard 
                key={feature.id}
                title={feature.name}
                description={feature.description}
                backgroundImage={feature.image}
                href={feature.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
