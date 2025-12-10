"use client"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export default function Footer() {
    const pathname = usePathname();

    const sitemapLinks = [
        { label: "E-CATALOGUE", href: "/e-catalogue" },
        { label: "WHERE TO BUY", href: "/where-to-buy" },
        { label: "CONTACT", href: "/contact" },
        { label: "INTERNATIONAL", href: "/international" },
    ];

    return (
        <footer className={`${montserrat.className} w-full bg-[#85E408] text-black font-sans`}>
            <div className="max-w-[1440px] mx-auto px-6 py-12 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Image src="/logo-navbar.webp" alt="tekiro" width={150} height={100} />
                        </div>

                        <p className="text-sm font-medium leading-relaxed max-w-sm mb-8">
                            <span className="font-bold">
                                TEKIRO Tools
                            </span> is a trusted brand for high-quality hand tools product which provides wide range of product selections from industrial to home-use.
                        </p>
                    </div>

                    <div className="text-sm font-bold mt-auto">
                        TEKIRO® 2025 – ALL RIGHTS RESERVED.
                    </div>
                </div>

                {/* Column 2: Sitemap */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-6">SITEMAP & SUPPORT</h3>
                    <ul className="flex flex-col gap-4 font-bold text-base">
                        {sitemapLinks.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`inline-block pb-1 border-b-2 transition-colors ${isActive ? "border-white text-white" : "border-transparent hover:border-white hover:text-white"}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Column 3: Store & Socials */}
                <div>
                    {/* Official Store Section */}
                    <h3 className="text-xl font-bold mb-6">OFFICIAL STORE</h3>
                    <div className="flex items-center gap-4 mb-10">
                        {/* Icon 1 (Mascot placeholder) */}
                        <Image src="/monotaro.png" alt="monotaro" width={40} height={40} />

                        {/* Icon 2 (Lazada - Heart/L placeholder) */}
                        <Image src="/lazada.png" alt="lazada" width={40} height={40} />

                        {/* Icon 3 (Tokopedia - Green Owl/Bird placeholder) */}
                        <Image src="/tokopedia.png" alt="tokopedia" width={40} height={40} />

                        {/* Icon 4 (Shopee - Orange Bag placeholder) */}
                        <Image src="/shopee.webp" alt="shopee" width={40} height={40} />
                    </div>

                    {/* Follow Us Section */}
                    <h3 className="text-xl font-bold mb-6">FOLLOW US</h3>
                    <div className="flex items-center gap-4">
                        {/* Facebook */}
                        <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#427402]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </Link>

                        {/* Instagram */}
                        <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#427402]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>

                        {/* YouTube */}
                        <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#427402]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </Link>

                        {/* TikTok */}
                        <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                            <svg className="h-6 w-6 text-[#427402]" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok</title> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </g></svg>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Bottom Black Strip */}
            <div className="w-full h-8 bg-black"></div>
        </footer>
    )
}
