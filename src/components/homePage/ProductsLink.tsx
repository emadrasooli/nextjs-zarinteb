import Image from "next/image";

export default function ProductsLink() {
  const products = [
    { src: "/products/manuficturing.svg", alt: "Hospital bed", text: "Manufacturing Products" },
    { src: "/products/machinery.svg", alt: "Medical Machinery", text: "Medical Machinery" },
    { src: "/products/orthopedic.svg", alt: "Orthopedic Products", text: "Orthopedic Products" },
    { src: "/products/labaretory.svg", alt: "Labaretory Products", text: "Labaretory Products" },
  ]

  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-40 lg:w-full border border-primary rounded-xl transition-transform py-6 px-3 duration-300 transform hover:scale-110 cursor-pointer"
          >
            <div className="w-32 h-32 relative">
              <Image 
                src={item.src} 
                alt={item.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="font-semibold text-sm mt-3 text-gray-500 text-center">{item.text}</p>
          </div>
        ))}
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
