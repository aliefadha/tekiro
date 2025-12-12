"use client"

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

interface InternationalHeroSlide {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
}

interface InternationalHeroCarouselProps {
    slides: InternationalHeroSlide[];
}

export default function InternationalHeroCarousel({ slides }: InternationalHeroCarouselProps) {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                loop={true}
                slidesPerView={1}
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} w-full min-h-[535px]`}>
                            <div className="hidden lg:block w-full lg:w-1/2 h-72 lg:h-auto relative overflow-hidden">
                                <Image
                                    src={slide.imageSrc}
                                    alt={slide.imageAlt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    fill
                                />
                            </div>
                            <div className="w-full lg:w-1/2 h-[535px] p-20 lg:p-0 bg-[#85E408] flex flex-col justify-center items-center text-center">
                                <h1 className={`${montserrat.className} text-3xl font-bold uppercase mb-8 tracking-tight`}>
                                    {slide.title}
                                </h1>

                                <div className={`${montserrat.className} bg-black text-white font-bold uppercase text-xs lg:text-base py-3 px-8 rounded-full mb-8 tracking-wider shadow-sm`}>
                                    {slide.subtitle}
                                </div>

                                <p className={`${montserrat.className} text-sm font-medium max-w-lg leading-relaxed`}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 text-black p-3 rounded-full transition-colors duration-200 hover:bg-black/10">
                <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 text-black p-3 rounded-full transition-colors duration-200 hover:bg-black/10">
                <ChevronRight size={24} />
            </button>
        </div>
    );
}