import Image from "next/image";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";

export default function OrthoSection() {
  return (
    <section className="w-full px-4 py-10 md:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white max-w-7xl mx-auto shadow-sm">
        {/* Background Blur Effects */}
        <div className="absolute top-0 right-0 h-72 w-72 bg-emerald-300/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-60 w-60 bg-teal-300/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-6 py-10 md:px-10 md:py-14">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Logo Holder */}
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-white">
                {/* Replace with your logo */}
                <Image
                  src="/orthoteb-logo.svg"
                  alt="Zarin OrthoTeb Logo"
                  width={40}
                  height={40}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
                  ZarinTeb Company
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-teal-700 sm:text-5xl">
                  Zarin OrthoTeb
                </h2>
              </div>
            </div>

            {/* English Description */}
            <div className="space-y-4">
              <p className="text-base leading-8 text-zinc-700 md:text-lg">
                Advanced orthopedic products designed and manufactured by
                ZarinTeb to support comfort, recovery, and better mobility.
              </p>

              {/* Persian */}
              {/*<p className="text-sm leading-7 text-zinc-600 md:text-base">*/}
              {/*    محصولات پیشرفته ارتوپیدی که توسط زرین طب طراحی و تولید*/}
              {/*    شده‌اند تا راحتی، بهبود و تحرک بهتر را فراهم سازند.*/}
              {/*</p>*/}

              {/*/!* Pashto *!/*/}
              {/*<p className="text-sm leading-7 text-zinc-600 md:text-base">*/}
              {/*    پرمختللي ارتوپېډي محصولات چې د زرین طب لخوا ډیزاین او تولید*/}
              {/*    شوي ترڅو د راحتۍ، رغېدو او غوره خوځښت ملاتړ وکړي.*/}
              {/*</p>*/}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-full bg-white/70 border border-emerald-100 px-4 py-3 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-zinc-700">
                  Medical-Grade Quality
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/70 border border-emerald-100 px-4 py-3 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-zinc-700">
                  Modern Orthopedic Solutions
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/70 border border-emerald-100 px-4 py-3 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-zinc-700">
                  Comfortable & Durable
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/70 border border-emerald-100 px-4 py-3 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-zinc-700">
                  Manufactured by ZarinTeb
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link href="/products">
                <Button
                  variant={"default"}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
                  size={"lg"}
                >
                  Explore Orthopedic Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            {/* Floating Glow */}
            <div className="absolute inset-0 bg-emerald-300/10 blur-3xl rounded-full" />

            <div className="">
              <Image
                src="/orthoteb-products.png"
                alt="Zarin OrthoTeb Orthopedic Products"
                width={700}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
