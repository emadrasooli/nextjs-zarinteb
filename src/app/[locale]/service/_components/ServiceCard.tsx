import Image from "next/image";

type ServiceCardProps = {
  iconSrc: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  iconSrc,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-md  relative overflow-hidden group cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out">
      <div className="absolute inset-0 rounded-lg flex items-end justify-end p-2 opacity-50">
        <Image src={iconSrc} alt={title} width={150} height={150} />
      </div>
      <div className="z-10 relative">
        <h3 className="text-lg font-bold text-primary mt-4">{title}</h3>
        <p className="text-gray-600 mt-2 md:w-2/3">{description}</p>
      </div>
    </div>
  );
}
