"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface PlatformData {
  name: string;
  value: number;
  percentage: number;
  amount: string;
  color: string;
  [key: string]: any;
}

const platformData: PlatformData[] = [
  {
    name: "Blinkit",
    value: 42,
    percentage: 42,
    amount: "₹2.1M",
    color: "#FACC15", // Yellow
  },
  {
    name: "Zepto",
    value: 35,
    percentage: 35,
    amount: "₹1.8M",
    color: "#C084FC", // Purple
  },
  {
    name: "Instamart",
    value: 23,
    percentage: 23,
    amount: "₹1.1M",
    color: "#FB923C", // Orange
  },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="bg-white backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.color }} />
          <span className="text-sm font-semibold text-gray-800">{data.name}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Contribution</span>
          <span className="text-sm font-bold text-gray-900">
            {data.amount} ({data.percentage}%)
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export function PlatformContributionChart() {
  return (
    <Card className="rounded-[12px] w-full relative overflow-hidden min-h-[335px] md:h-[220px] shadow-none bg-white border border-gray-200">
      <CardContent className="p-6 h-full flex flex-col">
        
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-6">
          Platform Contribution
        </h3>

        {/* Layout: Chart + Legend */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between flex-1 gap-8 w-full">

          {/* Chart */}
          <div className="w-full md:w-1/2 h-[220px] relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                >
                  {platformData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                    />
                  ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 pr-0 md:pr-4">
            {platformData.map((platform) => (
              <div
                key={platform.name}
                className="
                  grid grid-cols-[auto_1fr_auto] items-center 
                  w-full gap-4 p-2 
                  rounded-lg hover:bg-gray-50 
                  transition duration-200
                "
              >
                {/* Dot */}
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: platform.color }}
                />

                {/* Name */}
                <span className="text-sm font-medium text-gray-700">
                  {platform.name}
                </span>

                {/* Values */}
                <div className="flex flex-col items-end min-w-[80px] pt-1 md:pt-2">
                  <span className="text-sm font-medium text-gray-600 leading-tight">
                    {platform.percentage}%
                  </span>

                  <span className="text-sm font-bold text-emerald-500 leading-tight">
                    {platform.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
