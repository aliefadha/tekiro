import { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
    title: "Gallery - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

export default function GalleryPage() {
    return <GalleryPageClient />;
}
