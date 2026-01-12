'use client'

import { useApiGet } from '@/lib/api-hooks'

async function fetchData(endpoint: string) {
  const response = await fetch(endpoint)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

export function useProducts() {
  return useApiGet(
    ['products'],
    () => fetchData('/api/products'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useProductBySlug(slug: string) {
  return useApiGet(
    ['product', slug],
    () => fetchData(`/api/products/${slug}`),
    {
      enabled: !!slug,
    }
  )
}
