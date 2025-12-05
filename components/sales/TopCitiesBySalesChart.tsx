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
      <div className="bg-white  border border-gray-200 p-3 rounded-xl ">
        <p className="text-sm font-bold text-gray-800 mb-1">{label}</p>
        <p className="text-xs font-medium text-gray-600">
          Sales: <span className="text-[#25b990] font-bold">₹{(payload[0].value / 1000).toFixed(0)}k</span>
        </p>
      </div>
    )
  }
  return null
}

export function TopCitiesBySalesChart() {
  return (
    <Card className="border border-gray-200 rounded-[12px] w-full  relative overflow-hidden shadow-none">
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-gray-700 tracking-wide mb-6">
          Top Cities by Sales
        </h3>
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 20, left: -18, bottom: 0 }}
              barSize={32}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} stroke="#f0f0f0" />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#4b5563", fontSize: 10, fontWeight: 600 }}
                tickFormatter={(value) => `${value / 1000}k`}
                domain={[0, 800000]}
              />
              <YAxis
                dataKey="city"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#4b5563", fontSize: 10, fontWeight: 600 }}
                width={80}
              />
              <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
              <Bar
                dataKey="sales"
                fill="#25b990"
                radius={[0, 12, 12, 0] as any}
                background={{ fill: '#0000', radius: [0, 12, 12, 0] as any }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
