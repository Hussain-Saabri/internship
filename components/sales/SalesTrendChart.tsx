"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

interface DaySalesData {
  day: string
  lastMonth: number
  thisMonth: number
}

const salesData: DaySalesData[] = [
  { day: "Day 1", lastMonth: 40000, thisMonth: 45000 },
  { day: "Day 2", lastMonth: 45000, thisMonth: 50000 },
  { day: "Day 3", lastMonth: 48000, thisMonth: 55000 },
  { day: "Day 4", lastMonth: 50000, thisMonth: 60000 },
  { day: "Day 5", lastMonth: 52000, thisMonth: 62000 },
  { day: "Day 6", lastMonth: 55000, thisMonth: 68000 },
]

const CustomLegend = () => {
  return (
    <div className="flex items-center justify-center gap-6 mt-6">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FCA5A5] to-[#F87171] shadow-sm" />
        <span className="text-xs font-medium tracking-wide text-gray-600">
          Last Month
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#34D399] to-[#10B981] shadow-sm" />
        <span className="text-xs font-medium tracking-wide text-gray-600">
          This Month
        </span>
      </div>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border ">
        <p className="text-xs font-bold text-gray-700 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: entry.color === 'url(#thisMonthGradient)' ? '#10B981' : '#F87171' }}
            />
            <span className="text-[10px] font-medium text-gray-600">
              {entry.name}: <span className="text-gray-900 font-bold">₹{(entry.value / 1000).toFixed(1)}k</span>
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function SalesTrendChart() {
  return (
    <Card className=" rounded-[12px] flex-grow w-full  relative overflow-hidden ">

      <CardContent className="p-6 relative z-10">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
            Sales Trend
          </h3>
        </div>

        {/* Line Chart */}
        <div style={{ width: "100%", height: "350px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="thisMonthGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#25B990" />
                  <stop offset="100%" stopColor="#25B990" />
                </linearGradient>
                <linearGradient id="lastMonthGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FCA5A5" />
                  <stop offset="100%" stopColor="#F87171" />
                </linearGradient>
                <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(0,0,0,0.08)" 
              vertical={false} 
              />
              <XAxis
                dataKey="day"
                axisLine={false} 
                tickLine={false}
                tick={{ fill: "#4b5563 ", fontSize: 10, fontWeight: 600 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#4b5563", fontSize: 10, fontWeight: 600 }}
                domain={[0, 'auto']}
                tickFormatter={(value) => `₹${value / 1000}k`}
                dx={-5}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(0,0,0,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Line
                name="Last Month"
                type="monotone"
                dataKey="lastMonth"
                stroke="url(#lastMonthGradient)"
                strokeWidth={3}
                dot={false}
                strokeDasharray="4 4"
                strokeOpacity={0.8}
              />
              <Line
                name="This Month"
                type="monotone"
                dataKey="thisMonth"
                stroke="url(#thisMonthGradient)"
                strokeWidth={4}
                dot={{ r: 4, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
                
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend */}
        <CustomLegend />
      </CardContent>
    </Card>
  )
}
