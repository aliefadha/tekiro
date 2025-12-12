import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { ScrollToTop } from "./scroll-to-top";
import { getSlugLabel } from "@/lib/slug-label";
import CategorySidebar from "@/components/CategorySidebar";
import ProductCard from "@/components/ProductCard";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
})

export default async function KategoriProdukPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = await params

    const categories = [
        { label: 'Wrench', slug: 'wrench' },
        { label: 'Torque', slug: 'torque' },
        { label: 'Socket', slug: 'socket' },
        { label: 'Impact Socket', slug: 'impact-socket' },
    ];

    return (
        <>
            <ScrollToTop />
            <div className="flex flex-col md:flex-row max-w-[1400px] h-full gap-5 px-5">
                <div className="w-full md:w-1/3 bg-[#EEEEEE] rounded-md p-4">
                    <CategorySidebar
                        categories={categories}
                        currentSlug={slug}
                        montserratClassName={montserrat.className}
                        robotoClassName={roboto.className}
                    />
                </div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProductCard
                        imageSrc="/torque-1.webp"
                        imageAlt="torque"
                        title="Proffesional Torque Wrench"
                        href="/product/1"
                    />
                    <ProductCard
                        imageSrc="/torque-2.webp"
                        imageAlt="torque"
                        title="Drive Torque"
                        href="/product/1"
                    />
                </div>
            </div>
        </>
    )
}
