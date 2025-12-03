"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SKUData {
  name: string
  sku: string
  sales: string
  percentage: number
}

const skuData: SKUData[] = [
  { name: "Tata Salt 1kg", sku: "SKU-001", sales: "₹45K", percentage: 100 },
  { name: "Amul Butter 500g", sku: "SKU-002", sales: "₹38K", percentage: 84 },
  { name: "Maggi 2-Min Noodles", sku: "SKU-003", sales: "₹35K", percentage: 78 },
  { name: "Parle-G Biscuits", sku: "SKU-004", sales: "₹32K", percentage: 71 },
  { name: "Fortune Oil 1L", sku: "SKU-005", sales: "₹28K", percentage: 62 },
]

export function TopSKUsBySales() {
  return (
    <Card className="border-gray-200 border rounded-[12px] flex-grow w-full   relative overflow-hidden backdrop-blur-md">
      <CardContent className="p-6">
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          Top SKUs by Sales
        </h3>
        <div className="flex flex-col gap-3">
          {skuData.map((item, index) => (
            <div
              key={index}
              className="group p-2 rounded-xl bg-white border border-gray-200 hover:bg-white/60 transition-all duration-200 cursor-pointer "
            >
              {/* Header: Product name and sales value */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {item.name}
                  </p>
                  <p className="text-[11px] font-medium text-gray-500 tracking-wide">
                    {item.sku}
                  </p>
                </div>
                <p className="text-sm font-bold text-[#25b990]">
                  {item.sales}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100/50 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out bg-[#25b990] shadow-[0_0_8px_rgba(37,185,144,0.3)]"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
