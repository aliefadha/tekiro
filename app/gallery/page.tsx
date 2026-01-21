import { getGallery, getInstagram } from "@/lib/server-api"
import GalleryPageClient from "./GalleryPageClient"

export default async function GalleryPage() {
    let galleryData: Array<{ id: string; title: string; image: string }> = []
    try {
        const galleryResponse = await getGallery()
        galleryData = galleryResponse.data
    } catch (error) {
        console.warn('Failed to fetch gallery data during build:', error)
    }

    let instagramData: Array<{ id: string; title: string; link: string; image: string }> = []
    try {
        const instagramResponse = await getInstagram()
        instagramData = instagramResponse.data
    } catch (error) {
        console.warn('Failed to fetch instagram data during build:', error)
    }

    return <GalleryPageClient galleryData={galleryData} instagramData={instagramData} />
}
