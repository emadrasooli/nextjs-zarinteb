"use client";

import * as React from "react";
import { LanguagesIcon } from "lucide-react";
import { Vazirmatn, Montserrat } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const languageMap: Record<string, string> = {
  en: "ENG",
  fa: "دری",
  ps: "پشتو",
};

export function LanguageToggle() {
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const getCurrentLocale = () => {
    const locale = pathname.split("/")[1];
    return Object.keys(languageMap).includes(locale) ? locale : "en";
  };
  
  const [language, setLanguage] = React.useState(getCurrentLocale());

  React.useEffect(() => {
    setMounted(true);
    setLanguage(getCurrentLocale());
  }, [pathname]);

  const handleLanguageSelect = (locale: string) => {
    setLanguage(locale);
    changeLocale(locale);
  };

  const changeLocale = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|fa|ps)/, "")}`;
    router.push(newPath);
  };

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <LanguagesIcon />
          {languageMap[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageMap).map(([locale, label]) => (
          locale !== language && (
            <DropdownMenuItem
              key={locale}
              className={locale === "en" ? montserrat.className : vazirmatn.className}
              onClick={() => handleLanguageSelect(locale)}
            >
              {label}
            </DropdownMenuItem>
          )
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
