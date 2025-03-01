import { Link } from "@/i18n/routing";
import { ProductListType } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";


export default function ProductCard({ product }: { product: ProductListType }) {
    const t = useTranslations('ProductsListSection');
    const locale = useLocale() as 'en' | 'fa' | 'ps';
    const isLTR = locale === 'en';

  return (
    <div key={product.id} className="relative p-4 lg:p-6 rounded-xl bg-zinc-100 border">
            <div className="">
                <img
                    alt={product.locals[locale].name} 
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg object-cover lg:aspect-auto h-48 lg:h-64"
                />
            </div>
            <div className="mt-4 flex flex-col space-y-3">
                <div>
                    <h3 className="text-gray-700 font-medium">
                        {product.locals[locale].name}
                    </h3>
                    <p className="text-sm text-zinc-500">
                        {product.locals[locale].description}
                    </p>
                </div>
                <Link href={'#'} className="flex items-center justify-center text-xs font-medium gap-1 hover:gap-2 transition-all duration-200 text-yellow-600 border border-primary bg-yellow-200/50 rounded-lg py-1.5 hover:">{t('details')}{isLTR ? <ArrowRight className="size-4"/> : <ArrowLeft className="size-4"/> }</Link>
            </div>
    </div>
  )
}