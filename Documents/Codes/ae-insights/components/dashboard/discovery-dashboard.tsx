import { EnhancedCard } from "@/components/ui/enhanced-card"
import { SalesNotes } from "@/components/dashboard/sales-notes"
import { EnhancedCompanyOverview } from "@/components/dashboard-sections/enhanced-company-overview"
import { EnhancedLatestNews } from "@/components/dashboard-sections/enhanced-latest-news"
import { EnhancedChallenges } from "@/components/dashboard-sections/enhanced-challenges"
import { BusinessValueMapSection } from "@/components/dashboard/business-value-map"
import { KeyQuestionsSection } from "@/components/dashboard/key-questions"
import type { DiscoveryData } from "@/lib/types"

interface DiscoveryDashboardProps {
  data: DiscoveryData
}

export function DiscoveryDashboard({ data }: DiscoveryDashboardProps) {
  return (
    <main className="flex-1 py-4">
      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EnhancedCard className="lg:col-span-3" borderAccent>
          <EnhancedCompanyOverview data={data.overview} />
        </EnhancedCard>

        <EnhancedCard className="lg:col-span-2" hover>
          <BusinessValueMapSection businessValueMap={data.businessValueMap} />
        </EnhancedCard>

        <EnhancedCard hover>
          <KeyQuestionsSection keyQuestions={data.keyQuestions} />
        </EnhancedCard>

        <EnhancedCard className="lg:col-span-2" hover>
          <EnhancedLatestNews data={data.news} />
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

