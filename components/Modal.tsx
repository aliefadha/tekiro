"use client"

import { useEffect } from "react"
import Image from "next/image"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    imageSrc?: string
    children?: React.ReactNode
}

export default function Modal({ isOpen, onClose, imageSrc, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 transform transition-all duration-300 scale-100 opacity-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
                    aria-label="Close modal"
                >
                    ×
                </button>

                <div className="p-2 max-h-screen overflow-y-auto">
                    {imageSrc && (
                        <div className="mb-4">
                            <Image
                                src={imageSrc}
                                alt="Modal content"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    )
}