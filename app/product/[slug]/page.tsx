import { Metadata } from "next"
import ProductContent from "./ProductContent"
import { getProductById } from "@/lib/server-api"
import { getImageUrl } from "@/lib/utils"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const productResponse = await getProductById(slug)
    const product = productResponse.data

    if (!product) {
      return {
        title: "Product Not Found | Tekiro",
        description: "The product you are looking for does not exist.",
      }
    }

    return {
      title: product.name,
      description: product.description?.substring(0, 160) || "Tekiro delivers precision, reliability, and high-performance tools.",
      openGraph: {
        title: product.name,
        description: product.description || "Tekiro delivers precision, reliability, and high-performance tools.",
        type: "website",
        images: product.images?.[0] ? [getImageUrl(product.images[0])] : [],
        siteName: "Tekiro",
      },
      twitter: {
        card: "summary_large_image",
        title: product.name,
        description: product.description || "Tekiro delivers precision, reliability, and high-performance tools.",
        images: product.images?.[0] ? [getImageUrl(product.images[0])] : [],
      },
      alternates: {
        canonical: `https://tekiro.com/product/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  } catch (error) {
    return {
      title: "Product | Tekiro",
      description: "Tekiro delivers precision, reliability, and high-performance tools.",
    }
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ProductContent slug={slug} />
}
