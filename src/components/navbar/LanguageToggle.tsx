"use client"

import * as React from "react"
import { LanguagesIcon } from "lucide-react"
import { Vazirmatn } from "next/font/google"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
})

export function LanguageToggle() {
  const [language, setLanguage] = React.useState("ENG")

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <LanguagesIcon />
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {language !== "ENG" && (
          <DropdownMenuItem onClick={() => handleLanguageSelect("ENG")}>
            ENG
          </DropdownMenuItem>
        )}
        {language !== "دری" && (
          <DropdownMenuItem className={`${vazirmatn.className}`} onClick={() => handleLanguageSelect("دری")}>
            دری
          </DropdownMenuItem>
        )}
        {language !== "پشتو" && (
          <DropdownMenuItem className={`${vazirmatn.className}`} onClick={() => handleLanguageSelect("پشتو")}>
            پشتو
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
