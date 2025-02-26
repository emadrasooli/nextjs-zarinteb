import { ProductListType } from "@/types";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";


export default function ProductCard({ product }: { product: ProductListType }) {
    const locale = useLocale() as 'en' | 'fa' | 'ps';

  return (
    <div key={product.id} className="relative bg-zinc-100 shadow px-6 py-8 rounded-xl">
            <img
                alt={product.locals[locale].name} 
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-zinc-100 object-cover lg:aspect-auto lg:h-64"
            />
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-gray-700 font-medium">
                        {product.locals[locale].name}
                    </h3>
                    <p className="text-sm text-zinc-500">
                        {product.locals[locale].description}
                    </p>
                </div>
                <Link href={product.href} className="flex items-center font-medium text-sm gap-2 bg-primary hover:bg-yellow-400/80 justify-center py-1.5 rounded-full">Details</Link>
            </div>
    </div>
  )
}