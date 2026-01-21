'use client'

import { useApiGet } from '@/lib/api-hooks'
import { apiClient } from './api-client'

async function fetchData(endpoint: string) {
  return apiClient.get(endpoint)
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

export function useLatestProducts() {
  return useApiGet(
    ['latestProducts'],
    () => apiClient.get<{ success: boolean; message: string; data: Array<{ id: string; name: string; images: string[] }> }>('/product/latest'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}
