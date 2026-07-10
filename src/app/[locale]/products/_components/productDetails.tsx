"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { Check } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import { ProductItem } from "@/types";
import { useTranslations } from "next-intl";

type Props = {
  product: ProductItem;
  locale: string | undefined;
};

function localized<T extends Record<string, string>>(
  field: T,
  locale: string | undefined,
) {
  return field[locale as keyof T] || field.en || "";
}

export default function ProductDetails({ product, locale }: Props) {
  const t = useTranslations("SingleProductPage");
  const productName = localized(product.name, locale);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-16">
        {/* Image gallery */}
        <TabGroup className="flex flex-col">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-white to-slate-100 shadow-xl ring-1 ring-slate-900/5">
            {/* Soft bottom vignette for depth */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-200/40 to-transparent" />

            <TabPanels>
              {product.images.map((image) => (
                <TabPanel key={image._key}>
                  <div className="relative aspect-square p-10 sm:p-14">
                    {/* Grounding shadow beneath the product */}
                    <div className="absolute inset-x-1/4 bottom-10 h-6 rounded-full bg-slate-900/10 blur-xl" />
                    <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl bg-white">
                      <Image
                        alt={productName}
                        src={urlFor(image.asset._ref)
                          .width(900)
                          .height(900)
                          .format("webp")
                          .quality(90)
                          .url()}
                        height={900}
                        width={900}
                        className="h-full w-full object-contain drop-shadow-2xl"
                        unoptimized
                        priority
                      />
                    </div>
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </div>

          {product.images.length > 1 && (
            <TabList className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((image) => (
                <Tab
                  key={image._key}
                  className="group/thumb relative aspect-square overflow-hidden rounded-xl bg-white outline-none ring-1 ring-slate-900/5 transition duration-200 hover:ring-slate-300 focus-visible:ring-2 focus-visible:ring-primary data-selected:bg-primary/5 data-selected:ring-2 data-selected:ring-primary"
                >
                  <Image
                    alt=""
                    src={urlFor(image.asset._ref)
                      .width(200)
                      .height(200)
                      .format("webp")
                      .quality(75)
                      .url()}
                    height={200}
                    width={200}
                    className="h-full w-full object-contain p-2.5 opacity-60 transition duration-200 group-hover/thumb:opacity-100 group-data-selected/thumb:opacity-100"
                    unoptimized
                  />
                </Tab>
              ))}
            </TabList>
          )}
        </TabGroup>

        {/* Product info */}
        <div className="mt-12 lg:mt-2">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {productName}
            </h1>
            <span className="mt-1.5 shrink-0 rounded-lg bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium tracking-wider text-slate-500 ring-1 ring-slate-900/5">
              {t("code")} {product.code}
            </span>
          </div>

          <div className="mt-8 space-y-8 divide-y divide-slate-100">
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary">
                {t("Description")}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {localized(product.description, locale)}
              </p>
            </section>

            <section className="pt-8">
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary">
                {t("Features")}
              </h3>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature._key} className="flex items-start gap-3">
                    <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                    </span>
                    <span className="text-base leading-6 text-slate-600">
                      {localized(feature, locale)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {product.sizes?.length ? (
              <section className="pt-8">
                <h3 className="text-lg font-bold uppercase tracking-widest text-primary">
                  {t("Sizes")}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-primary/5 hover:text-primary hover:ring-primary/30"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
