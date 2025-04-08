import { HomepageSearchForm } from "@/components/homepage-search-form"
import Link from "next/link"

export default function Home() {
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
              className="text-neutral-700 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Help
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-24">
        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              What company do you want to <span className="gradient-text">research</span>?
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get comprehensive insights on any company to prepare for discovery calls, strategic account planning, and
              team alignment.
            </p>
          </div>

          <div className="w-full max-w-2xl mx-auto">
            <HomepageSearchForm />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500 pt-4">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100">
              <span className="h-2 w-2 rounded-full bg-primary-500"></span>
              Pre-discovery research
            </div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100">
              <span className="h-2 w-2 rounded-full bg-primary-500"></span>
              Strategic account planning
            </div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100">
              <span className="h-2 w-2 rounded-full bg-primary-500"></span>
              Internal handover processes
            </div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100">
              <span className="h-2 w-2 rounded-full bg-primary-500"></span>
              Team alignment
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 bg-neutral-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} AE Insights. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/pricing" className="text-sm text-neutral-500 hover:text-primary-600 transition-colors">
              Pricing
            </a>
            <a href="/features" className="text-sm text-neutral-500 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="/help" className="text-sm text-neutral-500 hover:text-primary-600 transition-colors">
              Help
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

