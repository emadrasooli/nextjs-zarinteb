'use client'

import { useState } from 'react'
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
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { LanguageToggle } from './LanguageToggle'
import SearchBar from './SearchBar'
import { Accessibility, Bed, Microscope, Stethoscope } from 'lucide-react'


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("Navbar");
  const link = useTranslations("productLink");
  
  const products = [
    { name: link('manufactureProducts.title'), description: link('manufactureProducts.description'), href: '#', icon: Bed },
    { name: link('medicalMachinery.title'), description: link('medicalMachinery.description'), href: '#', icon: Stethoscope },
    { name: link('orthopedicProducts.title'), description: link('orthopedicProducts.description'), href: '#', icon: Accessibility },
    { name: link('labaretoryProducts.title'), description: link('labaretoryProducts.description'), href: '#', icon: Microscope },
  ]
  
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm shadow-slate-100">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 px-4">
        <div className="flex lg:flex-1">
          <Link href={'/'} className="flex items-center space-x-2">
            <Image src={'/logo-white.png'} alt="logo" width={48} height={48} />
            <p className="font-bold text-2xl text-primary">{t('title')}</p>             
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          <a href="#" className="text-sm/6 font-medium text-gray-900 hover:bg-slate-100 px-2 py-1 rounded-md">
            {t('home')}
          </a>
          <a href="#" className="text-sm/6 font-medium text-gray-900 hover:bg-slate-100 px-2 py-1 rounded-md">
            {t('about')}
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-medium text-gray-900 hover:bg-slate-100 px-2 py-1 rounded-md">
              {t('product')}
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-primary" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>

          </Popover>
          <a href="#" className="text-sm/6 font-medium text-gray-900 hover:bg-slate-100 px-2 py-1 rounded-md">
            {t('service')}
          </a>
          <a href="#" className="text-sm/6 font-medium text-gray-900 hover:bg-slate-100 px-2 py-1 rounded-md">
            {t('contact')}
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-2">
          <SearchBar />
          <LanguageToggle />
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t('home')}
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t('about')}
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {t('product')}
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
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
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t('service')}
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t('contact')}
                </a>
              </div>
              <div className="space-y-6 py-6">
                    <SearchBar />
                    <LanguageToggle />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}


// "use client"

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import Image from "next/image"
// import SearchBar from "./SearchBar"
// import { LanguageToggle } from "./LanguageToggle"
// import { useLocale, useTranslations } from "next-intl"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

// export function Navbar() {
//   
//   const locale = useLocale();

//   return (
//     <div className="border-b border-gray-100 shadow-sm shadow-slate-100 fixed top-0 left-0 right-0 z-50 bg-white">
//         <div className=" max-w-7xl mx-auto flex justify-between items-center p-3">
//         <div>
//             <Link href={'/'} className="flex items-center space-x-2">
//                 <Image src={'/logo-white.png'} alt="logo" width={48} height={48} />
//                 <p className="font-bold text-2xl text-primary">{t('title')}</p>
//             </Link>
//         </div>
//         <div>
//             <NavigationMenu>
//                 <NavigationMenuList>
//                     <NavigationMenuItem>
//                         <Link href="/docs" legacyBehavior passHref>
//                             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                 {t('home')}
//                             </NavigationMenuLink>
//                         </Link>
//                     </NavigationMenuItem>
//                     <NavigationMenuItem>
//                         <Link href="/docs" legacyBehavior passHref>
//                             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                 {t('about')}
//                             </NavigationMenuLink>
//                         </Link>
//                     </NavigationMenuItem>
//                     <NavigationMenuItem>
//                     <NavigationMenuTrigger>{t('product')}</NavigationMenuTrigger>
//                         <NavigationMenuContent>
//                             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                                 <li className="row-span-3">
//                                     <NavigationMenuLink asChild>
//                                     <a
//                                             className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                                             href="/"
//                                         >
//                                         {/* <Icons.logo className="h-6 w-6" /> */}
//                                         <div className="mb-2 mt-4 text-lg font-medium">
//                                             shadcn/ui
//                                         </div>
//                                         <p className="text-sm leading-tight text-muted-foreground">
//                                             Beautifully designed components built with Radix UI and
//                                             Tailwind CSS.
//                                         </p>
//                                     </a>
//                                     </NavigationMenuLink>
//                                 </li>
//                                 <ListItem href="/docs" title="Introduction">
//                                     Re-usable components built using Radix UI and Tailwind CSS.
//                                 </ListItem>
//                                 <ListItem href="/docs/installation" title="Installation">
//                                     How to install dependencies and structure your app.
//                                 </ListItem>
//                                 <ListItem href="/docs/primitives/typography" title="Typography">
//                                     Styles for headings, paragraphs, lists...etc
//                                 </ListItem>
//                             </ul>
//                         </NavigationMenuContent>
//                     </NavigationMenuItem>
//                     <NavigationMenuItem>
//                         <NavigationMenuTrigger>{t('service')}</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               {t('contact')}
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//         </div>
//         <div className="flex items-center gap-2">
//             <SearchBar />
//             <LanguageToggle />
//         </div>
//         </div>
//     </div>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
