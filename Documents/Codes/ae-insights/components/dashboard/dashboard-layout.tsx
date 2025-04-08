"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import { SalesNotesProvider } from "@/components/dashboard/sales-notes-context"
import { motion } from "framer-motion"
import { ArrowLeft, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  companyName: string
  children: React.ReactNode
}

export function DashboardLayout({ companyName, children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll events to update header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Get the current stage from URL
  const currentStage = searchParams.get("stage") || "qualification"

  // Define stage-specific colors
  const stageColors: Record<string, string> = {
    discovery: "from-primary-500 to-primary-600",
    qualification: "from-accent-blue to-blue-600",
    executive: "from-accent-teal to-teal-600",
    internal: "from-accent-purple to-purple-600",
  }

  const currentColor = stageColors[currentStage] || stageColors.qualification

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      {/* Header with glass effect */}
      <header
        className={cn(
          "sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-200",
          isScrolled && "shadow-sm",
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 transition-all hover:bg-primary-100">
                <ArrowLeft className="h-5 w-5 text-primary-600" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
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
            <div className="hidden md:flex items-center gap-6">
              <Link href="/pricing" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Pricing
              </Link>
              <Link href="/features" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Features
              </Link>
              <Link href="/help" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Help
              </Link>
            </div>

            <div className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 font-medium text-sm border border-primary-100">
              {companyName}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full h-9 w-9"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <nav className="space-y-4">
                <Link
                  href="/pricing"
                  className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/features"
                  className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/help"
                  className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Help
                </Link>
              </nav>
            </div>
          </motion.div>
        </div>
      )}

      {/* Dashboard tabs */}
      <SalesNotesProvider companyName={companyName}>
        <DashboardTabs companyName={companyName} />

        {/* Main content with animation */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 py-6"
        >
          {children}
        </motion.main>

        {/* Footer with gradient */}
        <footer className="border-t py-6 bg-white">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} AE Insights. All rights reserved.
            </p>
            <p className="text-center text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </footer>
      </SalesNotesProvider>
    </div>
  )
}

