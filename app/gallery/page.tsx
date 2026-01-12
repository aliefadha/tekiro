import { getGallery, getInstagram } from "@/lib/server-api"
import GalleryPageClient from "./GalleryPageClient"

export default async function GalleryPage() {
    const galleryResponse = await getGallery()
    const galleryData = galleryResponse.data

    const instagramResponse = await getInstagram()
    const instagramData = instagramResponse.data

    return <GalleryPageClient galleryData={galleryData} instagramData={instagramData} />
}
