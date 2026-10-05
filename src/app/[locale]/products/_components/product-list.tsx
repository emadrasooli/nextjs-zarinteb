import { client } from "@/sanity/client";
import type { CategoryItem, ProductItem } from "@/types";
import { routing } from "@/i18n/routing";
import ProductGrid from "./ProductGrid";
import { Filter } from "./Filter";
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

  const requestedLocale = params?.locale;
  const locale = routing.locales.includes(
    requestedLocale as (typeof routing.locales)[number],
  )
    ? (requestedLocale as (typeof routing.locales)[number])
    : routing.defaultLocale;
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

  const categories = await client.fetch<CategoryItem[]>(CATEGORY_QUERY);

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-3 my-8">
      <Filter
        categories={categories}
        selectedCategoryId={selectedCategoryId ?? undefined}
        locale={locale}
        searchBar={<SearchBar key={searchTerm ?? ""} />}
      />

      <ProductGrid products={products} locale={locale} />
    </section>
  );
}
