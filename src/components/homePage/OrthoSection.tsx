import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function OrthoSection() {
  const t = useTranslations("OrthoSection");
  const features = t.raw("Features") as string[];

  return (
    <section className="w-full px-4 py-10 md:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white max-w-7xl mx-auto shadow-sm">
        {/* Background Blur Effects */}
        <div className="absolute top-0 end-0 h-72 w-72 bg-emerald-300/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 start-0 h-60 w-60 bg-teal-300/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-6 py-10 md:px-10 md:py-14">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-white">
                <Image
                  src="/orthoteb-logo.svg"
                  alt={t("BrandName")}
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <p className="font-medium uppercase text-emerald-700">
                  {t("CompanyName")}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-teal-700 sm:text-5xl">
                  {t("BrandName")}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base leading-8 text-zinc-700 md:text-lg">
              {t("Description")}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-white/70 border border-emerald-100 px-4 py-3 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="text-sm font-medium text-zinc-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link href="/products">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
                >
                  {t("exploreButton")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="absolute inset-0 bg-emerald-300/10 blur-3xl rounded-full" />
            <Image
              src="/orthoteb-products.png"
              alt={t("BrandName")}
              width={700}
              height={700}
              priority
              className="relative h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
