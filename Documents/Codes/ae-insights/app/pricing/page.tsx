import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, Search, Zap, Users, BarChart3, FileText } from "lucide-react"
import { PricingCard } from "@/components/pricing/pricing-card"
import { PricingFeature } from "@/components/pricing/pricing-feature"
import { PricingFaq } from "@/components/pricing/pricing-faq"
import { CsvUploadShowcase } from "@/components/pricing/csv-upload-showcase"

export const metadata = {
  title: "Pricing - AE Insights",
  description: "Choose the right plan for your sales intelligence needs",
}

export default function PricingPage() {
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
              className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
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
                Choose the right <span className="gradient-text">plan</span> for your needs
              </h1>
              <p className="text-neutral-600 md:text-xl max-w-[700px]">
                Get comprehensive sales intelligence to prepare for discovery calls, strategic account planning, and
                team alignment.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {/* Free Plan */}
              <PricingCard
                title="Free"
                price="$0"
                description="Perfect for individual account executives getting started with sales intelligence."
                ctaText="Sign up for free"
                ctaLink="/signup"
                popular={false}
              >
                <PricingFeature icon={<Search />} text="Up to 3 company searches per day" available />
                <PricingFeature icon={<BarChart3 />} text="Basic company insights" available />
                <PricingFeature icon={<Users />} text="Single user account" available />
                <PricingFeature icon={<FileText />} text="Standard report templates" available />
                <PricingFeature icon={<Upload />} text="CSV bulk upload" available={false} />
                <PricingFeature icon={<Zap />} text="Advanced AI insights" available={false} />
              </PricingCard>

              {/* Premium Plan */}
              <PricingCard
                title="Premium"
                price="$49"
                period="/month"
                description="For sales teams that need comprehensive insights and advanced features."
                ctaText="Get started with Premium"
                ctaLink="/signup?plan=premium"
                popular={true}
              >
                <PricingFeature icon={<Search />} text="Unlimited company searches" available />
                <PricingFeature icon={<BarChart3 />} text="Advanced company insights" available />
                <PricingFeature icon={<Users />} text="Team collaboration features" available />
                <PricingFeature icon={<FileText />} text="Custom report templates" available />
                <PricingFeature icon={<Upload />} text="CSV bulk upload for account lists" available />
                <PricingFeature icon={<Zap />} text="Advanced AI insights and recommendations" available />
              </PricingCard>
            </div>
          </div>
        </section>

        {/* CSV Upload Showcase Section */}
        <CsvUploadShowcase />

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mt-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <PricingFaq />
            </div>

            <div className="mt-16 max-w-2xl mx-auto text-center bg-primary-50 p-8 rounded-xl border border-primary-100">
              <h2 className="text-2xl font-bold mb-4">Need a custom plan for your enterprise?</h2>
              <p className="text-neutral-600 mb-6">
                We offer custom solutions for larger teams with specific requirements. Contact our sales team to discuss
                your needs.
              </p>
              <Button asChild className="bg-primary-gradient hover:opacity-90 shadow-primary-sm">
                <Link href="/contact">Contact Sales</Link>
              </Button>
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

