"use client"

import { cn } from "@/lib/utils"
import { DashboardCard } from "./DashboardCard"

interface MarginMetric {
  label: string
  percentage: number
  color: "green" | "yellow" | "red"
}

interface FinancialMetric {
  label: string
  value: string
}

const marginData: MarginMetric[] = [
  {
    label: "Gross Margin",
    percentage: 42,
    color: "green",
  },
  {
    label: "Contribution Margin",
    percentage: 28,
    color: "yellow",
  },
  {
    label: "Net Profit Margin",
    percentage: 15,
    color: "red",
  },
]

const financialData: FinancialMetric[] = [
  {
    label: "Revenue",
    value: "₹2.26L",
  },
  {
    label: "COGS",
    value: "₹1.31L",
  },
  {
    label: "Expenses",
    value: "₹61K",
  },
]

const MarginProgressBar = ({ metric }: { metric: MarginMetric }) => {
  const colorClasses = {
    green: {
      text: "text-emerald-600",
      bar: "bg-emerald-400",
      hex: "#25B990",
    },
    yellow: {
      text: "text-amber-500",
      bar: "bg-amber-400",
    },
    red: {
      text: "text-red-500",
      bar: "bg-red-400",
    },
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Label and Percentage */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-600">{metric.label}</p>
        <p
          className={cn(
            "text-sm font-bold tracking-tight",
            colorClasses[metric.color].text
          )}
        >
          {metric.percentage}%
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all", colorClasses[metric.color].bar)}
          style={{ width: `${metric.percentage}%` }}
        />
      </div>
    </div>
  )
}

const FinancialMetricCard = ({ metric }: { metric: FinancialMetric }) => {
  return (
    <div className="bg-white rounded-2xl py-4 px-3 flex flex-col gap-1 items-center justify-center min-w-0 flex-1 border border-gray-100">
      <p className="text-[10px] font-bold text-gray-400 tracking-wider text-center uppercase">
        {metric.label}
      </p>
      <p className=" font-bold text-gray-900 text-center tracking-tight">{metric.value}</p>
    </div>
  )
}

export function ProfitabilityMeter() {
  return (
    <DashboardCard className="h-full flex flex-col justify-between relative overflow-hidden border-gray-200 bg-white">
      {/* Faint Overlay Gradient for Depth - Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 h-full">
        {/* Header */}
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-purple-600 rounded-full"></div>
          <h3 className="text-sm font-bold text-gray-900 tracking-tight">Profitability</h3>
        </div>

        {/* Margin Metrics with Progress Bars */}
        <div className="flex flex-col gap-5">
          {marginData.map((metric) => (
            <MarginProgressBar key={metric.label} metric={metric} />
          ))}
        </div>

        {/* Financial Metrics Cards */}
        <div className="mt-auto">
          <div className=" p-2 flex gap-3">
            {financialData.map((metric) => (
              <FinancialMetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  )
}
