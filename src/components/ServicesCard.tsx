import { Link } from '@/i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  backgroundImage: StaticImageData;
};

export const ServicesCard = ({ title, description, href, backgroundImage }: ServiceCardProps) => {
  return (
    <div className="h-96 rounded-3xl overflow-hidden relative flex flex-col justify-start items-center py-8 px-6">
      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-black text-wrap w-64">{title}</h3>
        <p className="text-zinc-700 text-sm font-medium pt-4">{description}</p>
        <Link
          href={href}
          className="px-4 py-2 w-fit bg-black text-primary rounded-full hover:px-8 duration-300 transition-all mt-auto "
        >
          <ArrowUpRight />
        </Link>
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-primary from-5% to-primary/30 z-10'></div>

      {/* Background Image (Bottom Right) */}
      <div className="absolute bottom-8 right-6 h-3/4 w-3/4 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          layout="fill"
          objectFit="contain"
          objectPosition="bottom right"
          className=""
        />
      </div>
    </div>
  );
};