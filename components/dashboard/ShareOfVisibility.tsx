"use client"

import { TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { DashboardCard } from "./DashboardCard"

interface WeeklySOVData {
  week: string
  yourBrand: number
  competitorA: number
}

const sovData: WeeklySOVData[] = [
  { week: "W1", yourBrand: 30, competitorA: 22 },
  { week: "W2", yourBrand: 32, competitorA: 23 },
  { week: "W3", yourBrand: 35, competitorA: 24 },
  { week: "W4", yourBrand: 38, competitorA: 23 },
  { week: "W5", yourBrand: 40, competitorA: 22 },
  { week: "W6", yourBrand: 42, competitorA: 23 },
]

// ⭐ Custom Tooltip (matching all charts)
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] animate-in fade-in zoom-in-95 duration-200 min-w-[180px]">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">{label}</p>

        <div className="flex flex-col gap-2">
          {payload[1] && (
            <div className="flex items-center justify-between gap-4 px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: payload[0].color }} />
                <span className="text-[11px] font-semibold text-gray-500">Competitor A</span>
              </div>
              <span className="text-sm font-bold font-mono tracking-tight" style={{ color: payload[0].color }}>
                {payload[0].value}%
              </span>
            </div>
          )}

          {payload[1] && (
            <div className="flex items-center justify-between gap-4 px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: payload[1].color }} />
                <span className="text-[11px] font-semibold text-gray-500">Your Brand</span>
              </div>
              <span className="text-sm font-bold font-mono tracking-tight" style={{ color: payload[1].color }}>
                {payload[1].value}%
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
  return null
}

const CustomLegend = () => {
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[rgba(37,185,144,0.35)]" />
        <span className="text-xs font-semibold text-gray-500 ">Competitor A</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#25B990]" />
        <span className="text-xs font-semibold text-gray-500 t">Your Brand</span>
      </div>
    </div>
  )
}

export function ShareOfVisibility() {
  return (
    <DashboardCard className="flex flex-col relative overflow-hidden border-gray-200 bg-white">
      {/* Faint Overlay Gradient - Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#25B990] rounded-full"></div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight">Share of Visibility (SOV %)</h3>
          </div>
          <button className="px-3 py-1.5 text-xs font-medium text-white  bg-[#25B990] hover:bg-[#25B990]/80 hover:text-white rounded-lg transition-all duration-200 backdrop-blur-sm">
            Show Competitors
          </button>
        </div>

        {/* Main Metric */}
        <div className="mb-8">
          <p className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">42%</p>

          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-green-100/80 rounded-full">
              <TrendingUp className="w-3 h-3 text-green-700" />
            </div>
            <span className="text-sm font-bold text-green-700">10%</span>
            <span className="text-xs font-medium text-gray-500">growth</span>
          </div>
        </div>

        {/* Line Chart */}
        <div className="relative z-10" style={{ width: '100%', height: '268px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sovData} margin={{ top: 10, right: 10, left: -35, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" vertical={false} />

              <XAxis
                dataKey="week"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 10, fontWeight: 600 }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 10, fontWeight: 600 }}
                domain={[0, 60]}
                ticks={[0, 15, 30, 45, 60]}
              />

              {/* ⭐ Tooltip Added Here */}
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#25B990", strokeWidth: 0.5 }} />

              <Line
                type="monotone"
                dataKey="competitorA"
                stroke="rgba(37, 185, 144, 0.35)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                activeDot={{ r: 6, fill: "rgba(37, 185, 144, 0.35)", strokeWidth: 0 }}
              />

              <Line
                type="monotone"
                dataKey="yourBrand"
                stroke="#25B990"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#25B990", strokeWidth: 0 }}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend */}
        <CustomLegend />
      </div>
    </DashboardCard>
  )
}
