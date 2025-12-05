"use client"

import { useParams, useRouter } from "next/navigation"
import { DrillDownBreadcrumb } from "@/components/navigation/DrillDownBreadcrumb"
import { KPICard } from "@/components/sales/KPICard"
import { TopSKUsBySales } from "@/components/sales/TopSKUsBySales"
import { SalesTrendChart } from "@/components/sales/sku/SalesTrendChart"
import { SalesPerformanceTable } from "@/components/sales/SalesPerformanceTable"
import {
  ProfitabilityIcon,
  TrendingDownIcon,
  PercentageIcon,
  BellIcon,
} from "@/lib/flaticons"

export default function WarehouseSalesPage() {
  const params = useParams()
  const router = useRouter()
  const platform = params.platform as string
  const city = params.city as string
  const warehouse = params.warehouse as string

  // Format names for display
  const platformName = platform.charAt(0).toUpperCase() + platform.slice(1)
  const cityName = city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  const warehouseName = warehouse
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Handle SKU navigation
  const handleSKUNavigation = (row: any) => {
    // Use the SKU field or id from the row to navigate
    const skuId = row.sku?.toLowerCase().replace("sku-", "sku-") || row.id
    router.push(`/sales/${platform}/${city}/${warehouse}/${skuId}`)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="text-[11px]">
        <DrillDownBreadcrumb />
      </div>
      

      {/* Page Header */}
      <div>
        <h1 className=" sm:text-2xl font-semibold text-gray-900">
          {platformName} - {cityName} - {warehouseName}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Warehouse performance overview and analytics
        </p>
      </div>

      {/* Warehouse Summary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sales Processed */}
        <KPICard
          title="Sales Processed"
          value="₹244K"
          icon={<ProfitabilityIcon size={16} className="text-[#f8cb46]" strokeWidth={2} />}
          subtitle="856 orders"
        />

        {/* Returns % */}
        <KPICard
          title="Returns %"
          value="2.1%"
          icon={<TrendingDownIcon size={16} className="text-[#e85454]" strokeWidth={2} />}
          subtitle="18 units"
          valueColor="red"
        />

        {/* Contribution % */}
        <KPICard
          title="Contribution %"
          value="36%"
          icon={<PercentageIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          subtitle="of city sales"
          valueColor="green"
        />

        {/* SLA Breaches */}
        <KPICard
          title="SLA Breaches"
          value="3.2%"
          icon={<BellIcon size={16} className="text-[#f5b82e]" strokeWidth={2} />}
          subtitle="27 orders"
          valueColor="orange"
        />
      </div>

      {/* Charts Row - 2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopSKUsBySales />
        <SalesTrendChart />
      </div>

      {/* Sales Performance Details Table */}
      <SalesPerformanceTable
        showActions={true}
        onRowAction={handleSKUNavigation}
        actionButtonLabel="View Details"
      />
    </div>
  )
}
