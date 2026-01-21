import { Metadata } from "next"
import KategoriProdukContent from "./KategoriProdukContent"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Kategori Produk - Tekiro",
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task.",
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
