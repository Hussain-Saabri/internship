"use client"

import { TrendingUpIcon } from "@/lib/flaticons"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts"
import { DashboardCard } from "./DashboardCard"

// =========================
// ⭐ PREMIUM CUSTOM TOOLTIP
// =========================
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value

    return (
      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] animate-in fade-in zoom-in-95 duration-200 min-w-[140px]">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">{label}</p>

        <div className="flex items-center justify-between gap-4 px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
          <div className="flex items-center gap-2.5">
            <div
              className="w-2 h-2 rounded-full shadow-sm"
              style={{ backgroundColor: "#25B990" }}
            />
            <span className="text-[11px] font-semibold text-gray-600">Share</span>
          </div>
          <span className="text-sm font-bold font-mono tracking-tight text-[#25B990]">{value}%</span>
        </div>
      </div>
    )
  }
  return null
}

// =========================
// 📊 CHART DATA
// =========================
interface MonthlyMarketShareData {
  month: string
  share: number
}

const marketShareData: MonthlyMarketShareData[] = [
  { month: "Jan", share: 18 },
  { month: "Feb", share: 20 },
  { month: "Mar", share: 22 },
  { month: "Apr", share: 25 },
  { month: "May", share: 27 },
  { month: "Jun", share: 30 }
]

// =========================
// 📈 COMPONENT
// =========================
export function MarketShareChart() {
  return (
    <DashboardCard className="rounded-[12px] flex flex-col relative overflow-hidden border-gray-200 bg-white ">

      {/* Subtle overlay - Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase text-[10px]">
            Est. Market Share %
          </h3>

          <button className="px-3 py-1.5 text-xs font-medium text-white  bg-[#25B990] hover:bg-[#25B990]/80 hover:text-white rounded-lg transition-all duration-200 backdrop-blur-sm">
            Show Competitors
          </button>
        </div>

        {/* Value + Growth */}
        <div className="mb-8">
          <p className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            2.8%
          </p>

          {/* Growth Indicator */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200/50">
              <TrendingUpIcon className="w-3 h-3 text-emerald-700" />
              <span className="text-xs font-bold text-emerald-700">1.2%</span>
            </div>
            <span className="text-xs font-medium text-gray-500">vs last month</span>
          </div>
        </div>

        {/* Area Chart */}
        <div style={{ width: "100%", height: "232px" }} className="relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={marketShareData}
              margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
            >
              {/* Soft gradient fill */}
              <defs>
                <linearGradient id="marketShareGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#25B990" stopOpacity={0.18} />
                  <stop offset="95%" stopColor="#25B990" stopOpacity={0} />
                </linearGradient>

                {/* Glow filter */}
                <filter id="glowArea" height="300%" width="300%" x="-75%" y="-75%">
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

              {/* X-axis */}
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 600 }}
                dy={10}
              />

              {/* Y-axis */}
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 600 }}
                domain={[0, 35]}
                ticks={[0, 10, 20, 30]}
              />

              {/* ⭐ TOOLTIP ADDED HERE */}
              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "rgba(255,255,255,0.1)",
                  strokeWidth: 1,
                  strokeDasharray: "4 4"
                }}
              />

              {/* Area */}
              <Area
                type="monotone"
                dataKey="share"
                stroke="#25B990"
                strokeWidth={3}
                fill="url(#marketShareGradient)"
                filter="url(#glowArea)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  )
}
