
import Image from "next/image";

export default function ContactHero() {
    return (
        <div className="relative h-[250px] md:h-[350px] lg:h-[450px] w-full">
            <div className="absolute inset-0 z-10 bg-black/50"/>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"/>
            <Image 
                src="/contactPage/banner-1.jpg"
                alt="contact banner"
                fill
                className="object-cover object-bottom"
            />
            <div className="absolute inset-0 z-20 flex h-full w-full items-center justify-center text-center">
                <h1 className=" text-4xl font-bold text-primary sm:text-5xl lg:text-7xl">
                    Contact Us
                </h1>
            </div>
        </div>
    )
}