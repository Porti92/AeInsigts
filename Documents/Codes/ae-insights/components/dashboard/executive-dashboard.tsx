import {
  EnhancedCard,
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import { SalesNotes } from "@/components/dashboard/sales-notes"
import { EnhancedLatestNews } from "@/components/dashboard-sections/enhanced-latest-news"
import { EnhancedChallenges } from "@/components/dashboard-sections/enhanced-challenges"
import { TechStackSection } from "@/components/dashboard/tech-stack"
import { ExecutiveSummarySection } from "@/components/dashboard/executive-summary"
import type { ExecutiveData } from "@/lib/types"
import { Activity } from "lucide-react"

interface ExecutiveDashboardProps {
  data: ExecutiveData
}

export function ExecutiveDashboard({ data }: ExecutiveDashboardProps) {
  return (
    <main className="flex-1 py-4">
      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EnhancedCard className="lg:col-span-3" borderAccent>
          <ExecutiveSummarySection data={data} />
        </EnhancedCard>

        <EnhancedCard hover>
          <EnhancedCardHeader>
            <EnhancedCardTitle>
              <Activity className="h-5 w-5 text-primary-500" />
              Key Stats
            </EnhancedCardTitle>
            <EnhancedCardDescription>Important metrics and figures</EnhancedCardDescription>
          </EnhancedCardHeader>
          <EnhancedCardContent>
            <div className="grid grid-cols-2 gap-4">
              {data.keyStats.map((stat, index) => (
                <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <p className="text-sm text-neutral-500 mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-neutral-800">{stat.value}</p>
                </div>
              ))}
            </div>
          </EnhancedCardContent>
        </EnhancedCard>

        <EnhancedCard className="lg:col-span-2" hover>
          <EnhancedLatestNews data={data.news} />
        </EnhancedCard>

        <EnhancedCard className="lg:col-span-2" hover>
          <TechStackSection techStack={data.techStack} />
        </EnhancedCard>

        <EnhancedCard hover>
          <EnhancedChallenges data={data.challenges} />
        </EnhancedCard>

        <EnhancedCard className="lg:col-span-3">
          <SalesNotes />
        </EnhancedCard>
      </div>
    </main>
  )
}

