import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Zap, Users, FileText, Layers, ArrowRight } from "lucide-react"
import { DashboardCard } from "@/components/ui/dashboard-card"

export const metadata = {
  title: "Features - AE Insights",
  description: "Discover the powerful features of AE Insights for sales professionals",
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Full page gradient background */}
      <div className="full-page-gradient" />

      {/* Simplified navbar */}
      <header className="w-full py-5">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary-gradient flex items-center justify-center shadow-primary-sm">
              <span className="text-white font-semibold text-sm">AE</span>
            </div>
            <h1 className="text-xl font-semibold">
              <span className="gradient-text">AE</span> Insights
            </h1>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/pricing"
              className="text-neutral-700 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/features"
              className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="/help"
              className="text-neutral-700 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Help
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful <span className="gradient-text">features</span> for sales professionals
              </h1>
              <p className="text-neutral-600 md:text-xl max-w-[700px]">
                AE Insights provides comprehensive tools to help you prepare for discovery calls, strategic account
                planning, and team alignment.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <DashboardCard
                title="AI-Powered Research"
                icon={<Zap className="h-5 w-5" />}
                description="Get comprehensive insights on any company in seconds"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Our AI analyzes thousands of data points to provide you with the most relevant information about
                    your prospect companies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Company overviews and key metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Latest news and developments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Industry and competitive analysis</span>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Stage-Specific Dashboards"
                icon={<Layers className="h-5 w-5" />}
                description="Tailored insights for every stage of your sales process"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Different stages of the sales process require different information. Our dashboards adapt to your
                    needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Discovery dashboard with business value mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Qualification dashboard with strategic insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Executive and internal briefing dashboards</span>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Bulk Analysis"
                icon={<FileText className="h-5 w-5" />}
                description="Process multiple companies at once with CSV upload"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Save time by analyzing your entire account list at once. Perfect for territory planning and account
                    reviews.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Upload up to 100 companies per CSV file</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Batch processing with detailed reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Export and share insights with your team</span>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Personal Notes"
                icon={<FileText className="h-5 w-5" />}
                description="Keep track of your thoughts and strategies"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Add your own notes and strategies for each company. Your notes are saved automatically and
                    accessible anytime.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">General notes and observations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Sales strategies and talking points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Next steps and action items</span>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Team Collaboration"
                icon={<Users className="h-5 w-5" />}
                description="Share insights and collaborate with your team"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Ensure everyone on your team is aligned with shared insights and collaborative features.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Share reports with team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Collaborative note-taking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Team-wide account visibility</span>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Advanced Analytics"
                icon={<BarChart3 className="h-5 w-5" />}
                description="Gain deeper insights with data visualization"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Visualize trends and patterns to make more informed decisions about your accounts.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Industry trend analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Competitive landscape mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        ✓
                      </span>
                      <span className="text-neutral-700">Growth and opportunity indicators</span>
                    </li>
                  </ul>
                </div>
              </DashboardCard>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-primary-50 border-y border-primary-100">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to transform your sales process?</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Join thousands of sales professionals who use AE Insights to close more deals and build stronger
                relationships with their prospects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary-gradient hover:opacity-90 shadow-primary-sm text-lg h-12 px-6">
                  <Link href="/signup">Get Started for Free</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-200 text-primary-700 hover:bg-primary-50 text-lg h-12 px-6"
                >
                  <Link href="/pricing">
                    View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 bg-neutral-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} AE Insights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

