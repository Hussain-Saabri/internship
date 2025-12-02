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
    isImprovement?: boolean // For cases like discount reduction being positive
  }
}

function MetricCard({ title, value, valueColor = "default", subtitle, trend }: MetricCardProps) {
  const valueColorClass = {
    green: "text-[#25b990]",
    yellow: "text-[#f5b82e]",
    red: "text-[#e85454]",
    default: "text-gray-800",
  }[valueColor]

  return (
    <Card className="border-gray-200 rounded-xl">
      <CardContent className="p-px">
        <div className="p-3">
          {/* Title */}
          <p className="text-[10px] font-normal leading-[15px] tracking-[0.1172px] text-gray-500 mb-[8px]">
            {title}
          </p>

          {/* Main Value */}
          <p className={`text-base font-semibold leading-6 tracking-[-0.3125px] mb-[2px] ${valueColorClass}`}>
            {value}
          </p>

          {/* Subtitle or Trend */}
          {trend && (
            <div className="flex items-center gap-1">
              {trend.isImprovement ? (
                <ArrowDownIcon size={10} className="text-[#25b990]" strokeWidth={2} />
              ) : trend.isPositive ? (
                <ArrowUpIcon size={10} className="text-[#25b990]" strokeWidth={2} />
              ) : (
                <ArrowDownIcon size={10} className="text-[#e85454]" strokeWidth={2} />
              )}
              <p className="text-[10px] font-normal leading-[15px] tracking-[0.1172px] text-[#25b990]">
                {trend.value}
              </p>
            </div>
          )}
          {subtitle && !trend && (
            <p className="text-[10px] font-normal leading-[15px] tracking-[0.1172px] text-gray-500">
              {subtitle}
            </p>
          )}
        </div>
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <MetricCard
        title="Sales Value"
        value={salesValue}
        trend={salesTrend}
      />

      <MetricCard
        title="Orders"
        value={orders}
        trend={ordersTrend}
      />

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
