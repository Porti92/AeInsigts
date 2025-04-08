import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { ExecutiveData } from "@/lib/types"
import { Briefcase } from "lucide-react"

interface ExecutiveSummaryProps {
  data: ExecutiveData
}

export function ExecutiveSummarySection({ data }: ExecutiveSummaryProps) {
  // Extract key competitors from the industry data
  const competitors = data.industry.competitors.join(", ")

  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Briefcase className="h-5 w-5 text-primary-500" />
          Executive Summary
        </EnhancedCardTitle>
        <EnhancedCardDescription>High-level overview for executive briefings</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="space-y-6">
          <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
            <p className="text-neutral-700 leading-relaxed">{data.executiveSummary}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-medium mb-3 text-neutral-700">Industry Position</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Industry:</span>
                  <span className="font-medium">{data.industry.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Sector:</span>
                  <span className="font-medium">{data.industry.sector}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Market Position:</span>
                  <span className="font-medium">{data.industry.marketPosition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Key Competitors:</span>
                  <span className="font-medium">{competitors}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-3 text-neutral-700">Recent Milestones</h3>
              <div className="space-y-2">
                {data.milestones.slice(0, 3).map((milestone, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-sm text-neutral-500 w-20 flex-shrink-0">{milestone.date}</span>
                    <span className="text-neutral-700">{milestone.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </EnhancedCardContent>
    </div>
  )
}

