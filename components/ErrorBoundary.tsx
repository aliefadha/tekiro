'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
          <p className="text-gray-600 mb-6">Something went wrong. Please try again later.</p>
          <div className="flex gap-4">
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-2 bg-[#85E408] text-black font-semibold rounded hover:bg-[#6bc006] transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-6 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
