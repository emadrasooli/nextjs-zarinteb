import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import ProductsLink from "./ProductsLink";

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <div className="relative h-screen w-full px-4">
            <div className="absolute inset-0 bg-[url('/bg-background.jpeg')] bg-cover bg-no-repeat opacity-25"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-white"></div>
            <div className="relative flex flex-col items-center justify-center space-y-6 2xl:space-y-10 pt-24 lg:pt-32 2xl:pt-48">
                <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-tight text-pretty text-primary text-center">{t('title')}</h1>
                <p className="max-w-2xl text-center text-zinc-500 text-sm md:text-lg 2xl:text-xl">
                    {t('description')}
                </p>
                <div className="flex gap-4">
                    <Button variant={"default"} className="rounded-full">{t('exploreButton')}</Button>
                    <Button variant={"outline"} className="rounded-full text-zinc-500">{t('aboutButton')}</Button>
                </div>
                <div className="pt-4 md:pt-16">
                    <ProductsLink />
                </div>
            </div>
        </div>
    )
} 