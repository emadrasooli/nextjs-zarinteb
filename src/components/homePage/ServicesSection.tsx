
import { ServicesCard } from "../ServicesCard"
import labaratory from "@/assets/images/services/labaratory-room.png"
import machinery from "@/assets/images/services/machinery.png"
import repairEquipment from "@/assets/images/services/repair-equipment.png"

const features = [
  {
    id: 1,
    name: 'Ambulance and Lab Outfitting',
    description:
      'From design to installation, we offer full-service outfitting for ambulances and laboratory rooms.',
    image: labaratory,
    href: '#'
  },
  {
    id: 2,
    name: 'Global Medical Imports',
    description:
      'Importing essential medical equipment and supplies from global sources to meet your needs in Afghanistan.',
    image: machinery,
    href: '#'
  },
  {
    id: 3,
    name: 'Medical Equipment Repair',
    description:
      'We offer comprehensive repair and maintenance for medical equipment, including importing original parts as needed.',
    image: repairEquipment,
    href: '#'
  },
]

export default function ServicesSection() {
  return (
    <div className="py-24 sm:py-32 bg-zinc-100 my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none space-y-12">
          <h2 className="text-4xl font-semibold tracking-tighter text-pretty text-gray-900 sm:text-5xl/10 max-w-lg">
            Stay on top of customer support
          </h2>
          <div className="flex gap-6">
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
