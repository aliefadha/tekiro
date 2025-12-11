'use client'

import { useState } from 'react'
import Image from 'next/image'
import FullscreenGallery from './FullscreenGallery'

interface MasonryGalleryProps {
    images: string[]
    productName?: string
    className?: string
}

export default function MasonryGallery({
    images,
    productName = 'Gallery',
    className = ''
}: MasonryGalleryProps) {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    if (!images || images.length === 0) {
        return (
            <div className={`w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
                <span className="text-gray-500">No images available</span>
            </div>
        )
    }

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index)
        setIsFullscreen(true)
    }

    const rows: { left: { image: string; index: number }; right?: { image: string; index: number } }[] = []

    for (let i = 0; i < images.length; i += 2) {
        rows.push({
            left: { image: images[i], index: i },
            right: images[i + 1] ? { image: images[i + 1], index: i + 1 } : undefined
        })
    }

    return (
        <>
            <div className={`w-full ${className}`}>
                <div className="flex flex-col gap-4">
                    {rows.map((row, rowIndex) => {
                        const leftWider = rowIndex % 2 === 0

                        return (
                            <div key={rowIndex} className="flex gap-4 h-[300px]">
                                <div
                                    className="relative overflow-hidden cursor-pointer group"
                                    style={{ flex: leftWider ? '0 0 58%' : '1' }}
                                    onClick={() => handleImageClick(row.left.index)}
                                >
                                    <Image
                                        src={row.left.image}
                                        alt={`${productName} - Image ${row.left.index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                                        <svg
                                            width="48"
                                            height="48"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                        >
                                            <path
                                                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Right image */}
                                {row.right && (
                                    <div
                                        className="relative overflow-hidden cursor-pointer group"
                                        style={{ flex: leftWider ? '1' : '0 0 58%' }}
                                        onClick={() => handleImageClick(row.right!.index)}
                                    >
                                        <Image
                                            src={row.right.image}
                                            alt={`${productName} - Image ${row.right.index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                                            <svg
                                                width="48"
                                                height="48"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {isFullscreen && (
                <FullscreenGallery
                    images={images}
                    productName={productName}
                    currentImageIndex={selectedImageIndex}
                    onImageChange={setSelectedImageIndex}
                    onClose={() => setIsFullscreen(false)}
                />
            )}
        </>
    )
}
