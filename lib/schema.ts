import { getImageUrl } from './utils'

interface ProductSchema {
  id: string
  name: string
  description: string
  images: string[]
  category?: { name: string }
  offers?: {
    price?: string
    priceCurrency?: string
    availability?: string
  }
}

export function generateProductSchema(product: ProductSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images?.map((img) => getImageUrl(img)) || [],
    brand: {
      '@type': 'Brand',
      name: 'Tekiro',
    },
    category: product.category?.name,
    offers: product.offers
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: product.offers.priceCurrency || 'IDR',
          availability: product.offers.availability || 'https://schema.org/InStock',
          price: product.offers.price,
        }
      : undefined,
  }

  return JSON.stringify(schema)
}
