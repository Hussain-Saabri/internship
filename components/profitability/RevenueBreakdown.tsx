"use client"

import {
  BarChart,
  Bar, XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Tooltip
} from "recharts"

interface RevenueData {
  label: string
  amount: number
  color: string
}

const revenueBreakdown: RevenueData[] = [
  {
    label: "Gross Sales",
    amount: 13.50,
    color: "#059669", // Rich Green
  },
  {
    label: "Discounts",
    amount: 2.10,
    color: "#DC2626", // Rich Red
  },
  {
    label: "Net Revenue",
    amount: 10.40,
    color: "#10B981", // Bright Green
  },
]

const LegendItem = ({ item }: { item: RevenueData }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 bg-white/60 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
      <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap">{item.label}</p>
      <p className="text-lg font-bold mt-1" style={{ color: item.color }}>₹{item.amount.toFixed(2)}M</p>
    </div>
  )
}

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

export function RevenueBreakdown() {
  return (
    <div className="rounded-[20px] border-white/50 bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md p-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Revenue Breakdown</h3>
      </div>

      {/* Bar Chart */}
      <div className="flex-1 min-h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueBreakdown}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barSize={60}
          >
            <defs>
              <linearGradient id="colorGross" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#059669" stopOpacity={1} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorDiscount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DC2626" stopOpacity={1} />
                <stop offset="100%" stopColor="#EF4444" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#059669" stopOpacity={1} />
                <stop offset="100%" stopColor="#34D399" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 11, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 10, fontWeight: 500 }}
              tickFormatter={(value) => `₹${value.toFixed(0)}M`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
            <Bar
              dataKey="amount"
              radius={[8, 8, 0, 0]}
            >
              {revenueBreakdown.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index === 1 ? "url(#colorDiscount)" :
                      index === 2 ? "url(#colorNet)" : "url(#colorGross)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        {revenueBreakdown.map((item) => (
          <LegendItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  )
}
