import { Link } from "@/i18n/navigation";
import { urlFor } from "@/lib/sanity";
import { ProductItem } from "@/types";
import Image from "next/image";

export default function ProductCard({
  product,
  locale,
}: {
  product: ProductItem;
  locale: string | undefined;
}) {
  const imageUrl = urlFor(product.images?.[0]?.asset?._ref)
    .width(500)
    .height(500)
    .format("webp")
    .quality(75)
    .url();

  return (
    <Link
      href={`/products/${product.slug.current}`}
      key={product._id}
      className="block"
    >
      <div
        key={product._id}
        className="relative p-3 lg:p-4 rounded-3xl bg-zinc-100 border group"
      >
        <div className="overflow-hidden rounded-2xl">
          {imageUrl ? (
            <Image
              alt={product.name.en}
              src={imageUrl}
              className="aspect-square w-full rounded-lg object-cover lg:aspect-auto h-48 lg:h-64 group-hover:scale-105 transition-all duration-300 ease-in-out"
              height={500}
              width={500}
              unoptimized
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
              {product.description[
                locale as keyof typeof product.description
              ] ||
                product.description.en ||
                ""}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
