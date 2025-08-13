import { client } from "@/sanity/client";
import { ProductItem } from "@/types";
import ProductDetails from "../_components/productDetails";

type Props = { params: { slug?: string; locale?: string } };

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;

  const PRODUCT_QUERY = `
    *[_type == "product" && slug.current == $slug][0]`;

  const product = await client.fetch<ProductItem>(PRODUCT_QUERY, { slug });

  return <ProductDetails product={product} locale={locale} />;
}
