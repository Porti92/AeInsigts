import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { MilestoneItem } from "@/lib/types"
import { CalendarIcon } from "lucide-react"

interface MilestonesProps {
  data: MilestoneItem[]
}

export function Milestones({ data }: MilestonesProps) {
  return (
    <div>
      <CardHeader>
        <CardTitle>Milestones & Developments</CardTitle>
        <CardDescription>Significant achievements and recent events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-4 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
          {data.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary"></div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {item.date}
              </div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  )
}

