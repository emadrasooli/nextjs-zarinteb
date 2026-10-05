"use client";

import { ProductItem } from "@/types";
import ProductCard from "./product-card";
import { MotionStagger, MotionStaggerItem } from "@/components/motion/MotionStagger";
import { PackageOpen } from "lucide-react";

export default function ProductGrid({
  products,
  locale,
}: {
  products: ProductItem[];
  locale: string | undefined;
}) {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 my-8">
        <PackageOpen className="w-16 h-16 text-zinc-400 mb-4 stroke-[1.5]" />
        <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-200 mb-2">
          {locale === "fa" || locale === "ps"
            ? "هیچ محصولی یافت نشد"
            : "No products found"}
        </h3>
        <p className="text-zinc-500 text-sm max-w-md">
          {locale === "fa" || locale === "ps"
            ? "لطفاً دسته‌بندی دیگری انتخاب کنید یا عبارت جستجو را تغییر دهید."
            : "Try selecting a different category or adjusting your search keyword."}
        </p>
      </div>
    );
  }

  return (
    <MotionStagger
      staggerDelay={0.06}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {products.map((item: ProductItem) => (
        <MotionStaggerItem key={item._id}>
          <ProductCard product={item} locale={locale} />
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}
