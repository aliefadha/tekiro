'use client';

import { Montserrat } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})


export interface CordlessProduct {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
}

interface CordlessCarouselProps {
    products: CordlessProduct[];
}

function ProductSlide({ product, isActive, onAnimationEnd }: { product: CordlessProduct, isActive: boolean, onAnimationEnd?: () => void }) {
    const greenBgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isActive && greenBgRef.current) {
            greenBgRef.current.classList.add('fade-left-animation');

            const animationDuration = 2000;
            const timer = setTimeout(() => {
                if (greenBgRef.current) {
                    greenBgRef.current.classList.remove('fade-left-animation');
                }
                if (onAnimationEnd) {
                    onAnimationEnd();
                }
            }, animationDuration);

            return () => clearTimeout(timer);
        }
    }, [isActive, onAnimationEnd]);

    return (
        <div className="flex flex-col md:flex-row w-full h-[400px] md:h-[550px] relative items-center justify-center">
            <div className="hidden md:block w-full md:w-3/5 relative bg-black overflow-hidden h-[200px] md:h-full">
                <iframe
                    className="absolute top-1/2 left-1/2 w-[150%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    src={product.videoUrl}
                />
            </div>

            <div className="w-full md:w-2/5 bg-black z-10 md:h-full flex flex-col justify-center p-4 md:p-0">
                <div ref={greenBgRef} className="bg-[#85E408] text-center w-full max-w-none p-6 md:px-12 md:py-24 flex flex-col gap-5 md:-ms-60">
                    <h1 className={`${montserrat.className} font-bold uppercase text-2xl md:text-3xl`}>
                        {product.title}
                    </h1>
                    <p className={`${montserrat.className} text-sm w-3/4 mx-auto font-medium`}>
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function CordlessCarousel({ products }: CordlessCarouselProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                loop={true}
                className="w-full"
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
            >
                {products.map((product: CordlessProduct, index: number) => (
                    <SwiperSlide key={product.id}>
                        <ProductSlide
                            product={product}
                            isActive={index === activeIndex}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20  text-white p-3 rounded-full transition-colors duration-200">
                <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-3 rounded-full transition-colors duration-200">
                <ChevronRight size={24} />
            </button>
        </div>
    );
}