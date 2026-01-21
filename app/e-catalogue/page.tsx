import { Metadata } from "next"
import ECatalogueContent from "./ECatalogueContent"

export const metadata: Metadata = {
  title: "E-Catalogue - Tekiro",
  description: "Tekiro® delivers precision, reliability, and high-performance tools for every task. From hand tools to cordless equipment, our products are built to tackle",
}

export default function ECataloguePage() {
  return <ECatalogueContent />
}
