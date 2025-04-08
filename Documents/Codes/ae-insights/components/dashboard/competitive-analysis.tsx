import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import { TrendingUp, ShieldCheck, ShieldAlert } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CompetitiveAnalysis {
  competitor: string
  strengthsAgainst: string[]
  weaknessesAgainst: string[]
}

interface CompetitiveAnalysisSectionProps {
  competitiveLandscape: CompetitiveAnalysis[]
}

export function CompetitiveAnalysisSection({ competitiveLandscape }: CompetitiveAnalysisSectionProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <TrendingUp className="h-5 w-5 text-primary-500" />
          Competitive Analysis
        </EnhancedCardTitle>
        <EnhancedCardDescription>How we compare against key competitors</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <Tabs defaultValue={competitiveLandscape[0]?.competitor}>
          <TabsList className="mb-4">
            {competitiveLandscape.map((competitor, index) => (
              <TabsTrigger key={index} value={competitor.competitor}>
                {competitor.competitor}
              </TabsTrigger>
            ))}
          </TabsList>

          {competitiveLandscape.map((competitor, index) => (
            <TabsContent key={index} value={competitor.competitor} className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <h3 className="font-medium">Our Strengths vs {competitor.competitor}</h3>
                </div>
                <ul className="space-y-2">
                  {competitor.strengthsAgainst.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        +
                      </span>
                      <span className="text-neutral-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="h-4 w-4 text-amber-600" />
                  <h3 className="font-medium">Our Weaknesses vs {competitor.competitor}</h3>
                </div>
                <ul className="space-y-2">
                  {competitor.weaknessesAgainst.map((weakness, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        -
                      </span>
                      <span className="text-neutral-700">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </EnhancedCardContent>
    </div>
  )
}

