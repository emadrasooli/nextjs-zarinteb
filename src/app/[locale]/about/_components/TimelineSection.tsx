import { useTranslations } from "next-intl"
import { useMemo } from "react"

export default function TimelineSection() {
  const t = useTranslations('TimeLine-AboutPage')

    const timeline = useMemo(() => [
        {
          name: t('timeLine1.name'),
          description: t('timeLine1.description'),
          date: t('timeLine1.date'),
          dateTime: '2022-04',
        },
        {
          name: t('timeLine2.name'),
          description:t('timeLine2.description'),
          date: t('timeLine2.date'),
          dateTime: '2023-02',
        },
        {
          name: t('timeLine3.name'),
          description: t('timeLine3.description'),
          date: t('timeLine3.date'),
          dateTime: '2024-07',
        },
        {
          name: t('timeLine4.name'),
          description: t('timeLine4.description'),
          date: t('timeLine4.date'),
          dateTime: '2025-01',
        },
      ], [])

    return (
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-primary">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="ltr:mr-4 rtl:ml-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute ltr:-ml-2 rtl:-mr-2 h-px w-screen ltr:-translate-x-full rtl:translate-x-full bg-zinc-900/10 ltr:sm:-ml-4 rtl:sm:-mr-4 lg:static ltr:lg:-mr-6 rtl:lg:-ml-6 ltr:lg:ml-8 rtl:lg:mr-8 lg:w-auto lg:flex-auto ltr:lg:translate-x-0 rtl:lg:-translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-zinc-900">{item.name}</p>
              <p className="mt-1 text-base/7 text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
}