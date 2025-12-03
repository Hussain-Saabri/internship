"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { DashboardCard } from "./DashboardCard"

interface CityData {
  name: string
  value: number
  percentage: number
  amount: string
  color: string
  [key: string]: any
}

const cityData: CityData[] = [
  {
    name: "Mumbai",
    value: 28,
    percentage: 28,
    amount: "₹85.0L",
    color: "#25B990", // Pastel Green
  },
  {
    name: "Delhi",
    value: 24,
    percentage: 24,
    amount: "₹72.0L",
    color: "#25B990", // Pastel Teal
  },
  {
    name: "Bangalore",
    value: 20,
    percentage: 20,
    amount: "₹61.0L",
    color: "#25B990", // Pastel Blue
  },
  {
    name: "Hyderabad",
    value: 16,
    percentage: 16,
    amount: "₹48.0L",
    color: "#25B990", // Pastel Purple
  },
  {
    name: "Pune",
    value: 12,
    percentage: 12,
    amount: "₹30.0L",
    color: "#25B990", // Pastel Red/Pink
  },
]

const CityLegendItem = ({ city }: { city: CityData }) => {
  return (
    <div className="flex items-center justify-between py-0.5 ">
      <div className="flex items-center gap-3">
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: city.color }}
        />
        <span className="text-sm font-semibold text-gray-500">{city.name}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold text-gray-500 bg-white/60 px-2 py-0.5 rounded-md">{city.percentage}%</span>
        <span className="text-sm font-bold text-gray-900">{city.amount}</span>
      </div>
    </div>
  )
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] animate-in fade-in zoom-in-95 duration-200 min-w-[160px]">
        <div className="flex items-center gap-2.5 mb-3 px-1">
          <div
            className="w-2 h-2 rounded-full shadow-sm"
            style={{ backgroundColor: payload[0].payload.color }}
          />
          <span className="text-xs font-bold text-gray-700">{payload[0].name}</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Contribution</span>
            <span className="text-xs font-bold font-mono text-gray-900">{payload[0].value}%</span>
          </div>
          <div className="flex justify-between items-center px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Value</span>
            <span className="text-xs font-bold font-mono text-gray-900">{payload[0].payload.amount}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="text-[10px] font-bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function TopCitiesChart() {
  return (
    <DashboardCard className="rounded-[12px] h-full flex flex-col relative overflow-hidden border-gray-200 bg-white">
      {/* Faint Overlay Gradient for Depth - Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-2">
          <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase text-[10px]">Top cities</h3>
        </div>

        {/* Pie Chart */}
        <div className="relative z-10" style={{ width: '100%', height: '200px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <filter id="shadow" height="200%" width="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1" />
                </filter>
              </defs>
              <Pie
                data={cityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={90}
                innerRadius={0}
                paddingAngle={2}
                dataKey="value"
                cornerRadius={6}
                stroke="white"
                strokeWidth={2}
              >
                {cityData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))' }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend List */}
        <div className="flex flex-col gap-1 mt-6">
          {cityData.map((city) => (
            <CityLegendItem key={city.name} city={city} />
          ))}
        </div>
      </div>
    </DashboardCard>
  )
}
