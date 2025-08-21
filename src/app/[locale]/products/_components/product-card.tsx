import { Link } from "@/i18n/routing";
import { urlFor } from "@/lib/sanity";
import { ProductItem } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProductCard({
  product,
  locale,
}: {
  product: ProductItem;
  locale: string | undefined;
}) {
  const t = useTranslations("ProductsListSection");
  const isLTR = locale === "en";

  const imageUrl = urlFor(product.images?.[0]?.asset?._ref);

  return (
    <div
      key={product._id}
      className="relative p-3 lg:p-4 rounded-3xl bg-zinc-100 border"
    >
      <div className="">
        {imageUrl ? (
          <Image
            alt={product.name.en}
            src={imageUrl}
            className="aspect-square w-full rounded-lg object-cover lg:aspect-auto h-48 lg:h-64"
            height={500}
            width={500}
          />
        ) : (
          <div className="placeholder">No Image Available</div>
        )}
      </div>
      <div className="mt-4 flex flex-col space-y-3">
        <div>
          <h3 className="text-gray-700 font-medium">
            {product.name[locale as keyof typeof product.name] ||
              product.name.en ||
              ""}
          </h3>
          <p className="text-sm text-zinc-500 line-clamp-1">
            {product.description[locale as keyof typeof product.description] ||
              product.description.en ||
              ""}
          </p>
        </div>
        <Link
          href={`/products/${product.slug.current}`}
          className="flex items-center justify-center text-xs font-medium gap-1 hover:gap-2 transition-all duration-200 text-yellow-600 border border-primary bg-yellow-200/50 rounded-lg py-1.5 hover:"
        >
          {t("details")}
          {isLTR ? (
            <ArrowRight className="size-4" />
          ) : (
            <ArrowLeft className="size-4" />
          )}
        </Link>
      </div>
    </div>
  );
}
