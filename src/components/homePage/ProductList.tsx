import { Link } from "@/i18n/routing"
import ProductCard from "../ProductCard"

import { products } from "@/data/productList"
import { useTranslations } from "next-intl"
  
  export default function ProductList() {
    const t = useTranslations('ProductsListSection');

    return (
        <div className="mx-auto px-4 sm:px-6 py-24 lg:py-32 2xl:py-40 max-w-7xl lg:px-8">
          <div className="flex flex-col md:items-center md:justify-between space-y-2 md:flex-row md:space-y-0">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">{t('title')}</h2>
            <Link href={'#'} className="text-primary md:text-base text-xs font-medium hover:underline underline-offset-2">{t('link')}</Link>
          </div>
  
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
    )
  }
  