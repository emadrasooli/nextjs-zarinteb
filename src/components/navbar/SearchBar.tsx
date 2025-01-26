import { Search } from "lucide-react"

export default function SearchBar() {
    return (
        <div className="bg-yellow-100 dark:bg-slate-300 flex px-6 py-2 rounded-full items-center">
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-40 placeholder:text-yellow-500 dark:placeholder:text-slate-500 dark:text-slate-500"/>
            <button className="text-yellow-500 dark:text-slate-500"><Search /></button>  
        </div>
    )
}