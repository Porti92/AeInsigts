import type { ReactNode } from "react"
import { Check, X } from "lucide-react"

interface PricingFeatureProps {
  icon: ReactNode
  text: string
  available: boolean
}

export function PricingFeature({ icon, text, available }: PricingFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-5 h-5 text-primary-600">{icon}</div>
      <span className="flex-1 text-neutral-700">{text}</span>
      <div className="flex-shrink-0">
        {available ? <Check className="w-5 h-5 text-primary-600" /> : <X className="w-5 h-5 text-neutral-400" />}
      </div>
    </div>
  )
}

