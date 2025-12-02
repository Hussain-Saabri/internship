"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DrillDownBreadcrumb } from "@/components/navigation/DrillDownBreadcrumb"
import { Button } from "@/components/ui/button"
import { KPICard } from "@/components/sales/KPICard"
import { SalesByDayChart } from "@/components/sales/SalesByDayChart"
import { CategorySplitChart } from "@/components/sales/CategorySplitChart"
import { DiscountTrendChart } from "@/components/sales/DiscountTrendChart"
import { TopCitiesBySalesChart } from "@/components/sales/TopCitiesBySalesChart"
import { SalesPerformanceTable } from "@/components/sales/SalesPerformanceTable"
import { CityPerformanceTable } from "@/components/sales/CityPerformanceTable"
import {
  ProfitabilityIcon,
  ShoppingCartIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "@/lib/flaticons"

export default function PlatformSalesPage() {
  const params = useParams()
  const router = useRouter()
  const platform = params.platform as string

  // Format platform name for display
  const platformName = platform.charAt(0).toUpperCase() + platform.slice(1)

  // Sample cities data for this platform
  const cities = [
    { id: "mumbai", name: "Mumbai", salesValue: "₹45.2L", orders: 1250 },
    { id: "delhi", name: "Delhi", salesValue: "₹38.5L", orders: 980 },
    { id: "bangalore", name: "Bangalore", salesValue: "₹52.8L", orders: 1420 },
    { id: "hyderabad", name: "Hyderabad", salesValue: "₹28.3L", orders: 750 },
    { id: "pune", name: "Pune", salesValue: "₹22.1L", orders: 620 },
  ]

  const handleCityClick = (cityId: string) => {
    router.push(`/sales/${platform}/${cityId}`)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <DrillDownBreadcrumb />

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {platformName} - Sales Overview
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Click on a city to view detailed performance
        </p>
      </div>

      {/* Platform Summary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Platform Sales */}
        <KPICard
          title="Platform Sales"
          value="₹2.10M"
          icon={<ProfitabilityIcon size={16} className="text-[#f8cb46]" strokeWidth={2} />}
          subtitle="42% of total"
        />

        {/* Orders Count */}
        <KPICard
          title="Orders Count"
          value="5,250"
          icon={<ShoppingCartIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          trend={{ value: "12.4%", isPositive: true }}
        />

        {/* Returns % */}
        <KPICard
          title="Returns %"
          value="2.8%"
          icon={<TrendingDownIcon size={16} className="text-[#e85454]" strokeWidth={2} />}
          subtitle="-0.3% vs avg"
          valueColor="red"
        />

        {/* Gross Margin % */}
        <KPICard
          title="Gross Margin %"
          value="42%"
          icon={<TrendingUpIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          trend={{ value: "3.2%", isPositive: true }}
          valueColor="green"
        />
      </div>

      {/* Cities Performance Table */}
      <CityPerformanceTable cities={cities} />

      {/* Charts Row - 3 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesByDayChart />
        <CategorySplitChart />
        <DiscountTrendChart />
      </div>

      {/* Top Cities by Sales Chart */}
      <TopCitiesBySalesChart />

      {/* Sales Performance Details Table */}
      <SalesPerformanceTable />
    </div>
  )
}
