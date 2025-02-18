import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";

export default function ProductsLink() {
  const t = useTranslations("productLink");
  const products = useMemo(() => [
    { src: "/products/manuficturing.svg", alt: t('manufactureProducts.title'), text: t('manufactureProducts.title') },
    { src: "/products/machinery.svg", alt: t('medicalMachinery.title'), text: t('medicalMachinery.title') },
    { src: "/products/orthopedic.svg", alt: t('orthopedicProducts.title'), text: t('orthopedicProducts.title') },
    { src: "/products/labaretory.svg", alt: t('labaretoryProducts.title'), text: t('labaretoryProducts.title') },
  ], [t]);

  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:w-full border border-primary rounded-xl transition-transform py-6 px-3 duration-300 transform hover:scale-110 cursor-pointer"
          >
            <div className="w-24 h-24 lg:w-32 lg-h-32 relative">
              <Image 
                src={item.src} 
                alt={item.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="font-semibold text-xs lg:text-sm mt-3 text-gray-500 text-center">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="pb-64"></div>
    </div>
  );
}
