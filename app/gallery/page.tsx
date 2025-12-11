'use client'

import { useState } from 'react'
import { Montserrat } from "next/font/google"
import MasonryGallery from '@/components/MasonryGallery'

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

// Sample gallery images - replace with actual image paths
const galleryImages = [
    '/product-hero.webp',
    '/hero.webp',
    '/cordless.webp',
    '/wrench.webp',
    '/torque.webp',
    '/socket.webp'
]

// Sample Instagram images - replace with actual Instagram content
const instagramImages = [
    '/banner1.webp',
    '/banner2.webp',
    '/banner3.webp',
    '/blog-hero.webp',
    '/mission-bg.webp',
    '/tekiro-wrench.jpg'
]

export default function GalleryPage() {
    const [activeView, setActiveView] = useState<'gallery' | 'instagram'>('gallery')

    const handleViewChange = (view: 'gallery' | 'instagram') => {
        setActiveView(view)
    }

    return (
        <>
            <div className="mx-auto px-24 py-10 flex flex-col gap-5">
                <h1 className={`${montserrat.className} font-bold text-3xl uppercase`}>Gallery</h1>

                <div className="flex gap-2">
                    <button
                        onClick={() => handleViewChange('gallery')}
                        className={`p-4 text-center font-bold transition-colors duration-200 cursor-pointer ${activeView === 'gallery'
                            ? 'text-black bg-[#85E408]'
                            : 'text-white bg-black hover:bg-[#85E408] hover:text-black'
                            }`}
                    >
                        Web Gallery
                    </button>

                    <button
                        onClick={() => handleViewChange('instagram')}
                        className={`p-4 text-center font-bold transition-colors duration-200 cursor-pointer ${activeView === 'instagram'
                            ? 'text-black bg-[#85E408]'
                            : 'text-white bg-black hover:bg-[#85E408] hover:text-black'
                            }`}
                    >
                        Instagram
                    </button>
                </div>

                <div className="mt-8 min-h-[500px]">
                    {activeView === 'gallery' && (
                        <div className="fade-in">
                            <MasonryGallery
                                images={galleryImages}
                                productName="Tekiro Products"
                            />
                        </div>
                    )}

                    {activeView === 'instagram' && (
                        <div className="fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {instagramImages.map((image, index) => (
                                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                        <img
                                            src={image}
                                            alt={`Instagram post ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Visit Instagram Button */}
                            <div className="flex justify-center mt-8">
                                <a
                                    href="https://instagram.com/tekiro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 p-4 text-center font-bold transition-colors duration-200 cursor-pointer text-white bg-black hover:bg-gray-800"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Visit Our Instagram
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Add some basic CSS for fade transition */}
            <style jsx>{`
                .fade-in {
                    animation: fadeIn 0.3s ease-in-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    )
}