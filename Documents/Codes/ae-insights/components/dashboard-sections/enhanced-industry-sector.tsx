import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { IndustrySectorData } from "@/lib/types"
import { BarChart3, Users } from "lucide-react"

interface IndustrySectorProps {
  data: IndustrySectorData
}

export function EnhancedIndustrySector({ data }: IndustrySectorProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <BarChart3 className="h-5 w-5 text-primary-500" />
          Industry & Sector
        </EnhancedCardTitle>
        <EnhancedCardDescription>Identification of the company's industry and sector</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="space-y-5">
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <h3 className="text-sm font-medium text-neutral-500 mb-1">Industry</h3>
            <p className="text-lg font-medium text-neutral-800">{data.industry}</p>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <h3 className="text-sm font-medium text-neutral-500 mb-1">Sector</h3>
            <p className="text-lg font-medium text-neutral-800">{data.sector}</p>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <h3 className="text-sm font-medium text-neutral-500 mb-1">Market Position</h3>
            <p className="text-lg font-medium text-neutral-800">{data.marketPosition}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-500 mb-2 flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary-500" />
              Key Competitors
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.competitors.map((competitor, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm border border-primary-100"
                >
                  {competitor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </EnhancedCardContent>
    </div>
  )
}

