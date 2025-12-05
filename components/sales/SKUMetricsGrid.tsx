"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from "@/lib/flaticons"

interface MetricCardProps {
  title: string
  value: string
  valueColor?: "green" | "yellow" | "red" | "default"
  subtitle?: string
  trend?: {
    value: string
    isPositive: boolean
    isImprovement?: boolean
  }
}

function MetricCard({
  title,
  value,
  valueColor = "default",
  subtitle,
  trend,
}: MetricCardProps) {
  const colors = {
    green: "text-emerald-600",
    yellow: "text-amber-500",
    red: "text-red-500",
    default: "text-gray-900",
  }[valueColor]

  return (
    <Card
      className="
        rounded-xl 
        border border-gray-200 
        bg-white/90 
        backdrop-blur-sm 
        
        shadow-none
        transition-all
      "
    >
      <CardContent className="p-4">
        
        {/* Title */}
        <p className="text-[11px] font-bold text-gray-900 tracking-wide mb-2">
          {title}
        </p>

        {/* Value */}
        <p className={`text-lg font-semibold tracking-tight mb-1 ${colors}`}>
          {value}
        </p>

        {/* Trend or Subtitle */}
        {trend ? (
          <div className="flex items-center gap-1">
            {trend.isImprovement ? (
              <ArrowDownIcon size={10} className="text-emerald-600" />
            ) : trend.isPositive ? (
              <ArrowUpIcon size={10} className="text-emerald-600" />
            ) : (
              <ArrowDownIcon size={10} className="text-red-500" />
            )}

            <p
              className={`
                text-[10px] font-medium 
                ${
                  trend.isPositive || trend.isImprovement
                    ? "text-emerald-700"
                    : "text-red-500"
                }
              `}
            >
              {trend.value}
            </p>
          </div>
        ) : (
          <p className="text-[10px] text-gray-500">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  )
}

interface SKUMetricsGridProps {
  salesValue: string
  salesTrend?: { value: string; isPositive: boolean }
  orders: string
  ordersTrend?: { value: string; isPositive: boolean }
  grossMargin: string
  grossMarginSubtitle?: string
  wtDiscount: string
  wtDiscountTrend?: { value: string; isPositive: boolean; isImprovement?: boolean }
  returnsPercent: string
  returnsSubtitle?: string
  stock: string
  stockSubtitle?: string
}

export function SKUMetricsGrid({
  salesValue,
  salesTrend,
  orders,
  ordersTrend,
  grossMargin,
  grossMarginSubtitle = "healthy",
  wtDiscount,
  wtDiscountTrend,
  returnsPercent,
  returnsSubtitle = "3 units",
  stock,
  stockSubtitle = "₹105K",
}: SKUMetricsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <MetricCard title="Sales Value" value={salesValue} trend={salesTrend} />
      <MetricCard title="Orders" value={orders} trend={ordersTrend} />
      <MetricCard
        title="Gross Margin"
        value={grossMargin}
        valueColor="green"
        subtitle={grossMarginSubtitle}
      />
      <MetricCard
        title="Wt. Discount"
        value={wtDiscount}
        valueColor="yellow"
        trend={wtDiscountTrend}
      />
      <MetricCard
        title="Returns %"
        value={returnsPercent}
        valueColor="red"
        subtitle={returnsSubtitle}
      />
      <MetricCard
        title="Stock (DOI)"
        value={stock}
        valueColor="green"
        subtitle={stockSubtitle}
      />
    </div>
  )
}
