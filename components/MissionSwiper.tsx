"use client"

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

export default function MissionSwiper() {
    return (
        <div className="min-h-[600px] object-contain bg-[url(/mission-bg.webp)] bg-center bg-cover">
            <div className="bg-black/60 min-h-[600px] flex flex-col items-center justify-center text-center">
                <div className="bg-black border-4 border-[#85E408] flex items-center justify-center gap-6 p-8 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center justify-center gap-5 w-full">
                        <h1 className="uppercase text-3xl font-bold text-white">our mission</h1>
                        <p className="text-white font-medium text-sm">
                            Our Mission
                            <br />
                            At Tekiro, our mission is simple yet meaningful: to empower customers with tools that
                            inspire confidence, ensure precision, and enhance efficiency. We are dedicated to maintaining
                            the highest standards in product quality and customer satisfaction.
                        </p>
                    </div>
                    <div className="w-1/2 h-[350px] relative">
                        <Swiper
                            effect={'fade'}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                            }}
                            modules={[EffectFade, Autoplay]}
                            className="mySwiper h-full"
                        >
                            <SwiperSlide className="relative h-full overflow-hidden group">
                                <Image
                                    src="/banner1.webp"
                                    alt="banner 1"
                                    fill
                                    className="object-cover transition-transform duration-10000"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="relative h-full overflow-hidden group">
                                <Image
                                    src="/banner2.webp"
                                    alt="banner 2"
                                    fill
                                    className="object-cover transition-transform duration-10000"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="relative h-full overflow-hidden group">
                                <Image
                                    src="/banner3.webp"
                                    alt="banner 3"
                                    fill
                                    className="object-cover transition-transform duration-10000"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}