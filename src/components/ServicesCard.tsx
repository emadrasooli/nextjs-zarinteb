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
    <div className="group h-80 sm:h-84 lg:h-96 w-full rounded-3xl overflow-hidden relative flex flex-col justify-between p-6 lg:p-8 border border-amber-300/40 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col">
        <h3 className="text-xl lg:text-2xl font-bold text-black text-wrap">
          {title}
        </h3>
        <p className="text-zinc-800 text-xs sm:text-sm font-medium pt-3 leading-relaxed line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          aria-label={title}
          className="px-4 py-2 w-fit bg-black text-primary rounded-full hover:px-8 duration-300 transition-all mt-auto flex items-center justify-center gap-1 group-hover:scale-105 active:scale-95 shadow-sm"
        >
          <ArrowUpRight className="size-5 rtl:-scale-x-100" />
        </Link>
      </div>

      {/* Signature Primary Golden Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary from-5% to-primary/30 z-10 pointer-events-none" />

      {/* Background Image (Bottom End) */}
      <div className="absolute bottom-6 ltr:right-6 rtl:left-6 h-3/4 w-3/4 z-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          width={500}
          height={500}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};
