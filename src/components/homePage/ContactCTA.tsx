import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactCTA() {
  const t = useTranslations("ContactCTA");
  return (
    <div className="relative isolate overflow-hidden">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl/10">
            {t("heading")}
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("primaryLink")}
            </Link>
            <Link
              href="/about"
              className="text-sm/6 font-semibold text-black hover:underline underline-offset-4 duration-300 transition-all"
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
    </div>
  );
}
