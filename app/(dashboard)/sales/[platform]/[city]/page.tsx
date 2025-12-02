"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DrillDownBreadcrumb } from "@/components/navigation/DrillDownBreadcrumb";
import { Button } from "@/components/ui/button";
import { KPICard } from "@/components/sales/KPICard";
import { PincodeLevelAnalysis } from "@/components/sales/PincodeLevelAnalysis";
import { SalesPerformanceTable } from "@/components/sales/SalesPerformanceTable";
import { WarehousePerformanceTable } from "@/components/sales/WarehousePerformanceTable";
import {
  ProfitabilityIcon,
  TrendingUpIcon,
  UserIcon,
  TrendingDownIcon,
} from "@/lib/flaticons";

export default function CitySalesPage() {
  const params = useParams();
  const router = useRouter();
  const platform = params.platform as string;
  const city = params.city as string;

  // Format names for display
  const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
  const cityName = city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Sample warehouses data for this city
  const warehouses = [
    {
      id: "warehouse-1",
      name: "Warehouse 1",
      location: "North Zone",
      salesValue: "₹18.5L",
      orders: 520,
    },
    {
      id: "warehouse-2",
      name: "Warehouse 2",
      location: "South Zone",
      salesValue: "₹15.2L",
      orders: 410,
    },
    {
      id: "warehouse-3",
      name: "Warehouse 3",
      location: "East Zone",
      salesValue: "₹11.5L",
      orders: 320,
    },
  ];

  const handleWarehouseClick = (warehouseId: string) => {
    router.push(`/sales/${platform}/${city}/${warehouseId}`);
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <DrillDownBreadcrumb />

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {platformName} - {cityName}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Click on a warehouse to view detailed performance
        </p>
      </div>

      {/* City Summary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* City Sales */}
        <KPICard
          title="City Sales"
          value="₹680K"
          icon={
            <ProfitabilityIcon
              size={16}
              className="text-[#f8cb46]"
              strokeWidth={2}
            />
          }
          trend={{ value: "18.2%", isPositive: true }}
        />

        {/* DRR (Daily Run Rate) */}
        <KPICard
          title="DRR (Daily Run Rate)"
          value="₹22.7K"
          icon={
            <TrendingUpIcon
              size={16}
              className="text-[#25b990]"
              strokeWidth={2}
            />
          }
          subtitle="per day avg"
        />

        {/* DHH (Daily HH Reach) */}
        <KPICard
          title="DHH (Daily HH Reach)"
          value="3,400"
          icon={
            <UserIcon size={16} className="text-[#25b990]" strokeWidth={2} />
          }
          trend={{ value: "12.8%", isPositive: true }}
        />

        {/* Returns % */}
        <KPICard
          title="Returns %"
          value="2.5%"
          icon={
            <TrendingDownIcon
              size={16}
              className="text-[#e85454]"
              strokeWidth={2}
            />
          }
          subtitle="below avg"
          valueColor="red"
        />
      </div>

      {/* Warehouses Performance Table */}
      <WarehousePerformanceTable warehouses={warehouses} />

      {/* Pincode-Level Analysis */}
      <PincodeLevelAnalysis />

      {/* Sales Performance Details Table */}
      <SalesPerformanceTable />
    </div>
  );
}
