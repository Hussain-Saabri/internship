"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function StockDrrTrendExact() {
  const data = [
    { date: "Oct 8", drr: 810, stock: 11900 },
    { date: "Oct 9", drr: 850, stock: 11850 },
    { date: "Oct 10", drr: 900, stock: 14000 },
    { date: "Oct 11", drr: 865, stock: 11700 },
    { date: "Oct 12", drr: 810, stock: 11650 },
    { date: "Oct 13", drr: 880, stock: 12000 },
    { date: "Oct 14", drr: 860, stock: 11800 },
    { date: "Oct 15", drr: 920, stock: 12300 },
  ];

  return (
    <Card className="relative overflow-hidden border border-gray-200 shadow-sm bg-white rounded-2xl h-full">
      {/* Faint Overlay Gradient for Depth - Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" /> */}

      <CardHeader className="relative z-10 px-6 pt-6 pb-2">
        <CardTitle className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Stock & DRR Trend (Last 8 Days)
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 px-6 pb-6">
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid
                stroke="#E5E7EB"
                strokeDasharray="3 3"
                vertical={false}
                strokeOpacity={0.5}
              />

              <XAxis
                dataKey="date"
                tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                dy={10}
              />

              <YAxis
                yAxisId="left"
                tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 14000]}
                tickFormatter={(value) => `${value / 1000}k`}
              />

              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 1000]}
              />

              <Tooltip
                content={({ payload, label }) => {
                  if (!payload?.length) return null;

                  const drr = payload.find((p) => p.dataKey === "drr")?.value;
                  const stock = payload.find((p) => p.dataKey === "stock")?.value;

                  return (
                    <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl shadow-lg p-3 min-w-[140px]">
                      <p className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">{label}</p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs font-medium text-gray-600">DRR</span>
                          <span className="text-sm font-bold font-mono" style={{ color: "rgba(37, 185, 144, 0.35)" }}>{drr}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs font-medium text-gray-600">Stock</span>
                          <span className="text-sm font-bold text-[#25B990] font-mono">{stock}</span>
                        </div>
                      </div>
                    </div>
                  );
                }}
              />

              {/* Stock Line (Green) */}
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="stock"
                stroke="#25B990"
                strokeWidth={3}
                dot={{ stroke: "#25B990", strokeWidth: 2, r: 4, fill: "#fff" }}
                activeDot={{ r: 6, fill: "#25B990", stroke: "#fff", strokeWidth: 3 }}
              />

              {/* DRR Line (Secondary Green) */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="drr"
                stroke="rgba(37, 185, 144, 0.35)"
                strokeWidth={3}
                dot={{ stroke: "rgba(37, 185, 144, 0.35)", strokeWidth: 2, r: 4, fill: "#fff" }}
                activeDot={{ r: 6, fill: "rgba(37, 185, 144, 0.35)", stroke: "#fff", strokeWidth: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
