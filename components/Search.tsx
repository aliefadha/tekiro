'use client'

import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim().length >= 2) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 h-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
        className="bg-white h-full px-4 w-32 text-gray-700 outline-none placeholder-gray-400 text-xs"
      />
      <button
        type="submit"
        className="h-full bg-[#333333] px-2.5 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
      >
        <SearchIcon />
        <span className="hidden xl:inline">Search</span>
      </button>
    </form>
  )
}
