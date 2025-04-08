import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { BusinessValueMap } from "@/lib/types"
import { ArrowUpRight, Maximize, DollarSign, TrendingDown, BarChart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BusinessValueMapSectionProps {
  businessValueMap: BusinessValueMap
}

export function BusinessValueMapSection({ businessValueMap }: BusinessValueMapSectionProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <BarChart className="h-5 w-5 text-primary-500" />
          Business Value Map
        </EnhancedCardTitle>
        <EnhancedCardDescription>Key business processes, pain points, and opportunities</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <Tabs defaultValue="processes">
          <TabsList className="mb-4">
            <TabsTrigger value="processes">Current Processes</TabsTrigger>
            <TabsTrigger value="pain">Pain Points</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Opportunities</TabsTrigger>
            <TabsTrigger value="cost">Cost Reduction</TabsTrigger>
            <TabsTrigger value="outcomes">Business Outcomes</TabsTrigger>
          </TabsList>

          <TabsContent value="processes" className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Maximize className="h-4 w-4 text-primary-600" />
              <h3 className="font-medium">Current Processes</h3>
            </div>
            <ul className="space-y-2">
              {businessValueMap.currentProcesses.map((process, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{process}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="pain" className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <h3 className="font-medium">Pain Points</h3>
            </div>
            <ul className="space-y-2">
              {businessValueMap.painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUpRight className="h-4 w-4 text-green-600" />
              <h3 className="font-medium">Revenue Opportunities</h3>
            </div>
            <ul className="space-y-2">
              {businessValueMap.revenueOpportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{opportunity}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="cost" className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="h-4 w-4 text-blue-600" />
              <h3 className="font-medium">Cost Reduction Opportunities</h3>
            </div>
            <ul className="space-y-2">
              {businessValueMap.costReductionOpportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{opportunity}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="outcomes" className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary-600" />
              <h3 className="font-medium">Business Outcomes</h3>
            </div>
            <ul className="space-y-2">
              {businessValueMap.businessOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </EnhancedCardContent>
    </div>
  )
}

import { AlertTriangle } from "lucide-react"

