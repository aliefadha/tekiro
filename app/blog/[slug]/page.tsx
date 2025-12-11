import BlogSidebarCarousel from "@/components/BlogSidebarCarousel";
import Marquee from "@/components/Marquee";
import { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
});

const blogPosts = [
    {
        id: "1",
        imageSrc: "/blog-1.webp",
        imageAlt: "Tekiro Mechanic Competition",
        title: "Tekiro Berkolaborasi dengan Direktorat SMK Kemendikdasmen RI Luncurkan Tekiro Mechanic Competition 2026 se-Indonesia",
        date: "10 November 2025",
        author: "Tekiro Team",
        content: `Dalam upaya akselerasi peningkatan kualitas pendidikan vokasi nasional, Tekiro bersama Direktorat Sekolah Menengah Kejuruan (SMK) Kementerian Pendidikan Dasar dan Menengah Republik Indonesia resmi meluncurkan program Tekiro Mechanic Competition 2026.

Program ini dirancang untuk memberikan wadah bagi siswa-siswi SMK jurusan otomotif di seluruh Indonesia untuk mengasah keterampilan teknis mereka menggunakan peralatan berstandar industri. Kompetisi ini akan diselenggarakan secara bertahap, dimulai dari tingkat regional hingga tingkat nasional.

"Kami sangat bangga dapat berkontribusi dalam pengembangan sumber daya manusia Indonesia, khususnya di bidang otomotif. Melalui kompetisi ini, kami berharap dapat melahirkan teknisi-teknisi handal yang siap bersaing di dunia kerja," ujar perwakilan dari Tekiro.

Tekiro Mechanic Competition 2026 tidak hanya bertujuan untuk menguji kemampuan teknis para peserta, tetapi juga memberikan pengalaman langsung dalam menggunakan perkakas berkualitas tinggi yang biasa digunakan di industri otomotif profesional.`,
    },
    {
        id: "2",
        imageSrc: "/blog-2.webp",
        imageAlt: "CNN Awards 2025",
        title: "Tekiro Raih Penghargaan Bergengsi \"Trusted National Brand in Automotive and Industrial Tools\" di CNN Awards 2025",
        date: "3 November 2025",
        author: "Tekiro Team",
        content: `Jakarta, 3 November 2025. Tekiro Tools, merek perkakas otomotif dan industrial terkemuka di Indonesia, berhasil meraih penghargaan bergengsi "Trusted National Brand in Automotive and Industrial Tools" pada ajang CNN Indonesia Awards 2025.

Penghargaan ini diberikan atas dedikasi Tekiro dalam menyediakan produk perkakas berkualitas tinggi yang telah dipercaya oleh masyarakat Indonesia selama bertahun-tahun. Penilaian dilakukan berdasarkan survei konsumen, kualitas produk, dan kontribusi merek terhadap industri nasional.

"Penghargaan ini merupakan bukti kepercayaan masyarakat Indonesia terhadap produk Tekiro. Kami berkomitmen untuk terus memberikan yang terbaik dan menjadi mitra terpercaya dalam setiap pekerjaan," kata perwakilan manajemen Tekiro dalam sambutannya.

Dengan pencapaian ini, Tekiro semakin mengukuhkan posisinya sebagai pemimpin pasar di industri perkakas otomotif dan industrial di Indonesia.`,
    },
    {
        id: "3",
        imageSrc: "/blog-3.webp",
        imageAlt: "Perkakas Handal",
        title: "Perkakas Handal untuk Setiap Kebutuhan – TEKIRO",
        date: "25 Oktober 2025",
        author: "Tekiro Team",
        content: `Dalam pekerjaan sehari-hari, baik di bengkel, rumah, maupun proyek industri, kehadiran alat yang kuat dan presisi adalah hal yang tidak bisa ditawar. Tekiro hadir sebagai solusi lengkap untuk kebutuhan perkakas Anda.

Dengan berbagai lini produk mulai dari hand tools, power tools, hingga cordless equipment, Tekiro menawarkan kualitas yang sudah teruji dan dipercaya oleh profesional di seluruh Indonesia. Setiap produk dirancang dengan standar tinggi untuk memastikan durabilitas dan performa optimal.

Keunggulan produk Tekiro:
• Material berkualitas tinggi dengan finishing premium
• Desain ergonomis untuk kenyamanan penggunaan
• Presisi tinggi untuk hasil kerja yang akurat
• Garansi kualitas yang terjamin

Tekiro berkomitmen untuk terus berinovasi dan menghadirkan solusi perkakas terbaik bagi konsumen Indonesia. Dengan motto "Believe In Your Choice", Tekiro yakin bahwa setiap pilihan Anda adalah pilihan yang tepat.`,
    },
];

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.id === slug);

    return {
        title: post ? `${post.title} - Tekiro Blog` : "Blog - Tekiro",
        description: post?.content.substring(0, 160) || "Read the latest news and updates from Tekiro",
    };
}

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const currentIndex = blogPosts.findIndex((p) => p.id === slug);
    const post = blogPosts[currentIndex];

    // Get previous and next posts
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    // Get related posts (excluding current post)
    const relatedPosts = blogPosts.filter((p) => p.id !== slug).slice(0, 2);

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

    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-row w-full min-h-[500px] relative">
                <div className="w-3/5 relative bg-black">
                    <Image src={post.imageSrc} alt={post.imageAlt} fill className="object-cover" />
                </div>

                <div className="w-2/5 bg-black z-10">
                    <div className="bg-[#85E408] text-center w-full max-w-none px-12 py-24 flex flex-col gap-5 -ms-24 my-24 ">
                        <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                            {post.title}
                        </h1>
                        <p className={`${montserrat.className} items-center flex justify-center font-medium`}>
                            <svg aria-hidden="true" className="inline mr-2 w-4 h-4" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>
                            {post.date}
                        </p>
                    </div>
                </div>
            </div>
            {/* Blog Content with Sidebar */}
            <div className="my-16 w-4/5 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Article Content */}
                        <article className={`${roboto.className} prose prose-lg max-w-none`}>
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </article>

                        <div className="bg-black my-10 rounded-xl">
                            <div className="w-full mx-auto p-4">
                                <div className="flex items-stretch">
                                    {/* Previous Post */}
                                    <div className="flex-1">
                                        {prevPost ? (
                                            <Link href={`/blog/${prevPost.id}`} className="flex items-center gap-4 group h-full">
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

                                    {/* Divider */}
                                    <div className="w-px bg-gray-600 mx-8"></div>

                                    {/* Next Post */}
                                    <div className="flex-1 text-right">
                                        {nextPost ? (
                                            <Link href={`/blog/${nextPost.id}`} className="flex items-center justify-end gap-4 group h-full">
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

                    {/* Related Posts Sidebar */}
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
