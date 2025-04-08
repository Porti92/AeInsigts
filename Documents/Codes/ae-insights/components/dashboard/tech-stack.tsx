import {
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import type { TechnologyStack } from "@/lib/types"
import { Database, Code, Server, Layers } from "lucide-react"

interface TechStackSectionProps {
  techStack: TechnologyStack[]
}

export function TechStackSection({ techStack }: TechStackSectionProps) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "cloud infrastructure":
        return <Server className="h-4 w-4 text-blue-500" />
      case "data processing":
        return <Database className="h-4 w-4 text-green-500" />
      case "development":
        return <Code className="h-4 w-4 text-orange-500" />
      case "ai/ml":
        return <Layers className="h-4 w-4 text-purple-500" />
      default:
        return <Code className="h-4 w-4 text-primary-500" />
    }
  }

  return (
    <div>
      <EnhancedCardHeader>
        <EnhancedCardTitle>
          <Code className="h-5 w-5 text-primary-500" />
          Technology Stack
        </EnhancedCardTitle>
        <EnhancedCardDescription>Key technologies used by the company</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="space-y-6">
          {techStack.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-2 mb-3">
                {getCategoryIcon(category.category)}
                <h3 className="font-medium">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-neutral-100 rounded-full text-sm border border-neutral-200 text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </EnhancedCardContent>
    </div>
  )
}

