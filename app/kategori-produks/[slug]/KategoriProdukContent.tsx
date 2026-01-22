'use client'

import { Montserrat } from "next/font/google"
import { ScrollToTop } from "./scroll-to-top"
import CategorySidebar from "@/components/CategorySidebar"
import ProductCard from "@/components/ProductCard"
import { useCategories, useProductsByCategory } from "@/lib/queries"
import { getImageUrl } from "@/lib/utils"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

type Category = {
  id: string
  label: string
  slug: string
}

export default function KategoriProdukContent({ slug }: { slug: string }) {
  const { data: categoriesResponse, isLoading: isCategoriesLoading } = useCategories()

  const categories: Category[] = ((categoriesResponse?.data || []) as Array<{ id: string; name: string }>).map((item) => ({
    id: item.id,
    label: item.name,
    slug: item.name.toLowerCase().replace(/\s+/g, '-'),
  }))

  const currentCategory = categories.find(c => c.slug === slug)
  const { data: productsResponse, isLoading: isProductsLoading } = useProductsByCategory(currentCategory?.id || "")
  const products = (productsResponse?.data || []) as Array<{ id: string; name: string; images: string[] }>

  if (isCategoriesLoading) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#85E408]"
          role="status"
          aria-label="Loading categories"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  if (categories.length === 0) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-red-500">Failed to load categories</p>
      </div>
    )
  }

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col md:flex-row max-w-[1400px] h-full gap-5 px-5">
        <div className="w-full md:w-1/3 bg-[#EEEEEE] rounded-md p-4">
          <CategorySidebar
            categories={categories}
            currentSlug={slug}
            montserratClassName={montserrat.className}
            robotoClassName="font-roboto"
          />
        </div>
        {isProductsLoading ? (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 border border-black w-[200px] h-[300px]" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  imageSrc={getImageUrl(product.images[0]) || '/placeholder.webp'}
                  imageAlt={product.name}
                  title={product.name}
                  href={`/product/${product.id}`}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No products found in this category</p>
            )}
          </div>
        )}
      </div>
    </>
  )
}
