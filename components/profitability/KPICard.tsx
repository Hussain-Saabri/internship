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
    <Card className="flex flex-col gap-6 rounded-[12px] border-gray-200 bg-white ">
      <CardContent className="[&:last-child]:pb-6 p-4">
        {/* Header: Title and Icon */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#6B7280]">{title}</span>
          <div className="w-4 h-4 shrink-0">{icon}</div>
        </div>
        {/* Main Value */}
        <div className="flex items-center h-[30px] text-[#25B990]">
          <p
            className={cn(
              "text-[20px] text-[#25B990] font-semibold",

            )}
          >
            {value}
          </p>
        </div>
        {/* Trend Indicator or Subtitle */}
        {trend ? (
          <div className="flex items-center gap-1 mt-1">
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
      </CardContent>
    </Card>
  )
}
