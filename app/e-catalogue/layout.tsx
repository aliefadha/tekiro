import type { Metadata } from "next";
const metadata: Metadata = {
    title: "Tekiro - ECatalogue",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

export default function ECatalogueLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
