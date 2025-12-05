"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const chartData = [
  { day: "Mon", sales: 300000 },
  { day: "Tue", sales: 320000 },
  { day: "Wed", sales: 340000 },
  { day: "Thu", sales: 380000 },
  { day: "Fri", sales: 420000 },
  { day: "Sat", sales: 440000 },
  { day: "Sun", sales: 410000 },
]

export function SalesByDayChart() {
  return (
    <Card className="border border-gray-200 rounded-[12px] flex-grow w-full shadow-none overflow-hidden ">
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-black tracking-wide text-gray-900 mb-6">
          
          Sales by Day
        </h3>
        <div className="outline-none focus:outline-none" style={{ width: "100%", height: "280px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -24, bottom: 0 }}
            >
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f8cb46" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f8cb46" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 11, fontWeight: 600 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 11, fontWeight: 600 }}
                domain={[0, 600000]}
                ticks={[0, 150000, 300000, 450000, 600000]}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#25B990"
                strokeWidth={5}
                dot={{ r: 4, fill: "#25B990", strokeWidth: 2, stroke: "#fff" }}
                activeDot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
