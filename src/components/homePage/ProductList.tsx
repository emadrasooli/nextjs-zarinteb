import ProductGrid from "@/app/[locale]/products/_components/ProductGrid";
import { getProductsList } from "../actions/getProductsList";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MotionFadeIn } from "../motion/MotionFadeIn";

export default async function ProductList() {
  const locale = await getLocale();
  const t = await getTranslations("ProductsListSection");
  const products = await getProductsList();

  return (
    <section className="max-w-7xl mx-auto px-4 py-32">
      <MotionFadeIn direction="up">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
          <h2 className="font-semibold text-xl md:text-2xl">{t("title")}</h2>
          <Link
            href={"/products"}
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 text-sm transition-colors"
          >
            {t("link")}
          </Link>
        </div>
      </MotionFadeIn>
      <ProductGrid products={products} locale={locale} />
    </section>
  );
}

