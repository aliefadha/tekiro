import { Montserrat, Roboto } from "next/font/google";
import InternationalHeroCarousel from "@/components/InternationalHeroCarousel";
import Image from "next/image";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import Link from "next/link";
import Marquee from "@/components/Marquee";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

const roboto = Roboto({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export default function InternationalPage() {
    const heroSlides = [
        {
            id: 1,
            imageSrc: "/product-hero.webp",
            imageAlt: "Tekiro Tools product display in a store",
            title: "Tekiro Tools",
            subtitle: "Believe in your choice",
            description: "TEKIRO Tools is a trusted brand for high-quality hand tools product which provides wide range of product selections from industrial to home-use."
        },
        {
            id: 2,
            imageSrc: "/product-hero.webp",
            imageAlt: "Tekiro Tools quality products",
            title: "Premium Quality",
            subtitle: "Tools you can trust",
            description: "Our products are crafted with precision and durability to meet the highest industry standards for both professional and home use."
        },
        {
            id: 3,
            imageSrc: "/product-hero.webp",
            imageAlt: "Tekiro Tools innovative solutions",
            title: "Innovative Solutions",
            subtitle: "Engineered for performance",
            description: "We continuously develop cutting-edge tools that combine ergonomic design with advanced technology for superior results."
        }
    ];

    return (
        <>
            <InternationalHeroCarousel slides={heroSlides} />

            <div className="bg-black">
                <div className="flex w-full items-center justify-between max-w-6xl mx-auto py-5 px-10">
                    <Image src="/digital-top-brands.webp" width={800} height={800} alt="digital top brands" className="h-28 w-28 object-cover" />
                    <Image src="/brand-choice-award.webp" width={800} height={800} alt="brand choice" className="h-28 w-28 object-cover" />
                    <Image src="/top-brands.webp" width={800} height={800} alt="top brands" className="h-28 w-28 object-cover" />
                    <Image src="/top-pt.webp" width={800} height={800} alt="top pt" className="h-28 w-28 object-cover" />
                    <Image src="/super-brands.webp" width={800} height={800} alt="super brands" className="h-28 w-28 object-cover" />
                    <Image src="/brand-champion.webp" width={800} height={800} alt="brand champion" className="h-28 w-28 object-cover" />
                </div>
            </div>

            <div className="p-24 flex flex-col gap-10">
                <h2 className={`${montserrat.className} font-semibold uppercase text-5xl text-center`}>our product</h2>
                <ProductImageCarousel images={["/torque-1.webp", "/torque-1.webp", "/torque-1.webp", "/torque-1.webp", "/torque-1.webp", "/torque-1.webp"]} />
                <div className="mx-auto">
                    <Link href="/product" className={`${montserrat.className} text-xl font-semibold uppercase border-b-2 pb-2`}>see more</Link>
                </div>
            </div>

            <Marquee text="follow our social media" />

            <div>
                <div className="flex flex-row w-full h-[500px] relative">
                    <div className="w-7/12 relative bg-black overflow-hidden">
                        <Image
                            src="/malaysia.webp"
                            alt="cordless"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-5/12 bg-black z-10 h-full flex flex-col justify-center">
                        <div className="bg-[#85E408] w-full p-12 flex flex-col gap-5 -ms-96">
                            <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                                malaysia
                            </h1>
                            <p className={`${montserrat.className} text-sm font-medium`}>
                                Explore the complete range of Tekiro® tools, from hand tools to power equipment,
                                designed to meet the needs of every project. Our catalog offers everything from
                                everyday essentials to specialized solutions, ensuring you have access to the best
                                quality tools for all your tasks.
                            </p>
                            <div className="flex justify-between bg-black rounded-xl p-8 text-white">
                                <div className="space-y-2">
                                    <h1 className={`${roboto.className} font-semibold capitalize text-2xl text-center`}>tekiro</h1>
                                    <div className="flex gap-4">
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                        </div>
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h1 className={`${roboto.className} font-semibold capitalize text-2xl text-center`}>rexco</h1>
                                    <div className="flex gap-4">
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                        </div>
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-row w-full h-[500px] relative">
                    <div className="w-5/12 bg-black z-10 h-full flex flex-col justify-center">
                        <div className="bg-[#85E408] w-full p-12 flex flex-col gap-5 ms-96">
                            <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                                thailand
                            </h1>
                            <p className={`${montserrat.className} text-sm font-medium`}>
                                Explore the complete range of Tekiro® tools, from hand tools to power equipment,
                                designed to meet the needs of every project. Our catalog offers everything from
                                everyday essentials to specialized solutions, ensuring you have access to the best
                                quality tools for all your tasks.
                            </p>
                            <div className="flex justify-between bg-black rounded-xl p-8 text-white">
                                <div className="space-y-2">
                                    <h1 className={`${roboto.className} font-semibold capitalize text-2xl text-center`}>tekiro</h1>
                                    <div className="flex gap-4">
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                        </div>
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h1 className={`${roboto.className} font-semibold capitalize text-2xl text-center`}>rexco</h1>
                                    <div className="flex gap-4">
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                        </div>
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12 relative bg-black overflow-hidden">
                        <Image
                            src="/thailand.webp"
                            alt="cordless"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div >

            <div>
                <div className="flex flex-row w-full h-[500px] relative">
                    <div className="w-7/12 relative bg-black overflow-hidden">
                        <Image
                            src="/sri-lanka.webp"
                            alt="cordless"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-5/12 bg-black z-10 h-full flex flex-col justify-center">
                        <div className="bg-[#85E408] w-full p-12 flex flex-col gap-5 -ms-96">
                            <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                                sri lanka
                            </h1>
                            <p className={`${montserrat.className} text-sm font-medium`}>
                                Explore the complete range of Tekiro® tools, from hand tools to power equipment,
                                designed to meet the needs of every project. Our catalog offers everything from
                                everyday essentials to specialized solutions, ensuring you have access to the best
                                quality tools for all your tasks.
                            </p>
                            <div className="flex justify-between bg-black rounded-xl p-8 text-white">
                                <div className="space-y-2">
                                    <h1 className={`${roboto.className} font-semibold capitalize text-2xl text-center`}>tekiro</h1>
                                    <div className="flex gap-4">
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                        </div>
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h1 className={`${roboto.className} font-semibold capitalize text-2xl text-center`}>rexco</h1>
                                    <div className="flex gap-4">
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                        </div>
                                        <div className="p-2 border border-white rounded-md">
                                            <svg aria-hidden="true" fill="white" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
