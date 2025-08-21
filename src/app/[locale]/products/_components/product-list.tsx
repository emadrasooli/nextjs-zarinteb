import { client } from "@/sanity/client";
import { ProductItem } from "@/types";
import ProductCard from "./product-card";
import { Filter } from "./Filter";
import { SanityDocument } from "next-sanity";

const PRODUCT_QUERY = `*[_type == "product" && (!defined($categoryId) || category._ref == $categoryId)]{
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
const CATEGORY_QUERY = `*[_type == "category"]`;

export default async function ProductList(context: {
  params: { locale?: string };
  searchParams: { category?: string };
}) {
  const { params, searchParams } = context;
  const { locale = "en" } = await params;
  const { category: selectedCategoryId } = await searchParams;

  const products = await client.fetch<ProductItem[]>(PRODUCT_QUERY, {
    categoryId: selectedCategoryId || null,
  });
  const categories = await client.fetch<SanityDocument[]>(CATEGORY_QUERY);

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-3 my-8">
      <Filter
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        locale={locale}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((item: ProductItem) => (
          <ProductCard product={item} key={item._id} locale={locale} />
        ))}
      </div>
    </section>
  );
}
