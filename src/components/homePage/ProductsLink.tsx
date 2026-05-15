import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";

export default function ProductsLink() {
  const t = useTranslations("productLink");
  const products = useMemo(
    () => [
      {
        src: "/products/manuficturing.svg",
        alt: t("manufactureProducts.title"),
        text: t("manufactureProducts.title"),
        href: `/products?category=e0163037-3d1a-4309-ba13-d4168f3d1922`,
      },
      {
        src: "/products/machinery.svg",
        alt: t("medicalMachinery.title"),
        text: t("medicalMachinery.title"),
        href: `/products?category=3a92ffc5-0310-4bd7-870e-2e5ece1f0293`,
      },
      {
        src: "/products/orthopedic.svg",
        alt: t("orthopedicProducts.title"),
        text: t("orthopedicProducts.title"),
        href: `/products?category=ea62e770-4a8f-4483-9d88-48329b9bf938`,
      },
      {
        src: "/products/labaretory.svg",
        alt: t("labaretoryProducts.title"),
        text: t("labaretoryProducts.title"),
        href: `/products?category=1bc16552-8afd-49f9-b643-6656e8f2733b`,
      },
    ],
    [t]
  );

  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:gap-16 2xl:gap-24">
        {products.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col items-center lg:w-full rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          >
            <div className="w-24 h-24 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36 relative">
              <Image src={item.src} alt={item.alt} fill />
            </div>
            <p className="font-medium text-xs lg:text-sm mt-3 text-zinc-500 text-center md:text-nowrap">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
