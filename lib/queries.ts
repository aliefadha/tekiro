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

export function useProductById(id: string) {
  return useApiGet(
    ['product', id],
    () => apiClient.get<{
      id: string
      name: string
      description: string
      images: string[]
      storeUrl: string
      categoryId: string
      category?: { id: string; name: string }
    }>(`/product/${id}`),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useRelatedProducts(categoryId: string) {
  return useApiGet(
    ['relatedProducts', categoryId],
    () => apiClient.get<Array<{
      id: string
      name: string
      images: string[]
    }>>(`/product/related/${categoryId}`),
    {
      enabled: !!categoryId,
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useProductsByCategory(categoryId: string) {
  return useApiGet(
    ['productsByCategory', categoryId],
    () => apiClient.get<Array<{
      id: string
      name: string
      images: string[]
    }>>(`/product/category/${categoryId}`),
    {
      enabled: !!categoryId,
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useCatalogues() {
  return useApiGet(
    ['catalogues'],
    () => apiClient.get<Array<{
      id: string
      title: string
      file: string
      categoryId: string
      category?: {
        id: string
        name: string
        image: string
      }
    }>>('/catalogue'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useGallery() {
  return useApiGet(
    ['gallery'],
    () => apiClient.get<Array<{
      id: string
      title: string
      image: string
    }>>('/gallery'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useInstagram() {
  return useApiGet(
    ['instagram'],
    () => apiClient.get<Array<{
      id: string
      title: string
      link: string
      image: string
    }>>('/instagram'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}

export function useCordlessProducts() {
  return useApiGet(
    ['cordlessProducts'],
    () => apiClient.get<Array<{
      id: string
      title: string
      description: string
      link: string
    }>>('/cordless'),
    {
      staleTime: 1000 * 60 * 5,
    }
  )
}
