"use client";

import { TrendingUpIcon } from "@/lib/flaticons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";
import { DashboardCard } from "./DashboardCard";

interface ComparisonLineChartProps {
  title: string;
  headerButton?: {
    text: string;
    onClick?: () => void;
  };
  mainValue: string;
  valueSuffix?: string;
  growthPercentage: string;
  growthText: string;
  chartData: Array<Record<string, any>>;
  xAxisKey: string;
  line1Key: string;
  line2Key: string;
  line1Label: string;
  line2Label: string;
  line1Color?: string;
  line2Color?: string;
  yAxisConfig?: {
    domain?: [number, number];
    ticks?: number[];
    tickFormatter?: (value: any) => string;
  };
  xAxisConfig?: {
    tickFormatter?: (value: any) => string;
  };
}

const CustomLegend = ({
  line1Label,
  line2Label,
  line1Color = "#ff9999",
  line2Color = "#25b990",
}: {
  line1Label: string;
  line2Label: string;
  line1Color?: string;
  line2Color?: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: line1Color }}
        />
        <span className="text-[11px] font-medium tracking-wide text-gray-500">
          {line1Label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: line2Color }}
        />
        <span className="text-[11px] font-medium tracking-wide text-gray-500">
          {line2Label}
        </span>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-none  min-w-[180px]">
        <p className="text-[12px] font-bold text-gray-400 uppsefcase tracking-wider mb-3 px-1">
          {label}
        </p>
        <div className="flex flex-col gap-2">
          {payload.map((entry: any, index: number) => {
            const valueColor = index === 0 ? "rgba(37, 185, 144, 0.35)" : "#25B990";
            const dotColor = index === 0 ? "rgba(37, 185, 144, 0.35)" : "#25B990";

            return (
              <div key={index} className="flex items-center justify-between gap-4 px-1 py-0.5 rounded-md hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-2 h-2 rounded-full shadow-sm"
                    style={{ backgroundColor: dotColor }}
                  />
                  <span className="text-[10px] font-bold text-gray-500">
                    {entry.name}
                  </span>
                </div>
                <span
                  className="text-sm font-bold font-mono tracking-tight"
                  style={{ color: valueColor }}
                >
                  {entry.value.toLocaleString()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export function ComparisonLineChartWTOSA({
  title,
  headerButton,
  mainValue,
  valueSuffix,
  growthPercentage,
  growthText,
  chartData,
  xAxisKey,
  line1Key,
  line2Key,
  line1Label,
  line2Label,
  line1Color = "rgba(37, 185, 144, 0.35)",
  line2Color = "#25B990",
  yAxisConfig,
  xAxisConfig,
}: ComparisonLineChartProps) {
  return (
    <DashboardCard className="relative overflow-hidden flex flex-col justify-between border-gray-200 bg-white rounded-[12px]">
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div
          className={cn(
            "mb-6",
            headerButton ? "flex items-center justify-between" : ""
          )}
        >
          <h3 className="text-sm font-bold text-gray-900 tracking-wide  text-[10px]">{title}</h3>
          {headerButton && (
            <button
              onClick={headerButton.onClick}
              className="px-3 py-1.5 text-xs font-medium text-white  bg-[#25B990] hover:bg-[#25B990]/80 hover:text-white rounded-lg transition-all duration-200 backdrop-blur-sm"
            >
              {headerButton.text}
            </button>
          )}
        </div>

        {/* Main Value */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1 mb-2">
            <p className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {mainValue}
            </p>
            {valueSuffix && (
              <span className="text-sm font-medium text-gray-700">
                {valueSuffix}
              </span>
            )}
          </div>

          {/* Growth Indicator */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200/50">
              <TrendingUpIcon className="w-3 h-3 text-emerald-700" />
              <span className="text-xs font-bold text-emerald-700">
                {growthPercentage}
              </span>
            </div>
            <span className="text-xs font-medium text-gray-500">{growthText}</span>
          </div>
        </div>

        {/* Line Chart */}
        <div style={{ width: "100%", height: "200px" }} className="relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -35, bottom: 0 }}
            >
              <defs>
                <linearGradient id="line1Gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={line1Color} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={line1Color} stopOpacity={1} />
                </linearGradient>
                <linearGradient id="line2Gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={line2Color} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={line2Color} stopOpacity={1} />
                </linearGradient>
                <filter id="glow1" height="300%" width="300%" x="-75%" y="-75%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(0, 0, 0, 0.08)"
                vertical={false}
              />
              <XAxis
                dataKey={xAxisKey}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 600 }}
                tickFormatter={xAxisConfig?.tickFormatter}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 600 }}
                domain={yAxisConfig?.domain}
                ticks={yAxisConfig?.ticks}
                tickFormatter={yAxisConfig?.tickFormatter}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Line
                type="monotone"
                dataKey={line1Key}
                stroke={line1Color}
                strokeWidth={3}
                dot={false}
                strokeDasharray="4 4"
                strokeOpacity={0.6}
              />
              <Line
                type="monotone"
                dataKey={line2Key}
                stroke={`url(#line2Gradient)`}
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend */}
        <div className="mt-2 relative z-10">
          <CustomLegend
            line1Label={line1Label}
            line2Label={line2Label}
            line1Color={line1Color}
            line2Color={line2Color}
          />
        </div>
      </div>
    </DashboardCard>
  );
}