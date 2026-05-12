"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";
import { getImageUrl } from "@/lib/utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  primaryImage: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  metaTags: {
    title: string;
    keywords: string;
    description: string;
  };
  publishedAt: string;
}

interface ArticlesListProps {
  initialArticles: Article[];
}

const ITEMS_PER_PAGE = 6;

export default function ArticlesList({ initialArticles }: ArticlesListProps) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const displayedArticles = initialArticles.slice(0, visibleCount);
  const hasMore = visibleCount < initialArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedArticles.map((post) => (
          <div
            key={post.id}
            className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-between items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 h-full min-h-[600px]"
          >
            <div className="w-full flex flex-col items-center gap-5 grow">
              <Image
                src={getImageUrl(post.primaryImage)}
                alt={post.title}
                width={150}
                height={250}
                className="w-full h-[250px] mx-auto object-cover"
              />
              <h1
                className={`${montserrat.className} font-bold uppercase text-[#85E408] grow min-h-20`}
              >
                {post.title}
              </h1>
              <p
                className={`${montserrat.className} font-semibold text-white text-sm grow min-h-[100px] line-clamp-4`}
              >
                {post.excerpt}
              </p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 text-[#85E408] hover:text-black text-center"
            >
              <p
                className={`${roboto.className} font-medium uppercase text-xs`}
              >
                read more
              </p>
            </Link>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center w-full ">
          <button
            onClick={handleLoadMore}
            className={`${roboto.className} border-b-2 hover:bg-black py-3 px-4 hover:text-[#85E408] text-center rounded-xs font-medium uppercase transition-all duration-1000`}
          >
            load more
          </button>
        </div>
      )}
    </>
  );
}
