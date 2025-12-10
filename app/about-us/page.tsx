import { Montserrat } from "next/font/google";
import ProductHeroSection from "../../components/ProductHeroSection";
import MissionSwiper from "../../components/MissionSwiper";
import { Metadata } from "next";
import Image from "next/image";
import AboutUsCarousel from "../../components/AboutUsCarousel";
import Marquee from "@/components/Marquee";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "About Us - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

export default function AboutUsPage() {
    const features = [
        {
            id: 1,
            title: "UNMATCHED DURABILITY",
            description: "Our tools are made from premium-grade materials to withstand rigorous use.",
            icon: <svg aria-hidden="true" className="w-10 h-10" fill="#85e408" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"></path></svg>,
            variant: "dark",
        },
        {
            id: 2,
            title: "INNOVATIVE DESIGN",
            description: "We embrace cutting-edge technology and user-centric designs to ensure functionality and ease of use.",
            icon: <svg aria-hidden="true" className="w-10 h-10" fill="#000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"></path></svg>,
            variant: "light",
        },
        {
            id: 3,
            title: "GLOBAL STANDARDS",
            description: "Every product meets or exceeds international quality standards, reflecting our commitment to excellence.",
            icon: <svg aria-hidden="true" className="w-10 h-10" fill="#000" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg>,
            variant: "light",
        },
        {
            id: 4,
            title: "TRUSTED BY PROFESSIONALS",
            description: "Tekiro is the preferred choice of mechanics, technicians, and enthusiasts worldwide.",
            icon: <svg aria-hidden="true" className="w-10 h-10" fill="#85e408" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M437.252,239.877,384,160V32A32,32,0,0,0,352,0H320a23.982,23.982,0,0,0-13.312,4.031l-25,16.672a103.794,103.794,0,0,1-115.376,0l-25-16.672A23.982,23.982,0,0,0,128,0H96A32,32,0,0,0,64,32V160L10.748,239.877A64,64,0,0,0,0,275.377V480a32,32,0,0,0,32,32H192V288a31.987,31.987,0,0,1,1.643-10.119L207.135,237.4,150.188,66.561A151.579,151.579,0,0,0,224,86.234a151.565,151.565,0,0,0,73.811-19.668L224,288V512H416a32,32,0,0,0,32-32V275.377A64,64,0,0,0,437.252,239.877ZM63.5,272.484a12.01,12.01,0,0,1,17-16.968l15.5,15.5,15.5-15.5a12.01,12.01,0,0,1,17,16.968L112.984,288,128.5,303.516a12.01,12.01,0,0,1-17,16.968L96,304.984l-15.5,15.5a12.01,12.01,0,0,1-17-16.968L79.016,288ZM96,456a40,40,0,1,1,40-40A40,40,0,0,1,96,456ZM359.227,335.785,310.7,336a6.671,6.671,0,0,1-6.7-6.7l.215-48.574A24.987,24.987,0,0,1,331.43,256.1c12.789,1.162,22.129,12.619,22.056,25.419l-.037,5.057,5.051-.037c12.826-.035,24.236,9.275,25.4,22.076A24.948,24.948,0,0,1,359.227,335.785Z"></path></svg>,
            variant: "dark",
        },
    ];
    return (
        <>
            <div className="flex flex-row w-full min-h-[650px] relative">
                <div className="w-3/5 relative bg-black">
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[150%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        src="https://www.youtube.com/embed/XTeLXE6X7Tk?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
                    />
                </div>

                <div className="w-2/5 bg-black z-10">
                    <div className="bg-[#85E408] w-full max-w-none px-12 py-24 flex flex-col gap-5 -ms-24 my-24 ">
                        <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                            ABOUT US
                        </h1>
                        <p className={`${montserrat.className} text-sm w-3/4 font-medium`} >
                            Welcome to Tekiro Tools, a trusted name in the world of professional-grade hand tools since 1995.
                            With over 29 years of expertise, we are committed to delivering innovative, durable, and high-quality tools to
                            meet the diverse needs of professionals and hobbyists alike.
                        </p>
                        <h2 className={`${montserrat.className} text-xl font-semibold uppercase underline underline-offset-8 decoration-[#427402] `}>learn more</h2>
                    </div>
                </div>
            </div>
            <div className="py-20 text-center">
                <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>Tekiro® FOR EVERYTHING & EVERYONE.<br />BELIEVE IN YOUR CHOICE</h1>
            </div>

            <MissionSwiper />

            <div className="py-20  w-full mx-auto max-w-6xl flex flex-col gap-6">
                <div className="flex flex-col gap-5 text-center">
                    <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>WHY CHOOSE TEKIRO?</h1>
                    <p className={`${montserrat.className} text-sm font-medium`} >
                        Our Commitment to Sustainability
                        We are dedicated to building a sustainable future by implementing eco-friendly practices
                        in our manufacturing processes and promoting responsible resource usage.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`
              p-12 rounded-md flex flex-col justify-start h-full gap-4 border-4 border-transparent
              ${feature.variant === 'dark'
                                    ? 'bg-black text-[#85e408] hover:border-[#85e408]'
                                    : 'bg-[#85e408] text-black hover:border-black'
                                }
            `}
                        >
                            <div className="flex">
                                {/* Icon Wrapper */}
                                <div className="w-1/6 p-2.5">
                                    {feature.icon}
                                </div>
                                {/* Title */}
                                <h3 className={`${montserrat.className} text-3xl font-bold uppercase leading-tight w-[300px]`}>
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className={`${montserrat.className} text-sm font-medium ${feature.variant === 'dark' ? 'opacity-90' : 'opacity-100'}`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <ProductHeroSection />

            <div className="py-20  w-full mx-auto max-w-6xl flex flex-col gap-20">
                <div className="flex flex-col gap-5 text-center">
                    <h1 className={`${montserrat.className} font-bold uppercase text-3xl`}>Our Achievements</h1>
                    <p className={`${montserrat.className} text-sm font-medium`} >
                        Tekiro Tools, we take pride in our dedication to excellence, which has been recognized through numerous awards and accolades. These achievements reflect our commitment to providing high-quality, durable, and user-friendly tools that meet the needs of our customers.
                    </p>
                    <p className={`${montserrat.className} text-sm font-medium`} >
                        Our awards are a testament to the trust and loyalty of our customers, as well as our continuous innovation and pursuit of perfection in the hand tools industry. Thank you for being a part of our journey!
                    </p>
                </div>
                <div className="flex w-full items-center justify-between">
                    <Image src="/digital-top-brands.webp" width={800} height={800} alt="digital top brands" className="h-28 w-28 object-cover" />
                    <Image src="/brand-choice-award.webp" width={800} height={800} alt="brand choice" className="h-28 w-28 object-cover" />
                    <Image src="/top-brands.webp" width={800} height={800} alt="top brands" className="h-28 w-28 object-cover" />
                    <Image src="/top-pt.webp" width={800} height={800} alt="top pt" className="h-28 w-28 object-cover" />
                    <Image src="/super-brands.webp" width={800} height={800} alt="super brands" className="h-28 w-28 object-cover" />
                    <Image src="/brand-champion.webp" width={800} height={800} alt="brand champion" className="h-28 w-28 object-cover" />
                </div>
            </div>

            <AboutUsCarousel />
            <Marquee text="TOOLBOX. MEASUREMENT. POWER TOOLS. SAW. WELDING.<br /> CORDLESS." />
        </>
    )
}