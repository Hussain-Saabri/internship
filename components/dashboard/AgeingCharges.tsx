"use client"

import { AlertCircle } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { DashboardCard } from "./DashboardCard"

// ⭐ Custom Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;

    return (
      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] animate-in fade-in zoom-in-95 duration-200 min-w-[150px]">
        <div className="flex items-center gap-2.5 mb-3 px-1">
          <div
            className="w-2 h-2 rounded-full shadow-sm"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-xs font-bold text-gray-700">{label}</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Amount</span>
            <span className="text-xs font-bold font-mono" style={{ color: item.color }}>{item.displayAmount}</span>
          </div>
          <div className="flex justify-between items-center px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Share</span>
            <span className="text-xs font-bold font-mono text-gray-600">{item.percentage}%</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

interface AgeingData {
  period: string
  amount: number
  percentage: number
  color: string
  displayAmount: string
}

const ageingData: AgeingData[] = [
  { period: "0-15 d", amount: 25000, percentage: 35, color: "#10b981", displayAmount: "₹25K" },
  { period: "16-30 d", amount: 18000, percentage: 25, color: "#0ea5e9", displayAmount: "₹18K" },
  { period: "31-60 d", amount: 15000, percentage: 21, color: "#f59e0b", displayAmount: "₹15K" },
  { period: "60+ d", amount: 14000, percentage: 19, color: "#f43f5e", displayAmount: "₹14K" },
];

const LegendItem = ({ item }: { item: AgeingData }) => {
  const label = item.period.replace(/\s*d(ays)?$/i, "");

  return (
    <div className="w-full py-1.5 ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-xs font-semibold text-gray-700 truncate">
            {item.period}ays
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xs font-bold text-gray-600 text-right bg-white/60 px-2 py-0.5 rounded-md">
            {item.percentage}%
          </div>

          <div className="text-xs font-bold text-gray-900 text-right w-12">
            {item.displayAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export function AgeingCharges() {
  return (
    <DashboardCard className="flex flex-col relative overflow-hidden border-gray-200 bg-white">



      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-purple-600 rounded-full"></div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight">Ageing Charges</h3>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-extrabold text-gray-900 tracking-tight">₹71.5K</p>
            </div>

            <div className="flex items-center gap-1.5 bg-red-100/80 px-3 py-1 rounded-full border border-red-200/50 mb-1 backdrop-blur-sm">
              <AlertCircle className="w-3.5 h-3.5 text-red-600" />
              <span className="text-xs font-bold text-red-700">19% overdue</span>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="mb-6 relative z-10" style={{ width: "100%", height: "188px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageingData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>

              <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(0,0,0,0.08)" 
              vertical={false} 
              />

              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#4b5563", fontSize: 10, fontWeight: 600 }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#4b5563", fontSize: 10, fontWeight: 600 }}
              />

              {/* ⭐ Tooltip Integrated */}
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

              <Bar dataKey="amount" radius={[6, 6, 0, 0]} maxBarSize={50}>
                {ageingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
                ))}
              </Bar>

            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-1">
          {ageingData.map((item) => (
            <LegendItem key={item.period} item={item} />
          ))}
        </div>

      </div>
    </DashboardCard>
  );
}
