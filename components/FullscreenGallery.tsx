'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface FullscreenGalleryProps {
    images: string[]
    productName: string
    currentImageIndex: number
    onImageChange: (index: number) => void
    onClose: () => void
}

export default function FullscreenGallery({
    images,
    productName,
    currentImageIndex,
    onImageChange,
    onClose
}: FullscreenGalleryProps) {

    const [imageError, setImageError] = useState(false)

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'Escape':
                    onClose()
                    break
                case 'ArrowLeft':
                    onImageChange(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
                    break
                case 'ArrowRight':
                    onImageChange(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
                    break
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [currentImageIndex, images.length, onImageChange, onClose])

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (target.classList.contains('fullscreen-backdrop')) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [onClose])

    const currentImage = images[currentImageIndex]

    // Reset error state when image changes
    if (imageError && currentImage) {
        setImageError(false)
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center fullscreen-backdrop">
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
                    <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                        {currentImageIndex + 1} / {images.length}
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
                        aria-label="Close fullscreen"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex items-center justify-center w-full">
                    {/* Left Arrow */}
                    {images.length > 1 && (
                        <button
                            onClick={() => onImageChange(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
                            className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
                            aria-label="Previous image"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Main Image Container */}
                    <div
                        className="relative max-w-full max-h-full"
                    >
                        {currentImage && !imageError ? (
                            <Image
                                src={currentImage}
                                alt={`${productName} - Image ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain transition-transform duration-200"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                priority={currentImageIndex === 0}
                                onError={() => setImageError(true)}
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <p className="text-gray-500">Failed to load image</p>
                            </div>
                        )}
                    </div>

                    {/* Right Arrow */}
                    {images.length > 1 && (
                        <button
                            onClick={() => onImageChange(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)}
                            className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
                            aria-label="Next image"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}