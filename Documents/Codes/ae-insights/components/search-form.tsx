"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchForm() {
  const [company, setCompany] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!company.trim()) return

    setIsLoading(true)
    // In the future, this could make an API call to validate the company
    // before redirecting to the dashboard
    router.push(`/dashboard/${encodeURIComponent(company.trim())}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Enter company name..."
          className="pl-8"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={isLoading || !company.trim()}>
        {isLoading ? "Loading..." : "Search"}
      </Button>
    </form>
  )
}

