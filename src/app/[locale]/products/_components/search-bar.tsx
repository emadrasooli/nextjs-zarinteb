"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const t = useTranslations("ProductPage");

  const initial = searchParams.get("q") ?? "";
  const [value, setValue] = useState(initial);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams.toString());
      const trimmed = value.trim();
      if (!trimmed) newParams.delete("q");
      else newParams.set("q", trimmed);

      const newQuery = newParams.toString();
      router.push(`${pathname}${newQuery ? `?${newQuery}` : ""}`);
    }, 350);

    return () => clearTimeout(handler);
  }, [value, router, searchParams, pathname]);

  return (
    <div className="w-[260px]">
      <Input
        id="product-search"
        type="search"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder={t("searchBar")}
        className="w-full border rounded-md py-1 outline-none px-3"
      />
    </div>
  );
}
