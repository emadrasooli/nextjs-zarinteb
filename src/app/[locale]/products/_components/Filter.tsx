"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { SanityDocument } from "next-sanity";

export function Filter({
  categories,
  selectedCategoryId,
  locale,
}: {
  categories: SanityDocument[];
  selectedCategoryId?: string;
  locale: string;
}) {
  const t = useTranslations("ProductPage");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", value);
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3">
      <div>
        <h1 className="text-lg md:text-2xl font-semibold">{t("products")}</h1>
      </div>
      <div className="flex gap-3">
        <Select
          onValueChange={handleCategoryChange}
          defaultValue={selectedCategoryId ?? ""}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("category")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("all")}</SelectItem>
            {categories.map((category: SanityDocument) => (
              <SelectItem key={category._id} value={category._id}>
                {category.name[locale] || category.name.en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
