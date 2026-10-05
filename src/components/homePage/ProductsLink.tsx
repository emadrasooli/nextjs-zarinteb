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
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="group flex flex-col items-center p-4 md:p-6 rounded-2xl bg-white/70 backdrop-blur-xs border border-zinc-200/80 shadow-subtle hover:shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 relative p-2 transition-transform duration-300 group-hover:scale-110">
              <Image src={item.src} alt={item.alt} fill className="object-contain" />
            </div>
            <p className="font-semibold text-xs md:text-sm mt-3 text-zinc-700 text-center group-hover:text-primary transition-colors">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
