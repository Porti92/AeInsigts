import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { CompanyOverviewData } from "@/lib/types"
import { Building2, Briefcase, Info } from "lucide-react"

interface CompanyOverviewProps {
  data: CompanyOverviewData
}

export function EnhancedCompanyOverview({ data }: CompanyOverviewProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Building2 className="h-5 w-5 text-primary-500" />
          Company Overview
        </EnhancedCardTitle>
        <EnhancedCardDescription>A concise description of the company's business operations</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Info className="h-4 w-4 text-primary-500" />
              Description
            </h3>
            <p className="text-neutral-600">{data.description}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Info className="h-4 w-4 text-primary-500" />
              Key Facts
            </h3>
            <ul className="space-y-2">
              {data.keyFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-neutral-600">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
            <Briefcase className="h-4 w-4 text-primary-500" />
            Products & Services
          </h3>
          <p className="text-neutral-600">{data.productsServices}</p>
        </div>
      </EnhancedCardContent>
    </div>
  )
}

