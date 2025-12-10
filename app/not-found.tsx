import { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Page Not Found",

};

export default function NotFound() {
    return (
        <div className='mx-36 text-center flex flex-col justify-center gap-5 min-h-[300px]'>
            <h2 className={`${montserrat.className} font-bold uppercase text-3xl`}>
                This page could not be found!
            </h2>
            <p className={`${montserrat.className} font-medium text-sm`}>
                We are sorry. But the page you are looking for is not available.
            </p>
            <div className='mt-4'>
                <Link
                    href="/"
                    className={`${roboto.className} font-medium hover:bg-[#85E408] px-6 py-3 border-b-4 rounded-xs uppercase transition duration-1000 ease-out opacity-95 transform hover:opacity-100 hover:-translate-y-px focus-visible:opacity-100 focus-visible:-translate-y-px`}
                >
                    Back To Homepage
                </Link>
            </div>
        </div>
    )
}
