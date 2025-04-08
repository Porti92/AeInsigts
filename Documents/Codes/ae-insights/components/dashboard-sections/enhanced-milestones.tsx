import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { MilestoneItem } from "@/lib/types"
import { CalendarIcon, Milestone } from "lucide-react"

interface MilestonesProps {
  data: MilestoneItem[]
}

export function EnhancedMilestones({ data }: MilestonesProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Milestone className="h-5 w-5 text-primary-500" />
          Milestones & Developments
        </EnhancedCardTitle>
        <EnhancedCardDescription>Significant achievements and recent events</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="relative space-y-5 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-primary-200">
          {data.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-6 top-1 h-4 w-4 rounded-full bg-primary-500 shadow-primary-sm"></div>
              <div className="flex items-center text-sm text-neutral-500 mb-1">
                <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                {item.date}
              </div>
              <h3 className="font-medium text-neutral-800">{item.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </EnhancedCardContent>
    </div>
  )
}

