import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { InternalData } from "@/lib/types"
import { FileText } from "lucide-react"

interface DealSummarySectionProps {
  data: InternalData
}

export function DealSummarySection({ data }: DealSummarySectionProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <FileText className="h-5 w-5 text-primary-500" />
          Deal Summary
        </EnhancedCardTitle>
        <EnhancedCardDescription>Internal briefing for deal review</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
          <p className="text-neutral-700">{data.dealSummary}</p>
        </div>
      </EnhancedCardContent>
    </div>
  )
}

