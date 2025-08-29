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
    <div className="bg-zinc-950 px-6 py-8 rounded-2xl border border-zinc-100 shadow-md group cursor-pointer">
      <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-end">
        <Image src={iconSrc} alt={title} width={100} height={100} />
      </div>
      <div className="">
        <h3 className="text-lg font-bold text-primary mt-4">{title}</h3>
        <p className="text-zinc-100 mt-2">{description}</p>
      </div>
    </div>
  );
}
