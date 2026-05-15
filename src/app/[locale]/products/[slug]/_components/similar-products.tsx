import { client } from "@/sanity/client";
import { ProductItem } from "@/types";
import ProductCard from "../../_components/product-card";
import { getTranslations } from "next-intl/server";

type Props = {
  productsCategory: string;
  currentProduct: string;
  locale: string | undefined;
};

export default async function SimilarProducts({
  productsCategory,
  currentProduct,
  locale,
}: Props) {
  const t = await getTranslations("ProductPage");

  const QUERY = `
   *[_type == "product" && category._ref == $category && _id != $currentProduct] {
            _id,
            _type,
            _createdAt,
            _updatedAt,
            slug,
            code,
            name,
            description,
            price,
            images,
            category
  }`;

  const params = { category: productsCategory, currentProduct };
  const products = await client.fetch<ProductItem[]>(QUERY, params);

  const filteredProducts = products.sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{t("similarProducts")}</h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item: ProductItem) => (
            <ProductCard product={item} key={item._id} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No similar products found.</p>
      )}
    </div>
  );
}
