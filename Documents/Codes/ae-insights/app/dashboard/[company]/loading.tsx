import { Skeleton } from "@/components/ui/skeleton"
import { EnhancedCard } from "@/components/ui/enhanced-card"
import { EnhancedHeader } from "@/components/enhanced-header"
import { Brain, Database, BarChart2, Zap, Search } from "lucide-react"

export default function Loading() {
  const processingSteps = [
    { message: "Fetching company data...", icon: <Database className="h-5 w-5 text-primary-500" /> },
    { message: "Analyzing industry trends...", icon: <BarChart2 className="h-5 w-5 text-accent-blue" /> },
    { message: "Processing market position...", icon: <Search className="h-5 w-5 text-accent-purple" /> },
    { message: "Generating strategic insights...", icon: <Brain className="h-5 w-5 text-accent-teal" /> },
    { message: "Finalizing recommendations...", icon: <Zap className="h-5 w-5 text-primary-600" /> },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <EnhancedHeader showBackButton />
      <main className="flex-1 py-8">
        <div className="container max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary-gradient flex items-center justify-center animate-pulse">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Analyzing Company</h2>
            <p className="text-neutral-600">
              Our AI is gathering and processing data to generate comprehensive insights
            </p>
          </div>

          <EnhancedCard className="mb-6">
            <div className="p-6 space-y-6">
              {processingSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-neutral-800">{step.message}</div>
                    <div className="h-1 bg-neutral-100 rounded-full mt-2 overflow-hidden">
                      <Skeleton className="h-full w-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </EnhancedCard>

          <div className="text-center text-sm text-neutral-500">
            <p>Preparing your dashboard...</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="h-2 w-2 bg-primary-500 rounded-full animate-pulse" />
              <div className="h-2 w-2 bg-primary-500 rounded-full animate-pulse" />
              <div className="h-2 w-2 bg-primary-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

