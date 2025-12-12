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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg md:max-w-2xl transform transition-all duration-300 scale-100 opacity-100 flex flex-col max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 p-2"
                    aria-label="Close modal"
                >
                    ×
                </button>

                <div className="p-4 md:p-6 overflow-y-auto">
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