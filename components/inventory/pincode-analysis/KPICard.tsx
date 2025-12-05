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
    <Card className="relative overflow-hidden border border-gray-200  bg-white rounded-[12px] h-full shadow-none">
      {/* Faint Overlay Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <CardContent className="relative z-10 p-5 flex flex-col justify-between h-full">
        {/* Header: Title and Icon */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-900 font-semibold">{title}</span>
          <div className="w-4 h-4 shrink-0 text-gray-600">{icon}</div>
        </div>

        {/* Main Value */}
        <div className="mt-auto">
          <div className="flex items-center h-[30px]">
            <p className={cn("text-[20px] font-semibold", valueColorClasses[valueColor])}>
              {value}
            </p>
          </div>

          {/* Trend Indicator or Subtitle */}
          <div className="mt-1">
            {trend ? (
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 shrink-0">
                  {trend.isPositive ? (
                    <ArrowUpIcon className="text-[#25B990]" size={12} strokeWidth={2} />
                  ) : (
                    <ArrowDownIcon className="text-[#E85454]" size={12} strokeWidth={2} />
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
            ) : (
              subtitle && (
                <div className="flex items-center h-4">
                  <p className="text-xs text-[#6B7280]">{subtitle}</p>
                </div>
              )
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
