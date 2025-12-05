"use client"

import { TrendingDown } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const chartData = [
  { week: "W1", discount: 16 },
  { week: "W2", discount: 15 },
  { week: "W3", discount: 14 },
  { week: "W4", discount: 13 },
]

export function DiscountTrendChart() {
  return (
    <Card className="border border-gray-200 shadow-none rounded-[12px] flex-grow w-full  ">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-sm font-bold text-gray-700 tracking-wide mb-2">
          Discount Trend
        </h3>

        {/* Main Value */}
        <div className="mb-1">
          <p className="text-3xl font-bold text-[#25b990] tracking-tight">
            12.8%
          </p>
        </div>

        {/* Trend Indicator */}
        <div className="flex items-center gap-1.5 mb-6 bg-emerald-50/50 w-fit px-2 py-1 rounded-full border border-emerald-100">
          <TrendingDown className="w-3.5 h-3.5 text-[#25b990]" />
          <span className="text-xs font-semibold text-[#25b990]">Improving -2.4%</span>
        </div>

        {/* Line Chart */}
        <div style={{ width: "100%", height: "200px" }} className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
            >
              <defs>
                <linearGradient id="discountGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#25b990" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#25b990" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="week"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 700 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 700 }}
                domain={[10, 20]}
                ticks={[10, 13, 16, 20]}
              />
              <Line
                type="monotone"
                dataKey="discount"
                stroke="#25b990"
                strokeWidth={3}
                dot={{ r: 4, fill: "#25b990", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
