import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center py-32 space-y-6">
            <h1 className="font-bold text-6xl">Inspiring a Healthy Life</h1>
            <p className="max-w-2xl text-center text-gray-500 text-lg">
                ZarinTeb produces and trades high-quality medical equipment, delivering innovative solutions to inspire healthier lives.
            </p>
            <div className="flex gap-4">
                <Button variant={"default"} className="rounded-full" size={"lg"}>Explore product</Button>
                <Button variant={"outline"} className="rounded-full text-gray-500" size={"lg"}>Know more</Button>
            </div>
        </div>
    )
}