import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

interface EnhancedHeaderProps {
  showBackButton?: boolean
  companyName?: string
}

export function EnhancedHeader({ showBackButton = false, companyName }: EnhancedHeaderProps) {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 transition-all hover:bg-primary-100">
                <ChevronLeft className="h-5 w-5 text-primary-600" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
          )}
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="h-8 w-8 rounded-lg bg-primary-gradient flex items-center justify-center shadow-primary-sm">
                <span className="text-white font-semibold text-sm">AE</span>
              </div>
            </Link>
            <h1 className="text-xl font-semibold">
              <Link href="/">
                <span className="gradient-text">AE</span> Insights
              </Link>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/pricing" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/features" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link href="/help" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Help
            </Link>
          </nav>

          {companyName ? (
            <div className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 font-medium text-sm border border-primary-100">
              {companyName}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild className="text-neutral-700 hover:text-primary-600 hover:bg-primary-50">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="bg-primary-gradient hover:opacity-90 shadow-primary-sm hidden md:flex">
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

// This component is still used in other parts of the application, so we're keeping it.
// We've just removed it from the homepage and replaced it with an inline navbar.

