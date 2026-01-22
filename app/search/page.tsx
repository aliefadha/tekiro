'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Montserrat, Roboto } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchProducts } from '@/lib/queries'
import { getImageUrl } from '@/lib/utils'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin']
})

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const { data: productsResponse, isLoading: isProductsLoading } = useSearchProducts(query)

  const isLoading = isProductsLoading

  const productsData = productsResponse?.data
  const products: Array<{ id: string; name: string; images: string[] }> = Array.isArray(productsData) ? productsData : []

  return (
    <>
      <div className="min-h-[300px] object-contain bg-[url(/product-hero.webp)] bg-top bg-cover">
        <div className={`${montserrat.className} bg-black/60 min-h-[300px] flex flex-col items-center justify-center text-center pb-8`}>
          <div className="flex flex-col justify-center text-center gap-4 px-6 md:px-16">
            <h1 className="text-white font-semibold text-3xl md:text-4xl uppercase">
              Search Results
            </h1>
            <p className="text-white font-semibold lg:max-w-3xl">
              {query ? `Showing results for "${query}"` : 'Enter a search term to find products'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 px-4 md:px-10 max-w-7xl mx-auto py-20">
        {isLoading ? (
          <div className="flex flex-col gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-6 animate-pulse">
                <div className="w-40 h-40 bg-gray-200 rounded-md flex-shrink-0" />
                <div className="flex-1 py-2">
                  <div className="bg-gray-200 h-6 w-3/4 mb-3" />
                  <div className="bg-gray-200 h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : query && products.length === 0 ? (
          <div className="min-h-[400px] flex flex-col items-center justify-center text-center gap-4 py-20">
            <p className="text-gray-500 text-lg">No results found for "{query}"</p>
            <p className="text-gray-400">Try searching with different keywords</p>
            <Link href="/product" className="mt-4 px-6 py-3 bg-[#85E408] text-black font-semibold rounded hover:bg-[#6bc006] transition-colors">
              Browse All Products
            </Link>
          </div>
        ) : products.length > 0 ? (
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#85E408] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full md:w-48 h-48 md:h-40 relative flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                  {product.images?.[0] ? (
                    <Image
                      src={getImageUrl(product.images[0])}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <h2 className={`${montserrat.className} font-bold text-xl md:text-2xl text-[#85E408] mb-2`}>
                    {product.name}
                  </h2>
                  <p className={`${roboto.className} text-gray-600 text-sm mb-4 line-clamp-2`}>
                    Discover this product from Tekiro. Click to view full specifications and details.
                  </p>
                  <span className={`inline-flex items-center gap-2 ${roboto.className} font-medium text-[#427402] hover:text-[#85E408] transition-colors`}>
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[500px] flex items-center justify-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#85E408] py-10"
          role="status"
          aria-label="Loading search results"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
