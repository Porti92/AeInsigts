"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 text-center">
        <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Something went wrong!</h1>
          <p className="text-neutral-600">We encountered an error while trying to load the company data.</p>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={reset}
            variant="outline"
            className="border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
          >
            Try again
          </Button>
          <Button asChild className="bg-primary-gradient hover:opacity-90">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

