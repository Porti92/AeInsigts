import { notFound, redirect } from "next/navigation"
import { getCompanyData } from "@/lib/data-service"
import type { OpportunityStage } from "@/components/opportunity-stage-selector"
import { DiscoveryDashboard } from "@/components/dashboard/discovery-dashboard"
import { QualificationDashboard } from "@/components/dashboard/qualification-dashboard"
import { ExecutiveDashboard } from "@/components/dashboard/executive-dashboard"
import { InternalDashboard } from "@/components/dashboard/internal-dashboard"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default async function DashboardPage({
  params,
  searchParams,
}: {
  params: { company: string }
  searchParams: { stage?: string }
}) {
  const companyName = decodeURIComponent(params.company)
  const stage = (searchParams.stage as OpportunityStage) || "qualification"

  // Validate stage parameter
  if (!["discovery", "qualification", "executive", "internal"].includes(stage)) {
    redirect(`/dashboard/${companyName}?stage=qualification`)
  }

  // Fetch company data based on the stage
  const companyData = await getCompanyData(companyName, stage)

  if (!companyData) {
    notFound()
  }

  // Render the appropriate dashboard based on the stage
  let dashboardContent
  switch (stage) {
    case "discovery":
      dashboardContent = <DiscoveryDashboard data={companyData} />
      break
    case "qualification":
      dashboardContent = <QualificationDashboard data={companyData} />
      break
    case "executive":
      dashboardContent = <ExecutiveDashboard data={companyData} />
      break
    case "internal":
      dashboardContent = <InternalDashboard data={companyData} />
      break
    default:
      dashboardContent = <QualificationDashboard data={companyData} />
  }

  return <DashboardLayout companyName={companyName}>{dashboardContent}</DashboardLayout>
}

