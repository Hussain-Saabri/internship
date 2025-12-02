"use client"

import { useRouter } from "next/navigation"
import { KPICard } from "@/components/inventory/KPICard"
import { WareHouseLevelEntryTable } from "@/components/inventory/WareHouseLevelEntryTable"
import { ProductLevelTable } from "@/components/inventory/ProductLevelTable"
import { AlertsAndExceptions } from "@/components/inventory/AlertsAndExceptions"
import { StockAgeingCharges } from "@/components/inventory/StockAgeingCharges"
import { PincodeStockAnalysis } from "@/components/inventory/PincodeStockAnalysis"
import {
  ProfitabilityIcon,TrendingDownIcon,
  CalendarIcon,TrendingUpIcon,AlertTriangleIcon
} from "@/lib/flaticons"
import InventoryFilters from "@/components/inventory/InventoryFilters"
export default function InventoryPage() {
  const router = useRouter()
  return (

    <div className="space-y-6">
      
      {/* Filtering part */}
      <div className="">
        <InventoryFilters/>
      </div>
      
      {/* KPI Cards Row */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-1">
        {/* Total Sales */}
        <KPICard
        title="Total Stock"
        value="68,600"
        icon={<ProfitabilityIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
        subtitle="₹10.29M"
        valueColor="default"
      />

      {/* Average DOI */}
      <KPICard
        title="Average DOI"
        value="18.5d"
        icon={<CalendarIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
        subtitle="days of inventory"
        valueColor="green"
      />

      {/* DRR */}
      <KPICard
        title="DRR"
        value="3708"
        icon={<TrendingUpIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
        subtitle="units/day"
      />

      {/* Stockouts */}
      <KPICard
        title="Stockouts"
        value="15"
        icon={<AlertTriangleIcon size={16} className="text-[#e85454]" strokeWidth={2} />}
        subtitle="SKUs at 0 qty"
        valueColor="red"
      />

      {/* Near Expiry */}
      <KPICard
        title="Near Expiry"
        value="12.8%"
        icon={<TrendingDownIcon size={16} className="text-[#f5b82e]" strokeWidth={2} />}
        subtitle="< 15 days"
        valueColor="orange"
      />

      {/* Stock Turnover */}
      <KPICard
        title="Stock Turnover"
        value="19.7x"
        icon={<TrendingUpIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
        trend={{ value: "+2.3x", isPositive: true }}
        valueColor="green"
      />
      </div>
      {/* Warehouse Level Inventory and Alerts & Exceptions - 70/30 split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

  {/* Table section */}
  <div className="col-span-1 lg:col-span-2">
    <WareHouseLevelEntryTable />
  </div>

  {/* Alerts section */}
  <div className="col-span-1 lg:sticky lg:top-4 h-fit">
    <AlertsAndExceptions />
  </div>

</div>



    {/* StockAgeing Charges & Pincode-Level Stock Analysis - 50/50 split */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
      <StockAgeingCharges />
      <PincodeStockAnalysis />
    </div>
    {/* Product-Level Inventory (Top SKUs by Stock) table */}
    <div className="w-full">
      
    </div>
     <ProductLevelTable/>
    </div>
    )
}