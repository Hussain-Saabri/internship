"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PincodeData {
  pincode: string
  area: string
  sales: string
  returns: string
  performance: "high" | "medium" | "low"
}

const pincodeData: PincodeData[] = [
  { pincode: "400001", area: "Mumbai Central", sales: "₹125K", returns: "2.1%", performance: "high" },
  { pincode: "400002", area: "Fort", sales: "₹98K", returns: "1.8%", performance: "high" },
  { pincode: "400003", area: "Kalbadevi", sales: "₹86K", returns: "3.2%", performance: "medium" },
  { pincode: "400004", area: "Girgaon", sales: "₹72K", returns: "2.5%", performance: "medium" },
  { pincode: "400005", area: "Charni Road", sales: "₹54K", returns: "4.1%", performance: "low" },
]

const getPerformanceColor = (performance: "high" | "medium" | "low") => {
  switch (performance) {
    case "high":
      return "bg-emerald-50 text-emerald-600 border-emerald-100"
    case "medium":
      return "bg-amber-50 text-amber-600 border-amber-100"
    case "low":
      return "bg-rose-50 text-rose-600 border-rose-100"
  }
}

export function PincodeLevelAnalysis() {
  return (
    <div className="w-full border border-gray-200 rounded-[12px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="m-4 text-sm font-semibold text-gray-900 tracking-tight">
            Pincode-Level Analysis
          </h3>
        </div>

        {/* ✅ ONLY CHANGE → overflow-x-auto */}
        <div className="overflow-x-auto rounded-xl border ml-4 mb-4 mr-4 mt-[-20px] border-gray-200 bg-white shadow-none">

          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-left whitespace-nowrap text-[11px] font-bold text-gray-900 uppercase tracking-wider">
                  Pincode / Area
                </th>
                <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-900 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-900 uppercase tracking-wider">
                  Returns
                </th>
                <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-900 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {pincodeData.map((item) => (
                <tr key={item.pincode} className="group hover:bg-gray-50/50 transition-colors duration-200">
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">{item.pincode}</span>
                      <span className="text-xs text-gray-500">{item.area}</span>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <span className="text-sm font-semibold text-gray-900">{item.sales}</span>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "text-sm font-medium",
                        parseFloat(item.returns) > 3 ? "text-rose-500" : "text-gray-600"
                      )}
                    >
                      {item.returns}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <Badge
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[10px] font-semibold border shadow-none hover:bg-opacity-80 transition-colors",
                        getPerformanceColor(item.performance)
                      )}
                    >
                      {item.performance}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
