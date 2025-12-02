"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from "recharts"

interface AgeingData {
  period: string
  amount: number
  color: string
  gradientId: string
}

const ageingData: AgeingData[] = [
  {
    period: "Groceries",
    amount: 3200,
    color: "#10B981", // Emerald
    gradientId: "gradient-emerald"
  },
  {
    period: "Dairy",
    amount: 1850,
    color: "#06B6D4", // Cyan/Aqua
    gradientId: "gradient-cyan"
  },
  {
    period: "Snacks",
    amount: 2100,
    color: "#F59E0B", // Amber/Tangerine
    gradientId: "gradient-amber"
  },
  {
    period: "Personal Care",
    amount: 2100,
    color: "#8B5CF6", // Violet/Purple
    gradientId: "gradient-purple"
  },
  {
    period: "Home Care",
    amount: 2100,
    color: "#3B82F6", // Blue/Ocean
    gradientId: "gradient-blue"
  },
]

const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#9CA3AF"
        fontSize={11}
        fontWeight={500}
        transform="rotate(-45)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export function CategoryBreakdown() {
  return (
    <div className="relative overflow-hidden border border-white/40 shadow-[0_2px_20px_rgb(0,0,0,0.04)] bg-gradient-to-br from-[#F4ECFF] to-[#E8E2FF] rounded-2xl h-full p-6">
      {/* Faint Overlay Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10 mb-6">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Category Breakdown</h3>
      </div>

      <div className="relative z-10 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ageingData}
            margin={{ top: 10, right: 10, left: -20, bottom: 40 }}
          >
            <defs>
              <linearGradient id="gradient-emerald" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34D399" stopOpacity={1} />
                <stop offset="100%" stopColor="#059669" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="gradient-cyan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity={1} />
                <stop offset="100%" stopColor="#0891B2" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="gradient-amber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity={1} />
                <stop offset="100%" stopColor="#D97706" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="gradient-purple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity={1} />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity={1} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} strokeOpacity={0.3} />

            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={<CustomXAxisTick />}
              interval={0}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 11, fontWeight: 500 }}
              tickFormatter={(value) => value.toLocaleString()}
            />

            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.2)' }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload as AgeingData;
                  return (
                    <div className="bg-white/90 backdrop-blur-md border border-white/60 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 min-w-[160px]">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-2.5 h-2.5 rounded-full shadow-sm"
                          style={{ backgroundColor: data.color }}
                        />
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                      </div>
                      <p className="text-xl font-bold text-gray-800 font-mono">
                        {payload[0].value?.toLocaleString()}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Bar
              dataKey="amount"
              radius={[8, 8, 0, 0]}
              maxBarSize={50}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {ageingData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#${entry.gradientId})`}
                  strokeWidth={0}
                  className="hover:opacity-90 transition-opacity cursor-pointer filter drop-shadow-sm"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}