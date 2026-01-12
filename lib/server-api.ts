const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
  const response = await fetch(`${baseUrl}${endpoint}`, {
    cache: 'no-store',
  })
  return response.json()
}

export async function getCategories() {
  return fetchApi<{ data: { id: string; name: string }[] }>('/category')
}

export async function getProducts() {
  return fetchApi<{ data: unknown }>('/products')
}

export async function getProductBySlug(slug: string) {
  return fetchApi<{ data: unknown }>(`/products/${slug}`)
}

export async function getProductsByCategory(categoryId: string) {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
      id: string
      name: string
      images: string[]
    }>
  }>(`/product/category/${categoryId}`)
}

export async function getProductById(id: string) {
  return fetchApi<{
    success: boolean
    message: string
    data: {
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
    }
  }>(`/product/${id}`)
}

export async function getRelatedProducts(categoryId: string) {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
      id: string
      name: string
      images: string[]
    }>
  }>(`/product/related/${categoryId}`)
}

export async function getGallery() {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
      id: string
      title: string
      image: string
    }>
  }>('/gallery')
}

export async function getInstagram() {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
      id: string
      title: string
      link: string
      image: string
    }>
  }>('/instagram')
}

export async function getLatestProducts() {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
      id: string
      name: string
      images: string[]
    }>
  }>('/product/latest')
}

export async function getCordlessProducts() {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
      id: string
      title: string
      description: string
      link: string
    }>
  }>('/cordless')
}

export async function getCatalogues() {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
      id: string
      title: string
      file: string
      categoryId: string
      category: {
        id: string
        name: string
        image: string
      }
    }>
  }>('/catalogue')
}

export async function getArticles(limit: number = 6, page: number = 1) {
  return fetchApi<{
    success: boolean
    message: string
    data: Array<{
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
    }>
  }>(`/article?limit=${limit}&page=${page}`)
}

export async function getArticleBySlug(slug: string) {
  return fetchApi<{
    success: boolean
    message: string
    data: {
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
    }
  }>(`/article/slug/${slug}`)
}
