'use client'

import { useState } from 'react'
import Image from 'next/image'
import ThumbnailSelector from './ThumbnailSelector'
import FullscreenGallery from './FullscreenGallery'

interface ProductGalleryProps {
    images: string[]
    productName: string
    zoomLevel?: number
    className?: string
}

export default function ProductGallery({
    images,
    productName,
    zoomLevel = 1.5,
    className = ''
}: ProductGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 })
    const [isFullscreen, setIsFullscreen] = useState(false)

    if (!images || images.length === 0) {
        return (
            <div className={`w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
                <span className="text-gray-500">No images available</span>
            </div>
        )
    }

    const currentImage = images[currentImageIndex]

    return (
        <div className={`w-full group ${className}`}>
            <div
                className="relative overflow-hidden rounded-lg w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[432px] lg:h-[432px] mx-auto"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={(e) => {
                    if (isZoomed) {
                        const rect = e.currentTarget.getBoundingClientRect()
                        const x = ((e.clientX - rect.left) / rect.width) * 100
                        const y = ((e.clientY - rect.top) / rect.height) * 100
                        setCursorPosition({ x, y })
                    }
                }}
            >
                <Image
                    src={currentImage}
                    alt={`${productName} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-200"
                    style={{
                        transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
                        transform: isZoomed ? `scale(${zoomLevel})` : 'scale(1)',
                    }}
                    priority={currentImageIndex === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Fullscreen Icon */}
                <button
                    onClick={() => setIsFullscreen(true)}
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                    aria-label="View in fullscreen"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>

            {/* Thumbnail Selector */}
            {images.length > 1 && (
                <ThumbnailSelector
                    images={images}
                    alt={productName}
                    currentIndex={currentImageIndex}
                    onThumbnailClick={setCurrentImageIndex}
                    className="p-2"
                />
            )}

            {/* Fullscreen Gallery */}
            {isFullscreen && (
                <FullscreenGallery
                    images={images}
                    productName={productName}
                    currentImageIndex={currentImageIndex}
                    onImageChange={setCurrentImageIndex}
                    onClose={() => setIsFullscreen(false)}
                />
            )}
        </div>
    )
}