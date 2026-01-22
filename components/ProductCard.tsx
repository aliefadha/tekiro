'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getSlugLabel } from "@/lib/slug-label";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  href: string;
}

export default function ProductCard({
  imageSrc,
  imageAlt,
  title,
  href,
}: ProductCardProps) {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : null;
  const category = getSlugLabel(slug);

  return (
    <div className="bg-black px-2.5 pt-2.5 pb-16 text-center flex flex-col justify-start items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_5px_#85E408] h-auto max-h-fit">
      <div className="w-full aspect-square relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 14vw"
          className="object-cover"
        />
      </div>
      <h2 className={`font-montserrat font-bold uppercase text-2xl text-[#85E408]`}>{title}</h2>
      <h3 className={`font-montserrat font-medium capitalize text-xl text-[#427402]`}>{category}</h3>
      <Link href={href} className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black">
        <p className={`font-roboto font-medium uppercase text-sm`}>read more</p>
      </Link>
    </div>
  );
}
