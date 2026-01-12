'use client'

import { useApiGet } from '@/lib/api-hooks'
import { fetchApi } from './server-api'

async function fetchData(endpoint: string) {
  return fetchApi(endpoint)
}

export function useProducts() {
  return useApiGet(
    ['products'],
    () => fetchData('/products'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useProductBySlug(slug: string) {
  return useApiGet(
    ['product', slug],
    () => fetchData(`/products/${slug}`),
    {
      enabled: !!slug,
    }
  )
}

export function useCategories() {
  return useApiGet(
    ['categories'],
    () => fetchData('/category'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}
