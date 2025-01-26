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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <LanguagesIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          ENG
        </DropdownMenuItem>
        <DropdownMenuItem className={`${vazirmatn.className}`}>
          دری
        </DropdownMenuItem>
        <DropdownMenuItem className={`${vazirmatn.className}`}>
          پشتو
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

