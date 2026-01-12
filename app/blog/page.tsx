import Marquee from "@/components/Marquee";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { getArticles } from "@/lib/server-api";
import ArticlesList from "@/components/ArticlesList";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Blog - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

export default async function BlogPage() {
    const response = await getArticles(6, 1)
    const articles = response.data

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
                <ArticlesList initialArticles={articles} />
            </div>

            <Marquee text="TOOLBOX. MEASUREMENT. POWER TOOLS. SAW. WELDING.<br /> CORDLESS." />
        </>
    )
}