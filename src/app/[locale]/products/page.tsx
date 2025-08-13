import IntroProducts from "./_components/intro-product";
import ProductList from "./_components/product-list";

interface PageProps {
  params: { locale?: string };
  searchParams: { category?: string };
}

export default function productPage({ params, searchParams }: PageProps) {
  return (
    <div className="min-h-screen">
      <IntroProducts />
      <ProductList params={params} searchParams={searchParams} />
    </div>
  );
}
