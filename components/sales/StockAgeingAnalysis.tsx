"use client"

import { ClockIcon } from "@/lib/flaticons"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"

interface AgeData {
  ageRange: string
  units: number
  isWarning?: boolean
}

const ageData: AgeData[] = [
  { ageRange: "0-15 days", units: 600, isWarning: false },
  { ageRange: "16-30 days", units: 400, isWarning: false },
  { ageRange: "31-60 days", units: 150, isWarning: false },
  { ageRange: "60+ days", units: 50, isWarning: true },
]

export function StockAgeingAnalysis() {
  return (
    <div className="flex flex-col gap-3">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <ClockIcon size={16} className="text-gray-800" strokeWidth={2} />
        <h3 className="text-sm font-normal text-gray-800 leading-5 tracking-[-0.1504px]">
          Stock Ageing Analysis
        </h3>
      </div>

      {/* Bar Chart */}
      <div style={{ width: "100%", height: "200px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ageData}
            margin={{ top: 5, right: 20, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="ageRange"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 10 }}
              angle={0}
              textAnchor="middle"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 10 }}
              domain={[0, 600]}
              ticks={[0, 150, 300, 450, 600]}
            />
            <Bar dataKey="units" radius={[4, 4, 0, 0]}>
              {ageData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.isWarning ? "#e85454" : "#25b990"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Total Stock */}
        <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-1">
          <p className="text-[10px] font-normal text-gray-500 leading-[15px] tracking-[0.1172px] text-center">
            Total Stock
          </p>
          <p className="text-sm font-semibold text-gray-800 leading-5 tracking-[-0.1504px] text-center">
            700 units
          </p>
        </div>

        {/* Near Expiry */}
        <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-1">
          <p className="text-[10px] font-normal text-gray-500 leading-[15px] tracking-[0.1172px] text-center">
            Near Expiry
          </p>
          <p className="text-sm font-semibold text-[#f5b82e] leading-5 tracking-[-0.1504px] text-center">
            70 units
          </p>
        </div>

        {/* Wastage % */}
        <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-1">
          <p className="text-[10px] font-normal text-gray-500 leading-[15px] tracking-[0.1172px] text-center">
            Wastage %
          </p>
          <p className="text-sm font-semibold text-[#e85454] leading-5 tracking-[-0.1504px] text-center">
            1.2%
          </p>
        </div>
      </div>
    </div>
  )
}
