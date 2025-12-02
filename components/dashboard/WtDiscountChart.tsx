"use client"

import { ComparisonLineChart } from "./ComparisonLineChart"
import { ComparisonLineChartWTDISCOUNT } from "./ComparisonLineChartWTDISCOUNT"
interface WeeklyDiscountData {
  week: string
  competitor: number
  you: number
}

const discountData: WeeklyDiscountData[] = [
  { week: "W1", competitor: 18, you: 15 },
  { week: "W2", competitor: 17, you: 14 },
  { week: "W3", competitor: 16, you: 13 },
  { week: "W4", competitor: 15, you: 12.5 },
  { week: "W5", competitor: 14, you: 12 },
  { week: "W6", competitor: 13, you: 11.5 },
]

export function WtDiscountChart() {
  return (
    <ComparisonLineChartWTDISCOUNT
      title="Wt. Discount %"
      headerButton={{
        text: "Show Competitors",
        onClick: () => console.log("Show competitors clicked"),
      }}
      mainValue="12.8%"
      growthPercentage="2.7%"
      growthText="vs last month"
      chartData={discountData}
      xAxisKey="week"
      line1Key="competitor"
      line2Key="you"
      line1Label="Competitor Benchmark"
      line2Label="You"
      line1Color="rgba(37, 185, 144, 0.35)" // Competitor (Light Green)
      line2Color="#25b990" // You (Main Green)
      yAxisConfig={{
        domain: [0, 22],
        ticks: [0, 6, 12, 22],
      }}
    />
  )
}
