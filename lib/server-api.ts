import { apiClient } from './api-client'

export async function getCategories() {
  return apiClient.get<Array<{ id: string; name: string }>>('/category')
}

export async function getProducts() {
  return apiClient.get<unknown>('/products')
}

export async function getProductBySlug(slug: string) {
  return apiClient.get<unknown>(`/products/${slug}`)
}

export async function getProductsByCategory(categoryId: string) {
  return apiClient.get<Array<{
    id: string
    name: string
    images: string[]
  }>>(`/product/category/${categoryId}`)
}

export async function getProductById(id: string) {
  return apiClient.get<{
    id: string
    name: string
    description: string
    images: string[]
    storeUrl: string
    categoryId: string
    category: {
      id: string
      name: string
    }
  }>(`/product/${id}`)
}

export async function getRelatedProducts(categoryId: string) {
  return apiClient.get<Array<{
    id: string
    name: string
    images: string[]
  }>>(`/product/related/${categoryId}`)
}

export async function getGallery() {
  return apiClient.get<Array<{
    id: string
    title: string
    image: string
  }>>('/gallery')
}

export async function getInstagram() {
  return apiClient.get<Array<{
    id: string
    title: string
    link: string
    image: string
  }>>('/instagram')
}

export async function getLatestProducts() {
  return apiClient.get<Array<{
    id: string
    name: string
    images: string[]
  }>>('/product/latest')
}

export async function getCordlessProducts() {
  return apiClient.get<Array<{
    id: string
    title: string
    description: string
    link: string
  }>>('/cordless')
}

export async function getCatalogues() {
  return apiClient.get<Array<{
    id: string
    title: string
    file: string
    categoryId: string
    category: {
      id: string
      name: string
      image: string
    }
  }>>('/catalogue')
}

export async function getArticles(limit: number = 6, page: number = 1) {
  return apiClient.get<Array<{
    id: string
    title: string
    slug: string
    excerpt: string
    contentHtml: string
    primaryImage: string
    seoTitle: string
    seoDescription: string
    seoKeywords: string
    metaTags: {
      title: string
      keywords: string
      description: string
    }
    publishedAt: string
  }>>(`/article?limit=${limit}&page=${page}`)
}

export async function getArticleBySlug(slug: string) {
  return apiClient.get<{
    id: string
    title: string
    slug: string
    excerpt: string
    contentHtml: string
    primaryImage: string
    seoTitle: string
    seoDescription: string
    seoKeywords: string
    metaTags: {
      title: string
      keywords: string
      description: string
    }
    publishedAt: string
  }>(`/article/slug/${slug}`)
}
