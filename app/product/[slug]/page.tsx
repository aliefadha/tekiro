import { Montserrat, Roboto } from "next/font/google"
import Image from "next/image"
import ProductGallery from "@/components/ProductGallery"
import Link from "next/link"
import { getProductById, getRelatedProducts } from "@/lib/server-api"
import { getImageUrl } from "@/lib/utils"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
})

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {

  const { slug } = await params
  const productId = slug

  let product: {
    id: string
    name: string
    description: string
    images: string[]
    storeUrl: string
    categoryId: string
    category?: { id: string; name: string }
  } | null = null
  try {
    const productResponse = await getProductById(productId)
    product = productResponse.data
  } catch (error) {
    console.warn('Failed to fetch product during build:', error)
  }

  let relatedProducts: Array<{ id: string; name: string; images: string[] }> = []
  try {
    const relatedResponse = await getRelatedProducts(product?.categoryId || "")
    relatedProducts = (relatedResponse.data || []) as typeof relatedProducts
  } catch (error) {
    console.warn('Failed to fetch related products during build:', error)
  }

  if (!product) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">Product not found</p>
      </div>
    )
  }

  return (
    <>
      <div className="h-[200px] object-contain bg-[url(/torque-2.webp)] bg-center bg-cover relative">
        <div className={`${montserrat.className} bg-black/80 h-[200px] flex flex-col items-center justify-center text-center`}>
          <div className="flex flex-col justify-center text-center gap-10">
            <h1 className="text-white font-semibold text-4xl uppercase">{product.name || 'Product'}</h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#85E408]"></div>
      </div>

      <div className="mt-18 mb-24 flex justify-center items-start">
        <div className="max-w-6xl w-full mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            <div className="flex justify-center">
              <ProductGallery
                images={product.images || []}
                productName={product.name}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="prose prose-lg text-gray-700">
                <p>{product.description || ''}</p>
              </div>
              <div>
                <p className="font-bold">Category <Link href="/" className="text-[#427402] font-normal">{product.category?.name || 'Uncategorized'}</Link></p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className={`${montserrat.className} font-bold uppercase text-xl`}>Official Store</h2>
                <div className="flex gap-4 h-full">
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link href={product.storeUrl || '#'} target="_blank" rel="noopener noreferrer">
                      <Image src="/monotaro.webp" width={40} height={40} alt="monotaro" className="h-10 w-10 object-contain" />
                    </Link>
                  </div>
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link href="https://lazada.com" target="_blank" rel="noopener noreferrer">
                      <Image src="/lazada.png" width={40} height={40} alt="lazada" className="h-10 w-10 object-contain" />
                    </Link>
                  </div>
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link href="https://tokopedia.com" target="_blank" rel="noopener noreferrer">
                      <Image src="/tokopedia.png" width={40} height={40} alt="tokopedia" className="h-10 w-10 object-contain" />
                    </Link>
                  </div>
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer">
                      <Image src="/shopee.png" width={40} height={40} alt="shopee" className="h-10 w-10 object-contain" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="min-h-[500px] object-contain bg-[url(/product-hero.webp)] bg-top bg-cover">
          <div className={`${montserrat.className} bg-black/60 min-h-[500px] flex flex-col items-center justify-center text-center py-14 gap-10`}>
            <div className="flex flex-col justify-center text-center gap-10">
              <h1 className="text-white font-semibold text-2xl lg:text-4xl uppercase">Product Related</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-2/3">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-start items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_5px_#85E408]"
                  >
                    <Image src={getImageUrl(relatedProduct.images?.[0]) || '/placeholder.webp'} alt={relatedProduct.name} width={300} height={300} className="w-full h-[300px] mx-auto object-cover" />
                    <h1 className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}>{relatedProduct.name}</h1>
                    <Link href={`/product/${relatedProduct.id}`} className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black" >
                      <p className={`${roboto.className} font-medium uppercase text-sm`}>read more</p>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-white col-span-full text-center py-10">No related products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
