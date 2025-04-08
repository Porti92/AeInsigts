"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { OpportunityStage } from "./opportunity-stage-selector"
import { AIProcessingScreen } from "./ai-processing-screen"

export function HomepageSearchForm() {
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

  return (
    <div className="w-full">
      {showProcessing && <AIProcessingScreen companyName={company} onComplete={handleProcessingComplete} />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-neutral-400" />
          </div>
          <Input
            type="text"
            placeholder="Enter company name..."
            className="pl-12 h-14 text-lg border-neutral-200 shadow-sm focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all rounded-xl animate-pulse-glow"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <style jsx global>{`
  @keyframes pulse-glow {
    0% {
      box-shadow: 0 0 2px rgba(147, 51, 234, 0.05), 0 0 0px rgba(192, 132, 252, 0.05);
    }
    50% {
      box-shadow: 0 0 5px rgba(147, 51, 234, 0.1), 0 0 8px rgba(192, 132, 252, 0.1);
    }
    100% {
      box-shadow: 0 0 2px rgba(147, 51, 234, 0.05), 0 0 0px rgba(192, 132, 252, 0.05);
    }
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 4s ease-in-out infinite;
  }
  
  .animate-pulse-glow:focus {
    animation: none;
    box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.2);
  }
`}</style>
        </div>

        <Select value={stage} onValueChange={(value) => setStage(value as OpportunityStage)}>
          <SelectTrigger className="h-14 text-base border-neutral-200 shadow-sm focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all rounded-xl">
            <SelectValue placeholder="Select opportunity stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="discovery" className="flex items-center text-base py-3">
              <span className="h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
              Discovery
            </SelectItem>
            <SelectItem value="qualification" className="flex items-center text-base py-3">
              <span className="h-2 w-2 rounded-full bg-accent-blue mr-2"></span>
              Qualification
            </SelectItem>
            <SelectItem value="internal" className="flex items-center text-base py-3">
              <span className="h-2 w-2 rounded-full bg-accent-purple mr-2"></span>
              Internal
            </SelectItem>
            <SelectItem value="executive" className="flex items-center text-base py-3">
              <span className="h-2 w-2 rounded-full bg-accent-teal mr-2"></span>
              Executive
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          disabled={isLoading || !company.trim()}
          className="h-14 px-6 bg-primary-gradient hover:opacity-90 transition-all shadow-primary-sm w-full rounded-xl text-base"
        >
          {isLoading ? (
            "Processing..."
          ) : (
            <span className="flex items-center justify-center gap-2">
              Generate Insights <ArrowRight className="h-5 w-5" />
            </span>
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-neutral-500 mt-4">
        Free plan includes 3 searches per day.{" "}
        <a href="/pricing" className="text-primary-600 hover:underline">
          Upgrade for unlimited searches
        </a>
      </p>
    </div>
  )
}

