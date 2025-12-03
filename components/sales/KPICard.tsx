"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from "@/lib/flaticons"
import { cn } from "@/lib/utils"

export interface KPICardProps {
  title: string
  value: string
  icon: React.ReactNode
  trend?: {
    value: string
    isPositive: boolean
  }
  subtitle?: string
  valueColor?: "default" | "red" | "orange" | "green"
}

const valueColorClasses = {
  default: "text-gray-800",
  red: "text-[#e85454]",
  orange: "text-[#f5b82e]",
  green: "text-[#25b990]",
}

const trendColorClasses = {
  positive: "text-[#25b990]",
  negative: "text-[#e85454]",
}

export function KPICard({ title, value, icon, trend, subtitle, valueColor = "default" }: KPICardProps) {
  return (
    <Card className="h-[116px] border border-gray-200 rounded-xl  relative overflow-hidden">
      {/* Faint Overlay Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <CardContent className="p-4 flex flex-col gap-2 h-full relative z-10">
        {/* Header: Title and Icon */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 font-normal">{title}</p>
          <div className="w-4 h-4 shrink-0">{icon}</div>
        </div>

        {/* Main Value */}
        <div className="flex items-center h-[30px]">
          <p
            className={cn(
              "text-xl font-semibold leading-[30px] tracking-[-0.45px]",
              valueColorClasses[valueColor]
            )}
          >
            {value}
          </p>
        </div>

        {/* Trend Indicator or Subtitle */}
        {trend && (
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 shrink-0">
              {trend.isPositive ? (
                <ArrowUpIcon className="text-[#25b990]" size={12} strokeWidth={2} />
              ) : (
                <ArrowDownIcon className="text-[#e85454]" size={12} strokeWidth={2} />
              )}
            </div>
            <p
              className={cn(
                "text-xs font-normal leading-4",
                trend.isPositive ? trendColorClasses.positive : trendColorClasses.negative
              )}
            >
              {trend.value}
            </p>
          </div>
        )}

        {subtitle && !trend && (
          <div className="flex items-center h-4">
            <p className="text-xs font-normal leading-4 text-gray-500">
              {subtitle}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
