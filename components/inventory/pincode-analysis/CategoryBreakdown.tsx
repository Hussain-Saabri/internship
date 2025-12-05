"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

interface AgeingData {
  period: string;
  amount: number;
  color: string;
  gradientId: string;
}

const ageingData: AgeingData[] = [
  { period: "Groceries", amount: 3200, color: "#10B981", gradientId: "gradient-emerald" },
  { period: "Dairy", amount: 1850, color: "#06B6D4", gradientId: "gradient-cyan" },
  { period: "Snacks", amount: 2100, color: "#F59E0B", gradientId: "gradient-amber" },
  { period: "Personal Care", amount: 2100, color: "#8B5CF6", gradientId: "gradient-purple" },
  { period: "Home Care", amount: 2100, color: "#3B82F6", gradientId: "gradient-blue" },
];

const CustomXAxisTick = ({ x, y, payload }: any) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#4b5563"
      fontSize={12}
      fontWeight={500}
      transform="rotate(-40)"
    >
      {payload.value}
    </text>
  </g>
);

export function CategoryBreakdown() {
  return (
    <div className="relative overflow-hidden bg-white rounded-[16px] border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-7">
      
      {/* Soft White Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

      <h3 className="relative z-10 text-sm font-semibold text-gray-900 tracking-tight mb-6">
        Category Breakdown
      </h3>

      <div className="relative z-10 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ageingData} margin={{ top: 10, right: 15, left: -16, bottom: 40 }}>
            <defs>
              <linearGradient id="gradient-emerald" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>

              <linearGradient id="gradient-cyan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>

              <linearGradient id="gradient-amber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              <linearGradient id="gradient-purple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>

              <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} strokeOpacity={0.3} />

            <XAxis
              dataKey="period"
              tick={<CustomXAxisTick />}
              axisLine={false}
              tickLine={false}
              interval={0}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4b5563", fontSize: 12, fontWeight: 500 }}
              tickFormatter={(v) => v.toLocaleString()}
            />

            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.03)" }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const d = payload[0].payload;
                  return (
                    <div className="bg-white/90 backdrop-blur-md border border-white/60 rounded-xl shadow-lg p-4 min-w-[150px]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                      </div>
                      <p className="text-xl font-bold text-gray-800 font-mono">{d.amount.toLocaleString()}</p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Bar dataKey="amount" radius={[8, 8, 0, 0]} maxBarSize={55}>
              {ageingData.map((entry, i) => (
                <Cell key={i} fill={`url(#${entry.gradientId})`} className="hover:opacity-90 transition" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
