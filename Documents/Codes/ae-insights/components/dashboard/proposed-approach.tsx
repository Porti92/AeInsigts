import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import { Lightbulb, AlertTriangle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProposedApproachSectionProps {
  proposedApproach: string[]
  riskFactors: string[]
}

export function ProposedApproachSection({ proposedApproach, riskFactors }: ProposedApproachSectionProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Lightbulb className="h-5 w-5 text-primary-500" />
          Deal Strategy
        </EnhancedCardTitle>
        <EnhancedCardDescription>Proposed approach and risk factors</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <Tabs defaultValue="approach">
          <TabsList className="mb-4">
            <TabsTrigger value="approach">Proposed Approach</TabsTrigger>
            <TabsTrigger value="risks">Risk Factors</TabsTrigger>
          </TabsList>

          <TabsContent value="approach" className="space-y-4">
            <ul className="space-y-2">
              {proposedApproach.map((approach, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{approach}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="risks" className="space-y-4">
            <ul className="space-y-2">
              {riskFactors.map((risk, index) => (
                <li key={index} className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{risk}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </EnhancedCardContent>
    </div>
  )
}

