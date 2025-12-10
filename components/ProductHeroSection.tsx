'use client'

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export default function ProductHeroSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="w-full bg-[url(/product-hero.webp)] bg-top bg-cover">
            <div className="mx-auto flex gap-20 bg-black/60 py-16 px-6 md:px-20 items-center justify-center">

                <div className="space-y-5 w-1/3">
                    <h2 className={`${montserrat.className} text-white text-4xl font-bold uppercase`}>
                        Customer Service
                    </h2>
                    <p className={`${montserrat.className} text-white text-sm font-medium`}>
                        We prioritize your satisfaction. Our dedicated Customer Care team is always ready to assist with your inquiries, while our extensive network of Service Centers ensures that help is never far away. We are here to support you every step of the way.
                    </p>
                </div>

                {/* Right Section: Cards */}
                <div className="w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Customer Care */}
                    <div className="bg-[#85E408] p-8 rounded-md flex flex-col gap-5 justify-between h-full min-h-64" data-aos="fade-left">
                        <div>
                            <div className="mb-5 flex items-center gap-5">
                                <svg aria-hidden="true" className="h-10 w-10" fill="#000" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M204.8 230.4c-10.6-14.1-30.7-17-44.8-6.4-14.1 10.6-17 30.7-6.4 44.8l38.1 50.8c4.8 6.4 4.1 15.3-1.5 20.9l-12.8 12.8c-6.7 6.7-17.6 6.2-23.6-1.1L64 244.4V96c0-17.7-14.3-32-32-32S0 78.3 0 96v218.4c0 10.9 3.7 21.5 10.5 30l104.1 134.3c5 6.5 8.4 13.9 10.4 21.7 1.8 6.9 8.1 11.6 15.3 11.6H272c8.8 0 16-7.2 16-16V384c0-27.7-9-54.6-25.6-76.8l-57.6-76.8zM608 64c-17.7 0-32 14.3-32 32v148.4l-89.8 107.8c-6 7.2-17 7.7-23.6 1.1l-12.8-12.8c-5.6-5.6-6.3-14.5-1.5-20.9l38.1-50.8c10.6-14.1 7.7-34.2-6.4-44.8-14.1-10.6-34.2-7.7-44.8 6.4l-57.6 76.8C361 329.4 352 356.3 352 384v112c0 8.8 7.2 16 16 16h131.7c7.1 0 13.5-4.7 15.3-11.6 2-7.8 5.4-15.2 10.4-21.7l104.1-134.3c6.8-8.5 10.5-19.1 10.5-30V96c0-17.7-14.3-32-32-32z"></path></svg>
                                <h3 className={`${montserrat.className} text-3xl font-bold uppercase`}>
                                    Customer Care
                                </h3>
                            </div>
                            <p className={`${montserrat.className} text-sm mb-4 font-medium`}>
                                Service center hadir untuk membantu pelanggan yang ingin meregistrasi kartu garansi,
                                pembelian sparepart, serta service produk. Untuk informasi lokasi service center kami,
                                silahkan icon diatas.
                            </p>
                        </div>
                        <div>
                            <Link href="https://wa.me/087777000966" rel="noopener noreferrer" target="_blank" className={`${montserrat.className} text-xl font-semibold uppercase border-b-2 border-black pb-1 hover:opacity-75 transition-opacity inline-block`}>
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Service Center */}
                    <div className="bg-[#85E408] p-8 rounded-md flex flex-col justify-between h-full min-h-64" data-aos="fade-left">
                        <div>
                            <div className="mb-5 flex items-center gap-5">
                                <svg aria-hidden="true" className="w-10 h-10" fill="#000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path></svg>
                                <h3 className={`${montserrat.className} text-3xl font-bold uppercase`}>
                                    Service Center
                                </h3>
                            </div>
                            <p className={`${montserrat.className} text-sm mb-4 font-medium`}>
                                Service center hadir untuk membantu pelanggan yang ingin meregistrasi kartu garansi,
                                pembelian sparepart, serta service produk. Untuk informasi lokasi service center kami,
                                silahkan icon diatas.
                            </p>
                        </div>
                        <div>
                            <Link href="/service-center" rel="noopener noreferrer" target="_blank" className={`${montserrat.className} text-xl font-semibold uppercase border-b-2 border-black pb-1 hover:opacity-75 transition-opacity inline-block`}>
                                contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}