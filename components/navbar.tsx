"use client";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Product", href: "/product" },
        { label: "Gallery", href: "/gallery" },
        { label: "Cordless", href: "/cordless" },
        { label: "E-catalogue", href: "/e-catalogue" },
        { label: "Blog", href: "/blog" },
        { label: "About Us", href: "/about-us" },
    ];

    const contactChildren = [
        { label: "Customer Care Contact", href: "/contact" },
        { label: "Altama E Care", href: "https://play.google.com/store/apps/details?id=id.co.carepoint" },
        { label: "Where to Buy", href: "/where-to-buy" },
        { label: "International", href: "/international" },
    ];

    const isPathActive = (href: string) =>
        pathname === href || (href !== "/" && pathname.startsWith(href));

    const isContactActive = contactChildren.some((child) => isPathActive(child.href));

    return (
        <header className="w-full sticky top-0  z-50">
            <div className={`${montserrat.className} font-medium w-full bg-[#85E408] text-center  text-black p-2.5`}>
                <h1>OFFICIAL TEKIRO WEBSITE</h1>
            </div>
            <nav className={`${roboto.variable} z-20 relative w-full bg-black text-white`}>
                <div className="max-w-[1400px] mx-auto px-10 h-28 flex items-center justify-between gap-12">

                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo-navbar.webp" alt="tekiro" width={150} height={100} className="grayscale invert" />
                    </Link>

                    <div className="flex-1 flex items-center">
                        <div className="flex items-start gap-6 font-bold">
                            <ul className="flex items-start gap-6">
                                {navItems.map((item) => {
                                    const active = isPathActive(item.href);
                                    return (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                aria-current={active ? "page" : undefined}
                                                className={`relative inline-block pt-0.5 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:transition-transform after:duration-300 after:ease-out ${active
                                                    ? "mb-2 after:bg-white after:scale-x-100 after:origin-center"
                                                    : "after:bg-white after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-right"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="relative group">
                                <Link
                                    href="/contact"
                                    aria-current={isContactActive ? "page" : undefined}
                                    className={`relative inline-flex items-center gap-1 pt-0.5 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:transition-transform after:duration-300 after:ease-out ${isContactActive
                                        ? "after:bg-white after:scale-x-100 after:origin-center"
                                        : "after:bg-white after:scale-x-0 after:origin-right group-hover:after:scale-x-100 group-hover:after:origin-right"
                                        }`}
                                >
                                    Contact
                                    <ChevronDown size={18} />
                                </Link>
                                <div className="absolute left-0 top-full w-56 bg-white border border-[#1f1f1f] z-10 shadow-xl opacity-0 pointer-events-none transition-all duration-200 ease-out translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
                                    <ul className="flex flex-col gap-2 text-sm font-medium">
                                        {contactChildren.map((child) => (
                                            <li key={child.label} className=" py-3 px-4 text-[#427402] hover:bg-[#33373d] hover:text-white transition-colors duration-150">
                                                <Link
                                                    href={child.href}
                                                    className={`${roboto.className}`}
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex gap-2 h-10">
                            <input type="text" placeholder="Search products" className="bg-white h-full px-4 w-32 text-gray-700 outline-none placeholder-gray-400 text-xs" />
                            <button className="h-full bg-[#333333] px-2.5 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                                <Search />
                                Search
                            </button>
                        </div>

                        <Link href="/where-to-buy" className="hover:text-gray-300">
                            <MapPin />
                        </Link>

                        <Link href="/contact" className="hover:text-gray-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"></path></svg>
                        </Link>

                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#85E408]"></div>
            </nav>
        </header>
    )
}
