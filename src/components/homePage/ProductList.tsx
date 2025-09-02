import ProductCard from "@/app/[locale]/products/_components/product-card";
import { ProductItem } from "@/types";
import { productsList } from "../actions/getProductsList";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProductList() {
  const locale = useLocale();
  const t = useTranslations("ProductsListSection");

  return (
    <section className="max-w-7xl mx-auto px-4 py-32">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-semibold text-2xl">{t("title")}</h2>
        <Link
          href={"/products"}
          className="text-yellow-500 underline underline-offset-2"
        >
          {t("link")}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productsList.map((item: ProductItem) => (
          <ProductCard product={item} key={item._id} locale={locale} />
        ))}
      </div>
    </section>
  );
}
