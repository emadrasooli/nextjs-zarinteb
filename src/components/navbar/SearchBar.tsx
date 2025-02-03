import { Search } from "lucide-react"
import { useTranslations } from "next-intl"

export default function SearchBar() {
    const t = useTranslations("Navbar");
    return (
        <div className="bg-yellow-50 border border-yellow-200 flex px-6 py-2 rounded-full items-center">
            <input type="text" placeholder={`${t('searchBar')}...`} className="bg-transparent focus:outline-none w-40 placeholder:text-yellow-500"/>
            <button className="text-yellow-500"><Search /></button>  
        </div>
    )
}