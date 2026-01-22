import { Metadata } from "next"
import KategoriProdukContent from "./KategoriProdukContent"
import { getSlugLabel } from "@/lib/slug-label"
import { getCategories } from "@/lib/server-api"

interface KategoriProdukPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: KategoriProdukPageProps): Promise<Metadata> {
  const { slug } = await params
  const label = getSlugLabel(slug)

  try {
    const categoriesResponse = await getCategories()
    const categories = categoriesResponse.data || []
    const category = categories.find((c) => c.name.toLowerCase().replace(/\s+/g, '-') === slug)

    if (category) {
      return {
        title: `${category.name} | Tekiro`,
        description: `Browse our collection of ${category.name} tools. Tekiro delivers precision, reliability, and high-performance tools.`,
        openGraph: {
          title: `${category.name} | Tekiro`,
          description: `Browse our collection of ${category.name} tools. Tekiro delivers precision, reliability, and high-performance tools.`,
          type: "website",
          siteName: "Tekiro",
        },
        twitter: {
          card: "summary",
          title: `${category.name} | Tekiro`,
          description: `Browse our collection of ${category.name} tools.`,
        },
        alternates: {
          canonical: `https://tekiro.com/kategori-produk/${slug}`,
        },
        robots: {
          index: true,
          follow: true,
        },
      }
    }
  } catch (error) {
    console.error("Failed to fetch category for metadata:", error)
  }

  return {
    title: `${label} | Tekiro`,
    description: `Browse Tekiro ${label} products and specifications. Tekiro delivers precision, reliability, and high-performance tools.`,
  }
}

export default async function KategoriProdukPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <KategoriProdukContent slug={slug} />
}
