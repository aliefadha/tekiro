import { Metadata } from "next"
import ProductContent from "./ProductContent"

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  await params
  return {
    title: `Product - Tekiro`,
    description: "Tekiro® delivers precision, reliability, and high-performance tools for every task.",
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
