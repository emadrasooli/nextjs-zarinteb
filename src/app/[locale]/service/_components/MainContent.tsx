import { Headset } from "lucide-react";
import Image from "next/image";

export default function MainContent() {
  return (
    <section className="flex flex-col md:flex-row items-center py-12 lg:py-24">
      <div className="md:w-1/2">
        <Image
          src="/contactPage/banner-4.jpg"
          alt="Healthcare professionals"
          className="object-contain rounded-3xl"
          layout="responsive"
          width={1000}
          height={500}
        />
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-10 px-4 md:px-0">
        <h2 className="text-xl font-bold text-primary">OUR SERVICES</h2>
        <h3 className="text-3xl font-semibold mt-2">
          Your Health, Our Priority
        </h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-4 bg-yellow-100 p-4 rounded-lg flex items-center">
          <Headset size={64} className="text-primary" />
          <span className="ml-2 text-yellow-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </span>
        </div>
      </div>
    </section>
  );
}
