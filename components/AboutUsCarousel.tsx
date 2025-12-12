"use client"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function AboutUsCarousel() {
    return (
        <div className="flex flex-col lg:flex-row w-full min-h-[640px] relative">
            <div className="w-full lg:w-2/5 bg-black z-10">
                <div className={`${montserrat.className} bg-[#85E408] w-full max-w-none px-12 py-24 flex flex-col gap-5 ml-0 lg:ml-24 lg:my-24 `}>
                    <h1 className="font-bold uppercase text-3xl">
                        PODCAST TEKIRO TALK
                    </h1>
                    <p className="text-sm font-medium">
                        Through our <strong>Tekiro Talk podcast</strong> , we bring you valuable insights, inspiration,
                        and tips about tools and everyday life. As part of Tekiro Tools’ commitment to delivering high-quality solutions,
                        this podcast is designed to enrich your knowledge of tools, industry trends, and lifestyle topics.
                    </p>
                    <p className="text-sm font-medium">
                        Tune in to engaging discussions with experts, loyal users, and inspiring figures, all on <strong>Tekiro Talk!</strong>
                    </p>
                    <div>
                        <Link href="https://youtube.com/playlist?list=PLPjqRMGM_RstF1U7C9941_Q0yZJja6Z2Q&si=O97vYeZsqjXGEwJT" rel="noopener noreferrer" target="_blank" className={`${montserrat.className} text-xl font-semibold uppercase border-b-2 border-black pb-1 hover:opacity-75 transition-opacity inline-block`}>
                            Explore Now
                        </Link>
                    </div>

                </div>
            </div>

            <div className="w-full lg:w-3/5 relative bg-[#EAF8F3] flex items-center justify-center min-h-[300px]">
                <Swiper
                    effect={'fade'}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination-custom',
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper w-full aspect-video max-w-[200px] lg:max-w-[600px] mx-auto"
                >
                    <SwiperSlide className="relative h-full overflow-hidden group">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/kuwSeHYKjis?rel=0&modestbranding=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </SwiperSlide>
                    <SwiperSlide className="relative h-full overflow-hidden group">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/ECK44sgcm08?rel=0&modestbranding=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </SwiperSlide>
                    <SwiperSlide className="relative h-full overflow-hidden group">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/QoVMt0RK1aU?rel=0&modestbranding=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-colors duration-200">
                    <ChevronLeft size={24} />
                </button>
                <button className="swiper-button-next-custom absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-colors duration-200">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}