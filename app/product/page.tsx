'use client'

import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { useCategories } from "@/lib/queries";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
})


export default function AllProductPage() {
  const { data, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#85E408]"></div>
      </div>
    );
  }

  if (error || !data?.data) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-red-500">Failed to load categories</p>
      </div>
    );
  }

  const catalogues = data.data.map((item: { id: string; name: string; image: string }) => ({
    title: item.name,
    image: item.image,
    href: `/kategori-produk/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
  }));

  return (
    <>
      <div className="min-h-[500px] object-contain bg-[url(/product-hero.webp)] bg-top bg-cover">
        <div className={`${montserrat.className} bg-black/60 min-h-[500px] flex flex-col items-center justify-center text-center pb-16`}>
          <div className="flex flex-col justify-center text-center gap-6 px-6 md:px-16">
            <h1 className="text-white font-semibold text-4xl uppercase">Category Product</h1>
            <p className="text-white font-semibold lg:max-w-5xl">
              Explore our diverse product categories designed to meet your needs, from professional tools to everyday essentials. Find the perfect solutions to support your projects with quality and reliability.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-4 md:px-10 gap-4">
          {catalogues.map((item: { title: string; image: string; href: string }) => (
            <div
              key={item.title}
              className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-center items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_5px_#85E408]"
            >
              <Image src={item.image} alt={item.title} width={250} height={350} className="w-full h-[350px] object-cover mx-auto" />
              <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}>{item.title}</h1>
              <Link href={item.href} className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black" >
                <p className={`${roboto.className} font-medium uppercase text-sm`}>explore now</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
