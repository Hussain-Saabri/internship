"use client"

import { ComparisonLineChart } from "./ComparisonLineChart"
import { ComparisonLineChartWTOSA } from "./ComparisonLineChartWTOSA"
interface WeeklyOSAData {
  week: string
  competitor: number
  you: number
}

const osaData: WeeklyOSAData[] = [
  { week: "W1", competitor: 82, you: 84 },
  { week: "W2", competitor: 81, you: 85 },
  { week: "W3", competitor: 80, you: 86 },
  { week: "W4", competitor: 79, you: 87 },
  { week: "W5", competitor: 78, you: 88 },
  { week: "W6", competitor: 78, you: 89 },
]

export function WtOSAChart() {
  return (
    <ComparisonLineChartWTOSA
      title="Wt. OSA %"
      headerButton={{
        text: "Show Competitors",
        onClick: () => console.log("Show competitors clicked"),
      }}
      mainValue="87.2%"
      growthPercentage="4.1%"
      growthText="vs last month"
      chartData={osaData}
      xAxisKey="week"
      line1Key="competitor"
      line2Key="you"
      line1Label="Competitor Benchmark"
      line2Label="You"
      line1Color="rgba(37, 185, 144, 0.35)" // Competitor (Light Green)
      line2Color="#25b990" // You (Main Green)
      yAxisConfig={{
        domain: [0, 94],
        ticks: [0, 25, 50, 75, 94],
      }}
    />
  )
}
