"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from "recharts"

interface ExpenseWaterfall {
  label: string
  amount: number
  color: string
}

const expenseData: ExpenseWaterfall[] = [
  { label: "Net Revenue", amount: 11.0, color: "#10B981" },   // Green
  { label: "COGS", amount: -5.50, color: "#EF4444" },          // Red
  { label: "After COGS", amount: 3.5, color: "#10B981" },     // Green
  { label: "Logistics", amount: -0.8, color: "#F59E0B" },     // Amber
  { label: "Commissions", amount: -0.6, color: "#F59E0B" },   // Amber
  { label: "Marketing", amount: -0.5, color: "#F59E0B" },     // Amber
  { label: "Contribution", amount: 0.8, color: "#10B981" },   // Green
]

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

export function ExpenseWaterfall() {
  return (
    <div className="rounded-[20px] border-white/50 bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md p-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
          Expense Waterfall <span className="font-normal text-gray-500 normal-case tracking-normal ml-1">(Where Money Flows)</span>
        </h3>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[340px] w-full" >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={expenseData}
            margin={{ top: 5, right: 10, left: -20, bottom: 25 }}
            barSize={45}
          >
            <defs>
              <linearGradient id="waterfallGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={1} />
                <stop offset="100%" stopColor="#34D399" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="waterfallRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity={1} />
                <stop offset="100%" stopColor="#F87171" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="waterfallAmber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={1} />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 500 }}
              interval={0}
              angle={-25}
              dy={15}
              textAnchor="end"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: 500 }}
              tickFormatter={(value) => `₹${value.toFixed(0)}M`}
              domain={[-11, 11]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
            <Bar
              dataKey="amount"
              radius={[6, 6, 6, 6]}
            >
              {expenseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.color === "#10B981" ? "url(#waterfallGreen)" :
                      entry.color === "#EF4444" ? "url(#waterfallRed)" :
                        "url(#waterfallAmber)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
