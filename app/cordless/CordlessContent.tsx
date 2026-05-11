"use client";

import { Metadata } from "next";
import CordlessCarousel, {
  CordlessProduct,
} from "../../components/CordlessCarousel";
import ProductImageCarousel from "../../components/ProductImageCarousel";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import { useProductsByCategory, useCordlessProducts } from "@/lib/queries";
import { getYoutubeEmbedUrl } from "@/lib/utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cordless - Tekiro",
  description:
    "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

const cordlessProducts: CordlessProduct[] = [
  {
    id: 1,
    title: "Compact Impact Driver XV Brushless 20V",
    videoUrl:
      "https://www.youtube.com/embed/86klTq2tPv4?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1",
  },
  {
    id: 2,
    title: 'Impact Wrench 1/2" XV Brushless 20V',
    videoUrl:
      "https://www.youtube.com/embed/ndXQC8_M-pA?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1",
  },
  {
    id: 3,
    title: "Rotary Hammer SDS Plus XV Brushless 20 V",
    videoUrl:
      "https://www.youtube.com/embed/9mCHDJTBonY?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1",
  },
  {
    id: 4,
    title: "Hammer Drill XV 13 MM Brushless 20V",
    videoUrl:
      "https://www.youtube.com/embed/czU-yHhMfs0?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1",
  },
  {
    id: 5,
    title: "Hammer Drill CV 10 MM 12V",
    videoUrl:
      "https://www.youtube.com/embed/rNzRgakHifM?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1",
  },
  {
    id: 6,
    title: "Hammer Drill XV 13 MM 20V",
    videoUrl:
      "https://www.youtube.com/embed/tKmESbmwCNg?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1",
  },
];

export default function CordlessContent() {
  const { data: categoryProductsResponse, isLoading: isCategoryLoading } =
    useProductsByCategory("cmlvva2qz00000ip8ypkzh2gp");
  const categoryProducts = (categoryProductsResponse?.data || []) as Array<{
    id: string;
    name: string;
    images: string[];
  }>;

  const { data: cordlessProductsResponse, isLoading: isCordlessLoading } =
    useCordlessProducts();
  const cordlessProductCards = (cordlessProductsResponse?.data || []) as Array<{
    id: string;
    title: string;
    description: string;
    link: string;
  }>;

  return (
    <>
      <CordlessCarousel products={cordlessProducts} />
      <div className="p-5 lg:p-24 flex flex-col gap-10">
        <h2
          className={`${montserrat.className} font-semibold uppercase lg:text-5xl text-2xl text-center`}
        >
          our product
        </h2>
        <ProductImageCarousel
          products={categoryProducts}
          isLoading={isCategoryLoading}
        />
      </div>
      <div>
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] relative">
          <div className="w-full md:w-2/5 bg-black z-10 md:h-full flex flex-col justify-center p-4 md:p-0">
            <div
              className="bg-[#85E408] w-full md:w-3/4 p-6 md:p-12 flex flex-col gap-5 md:ms-96"
              data-aos="fade-right"
            >
              <h1
                className={`${montserrat.className} font-bold uppercase text-2xl md:text-3xl`}
              >
                EXTREME POWER TO BRAKE YOUR HARD WORK
              </h1>
              <p className={`${montserrat.className} text-sm font-medium`}>
                Tekiro Tools delivers extreme power designed to help you tackle
                heavy-duty tasks with greater efficiency and precision. Built
                for durability and outstanding performance, our tools make tough
                jobs easier, so you can focus on achieving exceptional results.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-3/5 relative bg-black overflow-hidden">
            <Image
              src="/cordless.webp"
              alt="cordless"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <Marquee text="XTREME POWER, RIGID AND TOUGH" direction="left" />
      </div>
      <div className="my-24 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {isCordlessLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-[#EBF8F3] animate-pulse">
                <div className="w-full h-56 bg-gray-200" />
                <div className="p-10 text-center gap-5 flex flex-col">
                  <div className="h-8 bg-gray-200 rounded w-3/4" />
                  <div className="h-16 bg-gray-200 rounded" />
                </div>
              </div>
            ))
          : cordlessProductCards.map((product) => (
              <div key={product.id} className="bg-[#EBF8F3]">
                <div className="w-full h-56">
                  <iframe
                    className="w-full h-full"
                    src={getYoutubeEmbedUrl(product.link)}
                  />
                </div>
                <div className="p-10 text-center gap-5 flex flex-col">
                  <h2
                    className={`${montserrat.className} font-bold uppercase text-2xl`}
                  >
                    {product.title}
                  </h2>
                  <p className={`${montserrat.className} text-sm pb-12`}>
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
