import { Link } from "@/i18n/routing"
import ProductCard from "../ProductCard"

import { products } from "@/data/productList"
  
  export default function ProductList() {
    return (
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
            <Link href={'#'} className="text-primary font-medium hover:underline underline-offset-2">Explore products</Link>
          </div>
  
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  