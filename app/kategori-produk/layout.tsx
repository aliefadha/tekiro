import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { SlugHeading } from "./slug-heading";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "E-Catalogue - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

export default function KategoriProdukLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <>
            <div className="flex flex-row w-full min-h-[300px] lg:min-h-[500px] relative bg-[url(/product-hero.webp)] bg-top-left lg:bg-none">
                <div className="hidden lg:block w-3/5 relative bg-black">
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[150%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        src="https://www.youtube.com/embed/a4aQ93NEoU0?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
                    />
                </div>

                <div className="w-full lg:w-2/5 bg-transparent lg:bg-black z-10 p-5 lg:p-0 my-auto lg:my-0">
                    <div className="bg-[#85E408] w-full max-w-none px-12 py-24 flex flex-col gap-5 lg:-ms-24 my-0 lg:my-24">
                        <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                            <SlugHeading />
                        </h1>
                    </div>
                </div>
            </div>

            <div className="py-16">
                {children}
            </div>
        </>
    )
}
