"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const cashData = [
  { month: "Sep", inflow: 9.8, outflow: 8.2, net: 1.6 },
  { month: "Oct", inflow: 10.4, outflow: 8.65, net: 1.75 },
  { month: "Nov", inflow: 11.2, outflow: 9.1, net: 2.1 },
  { month: "Dec", inflow: 10.9, outflow: 8.9, net: 2.0 },
]

const formatMillions = (val: number) => `₹${val.toFixed(2)}M`

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="
        bg-white  border  
         rounded-xl p-4 min-w-[180px]
      ">
        <p className="text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">{label}</p>
        <div className="space-y-2">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full shadow-sm"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-xs font-medium text-gray-600">
                  {entry.name}
                </span>
              </div>
              <span className="text-sm font-bold text-gray-900 font-mono">
                {formatMillions(entry.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

export function CashFlowSnapshot() {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 overflow-hidden relative">
      {/* Faint Overlay Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="px-6 pt-6 pb-2 relative z-10">
        <h4 className="text-gray-900 font-semibold text-lg tracking-tight">
          Cash Flow Snapshot
          <span className="ml-2 text-sm font-normal text-gray-400">Monthly Trend</span>
        </h4>
      </div>

      {/* Chart */}
      <div className="w-full h-[300px] px-4 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={cashData}
            margin={{ top: 20, right: 20, left: -5, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradientInflow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradientOutflow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#F43F5E" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradientNet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>

              {/* Drop Shadow Filter for Lines */}
              <filter id="shadow" height="200%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1" />
              </filter>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F3F4F6"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />

            <YAxis
              tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 12]}
              ticks={[0, 3, 6, 9, 12]}
              tickFormatter={(v) => `₹${v}M`}
              dx={-10}
            />

            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '4 4' }} />

            <Legend
              verticalAlign="top"
              align="right"
              height={50}
              iconType="circle"
              content={({ payload }) => (
                <div className="flex justify-end gap-4 mb-4">
                  {payload?.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-xs font-medium text-gray-600">{entry.value}</span>
                    </div>
                  ))}
                </div>
              )}
            />

            <Line
              type="monotone"
              dataKey="inflow"
              name="Inflow"
              stroke="#10B981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#10B981" }}
              
            />

            <Line
              type="monotone"
              dataKey="outflow"
              name="Outflow"
              stroke="#F43F5E"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#F43F5E" }}
              
            />

            <Line
              type="monotone"
              dataKey="net"
              name="Net"
              stroke="#6366F1"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#6366F1" }}
              
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Cards */}
      <div className="p-6 pt-2 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cashData.map((item) => (
            <div
              key={item.month}
              className="
                group p-4 rounded-xl bg-gray-200 border border-gray-200 
               hover:shadow-md hover:border-white 
                transition-all duration-300
              "
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-black uppercase tracking-wider">
                  {item.month}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors" />
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">In</span>
                  <span className="text-sm font-bold text-emerald-600 font-mono">
                    {formatMillions(item.inflow)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Out</span>
                  <span className="text-sm font-bold text-rose-500 font-mono">
                    {formatMillions(item.outflow)}
                  </span>
                </div>

                <div className="h-px bg-gray-200 w-full" />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Net</span>
                  <span className="text-sm font-bold text-indigo-600 font-mono">
                    {formatMillions(item.net)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
