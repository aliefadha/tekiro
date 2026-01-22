'use client'

import { Metadata } from "next";
import CordlessCarousel, { CordlessProduct } from "../../components/CordlessCarousel";
import ProductImageCarousel from "../../components/ProductImageCarousel";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import { useLatestProducts, useCordlessProducts } from "@/lib/queries";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Cordless - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

const cordlessProducts: CordlessProduct[] = [
    {
        id: 1,
        title: "IMPACT WRENCH CORDLESS 1/2\" XV BRUSHLESS 20V",
        description: "This product is designed to quickly and powerfully tighten and loosen bolts. Since it is cordless and powered by a battery, it is more convenient to use and eliminates the need to search for a power source.",
        videoUrl: "https://www.youtube.com/embed/RnAEaZqy_uw?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
    },
    {
        id: 2,
        title: "DRILL CORDLESS 1/2\" XV BRUSHLESS 20V",
        description: "Professional-grade cordless drill designed for precision drilling and screwdriving tasks. Features brushless motor technology for longer battery life and increased torque output.",
        videoUrl: "https://www.youtube.com/embed/RnAEaZqy_uw?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
    },
    {
        id: 3,
        title: "ANGLE GRINDER CORDLESS 4-1/2\" XV BRUSHLESS 20V",
        description: "Powerful cordless angle grinder for cutting and grinding applications. Compact design with ergonomic handle for comfortable extended use during heavy-duty tasks.",
        videoUrl: "https://www.youtube.com/embed/RnAEaZqy_uw?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
    }
];

export default function CordlessContent() {
    const { data: latestProductsResponse, isLoading: isLatestLoading } = useLatestProducts()
    const latestProducts = (latestProductsResponse?.data || []) as Array<{ id: string; name: string; images: string[] }>

    const { data: cordlessProductsResponse, isLoading: isCordlessLoading } = useCordlessProducts()
    const cordlessProductCards = (cordlessProductsResponse?.data || []) as Array<{
        id: string
        title: string
        description: string
        link: string
    }>

    return (
        <>
            <CordlessCarousel products={cordlessProducts} />
            <div className="p-5 lg:p-24 flex flex-col gap-10">
                <h2 className={`${montserrat.className} font-semibold uppercase lg:text-5xl text-2xl text-center`}>our product</h2>
                <ProductImageCarousel products={latestProducts} isLoading={isLatestLoading} />
            </div>
            <div>
                <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] relative">
                    <div className="w-full md:w-2/5 bg-black z-10 md:h-full flex flex-col justify-center p-4 md:p-0">
                        <div className="bg-[#85E408] w-full md:w-3/4 p-6 md:p-12 flex flex-col gap-5 md:ms-96" data-aos="fade-right">
                            <h1 className={`${montserrat.className} font-bold uppercase text-2xl md:text-3xl`}>
                                EXTREME POWER TO BRAKE YOUR HARD WORK
                            </h1>
                            <p className={`${montserrat.className} text-sm font-medium`}>
                                Tekiro Tools delivers extreme power designed to help you tackle heavy-duty tasks with
                                greater efficiency and precision. Built for durability and outstanding performance, our tools make tough
                                jobs easier, so you can focus on achieving exceptional results.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block w-3/5 relative bg-black overflow-hidden">
                        <Image
                            src="/cordless.webp"
                            alt="cordless"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <Marquee text="XTREME POWER, RIGID AND TOUGH" direction="left" />
            </div>
            <div className="my-24 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                {isCordlessLoading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-[#EBF8F3] animate-pulse">
                            <div className="w-full h-56 bg-gray-200" />
                            <div className="p-10 text-center gap-5 flex flex-col">
                                <div className="h-8 bg-gray-200 rounded w-3/4" />
                                <div className="h-16 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))
                ) : (
                    cordlessProductCards.map((product) => (
                        <div key={product.id} className="bg-[#EBF8F3]">
                            <div className="w-full h-56">
                                <iframe className="w-full h-full" src={product.link} />
                            </div>
                            <div className="p-10 text-center gap-5 flex flex-col">
                                <h2 className={`${montserrat.className} font-bold uppercase text-2xl`}>{product.title}</h2>
                                <p className={`${montserrat.className} text-sm pb-12`}>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
