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
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <Image src={iconSrc} alt={title} width={40} height={40} />
      <h3 className="text-lg font-bold text-blue-800 mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
