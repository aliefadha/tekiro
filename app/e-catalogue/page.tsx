import { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "E-Catalogue - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};


export default function ECataloguePage() {
    const catalogues = [
        { title: "wrench", image: "/wrench.webp", href: "/wrench.pdf" },
        { title: "pliers", image: "/pliers.webp", href: "/pliers.pdf" },
        { title: "automotive", image: "/automotive.webp", href: "/automotive.pdf" },
        { title: "hex key", image: "/hexkey.webp", href: "/hex-key.pdf" },
        { title: "screwdriver", image: "/screwdriver.webp", href: "/screwdriver.pdf" },
        { title: "measurement", image: "/measurement.webp", href: "/measurement.pdf" },
        { title: "general tools", image: "/general-tools.webp", href: "/general-tools.pdf" },
        { title: "gardening", image: "/gardening.webp", href: "/gardening.pdf" },
        { title: "torque", image: "/torque.webp", href: "/torque.pdf" },
        { title: "air tools", image: "/air-tools.webp", href: "/air-tools.pdf" },
        { title: "storage", image: "/storage.webp", href: "/storage.pdf" },
        { title: "tray", image: "/tray.webp", href: "/tray.pdf" },
        { title: "insulation", image: "/insulation.webp", href: "/insulation.pdf" },
        { title: "impact socket", image: "/impact-socket.webp", href: "/impact-socket.pdf" },
        { title: "welding", image: "/welding.webp", href: "/welding.pdf" },
        { title: "special tools", image: "/special-tools.webp", href: "/special-tools.pdf" },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row w-full h-auto md:min-h-[500px] relative">
                <div className="hidden md:block w-full md:w-3/5 relative bg-black min-h-[300px] md:min-h-0 overflow-hidden">
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[150%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        src="https://www.youtube.com/embed/a4aQ93NEoU0?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
                    />
                </div>

                <div className="w-full md:w-2/5 bg-black z-10 p-4 md:p-0">
                    <div className="bg-[#85E408] w-full max-w-none p-8 lg:p-6 md:px-12 md:py-24 flex flex-col gap-5 md:-ms-24 my-0 md:my-24 ">
                        <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                            E-Catalogue
                        </h1>
                    </div>
                </div>
            </div>

            <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5 mx-auto gap-8">
                {catalogues.map((item) => (
                    <div
                        key={item.title}
                        className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-center items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300"
                    >
                        <Image src={item.image} alt={item.title} width={250} height={350} className="w-full h-[350px] mx-auto" />
                        <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}>{item.title}</h1>
                        <Link href={item.href} rel="noopener noreferrer" target="_blank" className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black" >
                            <p className={`${roboto.className} font-medium uppercase text-xs`}>download {item.title} catalogue</p>
                        </Link>
                    </div>
                ))}
            </div>

        </>
    )
}
