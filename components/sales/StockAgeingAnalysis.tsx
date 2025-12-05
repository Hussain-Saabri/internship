"use client"

import { ClockIcon } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from "recharts"

interface AgeData {
  ageRange: string
  units: number
  color: string
}

const ageData: AgeData[] = [
  { ageRange: "0-15 days", units: 600, color: "#25B980" },
  { ageRange: "16-30 days", units: 400, color: "#5A9BFF" },
  { ageRange: "31-60 days", units: 150, color: "#F6C667" },
  { ageRange: "60+ days", units: 50, color: "#F36A6A" },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-3 rounded-xl shadow-lg">
        <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
        <p className="text-sm font-bold text-gray-800">
          {payload[0].value} <span className="text-xs font-normal text-gray-400">units</span>
        </p>
      </div>
    )
  }
  return null
}

export function StockAgeingAnalysis() {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-2xl bg-[linear-gradient(135deg,#FBFBFD,#F4F6FA)] border border-white/50 shadow-sm">
      {/* Section Header */}
      <div className="flex items-center gap-2.5">
        <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100/50">
          <ClockIcon size={18} className="text-gray-400" strokeWidth={2} />
        </div>
        <h3 className="text-[15px] font-semibold text-gray-800 tracking-tight">
          Stock Ageing Analysis
        </h3>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ageData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barSize={40}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              vertical={false}
              opacity={0.5}
            />
            <XAxis
              dataKey="ageRange"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: 500 }}
              tickCount={5}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
            <Bar
              dataKey="units"
              radius={[8, 8, 8, 8]}
              animationDuration={1500}
            >
              {ageData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{ filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05))' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        {/* Total Stock */}
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 duration-300">
          <p className="text-[10px] font-medium text-gray-500 tracking-wide  mb-1 whitespace-nowrap">
            Total Stock
          </p>
          <p className="text-sm font-bold text-[#25B980] tracking-tight whitespace-nowrap ">
            700 units
          </p>
        </div>

        {/* Near Expiry */}
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 duration-300">
          <p className="text-[10px] font-medium text-gray-500 tracking-wide whitespace-nowrap  mb-1">
            Near Expiry
          </p>
          <p className="text-sm font-bold text-[#F36A6A] tracking-tight whitespace-nowrap">
            70 units
          </p>
        </div>

        {/* Wastage % */}
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 duration-300">
          <p className="text-[10px] font-medium text-gray-500 tracking-wide whitespace-nowrap mb-1">
            Wastage %
          </p>
          <p className="text-sm font-bold text-[#5A9BFF] tracking-tight whitespace-nowrap">
            1.2%
          </p>
        </div>
      </div>
    </div>
  )
}
