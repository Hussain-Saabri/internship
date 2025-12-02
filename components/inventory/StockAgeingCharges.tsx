"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from "recharts"

interface AgeingData {
  period: string
  amount: number
  color: string
}

const ageingData: AgeingData[] = [
  { period: "0-15 days", amount: 18500, color: "#10b981" },
  { period: "16-30 days", amount: 8200, color: "#0ea5e9" },
  { period: "31-60 days", amount: 3800, color: "#f59e0b" },
  { period: "60+ days", amount: 2100, color: "#f43f5e" },
]

// ⭐ Custom Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-white/50 p-3 rounded-xl shadow-lg">
        <p className="text-xs font-semibold text-gray-700 mb-1">{label}</p>
        <p className="text-sm font-bold" style={{ color: payload[0].payload.color }}>
          ₹{payload[0].value.toFixed(2)}M
        </p>
      </div>
    )
  }
  return null
}

export function StockAgeingCharges() {
  return (
    <div className="rounded-[20px] border bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 border-white/50 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md p-6 h-full flex flex-col">

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 tracking-wide">Stock Ageing Distribution</h3>
      </div>

      {/* Chart */}
      <div className="flex-grow w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ageingData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            barSize={60}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />

            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4B5563', fontSize: 11, fontWeight: 600 }}
              tickFormatter={(value) => value.replace(" days", "d")}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 11, fontWeight: 500 }}
              tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
              dx={-10}
            />

            {/* ⭐ Custom Tooltip Implemented */}
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

            <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
              {ageingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 mt-6 pt-4 border-t border-white/40">
        {ageingData.map((item) => (
          <div
            key={item.period}
            className="flex flex-col items-center justify-center bg-white/60 shadow-sm rounded-2xl px-5 py-2 border border-white/60 min-w-[100px]"
          >
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5 whitespace-nowrap">
              {item.period}
            </span>
            <span className="text-sm font-bold" style={{ color: item.color }}>
              ₹{(item.amount / 1000).toFixed(1)}k
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}
