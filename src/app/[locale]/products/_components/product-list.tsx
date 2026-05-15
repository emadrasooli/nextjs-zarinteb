import { client } from "@/sanity/client";
import { ProductItem } from "@/types";
import ProductCard from "./product-card";
import { Filter } from "./Filter";
import { SanityDocument } from "next-sanity";
import { SearchBar } from "./search-bar";

const CATEGORY_QUERY = `*[_type == "category"]{
  _id,
  name
}`;

export default async function ProductList(props: {
  params: Promise<{ locale?: string }>;
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  // ✅ Await params & searchParams
  const params = await props.params;
  const searchParams = await props.searchParams;

  const locale = params?.locale ?? "en";
  const selectedCategoryId = searchParams?.category ?? null;
  const searchTerm = searchParams?.q ?? null;

  const PRODUCT_QUERY = `*[
    _type == "product"
    && (!defined($categoryId) || category._ref == $categoryId)
    && (!defined($searchTerm) || coalesce(name.${locale}, name.en) match $searchTerm + "*")
  ]{
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

  const products = await client.fetch<ProductItem[]>(PRODUCT_QUERY, {
    categoryId: selectedCategoryId || null,
    searchTerm: searchTerm ? searchTerm : null,
  });

  const categories = await client.fetch<SanityDocument[]>(CATEGORY_QUERY);

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-3 my-8">
      <Filter
        categories={categories}
        selectedCategoryId={selectedCategoryId ?? undefined}
        locale={locale}
        searchBar={<SearchBar />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((item: ProductItem) => (
          <ProductCard product={item} key={item._id} locale={locale} />
        ))}
      </div>
    </section>
  );
}
