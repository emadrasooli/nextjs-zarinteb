import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

export default function OrthoSection() {
  const t = useTranslations("OrthoSection");
  const features = t.raw("Features") as string[];

  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-teal-50/30 to-white max-w-7xl mx-auto shadow-card">
        {/* Background Blur Effects */}
        <div className="absolute top-0 end-0 h-80 w-80 bg-emerald-300/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 start-0 h-64 w-64 bg-teal-300/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-6 py-10 md:px-12 md:py-16">
          {/* Left Content */}
          <MotionFadeIn direction="up" className="w-full lg:w-1/2 space-y-6">
            {/* Logo + Brand */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/80 bg-white shadow-xs p-2">
                <Image
                  src="/orthoteb-logo.svg"
                  alt={t("BrandName")}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-800">
                  {t("CompanyName")}
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl lg:text-5xl">
                  {t("BrandName")}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
              {t("Description")}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 rounded-full bg-white/90 border border-emerald-200/70 px-4 py-2.5 shadow-subtle backdrop-blur-xs"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-zinc-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-3">
              <Link href="/products">
                <Button
                  variant="medical"
                  size="lg"
                  className="rounded-full px-8 shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  {t("exploreButton")}
                </Button>
              </Link>
            </div>
          </MotionFadeIn>

          {/* Right Image */}
          <MotionFadeIn direction="up" delay={0.2} className="relative w-full lg:w-1/2 flex justify-center">
            <div className="absolute inset-0 bg-emerald-400/10 blur-3xl rounded-full" />
            <Image
              src="/orthoteb-products.png"
              alt={t("BrandName")}
              width={700}
              height={700}
              priority
              className="relative h-auto w-full max-w-lg object-contain drop-shadow-md transition-transform duration-500 hover:scale-102"
            />
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}
