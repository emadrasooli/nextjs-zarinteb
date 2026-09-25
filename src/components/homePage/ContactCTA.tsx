import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactCTA() {
  const t = useTranslations("ContactCTA");
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 my-8">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
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
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="1"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#ffae00" />
            <stop offset={1} stopColor="#ffbb00" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}
