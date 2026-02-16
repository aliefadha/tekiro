"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";
import { getArticles } from "@/lib/server-api";
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

export default function ArticlesList({ initialArticles }: ArticlesListProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const response = await getArticles(6, page);
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setArticles(prev => {
          const existingIds = new Set(prev.map(a => a.id));
          const newArticles = response.data.filter(a => !existingIds.has(a.id));
          if (newArticles.length === 0) {
            setHasMore(false);
            return prev;
          }
          setPage(p => p + 1);
          return [...prev, ...newArticles];
        });
        if (response.data.length < 6) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error loading more articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((post) => (
          <div
            key={post.id}
            className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-between items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 h-full min-h-[600px]"
          >
            <div className="w-full flex flex-col items-center gap-5 grow">
              <Image
                src={getImageUrl(post.primaryImage)}
                alt={post.title}
                width={250}
                height={350}
                className="w-full h-[350px] mx-auto object-cover"
              />
              <h1
                className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408] grow min-h-20`}
              >
                {post.title}
              </h1>
              <p
                className={`${montserrat.className} font-semibold text-white grow min-h-[100px]`}
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
            disabled={loading}
            className={`${roboto.className} border-b-2 hover:bg-black py-3 px-4 hover:text-[#85E408] text-center rounded-xs font-medium uppercase transition-all duration-1000 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Loading..." : "load more"}
          </button>
        </div>
      )}
    </>
  );
}
