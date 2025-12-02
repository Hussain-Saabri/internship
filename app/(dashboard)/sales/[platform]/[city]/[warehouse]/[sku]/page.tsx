"use client"

import { useParams } from "next/navigation"
import { DrillDownBreadcrumb } from "@/components/navigation/DrillDownBreadcrumb"
import { SKUProductHeader } from "@/components/sales/SKUProductHeader"
import { SKUMetricsGrid } from "@/components/sales/SKUMetricsGrid"
import { SKUInsightsTabs } from "@/components/sales/SKUInsightsTabs"

export default function SKUDetailPage() {
  const params = useParams()
  const sku = params.sku as string

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <DrillDownBreadcrumb />

      {/* Product Header */}
      <SKUProductHeader
        productName="Tata Salt"
        sku="SKU-001"
        pack="1kg"
        category="Groceries"
        isActive={true}
      />

      {/* Metrics Grid - 6 KPI Cards */}
      <SKUMetricsGrid
        salesValue="₹45K"
        salesTrend={{ value: "12%", isPositive: true }}
        orders="156"
        ordersTrend={{ value: "8%", isPositive: true }}
        grossMargin="38%"
        grossMarginSubtitle="healthy"
        wtDiscount="8.5%"
        wtDiscountTrend={{ value: "-1.2%", isPositive: true, isImprovement: true }}
        returnsPercent="1.9%"
        returnsSubtitle="3 units"
        stock="700 (18d)"
        stockSubtitle="₹105K"
      />

      {/* Insights Tabs */}
      <SKUInsightsTabs />
    </div>
  )
}
