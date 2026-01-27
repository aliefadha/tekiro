"use client";

import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import ProductGallery from "@/components/ProductGallery";
import Link from "next/link";
import { useProductById, useRelatedProducts } from "@/lib/queries";
import { getImageUrl } from "@/lib/utils";
import Script from "next/script";
import { generateProductSchema } from "@/lib/schema";
import {
  PageSkeleton,
  RelatedProductsSkeleton,
} from "@/components/ui/Skeleton";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function ProductContent({ slug }: { slug: string }) {
  const { data: productResponse, isLoading: isProductLoading } =
    useProductById(slug);
  const product = productResponse?.data;

  const { data: relatedResponse, isLoading: isRelatedLoading } =
    useRelatedProducts(product?.categoryId || "");
  const relatedProducts = (
    (relatedResponse?.data || []) as Array<{
      id: string;
      name: string;
      images: string[];
    }>
  ).filter((relatedProduct) => relatedProduct.id !== product?.id);

  if (isProductLoading) {
    return <PageSkeleton />;
  }

  if (!product) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">Product not found</p>
      </div>
    );
  }

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateProductSchema(product) }}
      />
      <div className="h-[200px] relative">
        <Image
          src={getImageUrl(product.images?.[0]) || "/placeholder.webp"}
          alt={product.name || "Product"}
          fill
          className="object-cover"
          priority
        />
        <div
          className={`${montserrat.className} bg-black/80 absolute inset-0 flex flex-col items-center justify-center text-center`}
        >
          <div className="flex flex-col justify-center text-center gap-10">
            <h1 className="text-white font-semibold text-4xl uppercase">
              {product.name || "Product"}
            </h1>
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
                <ul className="list-disc list-inside space-y-1">
                  {(product.description || "")
                    .split(/\r?\n/)
                    .filter(Boolean)
                    .map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                </ul>
              </div>
              <div>
                <p className="font-bold">
                  Category{" "}
                  <Link href="/" className="text-[#427402] font-normal">
                    {product.category?.name || "Uncategorized"}
                  </Link>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2
                  className={`${montserrat.className} font-bold uppercase text-xl`}
                >
                  Official Store
                </h2>
                <div className="flex gap-4 h-full">
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link
                      href="https://www.bukalapak.com/tekiro-rexco-official?keywords=tekiro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/bukalapak.webp"
                        width={40}
                        height={40}
                        alt="bukalapak"
                        className="h-10 w-10 object-contain"
                      />
                    </Link>
                  </div>
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link
                      href="https://monotaro.id/shopbybrand/brand?brand=tekiro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/monotaro.png"
                        width={40}
                        height={40}
                        alt="monotaro"
                        className="h-10 w-10 object-contain"
                      />
                    </Link>
                  </div>
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link
                      href="https://www.lazada.co.id/shop/tekiro-rexco/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/lazada.png"
                        width={40}
                        height={40}
                        alt="lazada"
                        className="h-10 w-10 object-contain"
                      />
                    </Link>
                  </div>
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link
                      href="https://www.tokopedia.com/tekiro-rexco"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/tokopedia.png"
                        width={40}
                        height={40}
                        alt="tokopedia"
                        className="h-10 w-10 object-contain"
                      />
                    </Link>
                  </div>
                  <div className="bg-[#85E408] p-1 rounded-md h-full">
                    <Link
                      href="https://shopee.co.id/tekiroofficialshop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/shopee.webp"
                        width={40}
                        height={40}
                        alt="shopee"
                        className="h-10 w-10 object-contain"
                      />
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
          <div
            className={`${montserrat.className} bg-black/60 min-h-[500px] flex flex-col items-center justify-center text-center py-14 gap-10`}
          >
            <div className="flex flex-col justify-center text-center gap-10">
              <h1 className="text-white font-semibold text-2xl lg:text-4xl uppercase">
                Product Related
              </h1>
            </div>
            {isRelatedLoading ? (
              <RelatedProductsSkeleton />
            ) : (
              <ErrorBoundary
                fallback={
                  <div className="text-white text-center py-10">
                    Failed to load related products
                  </div>
                }
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-2/3">
                  {relatedProducts.length > 0 ? (
                    relatedProducts.map((relatedProduct) => (
                      <div
                        key={relatedProduct.id}
                        className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-start items-center rounded-sm gap-5 border-4 hover:border-[#85E408] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_5px_#85E408]"
                      >
                        <Image
                          src={
                            getImageUrl(relatedProduct.images?.[0]) ||
                            "/placeholder.webp"
                          }
                          alt={relatedProduct.name}
                          width={300}
                          height={300}
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          className="w-full h-[300px] mx-auto object-cover"
                        />
                        <h1
                          className={`${montserrat.className} font-bold uppercase text-2xl text-[#85E408]`}
                        >
                          {relatedProduct.name}
                        </h1>
                        <Link
                          href={`/product/${relatedProduct.id}`}
                          className="border-b-2 border-[#85E408] hover:bg-[#85E408] py-3 px-4 rounded-sm text-[#85E408] hover:text-black"
                        >
                          <p
                            className={`${roboto.className} font-medium uppercase text-sm`}
                          >
                            read more
                          </p>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p className="text-white col-span-full text-center py-10">
                      No related products found
                    </p>
                  )}
                </div>
              </ErrorBoundary>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
