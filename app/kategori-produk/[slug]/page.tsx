import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { ScrollToTop } from "./scroll-to-top";
import CategorySidebar from "@/components/CategorySidebar";
import ProductCard from "@/components/ProductCard";
import { getCategories, getProductsByCategory } from "@/lib/server-api";
import { getImageUrl } from "@/lib/utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
})

export default async function KategoriProdukPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let categories: { id: string; label: string; slug: string }[] = []
  let products: Array<{ id: string; name: string; images: string[] }> = []

  try {
    const categoriesResponse = await getCategories()
    categories = ((categoriesResponse.data || []) as Array<{ id: string; name: string }>).map((item) => ({
      id: item.id,
      label: item.name,
      slug: item.name.toLowerCase().replace(/\s+/g, '-'),
    }))

    const currentCategory = categories.find(c => c.slug === slug)
    if (currentCategory) {
      const productsResponse = await getProductsByCategory(currentCategory.id)
      products = (productsResponse.data || []) as typeof products
    }
  } catch (error) {
    console.error('Failed to fetch data:', error)
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
            robotoClassName={roboto.className}
          />
        </div>
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
      </div>
    </>
  )
}
