"use client"
import { useState } from "react";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "aos/dist/aos.css";
import Marquee from "@/components/Marquee";
import Modal from "@/components/Modal";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
})


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const products = Array.from({ length: 14 }, (_, index) => ({
    id: index + 1,
    name: `Adjustable Wrench (EU Type) #${index + 1}`,
    image: "/tekiro-wrench.jpg",
    href: "/"
  }));

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/modal.webp"
      >
      </Modal>

      <div className="min-h-[87vh] object-contain bg-[url(/hero.webp)] bg-center bg-cover">
        <div className={`${montserrat.className} bg-black/80 min-h-[87vh] flex flex-col items-center justify-end text-center pb-16`}>
          <div className="flex flex-col justify-center text-center gap-10 pb-7">
            <h1 className="text-white font-semibold text-5xl uppercase">Precision. Reliability. <br />Power.<br />High-Performance.</h1>
            <p className="text-white font-semibold max-w-5xl">
              Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle light repairs and heavy-duty challenges alike. Choose Tekiro® and experience tools designed to empower professionals and enthusiasts with unmatched durability and versatility.
            </p>
          </div>
          <div className="border-b-2 border-b-white pb-4">
            <h2 className="uppercase text-white text-xl">explore more</h2>
          </div>
        </div>
      </div>

      <div className="my-24 max-w-[1300px] mx-auto grid grid-cols-3 gap-5">
        <div className="bg-[#EBF8F3]">
          <div className="w-full h-56">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/UgdIQDv6rYk?controls=0&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ftekiro.com&widgetid=3&forigin=https%3A%2F%2Ftekiro.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Ftekiro.com%2Fcontact%2F&vf=1" />
          </div>
          <div className="p-10 text-center gap-5 flex flex-col">
            <h2 className={`${montserrat.className} font-bold uppercase text-2xl`}>Complete Tools in One Bundle</h2>
            <p className={`${montserrat.className} text-sm pb-12`}>Tekiro® Simplify your workflow with a complete set that keeps everything organized and ready for action. Perfect for tackling any task efficiently and with ease.</p>
            <div className="inline-block border-b-2 border-[#427402] mx-auto">
              <h2 className={`${montserrat.className} text-xl font-semibold  uppercase`}>explore more</h2>
            </div>
          </div>
        </div>

        <div className="bg-[#EBF8F3]">
          <div className="w-full h-56">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/cZ9h1q-TpN8?controls=0&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ftekiro.com&widgetid=5&forigin=https%3A%2F%2Ftekiro.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Ftekiro.com%2Fgallery%2F&vf=1" />
          </div>
          <div className="p-10 text-center gap-5 flex flex-col">
            <h2 className={`${montserrat.className} font-bold uppercase text-2xl`}>Strong & Spacious Storage</h2>
            <p className={`${montserrat.className} text-sm pb-12`}>Tekiro® Maximize your workspace with a durable storage solution that provides ample space to keep your tools organized and easily accessible for every project.</p>
            <div className="inline-block border-b-2 border-[#427402] mx-auto">
              <h2 className={`${montserrat.className} text-xl font-semibold  uppercase`}>explore more</h2>
            </div>
          </div>
        </div>

        <div className="bg-[#EBF8F3]">
          <div className="w-full h-56">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/b7maGr2I5zA?controls=0&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ftekiro.com&widgetid=7&forigin=https%3A%2F%2Ftekiro.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Ftekiro.com%2Fgallery%2F&vf=1" />
          </div>
          <div className="p-10 text-center gap-5 flex flex-col">
            <h2 className={`${montserrat.className} font-bold uppercase text-2xl`}>Precision in Every Project</h2>
            <p className={`${montserrat.className} text-sm pb-12`}>Tekiro® Achieve reliable, precise results in every project with tools designed to deliver strength and accuracy, ensuring smooth and efficient work.</p>
            <div className="inline-block border-b-2 border-[#427402] mx-auto">
              <h2 className={`${montserrat.className} text-xl font-semibold  uppercase`}>explore more</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full min-h-[658px] relative">
        <div className="w-3/5 relative bg-black">
          <iframe
            className="absolute top-1/2 left-1/2 w-[150%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/Mf0IkX02gM0?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
          />
        </div>

        <div className="w-2/5 bg-black z-10">
          <div className="bg-[#85E408] w-full max-w-none px-12 py-24 flex flex-col gap-5 -ms-24 my-24 ">
            <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>Tekiro®<br />
              FOR EVERYTHING & EVERYONE.
            </h1>
            <p className={`${montserrat.className} text-sm w-3/4 font-medium`} >Whether you’re a professional, hobbyist, or DIY enthusiast, Tekiro provides the tools you can trust for all kinds of projects. From simple repairs to complex tasks, we equip you with the reliability, precision, and performance needed to get the job done—no matter the scale. Tekiro® is built for all, designed for everything.</p>
            <h2 className={`${montserrat.className} text-xl font-semibold uppercase underline underline-offset-8 decoration-[#427402] `}>find yours</h2>
          </div>
        </div>
      </div>

      <div className="p-24 flex flex-col gap-10">
        <h2 className={`${montserrat.className} font-bold uppercase text-3xl text-center`}>latest product</h2>
        <div className="grid grid-cols-7 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href}>
              <div>
                <Image src={product.image} alt={`tekiro-wrench-${product.id}`} width={300} height={450} className="border border-black" />
                <h2 className={`${montserrat.className} my-2.5 uppercase text-[#6EC1E4]`}>{product.name}</h2>
                <p className={`${roboto.className} text-center py-2.5 px-4 bg-[#e9e6ed] rounded-sm font-medium`}>Read more</p>
              </div>
            </Link>
          ))}
        </div>
        <h2 className={`${montserrat.className} text-xl font-semibold uppercase underline underline-offset-8 decoration-[#427402] mx-auto `}>all products</h2>
      </div>

      <div className="flex flex-row w-full h-[658px] relative">
        <div className="w-2/5 bg-black z-10">
          <div className="bg-[#85E408] w-full max-w-none px-12 py-24 flex flex-col gap-5 ml-24 my-24 ">
            <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>Tekiro®<br />
              CATALOGUE &<br /> COLLECTIONS
            </h1>
            <p className={`${montserrat.className} text-sm w-3/4 font-medium`} >Explore the complete range of Tekiro® tools, from hand tools to power equipment, designed to meet the needs of every project. Our catalog offers everything from everyday essentials to specialized solutions, ensuring you have access to the best quality tools for all your tasks.</p>
            <Link href="/e-catalogue" className={`${montserrat.className} text-xl font-semibold uppercase underline underline-offset-8 decoration-[#427402] `}>show more</Link>
          </div>
        </div>

        <div className="w-3/5 relative bg-black h-[658px]">
          <Swiper
            effect={'fade'}
            centeredSlides={true}
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
                className="object-cover transition-transform duration-10000 ease-out group-[.swiper-slide-active]:scale-110"
              />
            </SwiperSlide>
            <SwiperSlide className="relative h-full overflow-hidden group">
              <Image
                src="/banner2.webp"
                alt="banner 2"
                fill
                className="object-cover transition-transform duration-10000 ease-out group-[.swiper-slide-active]:scale-110"
              />
            </SwiperSlide>
            <SwiperSlide className="relative h-full overflow-hidden group">
              <Image
                src="/banner3.webp"
                alt="banner 3"
                fill
                className="object-cover transition-transform duration-10000 ease-out group-[.swiper-slide-active]:scale-110"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Marquee text="TOOLBOX. MEASUREMENT. POWER TOOLS. SAW. WELDING.<br /> CORDLESS." />
    </>
  );
}

