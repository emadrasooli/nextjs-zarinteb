"use client";

import { LanguagesIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageMap: Record<string, string> = {
  en: "English",
  fa: "دری",
  ps: "پشتو",
};

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageSelect = (newLocale: string) => {
    const currentSearch = typeof window !== "undefined" ? window.location.search : "";
    const href = currentSearch ? `${pathname}${currentSearch}` : pathname;
    router.replace(href, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-xl gap-2 font-medium">
          <LanguagesIcon className="size-4" />
          {languageMap[locale] || "ENG"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl min-w-[120px]">
        {Object.entries(languageMap).map(([loc, label]) => (
          <DropdownMenuItem
            key={loc}
            className={`cursor-pointer ${loc === locale ? "font-bold text-primary bg-primary/10" : ""}`}
            onClick={() => handleLanguageSelect(loc)}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
