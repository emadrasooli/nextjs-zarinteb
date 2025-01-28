import Image from "next/image";

export default function ProductsLink() {
  return (
    <div className="max-w-6xl mx-auto">
     <div className="grid grid-cols-4 gap-4 bg-yellow-100/50 border border-yellow-300 rounded-2xl shadow p-4">
        <div className="flex flex-col justify-center items-center space-y-3 border-r-2 border-dashed">
            <Image height={200} width={200} src={'/products/product.png'} alt="product" />
            <p>Manufactural Products</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-3 border-r-2 border-dashed">
            <Image height={200} width={200} src={'/products/product.png'} alt="product" />
            <p>Labaratory</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-3 border-r-2 border-dashed">
            <Image height={200} width={200} src={'/products/product.png'} alt="product" />
            <p>Orthopitice Products</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-3">
            <Image height={200} width={200} src={'/products/product.png'} alt="product" />
            <p>Machenari</p>
        </div>

     </div>

     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
    </div>
  );
}