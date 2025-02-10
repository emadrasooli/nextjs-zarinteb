import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <div className="relative h-[400px] lg:h-[500px] w-full px-4">
            <div className="absolute inset-0 bg-[url('/bg-background.jpeg')] bg-cover bg-center bg-no-repeat opacity-25"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-white"></div>
            <div className="relative flex flex-col items-center justify-center space-y-6 pt-24 lg:pt-32">
                <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-primary text-center">{t('title')}</h1>
                <p className="max-w-2xl text-center text-gray-500 text-sm md:text-lg">
                    {t('description')}
                </p>
                <div className="flex gap-4">
                    <Button variant={"default"} className="rounded-full">{t('exploreButton')}</Button>
                    <Button variant={"outline"} className="rounded-full text-gray-500">{t('aboutButton')}</Button>
                </div>
            </div>
        </div>
    )
} 