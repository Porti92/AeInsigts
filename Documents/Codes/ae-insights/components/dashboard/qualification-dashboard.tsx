"use client"

import { DashboardCard, DashboardCardSection, DashboardStat, DashboardTag } from "@/components/ui/dashboard-card"
import { SalesNotes } from "@/components/dashboard/sales-notes"
import type { CompanyData } from "@/lib/types"
import { Building2, BarChart3, Newspaper, Milestone, Shield, Lightbulb, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface QualificationDashboardProps {
  data: CompanyData
}

export function QualificationDashboard({ data }: QualificationDashboardProps) {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* Company Overview Card */}
      <motion.div variants={itemVariants} className="lg:col-span-3">
        <DashboardCard
          variant="accent"
          icon={<Building2 className="h-5 w-5" />}
          title="Company Overview"
          description="A concise description of the company's business operations"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-medium flex items-center gap-2">Description</h3>
              <p className="text-neutral-700">{data.overview.description}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium flex items-center gap-2">Key Facts</h3>
              <ul className="space-y-2">
                {data.overview.keyFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-neutral-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">Products & Services</h3>
            <p className="text-neutral-700">{data.overview.productsServices}</p>
          </div>
        </DashboardCard>
      </motion.div>

      {/* Key Metrics Card */}
      <motion.div variants={itemVariants}>
        <DashboardCard
          icon={<BarChart3 className="h-5 w-5" />}
          title="Key Metrics"
          description="Important company statistics"
        >
          <div className="grid grid-cols-2 gap-4">
            <DashboardStat label="Industry" value={data.industry.industry} icon={<BarChart3 className="h-5 w-5" />} />
            <DashboardStat label="Sector" value={data.industry.sector} />
            <DashboardStat
              label="Market Position"
              value={data.industry.marketPosition}
              trend="up"
              trendValue="Growing"
            />
            <DashboardStat label="Competitors" value={data.industry.competitors.length} />
          </div>
          <DashboardCardSection title="Competitors" className="mt-6">
            <div className="flex flex-wrap gap-2">
              {data.industry.competitors.map((competitor, index) => (
                <DashboardTag key={index}>{competitor}</DashboardTag>
              ))}
            </div>
          </DashboardCardSection>
        </DashboardCard>
      </motion.div>

      {/* Latest News Card */}
      <motion.div variants={itemVariants} className="lg:col-span-2">
        <DashboardCard
          icon={<Newspaper className="h-5 w-5" />}
          title="Latest News"
          description="Recent news articles and updates related to the company"
          action={
            <Button variant="outline" size="sm" className="text-xs">
              View All
            </Button>
          }
        >
          <div className="space-y-5">
            {data.news.map((item, index) => (
              <div key={index} className="border-b border-neutral-200 pb-5 last:border-0 last:pb-0 group">
                <h3 className="font-medium text-lg group-hover:text-primary-600 transition-colors">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    {item.title}
                  </a>
                </h3>
                <div className="mt-1.5 flex items-center text-sm text-neutral-500">
                  {item.date}
                  {item.source && (
                    <>
                      <span className="mx-1.5">•</span>
                      <span className="font-medium text-neutral-600">{item.source}</span>
                    </>
                  )}
                </div>
                <p className="mt-2.5 text-neutral-700">{item.summary}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </motion.div>

      {/* Milestones Card */}
      <motion.div variants={itemVariants}>
        <DashboardCard
          icon={<Milestone className="h-5 w-5" />}
          title="Milestones & Developments"
          description="Significant achievements and recent events"
        >
          <div className="relative space-y-5 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-primary-200">
            {data.milestones.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-6 top-1 h-4 w-4 rounded-full bg-primary-500 shadow-primary-sm"></div>
                <div className="flex items-center text-sm text-neutral-500 mb-1">{item.date}</div>
                <h3 className="font-medium text-neutral-800">{item.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </motion.div>

      {/* Challenges Card */}
      <motion.div variants={itemVariants}>
        <DashboardCard
          icon={<Shield className="h-5 w-5" />}
          title="Challenges & Risks"
          description="Potential challenges, risks, and red flags"
        >
          <div className="space-y-4">
            {data.challenges.map((item, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="mt-0.5">
                  {item.severity === "High" ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <Shield className="h-3 w-3" />
                    </span>
                  ) : item.severity === "Medium" ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <Shield className="h-3 w-3" />
                    </span>
                  ) : (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                      <Shield className="h-3 w-3" />
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-neutral-800">{item.title}</h3>
                    <DashboardTag
                      variant={item.severity === "High" ? "error" : item.severity === "Medium" ? "warning" : "info"}
                    >
                      {item.severity}
                    </DashboardTag>
                  </div>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </motion.div>

      {/* Strategic Notes Card */}
      <motion.div variants={itemVariants} className="lg:col-span-3">
        <DashboardCard
          variant="glass"
          icon={<Lightbulb className="h-5 w-5" />}
          title="Strategic Notes for Discovery"
          description="Strategic insights and notes to aid in the discovery process"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-primary-700" />
                </div>
                <h3 className="font-medium text-neutral-800">Key Objectives</h3>
              </div>
              <ul className="space-y-2">
                {data.strategicNotes.keyObjectives.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-primary-700" />
                </div>
                <h3 className="font-medium text-neutral-800">Talking Points</h3>
              </div>
              <ul className="space-y-2">
                {data.strategicNotes.talkingPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-primary-700" />
                </div>
                <h3 className="font-medium text-neutral-800">Value Propositions</h3>
              </div>
              <ul className="space-y-2">
                {data.strategicNotes.valuePropositions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                <FileText className="h-4 w-4 text-primary-700" />
              </div>
              <h3 className="font-medium text-neutral-800">Additional Notes</h3>
            </div>
            <p className="text-neutral-700">{data.strategicNotes.additionalNotes}</p>
          </div>
        </DashboardCard>
      </motion.div>

      {/* Sales Notes Card */}
      <motion.div variants={itemVariants} className="lg:col-span-3">
        <DashboardCard
          icon={<FileText className="h-5 w-5" />}
          title="Sales Notes"
          description="Your personal notes about this opportunity"
        >
          <SalesNotes />
        </DashboardCard>
      </motion.div>
    </motion.div>
  )
}

