import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { IndustrySectorData } from "@/lib/types"

interface IndustrySectorProps {
  data: IndustrySectorData
}

export function IndustrySector({ data }: IndustrySectorProps) {
  return (
    <div>
      <CardHeader>
        <CardTitle>Industry & Sector</CardTitle>
        <CardDescription>Identification of the company's industry and sector</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Industry</h3>
            <p className="text-lg font-medium">{data.industry}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Sector</h3>
            <p className="text-lg font-medium">{data.sector}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Market Position</h3>
            <p className="text-lg font-medium">{data.marketPosition}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Key Competitors</h3>
            <ul className="mt-1 list-inside list-disc">
              {data.competitors.map((competitor, index) => (
                <li key={index}>{competitor}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </div>
  )
}

