import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ChallengeItem } from "@/lib/types"
import { AlertTriangle, AlertCircle, AlertOctagon } from "lucide-react"

interface ChallengesProps {
  data: ChallengeItem[]
}

export function Challenges({ data }: ChallengesProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return <AlertOctagon className="h-4 w-4 text-destructive" />
      case "medium":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      case "low":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  return (
    <div>
      <CardHeader>
        <CardTitle>Challenges & Risks</CardTitle>
        <CardDescription>Potential challenges, risks, and red flags</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="mt-0.5">{getSeverityIcon(item.severity)}</div>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  )
}

