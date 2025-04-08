import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { ChallengeItem } from "@/lib/types"
import { AlertTriangle, AlertCircle, AlertOctagon, Shield } from "lucide-react"

interface ChallengesProps {
  data: ChallengeItem[]
}

export function EnhancedChallenges({ data }: ChallengesProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return <AlertOctagon className="h-5 w-5 text-red-500" />
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "low":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      default:
        return <AlertCircle className="h-5 w-5" />
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-700">High</span>
      case "medium":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700">Medium</span>
      case "low":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">Low</span>
      default:
        return null
    }
  }

  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Shield className="h-5 w-5 text-primary-500" />
          Challenges & Risks
        </EnhancedCardTitle>
        <EnhancedCardDescription>Potential challenges, risks, and red flags</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
              <div className="mt-0.5">{getSeverityIcon(item.severity)}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-neutral-800">{item.title}</h3>
                  {getSeverityBadge(item.severity)}
                </div>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </EnhancedCardContent>
    </div>
  )
}

