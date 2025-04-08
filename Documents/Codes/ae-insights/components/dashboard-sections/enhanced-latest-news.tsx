import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { NewsItem } from "@/lib/types"
import { CalendarIcon, ExternalLink, Newspaper } from "lucide-react"
import Link from "next/link"

interface LatestNewsProps {
  data: NewsItem[]
}

export function EnhancedLatestNews({ data }: LatestNewsProps) {
  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Newspaper className="h-5 w-5 text-primary-500" />
          Latest News
        </EnhancedCardTitle>
        <EnhancedCardDescription>Recent news articles and updates related to the company</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="space-y-5">
          {data.map((item, index) => (
            <div key={index} className="border-b border-neutral-200 pb-5 last:border-0 last:pb-0 group">
              <h3 className="font-medium text-lg group-hover:text-primary-600 transition-colors">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  {item.title}
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </Link>
              </h3>
              <div className="mt-1.5 flex items-center text-sm text-neutral-500">
                <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                {item.date}
                {item.source && (
                  <>
                    <span className="mx-1.5">•</span>
                    <span className="font-medium text-neutral-600">{item.source}</span>
                  </>
                )}
              </div>
              <p className="mt-2.5 text-neutral-600">{item.summary}</p>
            </div>
          ))}
        </div>
      </EnhancedCardContent>
    </div>
  )
}

