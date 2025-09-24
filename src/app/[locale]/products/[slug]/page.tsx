import { client } from "@/sanity/client";
import { ProductItem } from "@/types";
import ProductDetails from "../_components/productDetails";
import SimilarProducts from "./_components/similar-products";

type Props = {
  params: Promise<{ slug?: string; locale?: string }>;
};

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;

  const PRODUCT_QUERY = `
    *[_type == "product" && slug.current == $slug][0]`;

  const product = await client.fetch<ProductItem>(PRODUCT_QUERY, { slug });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <ProductDetails product={product} locale={locale} />
      </div>
      <div className="my-16">
        <SimilarProducts
          productsCategory={product.category._ref}
          currentProduct={product._id}
          locale={locale}
        />
      </div>
    </div>
  );
}
