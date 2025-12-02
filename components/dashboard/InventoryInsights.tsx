"use client"

import { Warehouse, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardCard } from "./DashboardCard"

interface WarehouseItem {
  name: string
  units: number
  doi: number
  status?: "low" | "overstock"
  percentage: number
}

interface PincodeItem {
  pincode: string
  location: string
  status: "stockout" | "low" | "ok"
  percentage: number
}

const warehouseData: WarehouseItem[] = [
  {
    name: "Mumbai Central",
    units: 120,
    doi: 8,
    status: "low",
    percentage: 20, // ~20% for low stock
  },
  {
    name: "Delhi NCR",
    units: 450,
    doi: 22,
    percentage: 48, // ~48% for medium stock
  },
  {
    name: "Bangalore Hub",
    units: 680,
    doi: 45,
    status: "overstock",
    percentage: 91, // ~91% for overstock
  },
]

const pincodeData: PincodeItem[] = [
  {
    pincode: "400001",
    location: "Mumbai Central",
    status: "stockout",
    percentage: 35,
  },
  {
    pincode: "110001",
    location: "Delhi Connaught Place",
    status: "low",
    percentage: 62,
  },
  {
    pincode: "560001",
    location: "Bangalore MG Road",
    status: "ok",
    percentage: 92,
  },
]

const Badge = ({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: "low" | "overstock" | "stockout" | "ok"
}) => {
  const variantStyles = {
    low: "bg-amber-50 text-amber-600",
    overstock: "bg-blue-50 text-blue-600",
    stockout: "bg-red-50 text-red-600",
    ok: "bg-emerald-50 text-emerald-600",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide",
        variantStyles[variant]
      )}
    >
      {children}
    </div>
  )
}

const ProgressBar = ({
  percentage,
  variant,
}: {
  percentage: number
  variant: "low" | "overstock" | "stockout" | "ok" | "normal"
}) => {
  const variantColors = {
    low: "bg-amber-400",
    overstock: "bg-blue-400",
    stockout: "bg-red-400",
    ok: "bg-emerald-400",
    normal: "bg-emerald-400",
  }

  return (
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={cn("h-full rounded-full transition-all", variantColors[variant])}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export function InventoryInsights() {
  return (
    <DashboardCard className="h-full relative overflow-hidden border-gray-200">
      {/* Faint Overlay Gradient for Depth - Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Warehouse Level Section */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-100/80 rounded-lg">
              <Warehouse className="w-4 h-4 text-purple-700" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight">Warehouse Level</h3>
          </div>

          {/* Warehouse Items */}
          <div className="flex flex-col gap-3">
            {warehouseData.map((warehouse) => (
              <div
                key={warehouse.name}
                className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-3 flex flex-col gap-2 transition-shadow duration-200"
              >
                {/* Top row - Name and Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-gray-800">{warehouse.name}</p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 font-medium">
                      <span>{warehouse.units} units</span>
                      <span>•</span>
                      <span>DOI: {warehouse.doi}d</span>
                    </div>
                  </div>
                  {warehouse.status && (
                    <Badge variant={warehouse.status}>
                      {warehouse.status === "low" ? "Low Stock" : "Overstock"}
                    </Badge>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mt-1">
                  <ProgressBar
                    percentage={warehouse.percentage}
                    variant={warehouse.status || "normal"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pincode Stockout Hotspots Section */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100/80 rounded-lg">
              <MapPin className="w-4 h-4 text-red-700" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight">Stockout Hotspots</h3>
          </div>

          {/* Pincode Items */}
          <div className="flex flex-col gap-3">
            {pincodeData.map((pincode) => (
              <div
                key={pincode.pincode}
                className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-3 flex flex-col gap-2 transition-shadow duration-200"
              >
                {/* Top row - Pincode, Badge, and Percentage */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-gray-800">{pincode.pincode}</p>
                      <Badge variant={pincode.status}>
                        {pincode.status === "stockout"
                          ? "Stockout"
                          : pincode.status === "low"
                            ? "Low"
                            : "OK"}
                      </Badge>
                    </div>
                    <p className="text-[10px] text-gray-600 font-medium">{pincode.location}</p>
                  </div>
                  <p
                    className={cn(
                      "text-xs font-bold",
                      pincode.status === "stockout" && "text-red-600",
                      pincode.status === "low" && "text-amber-600",
                      pincode.status === "ok" && "text-emerald-600"
                    )}
                  >
                    {pincode.percentage}%
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-1">
                  <ProgressBar percentage={pincode.percentage} variant={pincode.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  )
}
