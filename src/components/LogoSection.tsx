"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules"; // Add FreeMode
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LogoItemBreakpoints } from "@/constants/breakpoints";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LogoItems = [
  {
    id: 1,
    name: "Sonoscape",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
  },
  {
    id: 2,
    name: "ywell",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
  },
  {
    id: 3,
    name: "Abon",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
  },
  {
    id: 4,
    name: "AGP",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
  },
  {
    id: 5,
    name: "Gets",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
  },
  {
    id: 6,
    name: "Gets",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
  },
  {
    id: 7,
    name: "Gets",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
  },
  {
    id: 8,
    name: "Gets",
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
  },
];

export default function Example() {
  const t = useTranslations("logoSection");
  return (
    <div className="bg-primary border border-yellow-500 py-16 md:py-28 max-w-7xl mx-auto px-6 lg:px-12 rounded-3xl my-12">
      <div className="flex flex-col items-center space-y-8 md:space-y-12 lg:space-y-16">
        <div className="flex justify-center">
          <p className="relative rounded-full bg-gray-900 px-6 py-1.5 text-sm/6 text-white">
            <span className="hidden md:inline">{t("title")}</span>
          </p>
        </div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          className="w-full"
          breakpoints={LogoItemBreakpoints}
          cssMode={false}
        >
          {LogoItems.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <Image
                className="h-12 w-auto object-contain"
                src={item.src}
                alt={item.name}
                height={48}
                width={158}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
