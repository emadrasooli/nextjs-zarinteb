"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { ProductItem } from "@/types";
import { useTranslations } from "next-intl";

type Props = {
  product: ProductItem;
  locale: string | undefined;
};

export default function ProductDetails({ product, locale }: Props) {
  const t = useTranslations("SingleProductPage");
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <TabGroup className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList className="grid grid-cols-4 gap-6">
              {product.images.map((image) => (
                <Tab
                  key={image._key}
                  className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-indigo-500/50 focus:ring-offset-4 focus:outline-hidden"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      alt=""
                      src={urlFor(image.asset._ref)}
                      height={500}
                      width={500}
                      className="size-full object-cover"
                      unoptimized
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-indigo-500"
                  />
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels>
            {product.images.map((image) => (
              <TabPanel key={image._key}>
                <Image
                  alt={image._type}
                  src={urlFor(image.asset._ref)}
                  height={500}
                  width={500}
                  className="aspect-square w-full object-cover sm:rounded-lg"
                />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>

        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name[locale as keyof typeof product.name] ||
                product.name.en ||
                ""}
            </h1>
            <span className="items-center rounded-full bg-yellow-300/30 px-3 py-2 font-medium text-yellow-600 inset-ring inset-ring-yellow-600/50">
              {t("code")}: {product.code}
            </span>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-yellow-500">
              {t("Description")}
            </h3>
            <p className="mt-1 text-gray-600">
              {product.description[
                locale as keyof typeof product.description
              ] ||
                product.description.en ||
                ""}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-yellow-500">{t("Features")}</h3>
            <ul className="list-disc list-inside space-y-1 mt-1">
              {product.features.map((feature) => (
                <li key={feature._key} className="text-gray-600">
                  {feature[locale as keyof typeof feature] || feature.en || ""}
                </li>
              ))}
            </ul>
          </div>

          {product.sizes?.length ? (
            <div className="mt-6">
              <h3 className="font-semibold text-yellow-500">{t("Sizes")}</h3>
              <div className="flex flex-wrap gap-4 mt-1">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="inline-flex justify-center items-center rounded-full bg-yellow-100/50 px-6 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-300"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
