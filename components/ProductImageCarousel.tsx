'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles for black pagination dots
const paginationStyles = `
  .swiper-pagination-custom .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #000000;
    opacity: 0.5;
    margin: 0 4px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
     transform: scale(0.6);
  }
  
  .swiper-pagination-custom .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #000000;
    transform: scale(0.6);
  }
  
  .swiper-pagination-custom .swiper-pagination-bullet:hover {
    opacity: 0.8;
    transform: scale(0.6);
  }
`;
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    images: string[];
}

interface ProductImageCarouselProps {
    products: Product[];
}

function ImageSlide({ product }: { product: Product }) {
    return (
        <div className="flex justify-center items-center p-4 bg-white">
            <Link href={`/product/${product.id}`} className="relative group">
                <Image
                    src={product.images[0] || '/placeholder.webp'}
                    width={300}
                    height={300}
                    alt={product.name}
                    className="w-full h-full lg:h-64"
                />
            </Link>
        </div>
    );
}

export default function ProductImageCarousel({ products }: ProductImageCarouselProps) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: paginationStyles }} />
            <div className="relative w-full max-w-6xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination-custom',
                    }}
                    loop={true}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className="w-full"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={product.id}>
                            <ImageSlide product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-2 text-gray-800 p-3 rounded-full transition-colors duration-200">
                    <ChevronLeft size={24} />
                </button>
                <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-2 text-gray-800 p-3 rounded-full transition-colors duration-200">
                    <ChevronRight size={24} />
                </button>

                {/* Custom Pagination Dots */}
                <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
            </div>
        </>
    );
}