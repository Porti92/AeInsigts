"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import type { OpportunityStage } from "@/components/opportunity-stage-selector"
import { motion } from "framer-motion"
import { BarChart2, Users, Briefcase, PieChart } from "lucide-react"

interface DashboardTabsProps {
  companyName: string
}

export function DashboardTabs({ companyName }: DashboardTabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<OpportunityStage>("qualification")

  // Get the stage from search params on initial load
  useEffect(() => {
    const stage = searchParams.get("stage") as OpportunityStage
    if (stage && ["discovery", "qualification", "executive", "internal"].includes(stage)) {
      setActiveTab(stage)
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setActiveTab(value as OpportunityStage)

    // Update URL with selected stage
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set("stage", value)
    router.push(`${pathname}?${newParams.toString()}`)
  }

  const getStageColor = (stage: OpportunityStage) => {
    switch (stage) {
      case "discovery":
        return "bg-primary-500"
      case "qualification":
        return "bg-accent-blue"
      case "internal":
        return "bg-accent-purple"
      case "executive":
        return "bg-accent-teal"
      default:
        return "bg-primary-500"
    }
  }

  const getStageIcon = (stage: OpportunityStage) => {
    switch (stage) {
      case "discovery":
        return <BarChart2 className="h-3.5 w-3.5" />
      case "qualification":
        return <PieChart className="h-3.5 w-3.5" />
      case "internal":
        return <Users className="h-3.5 w-3.5" />
      case "executive":
        return <Briefcase className="h-3.5 w-3.5" />
      default:
        return <BarChart2 className="h-3.5 w-3.5" />
    }
  }

  return (
    <div className="sticky top-16 z-20 border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container py-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full flex justify-center">
          <TabsList className="bg-neutral-50 p-1.5 rounded-full border border-neutral-100 shadow-sm mx-auto w-full max-w-2xl flex justify-between">
            {["discovery", "qualification", "executive", "internal"].map((stage) => (
              <TabsTrigger
                key={stage}
                value={stage}
                className="flex gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm relative rounded-full px-3 py-2 text-sm font-medium transition-all capitalize flex-1 justify-center"
              >
                <span
                  className={`h-5 w-5 rounded-full ${getStageColor(stage as OpportunityStage)} flex items-center justify-center text-white`}
                >
                  {getStageIcon(stage as OpportunityStage)}
                </span>
                <span className="hidden sm:inline">{stage}</span>
                {activeTab === stage && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full bg-white shadow-sm -z-10"
                    transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

