"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertBox } from "@/components/ui/alert-box";
import {
  AlertTriangleIcon,
  TrendingDownIcon,
  WarningCircleIcon, WarehouseIcon
} from "@/lib/flaticons";

export function AlertsAndExceptions() {
  return (
    <Card className="border border-gray-200 rounded-[12px] bg-white  ">
      <CardContent className="p-4">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangleIcon size={18} className="text-red-500" strokeWidth={2} />
          <h3 className="text-sm  font-semibold text-gray-800 tracking-tight">
            Alerts & Exceptions
          </h3>
        </div>

        {/* Reusable Alert Boxes */}

        <AlertBox
          icon={<TrendingDownIcon size={16} className="text-red-600" />}
          title="Low Stock Alert"
          description="12 SKUs with DOI < 7 days at risk of stockout"
          count={12}
          variant="error"
        />

        <AlertBox
          icon={<AlertTriangleIcon size={16} className="text-red-600" />}
          title="Expiry Risk"
          description="8 SKUs with <15 days shelf life - liquidation needed"
          count={8}
          variant="error"
        />

        <AlertBox
          icon={<WarningCircleIcon size={16} className="text-amber-500" />}
          title="Overstock Alert"
          description="5 SKUs with DOI > 60 days - capital blocked"
          count={5}
          variant="warning"
        />

        <AlertBox
          icon={<WarehouseIcon size={16} className="text-yellow-500" />}
          title="Fulfilment Risk"
          description="2 Warehouses with >20% stockout rate"
          count={2}
          variant="warning"
        />


      </CardContent>
    </Card>
  );
}
