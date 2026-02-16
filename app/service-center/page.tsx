"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const serviceCenters = [
  {
    name: "SERVICE CENTER JAKARTA (MUARA BARU)",
    content: "GANG MARLINA NO.12 B MUARA BARU – TLP / Whatsapp 0811-1919-9043",
  },
  {
    name: "SERVICE CENTER LTC JAKARTA",
    content:
      "LINDETEVES TRADE CENTER LANTAI GF 2 BLOK C 27 NO. 7/8 JAKARTA – TLP / Whatsapp 0811-1921-6644",
  },
  {
    name: "SERVICE CENTER BANDUNG",
    content: "JL. LENGKONG KECIL NO. 30 B – TLP / Whatsapp 0811-1921-6645",
  },
  {
    name: "SERVICE CENTER SURABAYA",
    content:
      "JL. PLOSO TIMUR VA NO 47 KEL. PLOSO, KEC. TAMBAKSARI SURABAYA, JAWA TIMUR 60133 / WHATSAPP : 081119216647",
  },
  {
    name: "SERVICE CENTER SEMARANG",
    content:
      "JLN. DR CIPTO NO. 6B RW 05 KEL BUGANGAN, KEC SEMARANG TIMUR 50123 – TLP / Whatsapp 0811-1921-6646 ",
  },
  {
    name: "SERVICE CENTER BALI",
    content:
      "JL. GATOT SUBROTO NO.244 RT 000 / RW 00 KEL TONJA – TLP / Whatsapp 0811-1921-6651",
  },
  {
    name: "SERVICE CENTER SAMARINDA",
    content:
      "JL.AHMAD YANI NO 6 SUNGAI PINANG DALAM KEL.TEMINDUNG PERMAI, KEC. SUNGAI PINANG KOTA SAMARINDA, KALIMANTAN TIMUR, 75117 / WHATSAPP : 081119216648",
  },
  {
    name: "SERVICE CENTER BANJARMASIN",
    content:
      "JLN. SOETOYO S NO.155 RT034/003 KEL TELUK DALAM, KEC BANJARMASIN TENGAH – TLP / Whatsapp 0811-1921-6649",
  },
  {
    name: "SERVICE CENTER PONTIANAK",
    content:
      "JL. TANJUNG PURA NO.206A RT.004/03, BENUA MELAYU LAUT, PONTIANAK SELATAN – TLP / Whatsapp 0811-1921-6650",
  },
  {
    name: "SERVICE CENTER MEDAN",
    content:
      "JL.PANDU NO 10 KEL : AUR KEC : MEDAN MAIMUN, MEDAN, SUMATERA UTARA – TLP / Whatsapp 0811-1921-6639 ",
  },
  {
    name: "SERVICE CENTER PEKANBARU",
    content: "JL. KURAS NO. 3 C PEKANBARU – TLP / Whatsapp 0811-1921-6640 ",
  },
  {
    name: "SERVICE CENTER LAMPUNG",
    content:
      "JL. IKAN TENGGIRI NO.124 LK II RT 023/PESAWAHAN, TELUK BETUNG SELATAN, BANDAR LAMPUNG – TLP / Whatsapp 0811-1921-6643",
  },
  {
    name: "SERVICE CENTER PALEMBANG",
    content:
      "JL.A ROZAK LORONG SUKARAME NO.56 G RT 06 RW 04 KEL/KEC : KALIDONI PALEMBANG, SUMATERA SELATAN 30114 – TLP / Whatsapp 0811-1921-6642 ",
  },
  {
    name: "SERVICE CENTER MAKASSAR",
    content:
      "JL. SUMBA NO.15 A, KEL PATTUNUANG KEC WAJO MAKASSAR -TLP / Whatsapp 0811-1921-6652",
  },
  {
    name: "SERVICE CENTER MANADO",
    content:
      "JL. LUMIMUUT NO 43,MAHAKERET TIMUR KEC.WENANG,KOTA MANADO SULUT,95112 – TLP / Whatsapp 0811-1921-6653  ",
  },
  {
    name: "SERVICE CENTER JAMBI",
    content:
      "Jl. HOS COKROAMINOTO, NO. 26 SIMPANG KAWAT, KOTA BARU, PAYO LEBAR, JELUTUNG, KECAMATAN JELUTUNG, KOTA JAMBI, JAMBI 36135 (SEBELAH YOSSI MANDIRI TRAVEL) – TLP / Whatsapp 0811-1921-6641",
  },
];

export default function ServiceCenter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`${montserrat.className} container mx-auto px-4 py-16`}>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Service Center
      </h1>

      <div className="max-w-4xl mx-auto">
        {serviceCenters.map((center, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b-2">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between py-5 px-4 transition-colors cursor-pointer"
              >
                <span
                  className={`font-bold text-sm md:text-base tracking-wide text-left transition-colors duration-300 uppercase ${
                    isOpen ? "text-[#72BD5A]" : "text-black"
                  }`}
                >
                  {center.name}
                </span>
                {/* Navigation arrow icon */}
                <svg
                  className="w-5 h-5 shrink-0 ml-4 transition-colors duration-300"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-6 text-sm md:text-base">
                  {center.content || "Content coming soon."}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
