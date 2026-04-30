import Pattern from "@/components/Pattern";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const t = useTranslations("ContactPage");

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden">
              <Pattern />
            </div>
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">{t("description")}</p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>{t("address")}</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+1 (555) 234-5678"
                    className="hover:text-gray-900"
                  >
                    {t("phone")}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-gray-900"
                  >
                    {t("email")}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Render the Client Component Form here */}
        <ContactForm />
      </div>
    </div>
  );
}
