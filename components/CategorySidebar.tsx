"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface Category {
    label: string;
    slug: string;
}

interface CategorySidebarProps {
    categories: Category[];
    currentSlug: string;
    montserratClassName: string;
    robotoClassName: string;
}

export default function CategorySidebar({
    categories,
    currentSlug,
    montserratClassName,
    robotoClassName,
}: CategorySidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-8 px-5 bg-black rounded-md flex flex-col gap-5 h-fit lg:h-full transition-all duration-300">
            <div className="flex items-center justify-between">
                <h1 className={`${montserratClassName} text-[#85E408] text-2xl uppercase font-bold`}>
                    categories
                </h1>

            </div>

            <div className="h-0.5 bg-[#85E408]"></div>
            <div className={`${isOpen ? "block" : "hidden"} lg:block space-y-5`}>
                <div className="flex flex-col">
                    {categories.map((category) => {
                        const isActive = currentSlug === category.slug;
                        return (
                            <Link
                                key={category.slug}
                                href={`/kategori-produk/${category.slug}`}
                                className={`${robotoClassName} capitalize font-semibold px-5 py-3 border transition-colors duration-200 ${isActive
                                    ? "border-[#85E408] text-[#85E408]"
                                    : "border-black text-white"
                                    } hover:border-[#85E408] hover:text-[#85E408]`}
                            >
                                {category.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-[#85E408] self-center"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
    );
}
