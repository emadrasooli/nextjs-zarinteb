import Image from "next/image";
import Link from "next/link";

export default function ProductsLink() {
  return (
    <div className="max-w-5xl mx-auto">
     <div className="grid grid-cols-2 gap-4">
        <div className="h-full">
          <div className="bg-white border-2 p-8 rounded-xl">
            <div className="flex justify-center items-center">
              <Image src={"/products/Sonoghraphy.png"} alt="product" width={200} height={200}/>
            </div>
            <Link href={'/'} className="font-semibold text-primary text-3xl hover:underline underline-offset-2">Medical Machinery</Link>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 p-4 rounded-xl">
                  <div className="flex justify-center items-center">
                    <Image src={"/products/orthopedic.png"} alt="product" width={100} height={100} />
                  </div>
                  <Link href={'/'} className="font-semibold text-primary text-lg hover:underline underline-offset-2">Orthopedic Products</Link>
              </div>
              <div className="border-2 p-4 rounded-xl">
                <div className="flex justify-center items-center">
                  <Image src={"/products/labaretory.png"} alt="product" width={150} height={150} />
                </div>
                <Link href={'/'} className="font-semibold text-primary text-lg hover:underline underline-offset-2">Laboratory Products</Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-6 rounded-lg">
                  <div className="flex justify-end items-center">
                    <Image src={"/products/Hospital-bed.png"} alt="product" width={220} height={220} />
                  </div>
                  <Link href={'/'} className="font-semibold text-primary text-2xl hover:underline underline-offset-2">Manufacturing Products</Link>
              </div>
            </div>
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