import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactHero() {
  const t = useTranslations("ContactPage");
  return (
    <div className="relative h-[250px] md:h-[350px] lg:h-[450px] max-w-7xl mx-auto my-3 rounded-3xl">
      <div className="absolute inset-0 z-10 bg-black/20 rounded-3xl" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black rounded-3xl" />
      <Image
        src="/contactPage/banner-1.jpg"
        alt="contact banner"
        fill
        className="object-cover object-bottom rounded-3xl"
      />
      <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center text-center">
        <h1 className=" text-4xl font-bold text-primary sm:text-5xl lg:text-8xl">
          {t("heading")}
        </h1>
      </div>
    </div>
  );
}
