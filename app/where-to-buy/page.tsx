import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Where to Buy - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

export default function WhereToBuyPage() {
    return (
        <>
            <div className="min-h-[65vh] object-contain bg-[url(/where-to-buy.webp)] bg-center bg-cover">
                <div className={`${montserrat.className} bg-black/70 min-h-[65vh] flex flex-col items-center justify-center text-center`}>
                    <div className="flex flex-col justify-center text-center gap-10 max-w-5xl">
                        <h1 className="text-white font-semibold text-5xl uppercase">Marketplace & E-commerce Official Store</h1>
                    </div>
                </div>
            </div>

            <Marquee text="we are available at" />

            <div className="mt-24 grid grid-cols-4 gap-6 max-w-6xl mx-auto items-center">
                <Link href="https://www.tokopedia.com/ryuofficial" target="_blank" rel="noopener noreferrer">
                    <Image src="/tokopedia-ecom.webp" alt="Tokopedia" width={600} height={400} className="w-3xs" />
                </Link>
                <Link href="https://shopee.co.id/ryuofficial" target="_blank" rel="noopener noreferrer">
                    <Image src="/shopee-ecom.webp" alt="Shopee" width={600} height={400} className="w-3xs" />
                </Link>
                <Link href="https://www.bukalapak.com/ryu-official-store-official" target="_blank" rel="noopener noreferrer">
                    <Image src="/tiktok-ecom.webp" alt="TikTok" width={600} height={400} className="w-3xs" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <Image src="/lazada-ecom.webp" alt="Lazada" width={600} height={400} className="w-3xs" />
                </Link>
                <Link href="https://www.monotaro.id/shopbybrand/brand?brand=ryu" target="_blank" rel="noopener noreferrer">
                    <Image src="/monotaro-ecom.webp" alt="Monotaro" width={600} height={400} className="w-3xs" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <Image src="/indoteknik-ecom.webp" alt="Indoteknik" width={600} height={400} className="w-3xs" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <Image src="/fixcomart-ecom.webp" alt="Fixcomart" width={600} height={400} className="w-3xs" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <Image src="/blibli-ecom.webp" alt="Blibli" width={600} height={400} className="w-3xs" />
                </Link>
            </div>

            <div className="py-16 w-full flex justify-center">
                <Link href="/contact" className="py-4 px-14 bg-[#61CE70] rounded-full text-white uppercase mx-auto">contact us</Link>
            </div>
        </>
    );
}