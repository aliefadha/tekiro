'use client'

import { useQuery, useMutation } from '@tanstack/react-query'
import type { UseMutationOptions } from '@tanstack/react-query'

export function useApiGet<T>(
  queryKey: string[],
  fetchFn: () => Promise<T>,
  options?: object
) {
  return useQuery({
    queryKey,
    queryFn: fetchFn,
    ...options,
  })
}

export function useApiMutation<T, S>(
  mutationFn: (variables: S) => Promise<T>,
  options?: UseMutationOptions<T, Error, S>
) {
  const mutation = useMutation({
    mutationFn,
    ...options,
  })

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    data: mutation.data,
    error: mutation.error,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    reset: mutation.reset,
  }
}
