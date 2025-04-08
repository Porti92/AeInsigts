import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { StrategicNotesData } from "@/lib/types"
import { Lightbulb, Target, MessageSquare } from "lucide-react"

interface StrategicNotesProps {
  data: StrategicNotesData
}

export function StrategicNotes({ data }: StrategicNotesProps) {
  return (
    <div>
      <CardHeader>
        <CardTitle>Strategic Notes for Discovery</CardTitle>
        <CardDescription>Strategic insights and notes to aid in the discovery process</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Key Objectives</h3>
            </div>
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              {data.keyObjectives.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Talking Points</h3>
            </div>
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              {data.talkingPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Value Propositions</h3>
            </div>
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              {data.valuePropositions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">Additional Notes</h3>
          <p className="mt-1 text-sm text-muted-foreground">{data.additionalNotes}</p>
        </div>
      </CardContent>
    </div>
  )
}

