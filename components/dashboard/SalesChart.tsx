"use client"

import { ComparisonLineChart } from "./ComparisonLineChart"

interface WeeklySalesData {
  week: string
  lastMonth: number
  thisMonth: number
}

const salesData: WeeklySalesData[] = [
  { week: "Week 1", lastMonth: 45000, thisMonth: 48000 },
  { week: "Week 2", lastMonth: 47000, thisMonth: 52000 },
  { week: "Week 3", lastMonth: 48500, thisMonth: 58000 },
  { week: "Week 4", lastMonth: 50000, thisMonth: 65000 },
]

export function SalesChart() {
  return (
    <ComparisonLineChart
      title="Sales (MRP)"
      mainValue="5.49"
      valueSuffix="M"
      growthPercentage="2.4%"
      growthText="vs 2.69 last month"
      chartData={salesData}
      xAxisKey="week"
      line1Key="lastMonth"
      line2Key="thisMonth"
      line1Label="Last Month"
      line2Label="This Month"
      line1Color="rgba(37, 185, 144, 0.35)"
      line2Color="#25b990"
      yAxisConfig={{
        tickFormatter: (value) => value.toLocaleString(),
      }}
    />
  )
}
