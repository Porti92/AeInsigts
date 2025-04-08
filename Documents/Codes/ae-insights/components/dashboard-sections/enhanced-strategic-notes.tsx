import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { StrategicNotesData } from "@/lib/types"
import { Lightbulb, Target, MessageSquare, FileText } from "lucide-react"

interface StrategicNotesProps {
  data: StrategicNotesData
}

export function EnhancedStrategicNotes({ data }: StrategicNotesProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Lightbulb className="h-5 w-5 text-primary-500" />
          Strategic Notes for Discovery
        </EnhancedCardTitle>
        <EnhancedCardDescription>Strategic insights and notes to aid in the discovery process</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                <Target className="h-4 w-4 text-primary-700" />
              </div>
              <h3 className="font-medium text-neutral-800">Key Objectives</h3>
            </div>
            <ul className="space-y-2">
              {data.keyObjectives.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-primary-700" />
              </div>
              <h3 className="font-medium text-neutral-800">Talking Points</h3>
            </div>
            <ul className="space-y-2">
              {data.talkingPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-primary-700" />
              </div>
              <h3 className="font-medium text-neutral-800">Value Propositions</h3>
            </div>
            <ul className="space-y-2">
              {data.valuePropositions.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary-700" />
            </div>
            <h3 className="font-medium text-neutral-800">Additional Notes</h3>
          </div>
          <p className="text-neutral-700">{data.additionalNotes}</p>
        </div>
      </EnhancedCardContent>
    </div>
  )
}

