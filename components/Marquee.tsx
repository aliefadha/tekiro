"use client"

import { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

interface MarqueeProps {
    text: string;
    direction?: "left" | "right";
    repeatCount?: number;
}

export default function Marquee({
    text = "TOOLBOX. MEASUREMENT. POWER TOOLS. SAW. WELDING.<br /> CORDLESS.",
    direction = "left",
    repeatCount = 10
}: MarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const distance = window.scrollY * 0.4;
            if (marqueeRef.current) {
                marqueeRef.current.style.setProperty("--marquee-shift", `${distance}px`);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const textLines = text.split("<br />");

    return (
        <div
            ref={marqueeRef}
            className="bg-black py-4 marquee"
        >
            <div className={`marquee-track track-${direction}`}>
                {[...Array(repeatCount)].map((_, idx) => (
                    <span
                        key={`${direction}-${idx}`}
                        className={`${montserrat.className} font-semibold uppercase text-base lg:text-4xl text-center text-white`}
                    >
                        {textLines.map((line, lineIdx) => (
                            <span key={`${idx}-${lineIdx}`}>
                                {line}
                                {lineIdx < textLines.length - 1 && <br />}
                            </span>
                        ))}
                    </span>
                ))}
            </div>
        </div>
    );
}