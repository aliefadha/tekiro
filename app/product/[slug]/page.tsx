import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image"
import ProductGallery from "@/components/ProductGallery"
import Link from "next/link"
import { getSlugLabel } from "@/lib/slug-label"

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
})

export default async function ProductPage({
    params,
}: {
    params: { slug: string }
}) {

    const { slug } = await params
    return (
        <>
            <div className="h-[200px] object-contain bg-[url(/torque-2.webp)] bg-center bg-cover relative">
                <div className={`${montserrat.className} bg-black/80 h-[200px] flex flex-col items-center justify-center text-center`}>
                    <div className="flex flex-col justify-center text-center gap-10">
                        <h1 className="text-white font-semibold text-4xl uppercase">Drive torque</h1>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#85E408]"></div>
            </div>

            <div className="mt-18 mb-24 flex justify-center items-start">
                <div className="max-w-6xl w-full mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                        <div className="flex justify-center">
                            <ProductGallery
                                images={[
                                    '/torque-2.webp',
                                    '/torque.webp',
                                    '/wrench.webp',
                                    '/screwdriver.webp'
                                ]}
                                productName="Drive Torque"
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            <ul className="list-disc p-2.5">
                                <li>Material is Chrome Molybdenum</li>
                                <li>Industrial Black Oxide finish</li>
                                <li>Precision milled</li>
                                <li>Corrosion resistance</li>
                            </ul>
                            <div>
                                <p className="font-bold">Category <Link href="/" className="text-[#427402] font-normal">Torque</Link></p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className={`${montserrat.className} font-bold uppercase text-xl`}>Official Store</h2>
                                <div className="flex gap-4 h-full">
                                    <div className="bg-[#85E408] p-1 rounded-md h-full">
                                        <Link href="https://bukalapak.com">
                                            <Image src="/monotaro.webp" width={40} height={40} alt="monotaro" className="h-10 w-10 object-contain" />
                                        </Link>
                                    </div>
                                    <div className="bg-[#85E408] p-1 rounded-md h-full">
                                        <Link href="https://lazada.com">
                                            <Image src="/lazada.png" width={40} height={40} alt="lazada" className="h-10 w-10 object-contain" />
                                        </Link>
                                    </div>
                                    <div className="bg-[#85E408] p-1 rounded-md h-full">
                                        <Link href="https://tokopedia.com">
                                            <Image src="/tokopedia.png" width={40} height={40} alt="tokopedia" className="h-10 w-10 object-contain" />
                                        </Link>
                                    </div>
                                    <div className="bg-[#85E408] p-1 rounded-md h-full">
                                        <Link href="https://shopee.com">
                                            <Image src="/shopee.png" width={40} height={40} alt="shopee" className="h-10 w-10 object-contain" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="min-h-[500px] object-contain bg-[url(/product-hero.webp)] bg-top bg-cover">
                    <div className={`${montserrat.className} bg-black/60 min-h-[500px] flex flex-col items-center justify-center text-center py-14 gap-10`}>
                        <div className="flex flex-col justify-center text-center gap-10">
                            <h1 className="text-white font-semibold text-2xl lg:text-4xl uppercase">Product Related</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-2/3">
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
                </div>
            </div>
        </>
    )
}