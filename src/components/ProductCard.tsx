import { ProductListType } from "@/types";
import { useLocale, useTranslations } from "next-intl";


export default function ProductCard({ product }: { product: ProductListType }) {
    const t = useTranslations('ProductsListSection');
    const locale = useLocale() as 'en' | 'fa' | 'ps';

  return (
    <div key={product.id} className="relative group cursor-pointer p-4 lg:p-6 rounded-xl bg-zinc-100">
            <div className="overflow-hidden rounded-xl">
                <img
                    alt={product.locals[locale].name} 
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg object-cover lg:aspect-auto h-48 lg:h-64 group-hover:scale-105 transition-all duration-300"
                />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <h3 className="text-gray-700 font-medium">
                        {product.locals[locale].name}
                    </h3>
                    <p className="text-sm text-zinc-500">
                        {product.locals[locale].description}
                    </p>
                </div>
            </div>
    </div>
  )
}