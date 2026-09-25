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
    <div className="group h-72 md:h-80 lg:h-96 w-full md:w-1/3 rounded-3xl overflow-hidden relative flex flex-col justify-between p-6 lg:p-8 border border-zinc-200/80 shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-yellow-50/80 via-white to-yellow-100/40">
      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col">
        <h3 className="text-xl lg:text-2xl font-extrabold text-zinc-900 tracking-tight">
          {title}
        </h3>
        <p className="text-zinc-600 text-xs sm:text-sm font-medium pt-3 leading-relaxed line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          aria-label={title}
          className="w-11 h-11 flex items-center justify-center bg-zinc-900 text-primary rounded-full hover:bg-primary hover:text-primary-foreground duration-300 transition-all shadow-sm group-hover:scale-105 mt-auto"
        >
          <ArrowUpRight className="size-5 rtl:-scale-x-100" />
        </Link>
      </div>

      {/* Subtle bottom gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Background Image (Bottom Right/Left logical end) */}
      <div className="absolute -bottom-2 end-2 h-3/5 w-3/5 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500 pointer-events-none">
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
