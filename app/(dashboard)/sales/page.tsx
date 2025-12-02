"use client"
import { useRouter } from "next/navigation"
import { KPICard } from "@/components/sales/KPICard"
import { SalesTrendChart } from "@/components/sales/SalesTrendChart"
import { PlatformContributionChart } from "@/components/sales/PlatformContributionChart"
import { SalesPerformanceTable } from "@/components/sales/SalesPerformanceTable"
import { PlatformPerformnceTable } from "@/components/sales/PlatformPerformnceTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ProfitabilityIcon,
  ShoppingCartIcon,
  PackageIcon,
  TrendingDownIcon,
  PercentageIcon,
} from "@/lib/flaticons"


export default function SalesPage() {
  const router = useRouter()

  // Platform data for selection
  const platforms = [
    {
      id: "blinkit",
      name: "Blinkit",
      salesValue: "₹1.86M",
      orders: 5020,
      cities: 5,
      color: "#f8cb46",
    },
    {
      id: "zepto",
      name: "Zepto",
      salesValue: "₹1.72M",
      orders: 4230,
      cities: 4,
      color: "#9b4dff",
    },
    {
      id: "instamart",
      name: "Instamart",
      salesValue: "₹1.42M",
      orders: 3200,
      cities: 3,
      color: "#ff6b35",
    },
  ]

  const handlePlatformClick = (platformId: string) => {
    router.push(`/sales/${platformId}`)
  }

  return (
    <div className="space-y-6">
      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {/* Total Sales */}
        <KPICard
          title="Total Sales"
          value="₹5.00M"
          icon={<ProfitabilityIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          trend={{ value: "15.2%", isPositive: true }}
        />

        {/* Orders Count */}
        <KPICard
          title="Orders Count"
          value="12,450"
          icon={<ShoppingCartIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          trend={{ value: "8.4%", isPositive: true }}
        />

        {/* Avg Order Value */}
        <KPICard
          title="Avg Order Value"
          value="₹401"
          icon={<PackageIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          trend={{ value: "6.2%", isPositive: true }}
        />

        {/* Returns % */}
        <KPICard
          title="Returns %"
          value="3.2%"
          icon={<TrendingDownIcon size={16} className="text-[#e85454]" strokeWidth={2} />}
          trend={{ value: "0.8%", isPositive: false }}
          valueColor="red"
        />

        {/* Wt. Discount % */}
        <KPICard
          title="Wt. Discount %"
          value="12.8%"
          icon={<PercentageIcon size={16} className="text-[#f5b82e]" strokeWidth={2} />}
          trend={{ value: "-2.1%", isPositive: true }}
          valueColor="orange"
        />
      </div>

      {/* Sales Trend & Platform Contribution - 50/50 split */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Sales Trend - 50% */}
        <div className="flex-1 lg:w-[50%] flex">
          <SalesTrendChart />
        </div>

        {/* Platform Contribution - 50% */}
        <div className="flex-1 lg:w-[50%] flex">
          <PlatformContributionChart />
        </div>
      </div>

      {/* Platform Selection - Click to drill down */}
      <div className="w-full">
          <PlatformPerformnceTable />
      </div>

      
     

      {/* Sales Performance Details Table - Read-only Overview */}
      <div className="w-full">
        <SalesPerformanceTable />
      </div>
    </div>
  )
}
