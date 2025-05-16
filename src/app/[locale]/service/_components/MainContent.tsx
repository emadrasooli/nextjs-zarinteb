import { Headset } from "lucide-react";
import Image from "next/image";

export default function MainContent() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="relative isolate sm:mx-auto sm:max-w-7xl lg:max-w-none">
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <Image
                alt="Product screenshot"
                src="/contactPage/banner-5.jpg"
                width={1000}
                height={1000}
                className="object-contain lg:rounded-3xl"
              />
            </div>
          </div>
          {/* hello */}
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                OUR SERVICES
              </h2>
              <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Your Health, Our Priority
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <div className="mt-12 bg-yellow-100 p-4 rounded-lg flex items-center gap-3 cursor-pointer">
                <Headset className="text-primary size-14" />
                <div>
                  <p className="font-semibold text-yellow-800">
                    Emergency Call
                  </p>
                  <span className="text-yellow-600 text-sm sm:text-base">
                    Get in touch with use for emergency services.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
