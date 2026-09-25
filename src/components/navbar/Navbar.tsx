"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "./LanguageToggle";
import { Accessibility, Bed, Microscope, Stethoscope } from "lucide-react";
import { Link } from "@/i18n/routing";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const link = useTranslations("productLink");

  const products = [
    {
      name: link("manufactureProducts.title"),
      description: link("manufactureProducts.description"),
      href: `/products?category=e0163037-3d1a-4309-ba13-d4168f3d1922`,
      icon: Bed,
    },
    {
      name: link("medicalMachinery.title"),
      description: link("medicalMachinery.description"),
      href: `/products?category=3a92ffc5-0310-4bd7-870e-2e5ece1f0293`,
      icon: Stethoscope,
    },
    {
      name: link("orthopedicProducts.title"),
      description: link("orthopedicProducts.description"),
      href: `/products?category=ea62e770-4a8f-4483-9d88-48329b9bf938`,
      icon: Accessibility,
    },
    {
      name: link("labaretoryProducts.title"),
      description: link("labaretoryProducts.description"),
      href: `/products?category=1bc16552-8afd-49f9-b643-6656e8f2733b`,
      icon: Microscope,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-subtle transition-all duration-300">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 px-4"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="flex items-center gap-3 group">
            <Image src={"/logo-white.png"} alt="logo" width={44} height={44} className="transition-transform duration-200 group-hover:scale-105" />
            <p className="font-extrabold text-2xl text-primary tracking-tight">{t("title")}</p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-zinc-700 hover:bg-zinc-100"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-2">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 px-3.5 py-2 rounded-xl transition-all duration-150"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 px-3.5 py-2 rounded-xl transition-all duration-150"
          >
            {t("about")}
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 px-3.5 py-2 rounded-xl transition-all duration-150 outline-none">
              {t("product")}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-4 flex-none text-zinc-400 transition-transform duration-200"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full ltr:-left-8 rtl:-right-8 z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-elevated transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-3">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-4 rounded-2xl p-3.5 text-sm/6 hover:bg-zinc-50 transition-colors"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-xl bg-yellow-50 group-hover:bg-primary/20 transition-colors">
                      <item.icon
                        aria-hidden="true"
                        className="size-5 text-yellow-600 group-hover:text-primary transition-colors"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-zinc-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-0.5 text-xs text-zinc-500 line-clamp-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="/service"
            className="text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 px-3.5 py-2 rounded-xl transition-all duration-150"
          >
            {t("service")}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 px-3.5 py-2 rounded-xl transition-all duration-150"
          >
            {t("contact")}
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-3">
          {/* <SearchBar /> */}
          <LanguageToggle />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs" />
        <DialogPanel className="fixed inset-y-0 end-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-s border-zinc-200 shadow-elevated">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
            <Link href={"/"} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <Image src={"/logo-white.png"} alt="logo" width={36} height={36} />
              <p className="font-extrabold text-xl text-primary">{t("title")}</p>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-xl p-2.5 text-zinc-700 hover:bg-zinc-100"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("home")}
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("about")}
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {t("product")}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/service"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("service")}
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("contact")}
                </Link>
              </div>
              <div className="space-y-6 py-6">
                {/* <SearchBar /> */}
                <LanguageToggle />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
