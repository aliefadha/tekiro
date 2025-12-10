import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { ScrollToTop } from "./scroll-to-top";
import { getSlugLabel } from "@/lib/slug-label";

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
            <div className="flex max-w-[1400px] h-full gap-5 px-5">
                <div className="w-1/3 bg-[#EEEEEE] rounded-md p-4">
                    <div className="py-8 px-5 bg-black rounded-md flex flex-col gap-5 h-full">
                        <h1 className={`${montserrat.className} text-[#85E408] text-2xl uppercase font-bold`}>categories</h1>
                        <div className="h-0.5 bg-[#85E408]"></div>
                        <div className="flex flex-col">
                            {categories.map((category) => {
                                const isActive = slug === category.slug
                                return (
                                    <Link
                                        key={category.slug}
                                        href={`/kategori-produk/${category.slug}`}
                                        className={`${roboto.className} capitalize font-semibold px-5 py-3 border transition-colors duration-200 ${isActive ? "border-[#85E408] text-[#85E408]" : "border-black text-white"} hover:border-[#85E408] hover:text-[#85E408]`}
                                    >
                                        {category.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {/* TODO: Move it to separated component */}
                    <div
                        className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-start items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_5px_#85E408]"
                    >
                        <Image src="/torque-1.webp" alt="torque" width={300} height={300} className="w-full h-[300px] mx-auto" />
                        <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}>Proffesional Torque Wrench</h1>
                        <h1 className={`${montserrat.className} font-medium capitalize text-xl text-[#427402]`}>{getSlugLabel(slug)}</h1>
                        <Link href="/" className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black" >
                            <p className={`${roboto.className} font-medium uppercase text-sm`}>read more</p>
                        </Link>
                    </div>
                    <div
                        className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-start items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_5px_#85E408]"
                    >
                        <Image src="/torque-2.webp" alt="torque" width={300} height={300} className="w-full h-[300px] mx-auto" />
                        <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}>Drive Torque</h1>
                        <h1 className={`${montserrat.className} font-medium capitalize text-xl text-[#427402]`}>{getSlugLabel(slug)}</h1>
                        <Link href="/" className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black" >
                            <p className={`${roboto.className} font-medium uppercase text-sm`}>read more</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
