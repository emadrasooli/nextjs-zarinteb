import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
};

export const ServicesCard = ({
  title,
  description,
  href,
  backgroundImage,
}: ServiceCardProps) => {
  return (
    <div className="h-64 md:h-72 lg:h-96 w-full md:w-1/3 rounded-3xl overflow-hidden relative flex flex-col py-8 px-6">
      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col">
        <h3 className="text-xl lg:text-2xl font-bold text-black text-wrap">
          {title}
        </h3>
        <p className="text-zinc-700 lg:text-sm text-xs font-medium pt-4">
          {description}
        </p>
        <Link
          href={href}
          className="px-4 py-2 w-fit bg-black text-primary rounded-full hover:px-8 duration-300 transition-all mt-auto "
        >
          <ArrowUpRight />
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary from-5% to-primary/30 z-10"></div>

      {/* Background Image (Bottom Right) */}
      <div className="absolute bottom-8 ltr:right-6 rtl:left-6 h-3/4 w-3/4 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          className=""
        />
      </div>
    </div>
  );
};
