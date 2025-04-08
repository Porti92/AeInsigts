import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import { Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface Stakeholder {
  name: string
  title: string
  role: string
  influence: "High" | "Medium" | "Low"
}

interface StakeholderSectionProps {
  stakeholders: Stakeholder[]
}

export function StakeholderSection({ stakeholders }: StakeholderSectionProps) {
  const getInfluenceColor = (influence: string) => {
    switch (influence) {
      case "High":
        return "bg-green-100 text-green-700 border-green-200"
      case "Medium":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "Low":
        return "bg-blue-100 text-blue-700 border-blue-200"
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200"
    }
  }

  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Users className="h-5 w-5 text-primary-500" />
          Key Stakeholders
        </EnhancedCardTitle>
        <EnhancedCardDescription>Decision makers and influencers</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="space-y-4">
          {stakeholders.map((stakeholder, index) => (
            <div key={index} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{stakeholder.name}</h4>
                  <p className="text-sm text-neutral-500">{stakeholder.title}</p>
                </div>
                <span
                  className={cn(
                    "px-2 py-0.5 text-xs font-medium rounded-full border",
                    getInfluenceColor(stakeholder.influence),
                  )}
                >
                  {stakeholder.influence}
                </span>
              </div>
              <div className="mt-2 text-sm">
                <span className="text-neutral-500">Role: </span>
                <span className="text-neutral-700">{stakeholder.role}</span>
              </div>
            </div>
          ))}
        </div>
      </EnhancedCardContent>
    </div>
  )
}

