import Marquee from "@/components/Marquee";
import { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Blog - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            imageSrc: "/blog-1.webp",
            imageAlt: "wrench",
            title: "Tekiro Berkolaborasi dengan Direktorat SMK Kemendikdasmen RI Luncurkan Tekiro Mechanic Competition 2026 se-Indonesia",
            description: "Tekiro Berkolaborasi dengan Direktorat SMK Kemendikdasmen RI Luncurkan Tekiro Mechanic Competition 2026 se-Indonesi Dalam upaya akselerasi peningkatan kualitas pendidikan vokasi nasional, Tekiro bersama Direktorat Sekolah ...",
        },
        {
            id: 2,
            imageSrc: "/blog-2.webp",
            imageAlt: "blog post 2",
            title: "Tekiro Raih Penghargaan Bergengsi “Trusted National Brand in Automotive and Industrial Tools” di CNN Awards 2025",
            description: "Tekiro Raih Penghargaan Bergengsi “Trusted National Brand in Automotive and Industrial Tools” di CNN Awards 2025 Jakarta, 3 November 2025. Tekiro Tools, merek perkakas otomotif …",
        },
        {
            id: 3,
            imageSrc: "/blog-3.webp",
            imageAlt: "blog post 3",
            title: "Perkakas Handal untuk Setiap Kebutuhan – TEKIRO",
            description: "Perkakas Handal untuk Setiap Kebutuhan – TEKIRO Dalam pekerjaan sehari-hari, baik di bengkel, rumah, maupun proyek industri, kehadiran alat yang kuat dan presisi adalah hal …",
        },
    ];

    return (
        <>
            <div className="min-h-[40vh] object-contain bg-[url(/blog-hero.webp)] bg-top bg-cover">
                <div className={`${montserrat.className} bg-black/60 min-h-[40vh] flex flex-col items-center justify-center text-center`}>
                    <div className="flex flex-col justify-center text-center gap-10">
                        <h1 className="text-white font-semibold text-5xl uppercase">Blog</h1>
                    </div>
                </div>
            </div>

            <div className="my-20 w-4/5 mx-auto flex flex-col gap-5">
                <div className="py-8 grid grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-between items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 h-full min-h-[600px]"
                        >
                            <div className="w-full flex flex-col items-center gap-5 grow">
                                <Image src={post.imageSrc} alt={post.imageAlt} width={250} height={350} className="w-full h-[350px] mx-auto object-cover" />
                                <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408] grow min-h-20`}>
                                    {post.title}
                                </h1>
                                <p className={`${montserrat.className} font-semibold text-white grow min-h-[100px]`}>
                                    {post.description}
                                </p>
                            </div>
                            <Link href={`blog/${post.id}`} className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 text-[#85E408] hover:text-black text-center" >
                                <p className={`${roboto.className} font-medium uppercase text-xs`}>read more</p>
                            </Link>
                        </div>
                    ))}
                </div >
                <div className="flex justify-center w-full ">
                    <Link href='#' className={`${roboto.className} border-b-2 hover:bg-black py-3 px-4 hover:text-[#85E408] text-center rounded-xs font-medium uppercase transition-all duration-1000`} >
                        load more
                    </Link>
                </div>
            </div>

            <Marquee text="TOOLBOX. MEASUREMENT. POWER TOOLS. SAW. WELDING.<br /> CORDLESS." />
        </>
    )
}