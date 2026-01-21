import BlogSidebarCarousel from "@/components/BlogSidebarCarousel";
import Marquee from "@/components/Marquee";
import { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getArticles } from "@/lib/server-api";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const response = await getArticleBySlug(slug);
    const post = response.data;

    if (!post) {
        return {
            title: "Blog - Tekiro",
            description: "Read the latest news and updates from Tekiro",
        };
    }

    return {
        title: post.seoTitle || `${post.title} - Tekiro Blog`,
        description: post.seoDescription || post.excerpt,
        keywords: post.seoKeywords,
    };
}

interface Article {
    id: string
    title: string
    slug: string
    excerpt: string
    contentHtml: string
    primaryImage: string
    seoTitle: string
    seoDescription: string
    seoKeywords: string
    metaTags: {
        title: string
        keywords: string
        description: string
    }
    publishedAt: string
}

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    let post: Article | null = null
    try {
        const response = await getArticleBySlug(slug);
        post = response.data;
    } catch (error) {
        console.warn(`Failed to fetch article ${slug} during build:`, error);
    }

    let allArticles: Article[] = []
    try {
        const articlesResponse = await getArticles(6, 1);
        allArticles = articlesResponse.data;
    } catch (error) {
        console.warn('Failed to fetch articles list during build:', error);
    }
    const currentIndex = allArticles.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
    const nextPost = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
    const relatedPosts = allArticles.filter((p) => p.slug !== slug).slice(0, 2);

    if (!post) {
        return (
            <>
                <div className="min-h-[40vh] object-contain bg-[url(/blog-hero.webp)] bg-top bg-cover">
                    <div className={`${montserrat.className} bg-black/60 min-h-[40vh] flex flex-col items-center justify-center text-center`}>
                        <div className="flex flex-col justify-center text-center gap-10">
                            <h1 className="text-white font-semibold text-5xl uppercase">Blog Not Found</h1>
                        </div>
                    </div>
                </div>
                <div className="my-20 w-4/5 mx-auto text-center">
                    <p className="text-xl mb-8">The blog post you are looking for does not exist.</p>
                    <Link
                        href="/blog"
                        className={`${roboto.className} border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-6 text-[#85E408] hover:text-black transition-all duration-300 uppercase font-medium`}
                    >
                        Back to Blog
                    </Link>
                </div>
            </>
        );
    }

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <>
            <div className="flex flex-row w-full min-h-[500px] relative">
                <div className="w-3/5 relative bg-black">
                    <Image src={post.primaryImage} alt={post.title} fill className="object-cover" />
                </div>

                <div className="w-2/5 bg-black z-10">
                    <div className="bg-[#85E408] text-center w-full max-w-none px-12 py-24 flex flex-col gap-5 -ms-24 my-24 ">
                        <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                            {post.title}
                        </h1>
                        <p className={`${montserrat.className} items-center flex justify-center font-medium`}>
                            <svg aria-hidden="true" className="inline mr-2 w-4 h-4" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>
                            {formattedDate}
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-16 w-4/5 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <article className={`${roboto.className} prose prose-lg max-w-none`}>
                            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                        </article>

                        <div className="bg-black my-10 rounded-xl">
                            <div className="w-full mx-auto p-4">
                                <div className="flex items-stretch">
                                    <div className="flex-1">
                                        {prevPost ? (
                                            <Link href={`/blog/${prevPost.slug}`} className="flex items-center gap-4 group h-full">
                                                <span className="text-white text-2xl group-hover:text-[#85E408] transition-colors">‹</span>
                                                <div className="flex flex-col gap-1">
                                                    <span className={`${montserrat.className} text-white text-xs uppercase tracking-wider`}>Previous</span>
                                                    <span className={`${roboto.className} text-white group-hover:text-[#85E408] transition-colors text-sm line-clamp-1`}>
                                                        {prevPost.title}
                                                    </span>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>

                                    <div className="w-px bg-gray-600 mx-8"></div>

                                    <div className="flex-1 text-right">
                                        {nextPost ? (
                                            <Link href={`/blog/${nextPost.slug}`} className="flex items-center justify-end gap-4 group h-full">
                                                <div className="flex flex-col gap-1">
                                                    <span className={`${montserrat.className} text-white text-xs uppercase tracking-wider`}>Next</span>
                                                    <span className={`${roboto.className} text-white group-hover:text-[#85E408] transition-colors text-sm line-clamp-1`}>
                                                        {nextPost.title}
                                                    </span>
                                                </div>
                                                <span className="text-white text-2xl group-hover:text-[#85E408] transition-colors">›</span>
                                            </Link>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {relatedPosts.length > 0 && (
                        <aside className="lg:w-1/3 bg-[#85E408] p-6 rounded-md">
                            <div className="">
                                <h2 className={`${montserrat.className} font-bold text-xl uppercase mb-6 pb-3 border-b-2 border-black`}>
                                    Latest news
                                </h2>
                                <BlogSidebarCarousel posts={relatedPosts} />
                            </div>
                        </aside>
                    )}
                </div>
            </div>

            <Marquee text="TOOLBOX. MEASUREMENT. POWER TOOLS. SAW. WELDING.<br /> CORDLESS." />
        </>
    );
}
