import { useTranslations } from "next-intl";
import ProductsLink from "./ProductsLink";
import { Link } from "@/i18n/navigation";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <div className="relative min-h-[90vh] w-full px-4 flex flex-col justify-center items-center py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg-background.jpeg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 lg:space-y-8 max-w-5xl mx-auto">
        <MotionFadeIn direction="up" delay={0.1}>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl tracking-tight text-pretty text-primary text-center">
            {t("title")}
          </h1>
        </MotionFadeIn>

        <MotionFadeIn direction="up" delay={0.2}>
          <p className="max-w-2xl text-center text-zinc-600 text-sm md:text-lg 2xl:text-xl leading-relaxed">
            {t("description")}
          </p>
        </MotionFadeIn>

        <MotionFadeIn direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={"/products"}
              className="rounded-full text-sm md:text-base font-semibold bg-primary text-primary-foreground px-6 py-3 shadow-sm hover:bg-primary/90 hover:shadow-md transition-all duration-200 active:scale-95"
            >
              {t("exploreButton")}
            </Link>
            <Link
              href={"/about"}
              className="rounded-full text-sm md:text-base font-medium text-zinc-700 bg-white/80 backdrop-blur-xs border border-zinc-200 px-6 py-3 shadow-xs hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 active:scale-95"
            >
              {t("aboutButton")}
            </Link>
          </div>
        </MotionFadeIn>

        <MotionFadeIn direction="up" delay={0.4} className="pt-8 md:pt-14 w-full">
          <ProductsLink />
        </MotionFadeIn>
      </div>
    </div>
  );
}
