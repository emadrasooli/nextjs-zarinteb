import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Montserrat, Vazirmatn } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "Zarin Teb - Inspiring a healthy life",
  description: "Inspiring a healthy life",
  icons: "./favicon.ico",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number]))
    notFound();

  const messages = await getMessages();
  const isLTR = locale === "en";

  return (
    <html
      lang={locale}
      dir={isLTR ? "ltr" : "rtl"}
      className={cn(isLTR ? montserrat.variable : vazirmatn.variable)}
      suppressHydrationWarning
    >
      <body className={cn(isLTR ? "font-montserrat" : "font-vazirmatn")}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
