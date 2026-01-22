'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'
import { useState } from 'react'
import { ToastProvider } from '@/components/ui/Toast'

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => queryClient)

  return (
    <QueryClientProvider client={client}>
      <ToastProvider>
        {children}
      </ToastProvider>
    </QueryClientProvider>
  )
}
