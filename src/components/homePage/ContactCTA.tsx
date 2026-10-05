import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

export default function ContactCTA() {
  const t = useTranslations("ContactCTA");
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-36 mt-16 sm:mt-24 mb-0">
      <div className="px-6 lg:px-8">
        <MotionFadeIn direction="up" className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl leading-tight text-balance">
            {t("heading")}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all active:scale-95"
            >
              {t("primaryLink")}
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-white/90 backdrop-blur-xs border border-zinc-200 px-6 py-3 text-sm sm:text-base font-medium text-zinc-700 shadow-xs hover:bg-zinc-100 hover:text-zinc-900 transition-all active:scale-95"
            >
              {t("secondaryLink")}
            </Link>
          </div>
        </MotionFadeIn>
      </div>

      {/* Golden Sunrise Light Dome aligned exactly on the footer upper line */}
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 size-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] pointer-events-none"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#contact-cta-radial-glow)"
          fillOpacity="1"
        />
        <defs>
          <radialGradient id="contact-cta-radial-glow" cx="50%" cy="50%">
            <stop stopColor="#ffae00" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ffbb00" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffbb00" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}
