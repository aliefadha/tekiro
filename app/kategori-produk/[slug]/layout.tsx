import { getSlugLabel } from "@/lib/slug-label";
import { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const { slug } = await params;
    const label = getSlugLabel(slug);

    return {
        title: `${label} - Tekiro`,
        description: `Browse Tekiro ${label} products and specifications.`,
    };
}

export default function KategoriProdukSlugLayout({
    children,
}: {
    children: ReactNode
}) {
    return children;
}
