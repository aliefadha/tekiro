'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Montserrat, Roboto } from "next/font/google";
import { getSlugLabel } from "@/lib/slug-label";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
});

interface ProductCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    href: string;
}

export default function ProductCard({
    imageSrc,
    imageAlt,
    title,
    href,
}: ProductCardProps) {
    const params = useParams();
    const slug = typeof params?.slug === 'string' ? params.slug : null;
    const category = getSlugLabel(slug);

    return (
        <div className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-start items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_5px_#85E408]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={300}
                height={300}
                className="w-full h-[300px] mx-auto"
            />
            <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}>{title}</h1>
            <h1 className={`${montserrat.className} font-medium capitalize text-xl text-[#427402]`}>{category}</h1>
            <Link href={href} className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black">
                <p className={`${roboto.className} font-medium uppercase text-sm`}>read more</p>
            </Link>
        </div>
    );
}
