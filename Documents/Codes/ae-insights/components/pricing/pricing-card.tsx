import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  ctaText: string
  ctaLink: string
  popular?: boolean
  children: ReactNode
}

export function PricingCard({
  title,
  price,
  period = "",
  description,
  ctaText,
  ctaLink,
  popular = false,
  children,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border bg-white p-6 shadow-soft transition-all duration-200",
        popular && "border-primary-300 shadow-primary-sm",
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-gradient text-white text-sm font-medium rounded-full shadow-primary-sm">
          Most Popular
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="ml-1 text-neutral-500">{period}</span>}
        </div>
        <p className="mt-3 text-neutral-600">{description}</p>
      </div>

      <div className="mt-2 space-y-4 flex-1">{children}</div>

      <div className="mt-8">
        <Button
          asChild
          className={cn(
            "w-full h-12",
            popular
              ? "bg-primary-gradient hover:opacity-90 shadow-primary-sm"
              : "bg-white border-2 border-primary-200 text-primary-700 hover:bg-primary-50",
          )}
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  )
}

