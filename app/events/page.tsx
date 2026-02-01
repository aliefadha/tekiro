"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// FAQ Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Siapa yang dapat mengikuti TMC 2026?",
      answer: "Siswa aktif SMK program keahlian teknik sepeda motor.",
    },
    {
      question: "Apakah pendaftaran berbayar?",
      answer: "Tidak, pendaftaran TMC 2026 sepenuhnya gratis.",
    },
    {
      question: "Berapa jumlah peserta dari satu sekolah?",
      answer: "Setiap sekolah dapat mengirimkan maksimal 3 peserta.",
    },
    {
      question: "Di mana pelaksanaan final nasional?",
      answer:
        "Lokasi final nasional akan diumumkan setelah seleksi tahap 3 selesai.",
    },
  ];

  return (
    <div className={`${montserrat.className} container mx-auto px-4 py-16`}>
      <h2 className="text-3xl font-bold mb-12 text-center uppercase">
        FREQUENTLY ASKED QUESTIONS
        <div className="w-32 h-1 bg-[#85E408] mx-auto mt-2"></div>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 border-black">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full bg-black text-white px-6 py-4 flex items-center justify-between hover:bg-gray-900 transition-colors"
            >
              <span className="font-semibold text-left">{faq.question}</span>
              <div className="w-8 h-8 bg-[#85E408] flex items-center justify-center shrink-0 ml-4">
                <span className="text-black text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="bg-white px-6 py-4 border-t-2 border-black">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <div className="min-h-[500px] w-full bg-black relative overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[150%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/bT63Ag44sFo?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1"
          title="Tekiro Mechanic Competition 2025"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="relative">
        <div
          className={`${montserrat.className} container mx-auto px-4 pb-16 pt-10 md:pt-18 md:pb-24`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="/tmc2026.webp"
              alt="Events"
              width={600}
              height={600}
              className="mx-auto"
            />
            <h1 className="text-3xl font-bold mb-4">
              TEKIRO MECHANIC COMPETITION 2026
            </h1>
            <p className="font-roboto mb-8">
              Kompetisi Keahlian Teknik Sepeda Motor untuk
              <br />
              Siswa SMK se-Indonesia
            </p>
            <a
              href="https://drive.google.com/file/d/1tj8MHYpSomBInaj2HNGOH03AkeJNTQU5/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#85E408] hover:bg-[#6BC206] text-black font-bold px-8 py-3 inline-flex items-center gap-4 transition-colors"
            >
              Download Panduan
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.44141 1.14258L8.30859 0.275391C8.67578 -0.0917969 9.26953 -0.0917969 9.63281 0.275391L17.2266 7.86523C17.5938 8.23242 17.5938 8.82617 17.2266 9.18945L9.63281 16.7832C9.26562 17.1504 8.67188 17.1504 8.30859 16.7832L7.44141 15.916C7.07031 15.5449 7.07812 14.9395 7.45703 14.5762L12.1641 10.0918H0.9375C0.417969 10.0918 0 9.67383 0 9.1543V7.9043C0 7.38477 0.417969 6.9668 0.9375 6.9668H12.1641L7.45703 2.48242C7.07422 2.11914 7.06641 1.51367 7.44141 1.14258Z"
                  fill="#121212"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={`${montserrat.className} container mx-auto px-4 py-16`}>
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            TEKIRO MECHANIC COMPETITION 2026
          </h2>
          <div className="w-full h-[2px] bg-black"></div>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-black p-3 group cursor-pointer">
            <div className="relative h-[180px] overflow-hidden mb-4">
              <Image
                src="/event-1.webp"
                alt="Press Conference"
                fill
                className="object-cover transition-transform"
              />
            </div>
            <p className="text-[#85E408] text-sm font-medium px-3 pb-3">
              Meningkatkan kompetensi siswa SMK di bidang teknik sepeda motor.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black p-3 group cursor-pointer">
            <div className="relative h-[180px] overflow-hidden mb-4">
              <Image
                src="/event-2.webp"
                alt="Workshop"
                fill
                className="object-cover transition-transform"
              />
            </div>
            <p className="text-[#85E408] text-sm font-medium px-3 pb-3">
              Menjadi wadah adu keterampilan antar sekolah secara sehat dan
              profesional.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black p-3 group cursor-pointer">
            <div className="relative h-[180px] overflow-hidden mb-4">
              <Image
                src="/event-3.webp"
                alt="Participants"
                fill
                className="object-cover transition-transform"
              />
            </div>
            <p className="text-[#85E408] text-sm font-medium px-3 pb-3">
              Mendorong kolaborasi antara industri dan dunia pendidikan.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-black p-3 group cursor-pointer">
            <div className="relative h-[180px] overflow-hidden mb-4">
              <Image
                src="/event-4.webp"
                alt="Training"
                fill
                className="object-cover transition-transform"
              />
            </div>
            <p className="text-[#85E408] text-sm font-medium px-3 pb-3">
              Membantu sekolah memetakan kemampuan peserta didiknya.
            </p>
          </div>
        </div>

        {/* Green CTA Section */}
        <div className="bg-[#85E408] py-16 px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 uppercase">
            KESERUAN TEKIRO MECHANIC COMPETITION 2025
          </h2>
          <Link
            href="https://youtu.be/IB6vJUaDbD0?si=sb6Nu87AAbFFwXZO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white font-bold px-8 py-3 hover:bg-gray-900 transition-colors"
          >
            Lihat Selengkapnya
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.44141 1.14258L8.30859 0.275391C8.67578 -0.0917969 9.26953 -0.0917969 9.63281 0.275391L17.2266 7.86523C17.5938 8.23242 17.5938 8.82617 17.2266 9.18945L9.63281 16.7832C9.26562 17.1504 8.67188 17.1504 8.30859 16.7832L7.44141 15.916C7.07031 15.5449 7.07812 14.9395 7.45703 14.5762L12.1641 10.0918H0.9375C0.417969 10.0918 0 9.67383 0 9.1543V7.9043C0 7.38477 0.417969 6.9668 0.9375 6.9668H12.1641L7.45703 2.48242C7.07422 2.11914 7.06641 1.51367 7.44141 1.14258Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className={`${montserrat.className} container mx-auto px-4 py-16`}>
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            TIMELINE TEKIRO MECHANIC COMPETITION 2026
          </h2>
        </div>

        {/* Timeline Grid - Scrollable Container */}
        <div className="overflow-x-auto pb-4">
          <div className="relative max-w-6xl mx-auto h-[500px] min-w-[800px]">
            {/* Grid Background */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0 opacity-20 border-t border-black">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border-x border-black"></div>
              ))}
            </div>

            {/* Timeline Items - Overlapping */}
            <div className="relative h-full">
              {/* Step 1 */}
              <div className="absolute top-[10%] left-0 bg-[#85E408] px-6 py-4 font-semibold text-black z-10">
                Pengumuman kompetisi
              </div>

              {/* Step 2 */}
              <div className="absolute top-[22%] left-[10%] bg-[#85E408] px-6 py-4 font-semibold text-black z-10">
                Masa pendaftaran sekolah
              </div>

              {/* Step 3 */}
              <div className="absolute top-[34%] left-[25%] bg-[#85E408] px-6 py-4 font-semibold text-black z-10">
                Seleksi Tahap 1 – Administrasi
              </div>

              {/* Step 4 */}
              <div className="absolute top-[46%] left-[40%] bg-[#85E408] px-6 py-4 font-semibold text-black z-10">
                Seleksi Tahap 2 – Teori
              </div>

              {/* Step 5 */}
              <div className="absolute top-[58%] left-[50%] bg-[#85E408] px-6 py-4 font-semibold text-black z-10">
                Seleksi Tahap 3 – Praktek
              </div>

              {/* Step 6 */}
              <div className="absolute top-[70%] left-[60%] bg-[#85E408] px-6 py-4 font-semibold text-black z-10">
                Final Nasional TMC 2026
              </div>

              {/* Step 7 */}
              <div className="absolute top-[82%] left-[70%] bg-[#85E408] px-6 py-4 font-semibold text-black z-10 whitespace-nowrap">
                Pengumuman pemenang
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mekanisme Pendaftaran */}
      <div className="bg-[#85E408] py-16">
        <div className={`${montserrat.className} container mx-auto px-4`}>
          <h2 className="text-3xl font-bold mb-12 text-center uppercase text-black">
            MEKANISME PENDAFTARAN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Step 1 */}
            <div className="bg-white p-6 relative min-h-[150px]">
              <div className="absolute top-0 left-0 bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="h-full flex items-center justify-center">
                <p className="text-black text-center text-sm">
                  Mengisi formulir pendaftaran resmi
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 relative min-h-[150px]">
              <div className="absolute top-0 left-0 bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="h-full flex items-center justify-center">
                <p className="text-black text-center text-sm">
                  Mengunggah dokumen persyaratan
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 relative min-h-[150px]">
              <div className="absolute top-0 left-0 bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="h-full flex items-center justify-center">
                <p className="text-black text-center text-sm">
                  Mengikuti seluruh tahapan seleksi
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <button className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3 inline-flex items-center gap-3 transition-colors">
              Download Panduan
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.44141 1.14258L8.30859 0.275391C8.67578 -0.0917969 9.26953 -0.0917969 9.63281 0.275391L17.2266 7.86523C17.5938 8.23242 17.5938 8.82617 17.2266 9.18945L9.63281 16.7832C9.26562 17.1504 8.67188 17.1504 8.30859 16.7832L7.44141 15.916C7.07031 15.5449 7.07812 14.9395 7.45703 14.5762L12.1641 10.0918H0.9375C0.417969 10.0918 0 9.67383 0 9.1543V7.9043C0 7.38477 0.417969 6.9668 0.9375 6.9668H12.1641L7.45703 2.48242C7.07422 2.11914 7.06641 1.51367 7.44141 1.14258Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Materi & Tahapan Kompetisi */}
      <div className={`${montserrat.className} container mx-auto px-4 py-16`}>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            MATERI & TAHAPAN KOMPETISI
          </h2>
          <div className="w-full h-[2px] bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Tahap 1 */}
          <div className="bg-black text-white">
            <div className="bg-[#85E408] text-black px-6 py-3 font-bold">
              Tahap 1
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Seleksi Administrasi</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Verifikasi dokumen dan kelengkapan persyaratan.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tahap 2 */}
          <div className="bg-black text-white">
            <div className="bg-[#85E408] text-black px-6 py-3 font-bold">
              Tahap 2
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Tes Teori</h3>
              <p className="text-sm mb-3">
                Meliputi materi dasar teknik, seperti:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Sistem kelistrikan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Dasar mekanika</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Pengenalan komponen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Peralatan kerja</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>(Termasuk penggunaan alat Tekiro)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Keselamatan kerja</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tahap 3 */}
          <div className="bg-black text-white">
            <div className="bg-[#85E408] text-black px-6 py-3 font-bold">
              Tahap 3
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Tes Praktek</h3>
              <p className="text-sm mb-3">
                Penilaian kompetensi secara langsung, seperti:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Troubleshooting sepeda motor</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Maintenance dan perawatan berkala</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Pemeriksaan sistem kelistrikan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#85E408] mt-1">●</span>
                  <span>Pengukuran dan diagnosa teknis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hadiah & Benefit Peserta */}
      <div className="bg-gray-100 py-16">
        <div className={`${montserrat.className} container mx-auto px-4`}>
          <h2 className="text-3xl font-bold mb-12 text-center uppercase">
            HADIAH & BENEFIT PESERTA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#85E408] border border-black flex items-center justify-center mb-4">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.832 26.0007H8.66537V43.334C8.66537 44.4833 9.12191 45.5855 9.93457 46.3981C10.7472 47.2108 11.8494 47.6673 12.9987 47.6673H23.832V26.0007H10.832ZM38.9987 26.0007H28.1654V47.6673H38.9987C40.148 47.6673 41.2502 47.2108 42.0628 46.3981C42.8755 45.5855 43.332 44.4833 43.332 43.334V26.0007H38.9987ZM40.7125 15.1673C41.0276 14.1133 41.1803 13.0174 41.1654 11.9173C41.1654 7.73565 37.7637 4.33398 33.582 4.33398C30.0677 4.33398 27.7212 7.54499 26.2067 11.0182C24.7139 7.73565 22.2482 4.33398 18.4154 4.33398C14.2337 4.33398 10.832 7.73565 10.832 11.9173C10.832 13.2087 11.0032 14.2768 11.2849 15.1673H4.33203V23.834H23.832V19.5007H28.1654V23.834H47.6654V15.1673H40.7125ZM15.1654 11.9173C15.1654 10.1255 16.6235 8.66732 18.4154 8.66732C20.3394 8.66732 22.129 11.9715 23.1777 15.1673H17.332C16.5217 15.1673 15.1654 15.1673 15.1654 11.9173ZM33.582 8.66732C35.3739 8.66732 36.832 10.1255 36.832 11.9173C36.832 15.1673 35.4757 15.1673 34.6654 15.1673H29.2985C30.4035 11.7527 32.009 8.66732 33.582 8.66732Z"
                    fill="#121212"
                  />
                </svg>
              </div>
              <p className="font-medium">
                Juara nasional 1-3
                <br />
                mendapatkan hadiah utama
                <br />
                dari Tekiro.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#85E408] border border-black flex items-center justify-center mb-4">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66537 6.5C6.26037 6.5 4.33203 8.42833 4.33203 10.8333V32.5C4.33203 33.6493 4.78858 34.7515 5.60124 35.5641C6.41389 36.3768 7.51609 36.8333 8.66537 36.8333H25.9987V47.6667L32.4987 41.1667L38.9987 47.6667V36.8333H43.332C44.4813 36.8333 45.5835 36.3768 46.3962 35.5641C47.2088 34.7515 47.6654 33.6493 47.6654 32.5V10.8333C47.6654 9.68406 47.2088 8.58186 46.3962 7.7692C45.5835 6.95655 44.4813 6.5 43.332 6.5H8.66537ZM25.9987 10.8333L32.4987 15.1667L38.9987 10.8333V18.4167L45.4987 21.6667L38.9987 24.9167V32.5L32.4987 28.1667L25.9987 32.5V24.9167L19.4987 21.6667L25.9987 18.4167V10.8333ZM8.66537 10.8333H19.4987V15.1667H8.66537V10.8333ZM8.66537 19.5H15.1654V23.8333H8.66537V19.5ZM8.66537 28.1667H19.4987V32.5H8.66537V28.1667Z"
                    fill="#121212"
                  />
                </svg>
              </div>
              <p className="font-medium">
                Sertifikat peserta untuk seluruh siswa.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#85E408] border border-black flex items-center justify-center mb-4">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 39V34.6667H17.3333V27.95C15.5639 27.5528 13.9844 26.8038 12.5948 25.7032C11.2053 24.6025 10.1848 23.2209 9.53333 21.5583C6.825 21.2333 4.55939 20.0511 2.7365 18.0115C0.913611 15.9719 0.00144444 13.5792 0 10.8333V8.66667C0 7.475 0.424667 6.45522 1.274 5.60733C2.12333 4.75944 3.14311 4.33478 4.33333 4.33333H8.66667V0H30.3333V4.33333H34.6667C35.8583 4.33333 36.8788 4.758 37.7282 5.60733C38.5775 6.45667 39.0014 7.47644 39 8.66667V10.8333C39 13.5778 38.0878 15.9705 36.2635 18.0115C34.4392 20.0525 32.1736 21.2348 29.4667 21.5583C28.8167 23.2194 27.7969 24.6011 26.4073 25.7032C25.0178 26.8053 23.4376 27.5542 21.6667 27.95V34.6667H30.3333V39H8.66667ZM8.66667 16.9V8.66667H4.33333V10.8333C4.33333 12.2056 4.73056 13.4427 5.525 14.5448C6.31945 15.6469 7.36667 16.432 8.66667 16.9ZM30.3333 16.9C31.6333 16.4306 32.6806 15.6448 33.475 14.5427C34.2694 13.4406 34.6667 12.2041 34.6667 10.8333V8.66667H30.3333V16.9Z"
                    fill="#121212"
                  />
                </svg>
              </div>
              <p className="font-medium">
                Trophy dan penghargaan
                <br />
                untuk sekolah.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Benefit 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#85E408] border border-black flex items-center justify-center mb-4">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3853 0.479719C14.0934 -0.218035 16.9418 -0.153534 19.6156 0.666094C22.2894 1.48572 24.6846 3.02857 26.5364 5.12416C28.3883 7.21975 29.6248 9.78651 30.1094 12.5408C30.5939 15.2951 30.3075 18.1298 29.282 20.7316L39.2465 29.1664C40.0022 29.805 40.6171 30.5936 41.0524 31.4821C41.4876 32.3707 41.7337 33.3399 41.7751 34.3285C41.8165 35.3171 41.6522 36.3035 41.2927 37.2253C40.9333 38.1471 40.3864 38.9843 39.6866 39.6838C38.9869 40.3834 38.1496 40.9301 37.2277 41.2894C36.3058 41.6487 35.3194 41.8127 34.3308 41.7712C33.3423 41.7296 32.3731 41.4833 31.4847 41.0478C30.5962 40.6124 29.8078 39.9972 29.1693 39.2414L20.7388 29.2812C18.1367 30.3085 15.3012 30.5961 12.5458 30.1124C9.79047 29.6286 7.22254 28.3923 5.12597 26.5402C3.0294 24.688 1.48586 22.2921 0.666016 19.6175C-0.153832 16.9428 -0.218053 14.0935 0.480454 11.3846C0.578942 11.0039 0.778156 10.6569 1.05715 10.3798C1.33615 10.1028 1.68462 9.90609 2.06594 9.81032C2.44726 9.71455 2.84734 9.72328 3.22412 9.83558C3.6009 9.94789 3.94047 10.1596 4.20712 10.4486L10.8046 17.6137L15.7815 15.7829L17.6166 10.7996L10.4471 4.21289C10.1565 3.94632 9.94326 3.60616 9.83004 3.22839C9.71682 2.85061 9.70779 2.44926 9.80391 2.06678C9.90003 1.68429 10.0977 1.33489 10.3761 1.05553C10.6545 0.776159 11.0031 0.57721 11.3853 0.479719Z"
                    fill="#121212"
                  />
                </svg>
              </div>
              <p className="font-medium">
                Merchandise resmi Tekiro
                <br />
                Tools.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#85E408] border border-black flex items-center justify-center mb-4">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6667 0C9.70667 0 0 9.70667 0 21.6667C0 33.6267 9.70667 43.3333 21.6667 43.3333C33.6267 43.3333 43.3333 33.6267 43.3333 21.6667C43.3333 9.70667 33.6267 0 21.6667 0ZM19.5 38.8483C10.9417 37.7867 4.33333 30.5067 4.33333 21.6667C4.33333 20.3233 4.50667 19.045 4.78833 17.7883L15.1667 28.1667V30.3333C15.1667 32.7167 17.1167 34.6667 19.5 34.6667V38.8483ZM34.45 33.345C33.8867 31.59 32.2833 30.3333 30.3333 30.3333H28.1667V23.8333C28.1667 22.6417 27.1917 21.6667 26 21.6667H13V17.3333H17.3333C18.525 17.3333 19.5 16.3583 19.5 15.1667V10.8333H23.8333C26.2167 10.8333 28.1667 8.88334 28.1667 6.5V5.61167C34.515 8.19 39 14.4083 39 21.6667C39 26.1733 37.2667 30.2683 34.45 33.345Z"
                    fill="#121212"
                  />
                </svg>
              </div>
              <p className="font-medium">
                Kesempatan tampil di publikasi resmi
                <br />
                Tekiro dan Direktorat SMK.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Diselenggarakan Oleh */}
      <div className={`${montserrat.className} container mx-auto px-4 py-16`}>
        <h2 className="text-3xl font-bold mb-12 uppercase">
          DISELENGGARAKAN OLEH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="h-24 flex items-center justify-center text-white relative">
            <Image
              src="/logo-smk.webp"
              alt="logo smk"
              fill
              className="object-contain p-4 transition-transform"
            />

          </div>
          <div className="h-24 flex items-center justify-center text-white relative">
            <Image
              src="/logo-navbar.webp"
              alt="tekiro"
              fill
              className="object-contain p-4 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Kontak Panitia */}
      <div className={`${montserrat.className} container mx-auto px-4 py-16`}>
        <h2 className="text-3xl font-bold mb-12 text-center uppercase border-b-4 border-black pb-2 w-auto mx-auto">
          KONTAK PANITIA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
          {/* Email */}
          <div className="bg-gray-100 p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                  fill="#85E408"
                />
              </svg>

              <span className="font-bold">Email resmi panitia:</span>
            </div>
            <p className="text-sm">tekirotools.indonesia@gmail.com</p>
          </div>

          {/* Contact Person */}
          <div className="bg-gray-100 p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.9415 15.762C9.3285 19.1485 13.4535 21.762 16.8165 21.762C18.3285 21.762 19.6525 21.2345 20.719 20.0625C21.34 19.371 21.727 18.5625 21.727 17.766C21.727 17.18 21.504 16.6175 20.942 16.219L17.3555 13.664C16.805 13.289 16.348 13.1015 15.926 13.1015C15.387 13.1015 14.918 13.4065 14.379 13.9335L13.547 14.754C13.4888 14.813 13.4195 14.8599 13.3432 14.8921C13.2668 14.9243 13.1849 14.941 13.102 14.9415C12.9145 14.9415 12.75 14.8715 12.6215 14.8125C11.9065 14.426 10.6645 13.3595 9.504 12.211C8.3555 11.0625 7.289 9.8205 6.914 9.094C6.83323 8.95062 6.78909 8.78953 6.7855 8.625C6.7855 8.473 6.832 8.32 6.961 8.1915L7.781 7.3365C8.309 6.797 8.6135 6.328 8.6135 5.789C8.6135 5.3675 8.426 4.9105 8.0395 4.3595L5.5195 0.8085C5.1095 0.246 4.5355 0 3.9025 0C3.129 0 2.3205 0.3515 1.641 1.02C0.504 2.11 0 3.457 0 4.945C0 8.3085 2.5665 12.387 5.9415 15.762Z"
                  fill="#85E408"
                />
              </svg>
              <span className="font-bold">Contact person Tekiro:</span>
            </div>
            <p className="text-sm">+62 821 1320 5162</p>
          </div>

          {/* Instagram */}
          <div className="bg-gray-100 p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0286 0C12.1536 0.003 12.7246 0.009 13.2176 0.023L13.4116 0.03C13.6356 0.038 13.8566 0.0479999 14.1236 0.0599999C15.1876 0.11 15.9136 0.278 16.5506 0.525C17.2106 0.779 17.7666 1.123 18.3226 1.678C18.8313 2.17773 19.2248 2.78247 19.4756 3.45C19.7226 4.087 19.8906 4.813 19.9406 5.878C19.9526 6.144 19.9626 6.365 19.9706 6.59L19.9766 6.784C19.9916 7.276 19.9976 7.847 19.9996 8.972L20.0006 9.718V11.028C20.003 11.7574 19.9953 12.4868 19.9776 13.216L19.9716 13.41C19.9636 13.635 19.9536 13.856 19.9416 14.122C19.8916 15.187 19.7216 15.912 19.4756 16.55C19.2248 17.2175 18.8313 17.8223 18.3226 18.322C17.8228 18.8307 17.2181 19.2242 16.5506 19.475C15.9136 19.722 15.1876 19.89 14.1236 19.94L13.4116 19.97L13.2176 19.976C12.7246 19.99 12.1536 19.997 11.0286 19.999L10.2826 20H8.97357C8.24383 20.0026 7.51409 19.9949 6.78457 19.977L6.59057 19.971C6.35318 19.962 6.11584 19.9517 5.87857 19.94C4.81457 19.89 4.08857 19.722 3.45057 19.475C2.7834 19.2241 2.17901 18.8306 1.67957 18.322C1.17051 17.8224 0.776678 17.2176 0.525569 16.55C0.278569 15.913 0.110569 15.187 0.0605687 14.122L0.0305688 13.41L0.0255689 13.216C0.00713493 12.4868 -0.00119929 11.7574 0.000568797 11.028V8.972C-0.0021991 8.2426 0.00513501 7.5132 0.0225689 6.784L0.0295688 6.59C0.0375688 6.365 0.0475688 6.144 0.0595688 5.878C0.109569 4.813 0.277569 4.088 0.524569 3.45C0.776263 2.7822 1.17079 2.17744 1.68057 1.678C2.17972 1.16955 2.78376 0.776074 3.45057 0.525C4.08857 0.278 4.81357 0.11 5.87857 0.0599999C6.14457 0.0479999 6.36657 0.038 6.59057 0.03L6.78457 0.0239999C7.51376 0.00623271 8.24316 -0.0014347 8.97257 0.000999928L11.0286 0ZM10.0006 5C8.67449 5 7.40272 5.52678 6.46503 6.46447C5.52735 7.40215 5.00057 8.67392 5.00057 10C5.00057 11.3261 5.52735 12.5979 6.46503 13.5355C7.40272 14.4732 8.67449 15 10.0006 15C11.3267 15 12.5984 14.4732 13.5361 13.5355C14.4738 12.5979 15.0006 11.3261 15.0006 10C15.0006 8.67392 14.4738 7.40215 13.5361 6.46447C12.5984 5.52678 11.3267 5 10.0006 5ZM10.0006 7C10.3945 6.99993 10.7847 7.07747 11.1487 7.22817C11.5127 7.37887 11.8434 7.5998 12.122 7.87833C12.4007 8.15686 12.6217 8.48754 12.7725 8.85149C12.9233 9.21544 13.001 9.60553 13.0011 9.9995C13.0011 10.3935 12.9236 10.7836 12.7729 11.1476C12.6222 11.5116 12.4013 11.8423 12.1227 12.121C11.8442 12.3996 11.5135 12.6206 11.1496 12.7714C10.7856 12.9223 10.3955 12.9999 10.0016 13C9.20592 13 8.44286 12.6839 7.88025 12.1213C7.31764 11.5587 7.00157 10.7956 7.00157 10C7.00157 9.20435 7.31764 8.44129 7.88025 7.87868C8.44286 7.31607 9.20592 7 10.0016 7M15.2516 3.5C14.92 3.5 14.6021 3.6317 14.3677 3.86612C14.1333 4.10054 14.0016 4.41848 14.0016 4.75C14.0016 5.08152 14.1333 5.39946 14.3677 5.63388C14.6021 5.8683 14.92 6 15.2516 6C15.5831 6 15.901 5.8683 16.1355 5.63388C16.3699 5.39946 16.5016 5.08152 16.5016 4.75C16.5016 4.41848 16.3699 4.10054 16.1355 3.86612C15.901 3.6317 15.5831 3.5 15.2516 3.5Z"
                  fill="#85E408"
                />
              </svg>
              <span className="font-bold">Instagram:</span>
            </div>
            <p className="text-sm">@tekiro_tools</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
