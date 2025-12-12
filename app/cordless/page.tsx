import { Metadata } from "next";
import CordlessCarousel, { CordlessProduct } from "../../components/CordlessCarousel";
import ProductImageCarousel from "../../components/ProductImageCarousel";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Marquee from "@/components/Marquee";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Cordless - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
};

const cordlessProducts: CordlessProduct[] = [
    {
        id: 1,
        title: "IMPACT WRENCH CORDLESS 1/2\" XV BRUSHLESS 20V",
        description: "This product is designed to quickly and powerfully tighten and loosen bolts. Since it is cordless and powered by a battery, it is more convenient to use and eliminates the need to search for a power source.",
        videoUrl: "https://www.youtube.com/embed/RnAEaZqy_uw?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
    },
    {
        id: 2,
        title: "DRILL CORDLESS 1/2\" XV BRUSHLESS 20V",
        description: "Professional-grade cordless drill designed for precision drilling and screwdriving tasks. Features brushless motor technology for longer battery life and increased torque output.",
        videoUrl: "https://www.youtube.com/embed/RnAEaZqy_uw?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
    },
    {
        id: 3,
        title: "ANGLE GRINDER CORDLESS 4-1/2\" XV BRUSHLESS 20V",
        description: "Powerful cordless angle grinder for cutting and grinding applications. Compact design with ergonomic handle for comfortable extended use during heavy-duty tasks.",
        videoUrl: "https://www.youtube.com/embed/RnAEaZqy_uw?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1"
    }
];

export default function CordlessPage() {
    return (
        <>
            <CordlessCarousel products={cordlessProducts} />
            <div className="p-5 lg:p-24 flex flex-col gap-10">
                <h2 className={`${montserrat.className} font-semibold uppercase lg:text-5xl text-2xl text-center`}>our product</h2>
                <ProductImageCarousel images={["/torque-1.webp", "/torque-1.webp", "/torque-1.webp", "/torque-1.webp", "/torque-1.webp", "/torque-1.webp"]} />
            </div>
            <div>
                <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] relative">
                    <div className="w-full md:w-2/5 bg-black z-10 md:h-full flex flex-col justify-center p-4 md:p-0">
                        <div className="bg-[#85E408] w-full md:w-3/4 p-6 md:p-12 flex flex-col gap-5 md:ms-96" data-aos="fade-right">
                            <h1 className={`${montserrat.className} font-bold uppercase text-2xl md:text-3xl`}>
                                EXTREME POWER TO BRAKE YOUR HARD WORK
                            </h1>
                            <p className={`${montserrat.className} text-sm font-medium`}>
                                Tekiro Tools delivers extreme power designed to help you tackle heavy-duty tasks with
                                greater efficiency and precision. Built for durability and outstanding performance, our tools make tough
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
                <div className="bg-[#EBF8F3]">
                    <div className="w-full h-56">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/kQ_MKlb1NXc??controls=0&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ftekiro.com&widgetid=3&forigin=https%3A%2F%2Ftekiro.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Ftekiro.com%2Fcontact%2F&vf=1" />
                    </div>
                    <div className="p-10 text-center gap-5 flex flex-col">
                        <h2 className={`${montserrat.className} font-bold uppercase text-2xl`}>CORDLESS STEPLER NAILER TEKIRO 20V</h2>
                        <p className={`${montserrat.className} text-sm pb-12`}>
                            The Cordless Stapler-Nailer Gun is widely used in the woodworking industry, furniture making, wooden frame assembly,
                            wooden pallets, DIY crafts, and by construction workers. With cordless technology powered by a battery,
                            this tool makes tasks lighter, more flexible, and easier to transport to various work locations without being limited by the
                            distance to a power source or the risk of tripping over cords or hoses.
                        </p>
                    </div>
                </div>

                <div className="bg-[#EBF8F3]">
                    <div className="w-full h-56">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/rNzRgakHifM?controls=0&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ftekiro.com&widgetid=3&forigin=https%3A%2F%2Ftekiro.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Ftekiro.com%2Fcontact%2F&vf=1" />
                    </div>
                    <div className="p-10 text-center gap-5 flex flex-col">
                        <h2 className={`${montserrat.className} font-bold uppercase text-2xl`}>TEKIRO CORDLESS HAMMER DRILL CV 10 MM 12 V</h2>
                        <p className={`${montserrat.className} text-sm pb-12`}>
                            The 12V Cordless Hammer Drill operates at a voltage of 12 volts, features a 2 Ah battery capacity, and supports a maximum drill
                            bit size of 10 mm. It also offers 2 speed modes, allowing you to adjust it to suit your needs.
                        </p>
                    </div>
                </div>

                <div className="bg-[#EBF8F3]">
                    <div className="w-full h-56">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/czU-yHhMfs0?controls=0&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ftekiro.com&widgetid=3&forigin=https%3A%2F%2Ftekiro.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Ftekiro.com%2Fcontact%2F&vf=1" />
                    </div>
                    <div className="p-10 text-center gap-5 flex flex-col">
                        <h2 className={`${montserrat.className} font-bold uppercase text-2xl`}>TEKIRO CORDLESS HAMMER DRILL XV 13 MM BRUSHLESS 20 V</h2>
                        <p className={`${montserrat.className} text-sm pb-12`}>
                            Specifically designed to help you complete tasks efficiently, it offers the durability and performance
                            required by professionals to support their work.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}