import { cn } from "@/lib/utils";
import { Search } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

export default function SearchBar() {
    const t = useTranslations("Navbar");
    const locale = useLocale()
    return (
        <div className="bg-yellow-50 border border-yellow-200 flex px-6 py-2 rounded-full items-center relative">
            <input type="text" placeholder={`${t('searchBar')}...`} className="bg-transparent focus:outline-none w-40 placeholder:text-yellow-500"/>
            <button className={cn(locale === 'en' ? "right-4" : "left-4" , "text-yellow-500 absolute")}><Search /></button>  
        </div>
    )
}