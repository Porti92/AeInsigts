import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import { HelpCircle } from "lucide-react"

interface KeyQuestionsSectionProps {
  keyQuestions: string[]
}

export function KeyQuestionsSection({ keyQuestions }: KeyQuestionsSectionProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <HelpCircle className="h-5 w-5 text-primary-500" />
          Key Discovery Questions
        </EnhancedCardTitle>
        <EnhancedCardDescription>Questions to ask during discovery conversations</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <ul className="space-y-3">
          {keyQuestions.map((question, index) => (
            <li key={index} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
              <div className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                  Q
                </span>
                <span className="text-neutral-700">{question}</span>
              </div>
            </li>
          ))}
        </ul>
      </EnhancedCardContent>
    </div>
  )
}

