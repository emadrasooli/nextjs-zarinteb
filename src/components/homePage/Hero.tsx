import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-[url('/bg-background.jpeg')] bg-cover bg-center bg-no-repeat opacity-25"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-white"></div>
            <div className="relative flex flex-col items-center justify-center space-y-6 pt-64">
                <h1 className="font-bold text-6xl text-primary">Inspiring a Healthy Life</h1>
                <p className="max-w-2xl text-center text-gray-500 text-lg">
                    ZarinTeb produces and trades high-quality medical equipment, delivering innovative solutions to inspire healthier lives.
                </p>
                <div className="flex gap-4">
                    <Button variant={"default"} className="rounded-full" size={"lg"}>Explore product</Button>
                    <Button variant={"outline"} className="rounded-full text-gray-500" size={"lg"}>Know more</Button>
                </div>
            </div>
        </div>
    )
}