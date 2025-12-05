import InventoryFilters from "@/components/inventory/InventoryFilters";
import PincodeBreadcrumb from "@/components/inventory/PincodeBreadcrumb";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { PincodeCard } from "@/components/inventory/pincode-analysis/PincodeCard";
import { KPICard } from "@/components/inventory/pincode-analysis/KPICard";
import { CubeIcon, TrendingUpIcon, AlertTriangleIcon,InventoryIcon } from "@/lib/flaticons";
import { CategoryBreakdown } from "@/components/inventory/pincode-analysis/CategoryBreakdown";
import StockDrrTrendChart from "@/components/inventory/pincode-analysis/StockDrrChart";
import { SkuInventoryTable } from "@/components/inventory/pincode-analysis/SkuInventoryTable";
interface PageProps {
  params: Promise<{ pincode: string }>;
  searchParams: Promise<{ name?: string }>;
}


export default async function PincodeDetailsPage({ params, searchParams }: PageProps) {
  const { name } = await searchParams;
  const { pincode } = await params;
  return (
    <div className="space-y-6 pb-10">

      <div className="space-y-6">
        <InventoryFilters />
        <PincodeBreadcrumb name={name ?? ""} pincode={pincode} />
      </div>

      <div>
        <PincodeCard
          name={name}
          pincode={pincode}
          warehouse={name} />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

        <KPICard
          title="Total Stock"
          value="₹18.5M"
          icon={<InventoryIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          subtitle="days of inventory"
          valueColor="green"
        />
        <KPICard
          title="Avg DRR"
          value="40"
          icon={<TrendingUpIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          subtitle="units/day"
          valueColor="green"
        />
        <KPICard
          title="Avg DOI"
          value="10d"
          icon={<InventoryIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          subtitle="days"
          valueColor="default"
        />
        <KPICard
          title="Active SKUs"
          value="6"
          icon={<InventoryIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
          subtitle="SKUs"
          valueColor="default"
        />
        <KPICard
          title="Stockouts (7d)"
          value="6"
          icon={<AlertTriangleIcon size={16} className="text-[#f56565]" strokeWidth={2} />}
          subtitle="SKUs"
          valueColor="red"
        />
      </div>
      {/* Category Breakdwona and Stock Drr Trend Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <StockDrrTrendChart />
        <CategoryBreakdown />

      </div>
      <div className="w-full">
        <SkuInventoryTable pincode={pincode} name={name ?? ""} />
      </div>
    </div>


  );
}
