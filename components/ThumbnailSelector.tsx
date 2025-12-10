'use client'
interface ThumbnailSelectorProps {
    images: string[]
    alt: string
    currentIndex: number
    onThumbnailClick: (index: number) => void
    className?: string
}

export default function ThumbnailSelector({
    images,
    alt,
    currentIndex,
    onThumbnailClick,
    className = ''
}: ThumbnailSelectorProps) {
    const thumbnailSize = 80

    return (
        <div className={`flex gap-2 mt-4 overflow-x-auto ${className}`}>
            {images.map((imageSrc, index) => (
                <div
                    key={index}
                    className={`
            relative shrink-0 rounded-md overflow-hidden cursor-pointer
            transition-all duration-200 ease-in-out
            ${currentIndex === index
                            ? 'ring-2 ring-blue-500 ring-offset-2 shadow-lg scale-105'
                            : 'ring-1 ring-gray-300 hover:ring-gray-400 hover:scale-102'
                        }
          `}
                    style={{ width: thumbnailSize, height: thumbnailSize }}
                    onClick={() => onThumbnailClick(index)}
                >
                    <img
                        src={imageSrc}
                        alt={`${alt} - Image ${index + 1}`}
                        width={thumbnailSize}
                        height={thumbnailSize}
                        className="w-full h-full object-cover"
                        draggable={false}
                    />

                    {/* Active indicator */}
                    {currentIndex === index && (
                        <div className="absolute inset-0 bg-blue-500/10 border-2 border-blue-500 rounded-md" />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-200" />
                </div>
            ))}
        </div>
    )
}