import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle, FileText, MessageCircle, Video, Book, ArrowRight, Users } from "lucide-react"
import { DashboardCard } from "@/components/ui/dashboard-card"

export const metadata = {
  title: "Help & Support - AE Insights",
  description: "Get help and support for AE Insights",
}

export default function HelpPage() {
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
              className="text-neutral-700 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="/help"
              className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
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
                Help & <span className="gradient-text">Support</span>
              </h1>
              <p className="text-neutral-600 md:text-xl max-w-[700px]">
                Find answers to your questions and learn how to get the most out of AE Insights.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <DashboardCard
                title="Documentation"
                icon={<Book className="h-5 w-5" />}
                description="Comprehensive guides and tutorials"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Explore our detailed documentation to learn how to use all features of AE Insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/getting-started" className="text-primary-600 hover:underline">
                        Getting Started Guide
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/features" className="text-primary-600 hover:underline">
                        Feature Documentation
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/api" className="text-primary-600 hover:underline">
                        API Reference
                      </Link>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Video Tutorials"
                icon={<Video className="h-5 w-5" />}
                description="Learn by watching step-by-step guides"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Visual learner? Our video tutorials will help you master AE Insights quickly.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/videos/introduction" className="text-primary-600 hover:underline">
                        Introduction to AE Insights
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/videos/advanced-features" className="text-primary-600 hover:underline">
                        Advanced Features Tutorial
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/videos/team-collaboration" className="text-primary-600 hover:underline">
                        Team Collaboration Guide
                      </Link>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="FAQ"
                icon={<HelpCircle className="h-5 w-5" />}
                description="Answers to common questions"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Find quick answers to the most frequently asked questions about AE Insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/faq/account" className="text-primary-600 hover:underline">
                        Account & Billing Questions
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/faq/features" className="text-primary-600 hover:underline">
                        Feature-specific Questions
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/faq/troubleshooting" className="text-primary-600 hover:underline">
                        Troubleshooting Guide
                      </Link>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Contact Support"
                icon={<MessageCircle className="h-5 w-5" />}
                description="Get help from our support team"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button asChild className="w-full bg-primary-gradient hover:opacity-90 shadow-primary-sm">
                    <Link href="/help/contact">Contact Support Team</Link>
                  </Button>
                  <p className="text-sm text-neutral-500 text-center">
                    Premium plan users get priority support with faster response times.
                  </p>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Knowledge Base"
                icon={<FileText className="h-5 w-5" />}
                description="In-depth articles and guides"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Browse our extensive knowledge base for detailed articles on every aspect of AE Insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/kb/best-practices" className="text-primary-600 hover:underline">
                        Best Practices
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/kb/integrations" className="text-primary-600 hover:underline">
                        Integration Guides
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                        →
                      </span>
                      <Link href="/help/kb/advanced" className="text-primary-600 hover:underline">
                        Advanced Usage Tips
                      </Link>
                    </li>
                  </ul>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Community Forum"
                icon={<Users className="h-5 w-5" />}
                description="Connect with other AE Insights users"
                animate
              >
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Join our community to share tips, ask questions, and learn from other sales professionals.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white border-2 border-primary-200 text-primary-700 hover:bg-primary-50"
                  >
                    <Link href="/community">
                      Visit Community Forum <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-sm text-neutral-500 text-center">
                    Over 5,000 active members sharing insights and best practices.
                  </p>
                </div>
              </DashboardCard>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-primary-50 border-y border-primary-100">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our team is ready to help you get the most out of AE Insights. Reach out to us anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary-gradient hover:opacity-90 shadow-primary-sm text-lg h-12 px-6">
                  <Link href="/help/contact">Contact Support</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-200 text-primary-700 hover:bg-primary-50 text-lg h-12 px-6"
                >
                  <Link href="/help/schedule-demo">Schedule a Demo</Link>
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

