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
      question: "Kelas Berapa Yang Boleh Ikut Perlombaan?",
      answer:
        "Semua tingkat kelas boleh mengikuti selagi status aktif sebagai siswa/siswi.",
    },
    {
      question: "Materi Apa Saja Yang Di Uji Di Perlombaan Ini?",
      answer:
        "Untuk materi lomba akan diberikan kisi-kisi di setiap tahapannya.",
    },
    {
      question: "Apa Boleh Siswa Yang Sedang PKL/Magang Mengikuti Perlombaan?",
      answer: "Boleh, selama mendapatkan izin resmi dari tempat PKL/Industri.",
    },
    {
      question:
        "Apakah Bisa Selain Jurusan Otomotif TKR & TBSM Boleh Mengikuti?",
      answer: "Bisa mengikuti selagi masih relevan dengan bidang otomotif.",
    },
    {
      question: "Kapan Dan Di Mana Perlombaan Akan Dilaksanakan?",
      answer:
        "Babak penyisihan dilaksanakan di sekolah masing-masing, Semifinal - Final di kantor PT Altama Surya Anugerah di Jakarta Utara.",
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
          src="https://www.youtube.com/embed/bT63Ag44sFo?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=bT63Ag44sFo"
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

          <div
            className={`${montserrat.className} container mx-auto px-4 py-16`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center uppercase border-b-4 border-black pb-2 w-auto mx-auto">
              DIDUKUNG OLEH
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div
                  key={num}
                  className="bg-white p-4 flex items-center justify-center"
                >
                  <Image
                    src={`/sponsor${num}.webp`}
                    alt={`Sponsor ${num}`}
                    width={150}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>
              ))}
            </div>
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
