const stats = [
    { id: 1, name: 'dedicated professionals', value: '150+' },
    { id: 2, name: 'high-quality medical products', value: '300+' },
    { id: 3, name: 'trusted healthcare providers', value: '500+' },
    { id: 4, name: 'years in the industry', value: '5+' },
  ]
  
  export default function StatsSection() {
    return (
      <div className="px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center py-32 lg:gap-8 gap-4">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <p className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Committed to Excellence in Medical Innovation
              </p>
              <p className="mt-6 text-gray-600">
              We strive to revolutionize healthcare by manufacturing top-tier medical equipment, ensuring accessibility to advanced medical solutions, and empowering healthcare professionals with the tools they need to provide exceptional patient care.
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                        <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-primary">{stat.value}</dd>
                    </div>
                ))}
              </dl>
            </div>
            <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <img
                    alt="statsBanner"
                    src="/stats/statsBanner.jpeg"
                    className="object-cover w-full h-[200px] md:h-[300px] lg:h-[500px] rounded-2xl"
                />
            </div>
      </div>
    )
  }
  