"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type DashboardCardVariant = "default" | "glass" | "accent" | "secondary"

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: DashboardCardVariant
  hover?: boolean
  animate?: boolean
  icon?: React.ReactNode
  title?: string
  description?: string
  action?: React.ReactNode
}

export const DashboardCard = React.forwardRef<HTMLDivElement, DashboardCardProps>(
  (
    {
      className,
      variant = "default",
      hover = true,
      animate = false,
      icon,
      title,
      description,
      action,
      children,
      ...props
    },
    ref,
  ) => {
    const cardClasses = cn(
      "rounded-2xl border bg-white p-6 transition-all",
      hover && "hover:shadow-soft-lg",
      variant === "glass" && "bg-white/80 backdrop-blur-md shadow-glass",
      variant === "accent" && "border-primary-200 bg-primary-50 shadow-primary-sm",
      variant === "secondary" && "border-neutral-200 bg-neutral-50 shadow-none",
      variant === "default" && "border-neutral-200 shadow-soft",
      className,
    )

    const cardContent = (
      <div ref={ref} className={cardClasses} {...props}>
        {(title || description || action) && (
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              {title && (
                <h3 className="dashboard-section-title">
                  {icon && <span className="text-primary-500">{icon}</span>}
                  {title}
                </h3>
              )}
              {description && <p className="dashboard-section-description">{description}</p>}
            </div>
            {action && <div className="ml-4 flex-shrink-0">{action}</div>}
          </div>
        )}
        {children}
      </div>
    )

    if (animate) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {cardContent}
        </motion.div>
      )
    }

    return cardContent
  },
)

DashboardCard.displayName = "DashboardCard"

interface DashboardCardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  icon?: React.ReactNode
  action?: React.ReactNode
}

export const DashboardCardSection = React.forwardRef<HTMLDivElement, DashboardCardSectionProps>(
  ({ className, title, icon, action, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-6 last:mb-0", className)} {...props}>
        {(title || action) && (
          <div className="mb-3 flex items-center justify-between">
            {title && (
              <h4 className="flex items-center gap-2 text-base font-medium text-neutral-800">
                {icon && <span className="text-primary-500">{icon}</span>}
                {title}
              </h4>
            )}
            {action && <div>{action}</div>}
          </div>
        )}
        {children}
      </div>
    )
  },
)

DashboardCardSection.displayName = "DashboardCardSection"

interface DashboardStatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  icon?: React.ReactNode
}

export const DashboardStat = React.forwardRef<HTMLDivElement, DashboardStatProps>(
  ({ className, label, value, trend, trendValue, icon, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("dashboard-stat", className)} {...props}>
        <div className="dashboard-stat-label">{label}</div>
        <div className="flex items-end justify-between">
          <div className="dashboard-stat-value">{value}</div>
          {icon && <div className="ml-2 text-primary-500">{icon}</div>}
        </div>
        {trend && trendValue && (
          <div
            className={cn(
              "mt-1 text-xs font-medium",
              trend === "up" && "text-green-600",
              trend === "down" && "text-red-600",
              trend === "neutral" && "text-neutral-500",
            )}
          >
            {trend === "up" && "↑ "}
            {trend === "down" && "↓ "}
            {trendValue}
          </div>
        )}
      </div>
    )
  },
)

DashboardStat.displayName = "DashboardStat"

interface DashboardTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info"
}

export const DashboardTag = React.forwardRef<HTMLSpanElement, DashboardTagProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "dashboard-tag",
          variant === "success" && "dashboard-tag-success",
          variant === "warning" && "dashboard-tag-warning",
          variant === "error" && "dashboard-tag-error",
          variant === "info" && "dashboard-tag-info",
          className,
        )}
        {...props}
      >
        {children}
      </span>
    )
  },
)

DashboardTag.displayName = "DashboardTag"

