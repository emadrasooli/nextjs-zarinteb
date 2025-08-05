/* eslint-disable @typescript-eslint/no-explicit-any */
import IntroProducts from "./_components/intro-product";
import ProductList from "./_components/product-list";

interface PageProps {
  params: any;
}

export default function productPage({ params }: PageProps) {
  return (
    <div className="min-h-screen">
      <IntroProducts />
      <ProductList params={params} />
    </div>
  );
}
