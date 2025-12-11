'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Montserrat, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
});

interface BlogPost {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    date: string;
}

interface BlogSidebarCarouselProps {
    posts: BlogPost[];
}

export default function BlogSidebarCarousel({ posts }: BlogSidebarCarouselProps) {
    return (
        <>
            <div className="relative w-full">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={16}
                    className="w-full"
                >
                    {posts.map((post) => (
                        <SwiperSlide key={post.id} className="bg-black p-2.5 text-center flex flex-col justify-between items-center rounded-md gap-4 overflow-hidden">
                            <div className="w-full flex flex-col items-center gap-4">
                                <div className="w-full flex flex-col items-center gap-4">
                                    <Image
                                        src={post.imageSrc}
                                        alt={post.imageAlt}
                                        width={300}
                                        height={180}
                                        className="w-full h-[180px] mx-auto object-cover"
                                    />
                                    <h3 className={`${montserrat.className} font-bold uppercase text-sm text-[#85E408] line-clamp-3 px-2`}>
                                        {post.title}
                                    </h3>
                                </div>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-2 px-3 text-[#85E408] hover:text-black text-center transition-all duration-300"
                                >
                                    <p className={`${roboto.className} font-medium uppercase text-xs`}>Read More</p>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
