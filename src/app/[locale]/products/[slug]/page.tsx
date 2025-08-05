import { client } from "@/sanity/client";
import { ProductItem } from "@/types";

type Props = { params: { slug?: string; locale?: string } };

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;

  const PRODUCT_QUERY = `
    *[_type == "product" && slug.current == $slug][0]`;

  const product = await client.fetch<ProductItem>(PRODUCT_QUERY, { slug });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 min-h-screen">
      <h1 className="text-4xl font-semibold mb-4">
        {locale
          ? (product.name[locale as keyof typeof product.name] ??
            product.name.en)
          : product.name.en}
      </h1>
      {product.description && (
        <p className="text-lg text-gray-700 mb-6">
          {locale
            ? (product.description[
                locale as keyof typeof product.description
              ] ?? product.description.en)
            : product.description.en}
        </p>
      )}
    </div>
  );
}
