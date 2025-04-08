import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { CompanyOverviewData } from "@/lib/types"

interface CompanyOverviewProps {
  data: CompanyOverviewData
}

export function CompanyOverview({ data }: CompanyOverviewProps) {
  return (
    <div>
      <CardHeader>
        <CardTitle>Company Overview</CardTitle>
        <CardDescription>A concise description of the company's business operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium">Description</h3>
            <p className="mt-1 text-muted-foreground">{data.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Key Facts</h3>
            <ul className="mt-1 list-inside list-disc text-muted-foreground">
              {data.keyFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Products & Services</h3>
          <p className="mt-1 text-muted-foreground">{data.productsServices}</p>
        </div>
      </CardContent>
    </div>
  )
}

