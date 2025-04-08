import { EnhancedCard } from "@/components/ui/enhanced-card"
import { SalesNotes } from "@/components/dashboard/sales-notes"
import { EnhancedCompanyOverview } from "@/components/dashboard-sections/enhanced-company-overview"
import { EnhancedChallenges } from "@/components/dashboard-sections/enhanced-challenges"
import { DealSummarySection } from "@/components/dashboard/deal-summary"
import { StakeholderSection } from "@/components/dashboard/stakeholders"
import { CompetitiveAnalysisSection } from "@/components/dashboard/competitive-analysis"
import { ProposedApproachSection } from "@/components/dashboard/proposed-approach"
import type { InternalData } from "@/lib/types"

interface InternalDashboardProps {
  data: InternalData
}

export function InternalDashboard({ data }: InternalDashboardProps) {
  return (
    <main className="flex-1 py-4">
      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EnhancedCard className="lg:col-span-3" borderAccent>
          <DealSummarySection data={data} />
        </EnhancedCard>

        <EnhancedCard className="lg:col-span-2" hover>
          <EnhancedCompanyOverview data={data.overview} />
        </EnhancedCard>

        <EnhancedCard hover>
          <StakeholderSection stakeholders={data.stakeholders} />
        </EnhancedCard>

        <EnhancedCard hover>
          <ProposedApproachSection proposedApproach={data.proposedApproach} riskFactors={data.riskFactors} />
        </EnhancedCard>

        <EnhancedCard className="lg:col-span-2" hover>
          <CompetitiveAnalysisSection competitiveLandscape={data.competitiveLandscape} />
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

