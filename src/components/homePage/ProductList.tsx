import ProductCard from "@/app/[locale]/products/_components/product-card";
import { ProductItem } from "@/types";
import { getProductsList } from "../actions/getProductsList";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ProductList() {
  const locale = await getLocale();
  const t = await getTranslations("ProductsListSection");
  const products = await getProductsList();

  return (
    <section className="max-w-7xl mx-auto px-4 py-32">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
        <h2 className="font-semibold text-xl md:text-2xl">{t("title")}</h2>
        <Link
          href={"/products"}
          className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 text-sm transition-colors"
        >
          {t("link")}
        </Link>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((item: ProductItem) => (
            <ProductCard product={item} key={item._id} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-zinc-500">
          <p>No products available at the moment.</p>
        </div>
      )}
    </section>
  );
}

