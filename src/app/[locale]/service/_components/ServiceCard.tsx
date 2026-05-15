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
    <div className="bg-gradient-to-br from-yellow-300 to-40% to-zinc-950 px-6 py-8 rounded-2xl shadow-md group cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/50 px-3 py-1">
        <Image
          src={iconSrc}
          alt={title}
          width={120}
          height={120}
          className=""
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary mt-4">{title}</h3>
        <p className="text-zinc-300 mt-2">{description}</p>
      </div>
    </div>
  );
}
