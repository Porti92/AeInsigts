"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import { OpportunityStageSelector, type OpportunityStage } from "./opportunity-stage-selector"
import { AIProcessingScreen } from "./ai-processing-screen"

export function EnhancedSearchForm() {
  const [company, setCompany] = useState("")
  const [stage, setStage] = useState<OpportunityStage>("discovery")
  const [isLoading, setIsLoading] = useState(false)
  const [showProcessing, setShowProcessing] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!company.trim()) return

    setIsLoading(true)
    setShowProcessing(true)
  }

  const handleProcessingComplete = () => {
    setShowProcessing(false)
    setIsLoading(false)
    // Navigate to dashboard after processing is complete
    router.push(`/dashboard/${encodeURIComponent(company.trim())}?stage=${stage}`)
  }

  const handleStageChange = (newStage: OpportunityStage) => {
    setStage(newStage)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
      {showProcessing && <AIProcessingScreen companyName={company} onComplete={handleProcessingComplete} />}

      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <Input
          type="text"
          placeholder="Enter company name..."
          className="pl-10 h-12 text-base border-neutral-200 shadow-sm focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>

      <OpportunityStageSelector onStageChange={handleStageChange} />

      <Button
        type="submit"
        disabled={isLoading || !company.trim()}
        className="h-12 px-5 bg-primary-gradient hover:opacity-90 transition-all shadow-primary-sm w-full"
      >
        {isLoading ? (
          "Processing..."
        ) : (
          <span className="flex items-center justify-center gap-2">
            Generate Insights <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
}

