import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { NewsItem } from "@/lib/types"
import { CalendarIcon, ExternalLink } from "lucide-react"
import Link from "next/link"

interface LatestNewsProps {
  data: NewsItem[]
}

export function LatestNews({ data }: LatestNewsProps) {
  return (
    <div>
      <CardHeader>
        <CardTitle>Latest News</CardTitle>
        <CardDescription>Recent news articles and updates related to the company</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  {item.title}
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </h3>
              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {item.date}
                {item.source && (
                  <>
                    <span className="mx-1">•</span>
                    <span>{item.source}</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  )
}

