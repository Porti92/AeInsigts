"use client"

import { useState } from "react"
import {
  EnhancedSelect,
  EnhancedSelectContent,
  EnhancedSelectItem,
  EnhancedSelectTrigger,
  EnhancedSelectValue,
} from "@/components/ui/enhanced-select"
import { Layers } from "lucide-react"

export type OpportunityStage = "discovery" | "qualification" | "internal" | "executive"

interface OpportunityStageSelectorProps {
  onStageChange?: (stage: OpportunityStage) => void
  defaultStage?: OpportunityStage
  className?: string
}

export function OpportunityStageSelector({
  onStageChange,
  defaultStage = "discovery",
  className,
}: OpportunityStageSelectorProps) {
  const [stage, setStage] = useState<OpportunityStage>(defaultStage)

  const handleStageChange = (value: string) => {
    const newStage = value as OpportunityStage
    setStage(newStage)
    if (onStageChange) {
      onStageChange(newStage)
    }
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2 mb-2">
        <Layers className="h-4 w-4 text-primary-600" />
        <label htmlFor="opportunity-stage" className="text-sm font-medium text-neutral-700">
          Opportunity Stage
        </label>
      </div>
      <EnhancedSelect value={stage} onValueChange={handleStageChange}>
        <EnhancedSelectTrigger id="opportunity-stage">
          <EnhancedSelectValue placeholder="Select opportunity stage" />
        </EnhancedSelectTrigger>
        <EnhancedSelectContent>
          <EnhancedSelectItem value="discovery" className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
            Discovery
          </EnhancedSelectItem>
          <EnhancedSelectItem value="qualification" className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-accent-blue mr-2"></span>
            Qualification
          </EnhancedSelectItem>
          <EnhancedSelectItem value="internal" className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-accent-purple mr-2"></span>
            Internal
          </EnhancedSelectItem>
          <EnhancedSelectItem value="executive" className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-accent-teal mr-2"></span>
            Executive
          </EnhancedSelectItem>
        </EnhancedSelectContent>
      </EnhancedSelect>
    </div>
  )
}

