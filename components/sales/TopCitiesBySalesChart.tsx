"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

interface CityData {
  city: string
  sales: number
}

const chartData: CityData[] = [
  { city: "Mumbai", sales: 750000 },
  { city: "Delhi", sales: 550000 },
  { city: "Bangalore", sales: 450000 },
  { city: "Hyderabad", sales: 300000 },
  { city: "Pune", sales: 200000 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm border border-gray-100 p-3 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <p className="text-sm font-bold text-gray-800 mb-1">{label}</p>
        <p className="text-xs font-medium text-gray-600">
          Sales: <span className="text-emerald-500 font-bold">₹{(payload[0].value / 1000).toFixed(0)}k</span>
        </p>
      </div>
    )
  }
  return null
}

export function TopCitiesBySalesChart() {
  return (
    <Card className="border-white/50 rounded-[20px] w-full bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-md">
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-gray-700 tracking-wide mb-6">
          Top Cities by Sales
        </h3>
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 20, left: -8, bottom: 0 }}
              barSize={32}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 700 }}
                tickFormatter={(value) => `${value / 1000}k`}
                domain={[0, 800000]}
              />
              <YAxis
                dataKey="city"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 700 }}
                width={80}
              />
              <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
              <Bar
                dataKey="sales"
                fill="#25b990"
                radius={[0, 12, 12, 0] as any}
                background={{ fill: '#f9fafb', radius: [0, 12, 12, 0] as any }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
