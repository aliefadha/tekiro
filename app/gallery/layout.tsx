import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery - Tekiro",
    description: "Explore Tekiro's product gallery featuring high-quality images of our tools and equipment. Also browse our Instagram feed to see our products in action and stay updated with the latest from Tekiro.",
    keywords: ["Tekiro gallery", "tool images", "product photos", "Tekiro Instagram", "hand tools gallery", "power tools images"],
    openGraph: {
        title: "Tekiro - Gallery | Product Images & Instagram Feed",
        description: "Explore Tekiro's product gallery featuring high-quality images of our tools and equipment. Also browse our Instagram feed to see our products in action.",
        url: "/gallery",
        images: [
            {
                url: "/product-hero.webp",
                width: 1200,
                height: 630,
                alt: "Tekiro Gallery"
            }
        ]
    }
};

export default function GalleryLayout({
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