"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
      return "bg-[#d4f4dd] text-[#25b990]"
    case "medium":
      return "bg-[#fff4d4] text-[#f5b82e]"
    case "low":
      return "bg-[#ffd4d4] text-[#e85454]"
  }
}

export function PincodeLevelAnalysis() {
  return (
    <Card className="rounded-[12px] border border-gray-200 shadow-sm bg-white w-full">
      <CardContent className="p-6">

        <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-6">
          Pincode-Level Analysis
        </h3>

        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">

          {/* Table Fixed Layout */}
          <Table className="w-full table-fixed">

            {/* HEADER */}
            <TableHeader className="bg-gray-50">
              <TableRow>

                {/* Shifted Right (pl-10) + Smaller Width (25%) */}
                <TableHead className="w-[25%] px-4 pl-10 py-3 text-xs font-semibold tracking-wide text-gray-600 uppercase whitespace-nowrap">
                  Pincode / Area
                </TableHead>

                <TableHead className="w-[20%] px-4 py-3 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  Sales
                </TableHead>

                <TableHead className="w-[20%] px-4 py-3 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  Returns
                </TableHead>

                <TableHead className="w-[20%] px-4 py-3 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  Performance
                </TableHead>

              </TableRow>
            </TableHeader>

            {/* BODY */}
            <TableBody>
              {pincodeData.map((item, index) => (
                <TableRow
                  key={item.pincode}
                  className={cn(
                    "h-[56px] cursor-pointer transition-colors",
                    index % 2 === 0 ? "bg-white" : "bg-gray-50",
                    "hover:bg-gray-100"
                  )}
                >

                  {/* Shifted Right (pl-10) matches header */}
                  <TableCell className="px-4 pl-10 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gray-100 border border-gray-200">
                        <MapPin className="w-3.5 h-3.5 text-[#25b990]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {item.pincode}
                        </span>
                        <span className="text-xs text-gray-500">
                          {item.area}
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  {/* SALES */}
                  <TableCell className="px-4 py-4">
                    <span className="text-sm font-semibold text-gray-900">
                      {item.sales}
                    </span>
                  </TableCell>

                  {/* RETURNS */}
                  <TableCell className="px-4 py-4">
                    <span
                      className={cn(
                        "text-sm font-medium",
                        parseFloat(item.returns) > 3 ? "text-[#e85454]" : "text-gray-700"
                      )}
                    >
                      {item.returns}
                    </span>
                  </TableCell>

                  {/* PERFORMANCE */}
                  <TableCell className="px-4 py-4">
                    <Badge
                      className={cn(
                        "text-[10px] font-bold px-2.5 py-1 rounded-full border-0 uppercase tracking-wide",
                        getPerformanceColor(item.performance)
                      )}
                    >
                      {item.performance}
                    </Badge>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>

        </div>
      </CardContent>
    </Card>
  )
}
