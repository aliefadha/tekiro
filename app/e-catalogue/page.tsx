import { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { getCatalogues } from "@/lib/server-api";

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

export default async function ECataloguePage() {
    let catalogues: Array<{
        id: string;
        title: string;
        file: string;
        categoryId: string;
        category?: {
            id: string;
            name: string;
            image: string;
        };
    }> = []

    try {
        const response = await getCatalogues()
        if (response.success && response.data) {
            catalogues = response.data
        }
    } catch (error) {
        console.error('Failed to fetch catalogues:', error)
    }

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
                {catalogues.length > 0 ? (
                    catalogues.map((item) => (
                        <div
                            key={item.id}
                            className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-center items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300"
                        >
                            <Image src={item.category?.image || ''} alt={item.title || 'Catalogue'} width={250} height={350} className="w-full h-[350px] mx-auto object-cover" />
                            <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}>{item.title}</h1>
                            <Link href={item.file || '#'} rel="noopener noreferrer" target="_blank" className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black" >
                                <p className={`${roboto.className} font-medium uppercase text-xs`}>download {item.category?.name || 'catalogue'}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-white col-span-full">No catalogues available</p>
                )}
            </div>

        </>
    )
}
