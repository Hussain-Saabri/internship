"use client";


import { InventoryInsights } from "@/components/dashboard/InventoryInsights";
import { ProfitabilityMeter } from "@/components/dashboard/ProfitabilityMeter";
import { AgeingCharges } from "@/components/dashboard/AgeingCharges";
import { ShareOfVisibility } from "@/components/dashboard/ShareOfVisibility";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { MarketShareChart } from "@/components/dashboard/MarketShareChart";
import { WtOSAChart } from "@/components/dashboard/WtOSAChart";
import { TopCitiesChart } from "@/components/dashboard/TopCitiesChart";
import { WtDiscountChart } from "@/components/dashboard/WtDiscountChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Row - Sales Chart Left & Market Share Right - 50/50 split */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Sales Chart - 50% */}
        <div className="flex-1 lg:w-[50%]">
          <SalesChart />
        </div>

        {/* Market Share Chart - 50% */}
        <div className="flex-1 lg:w-[50%]">
          <MarketShareChart />
        </div>
      </div>

      {/* Second Row - 3 Equal Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Wt. OSA % - Left */}
        <div>
          <WtOSAChart />
        </div>

        {/* Top Cities - Middle */}
        <div>
          <TopCitiesChart />
        </div>

        {/* Wt. Discount % - Right */}
        <div>
          <WtDiscountChart />
        </div>
      </div>

      {/* Inventory Insights & Profitability Meter - 70/30 split */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Inventory Insights - 70% */}
        <div className="flex-1 lg:w-[70%]">
          <InventoryInsights />
        </div>
        {/* Profitability Meter - 30% */}
        <div className="lg:w-[30%]">
          <ProfitabilityMeter />
        </div>
      </div>
      {/* Ageing Charges & Share of Visibility - 50/50 split */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Ageing Charges - 50% */}
        <div className="flex-1 lg:w-[50%]">
          <AgeingCharges />
        </div>
        {/* Share of Visibility - 50% */}
        <div className="w-full md:w-[70%] lg:w-[50%] flex-1">
          <ShareOfVisibility />
        </div>
      </div>
    </div>
  );
}
