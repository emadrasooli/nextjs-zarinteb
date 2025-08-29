import { Link } from "@/i18n/navigation";
import { Headset } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MainContent() {
  const t = useTranslations("servicePage.serviceCTA");
  return (
    <div className="overflow-hidden bg-white py-12 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start lg:px-8">
          {/* hello */}
          <div className="px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                {t("subTitle")}
              </h2>
              <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {t("title")}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">{t("description")}</p>
              <Link
                href={"/contact"}
                className="mt-12 bg-yellow-100 p-4 rounded-lg flex items-center gap-3 cursor-pointer w-full"
              >
                <Headset className="text-primary size-14" />
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-yellow-800">
                    {t("serviceCall")}
                  </p>
                  <span className="text-yellow-600 text-sm sm:text-base">
                    {t("descriptionCall")}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          {/* image section  */}
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
        </div>
      </div>
    </div>
  );
}
