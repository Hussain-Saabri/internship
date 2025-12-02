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
  label: string;
  amount: number;
  invoices: number;
  displayAmount: string;
  color: string;
}

const data: AgeingData[] = [
  { label: "0-15d", amount: 4200000, invoices: 15, displayAmount: "₹4.20M", color: "#10B981" }, // Green
  { label: "16-30d", amount: 1850000, invoices: 8, displayAmount: "₹1.85M", color: "#14B8A6" }, // Teal
  { label: "31-60d", amount: 980000, invoices: 5, displayAmount: "₹980K", color: "#F59E0B" },  // Amber
  { label: "60+d", amount: 620000, invoices: 4, displayAmount: "₹620K", color: "#EF4444" },   // Red
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-white/50 p-3 rounded-xl shadow-lg">
        <p className="text-xs font-semibold text-gray-700 mb-1">{label}</p>
        <p className="text-sm font-bold" style={{ color: payload[0].payload.color }}>
          {payload[0].payload.displayAmount}
        </p>
        <p className="text-[10px] text-gray-500 mt-1">
          {payload[0].payload.invoices} invoices
        </p>
      </div>
    )
  }
  return null
}

export function ReceivablesAgeingDistribution() {
  return (
    <div className="rounded-[20px] border-white/50 bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md p-6 flex flex-col">
      {/* Header */}
      <h4 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
        Receivables Ageing Distribution
      </h4>

      {/* Chart wrapper: responsive height */}
      <div className="w-full h-[242px] sm:h-[240px] md:h-[282px] min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: -10, bottom: 0 }}
            barCategoryGap="20%"
          >
            <defs>
              <linearGradient id="ageingGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={1} />
                <stop offset="100%" stopColor="#34D399" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="ageingTeal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity={1} />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="ageingAmber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={1} />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="ageingRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity={1} />
                <stop offset="100%" stopColor="#F87171" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 11, fontWeight: 500 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: 500 }}
              width={45}
              tickFormatter={(v) => {
                if (v === 0) return "₹0";
                return `${(v / 1000000).toFixed(1)}M`;
              }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />

            {/* barSize is moderate so it looks good on most screens */}
            <Bar dataKey="amount" radius={[8, 8, 0, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    entry.color === "#10B981" ? "url(#ageingGreen)" :
                      entry.color === "#14B8A6" ? "url(#ageingTeal)" :
                        entry.color === "#F59E0B" ? "url(#ageingAmber)" :
                          "url(#ageingRed)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom small boxes: 1 column on mobile, 2 on sm+ */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        {data.map((item) => (
          <div key={item.label} className="p-3 bg-white/60 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-all">
            <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">{item.label}</p>
            <p className="text-sm font-bold mt-1" style={{ color: item.color }}>{item.displayAmount}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              {item.invoices} invoices
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
