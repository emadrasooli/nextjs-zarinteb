'use client';

import { useMemo } from "react"

export default function  ContentSection() {

    const stats = useMemo(() => [
        { label: 'Transactions every 24 hours', value: '44 million' },
        { label: 'Assets under holding', value: '$119 trillion' },
        { label: 'New users annually', value: '46,000' },
      ], [])

    return (
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our mission</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
              At Zarin Teb, our mission is to enhance healthcare with high-quality medical furniture and imported machinery. We design innovative solutions and source advanced equipment globally to empower medical professionals with reliable tools for better care.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">
              We also decorate laboratories and ambulances, tailoring spaces to healthcare needs, and offer repair services to keep equipment running smoothly. Our goal is to support a future where quality healthcare is always accessible.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
 }