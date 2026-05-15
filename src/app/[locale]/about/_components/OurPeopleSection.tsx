import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurPeopleSection() {
  const t = useTranslations("OurPeople-AboutPage");
  return (
    <div className="my-32 overflow-hidden sm:my-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">{t("description")}</p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto ltr:lg:ml-auto rtl:lg:mr-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt=""
                src="/aboutPage/plessure-machince.jpeg"
                width={1152}
                height={822}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 ltr:lg:ml-auto rtl:lg:mr-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt=""
                  src="/aboutPage/plessure-machince.jpeg"
                  width={768}
                  height={604}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="/aboutPage/plessure-machince.jpeg"
                  width={1152}
                  height={842}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="/aboutPage/plessure-machince.jpeg"
                  width={768}
                  height={604}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
