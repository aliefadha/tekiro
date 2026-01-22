import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AOSInit from "@/components/AOSInit";
import { Providers } from "@/lib/providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tekiro.com"),
  title: {
    default: "Tekiro - Believe In Your Choice | Power Tools, Hand Tools, Cordless",
    template: "%s | Tekiro",
  },
  description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
  openGraph: {
    siteName: "Tekiro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tekiro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Providers>
          <AOSInit />
          <Navbar />
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
