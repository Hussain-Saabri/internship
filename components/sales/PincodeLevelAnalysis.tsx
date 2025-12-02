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
  {
    pincode: "400001",
    area: "Mumbai Central",
    sales: "₹125K",
    returns: "2.1%",
    performance: "high",
  },
  {
    pincode: "400002",
    area: "Fort",
    sales: "₹98K",
    returns: "1.8%",
    performance: "high",
  },
  {
    pincode: "400003",
    area: "Kalbadevi",
    sales: "₹86K",
    returns: "3.2%",
    performance: "medium",
  },
  {
    pincode: "400004",
    area: "Girgaon",
    sales: "₹72K",
    returns: "2.5%",
    performance: "medium",
  },
  {
    pincode: "400005",
    area: "Charni Road",
    sales: "₹54K",
    returns: "4.1%",
    performance: "low",
  },
]

const getPerformanceColor = (performance: "high" | "medium" | "low") => {
  switch (performance) {
    case "high":
      return "bg-[#d4f4dd] text-[#25b990] hover:bg-[#d4f4dd]"
    case "medium":
      return "bg-[#fff4d4] text-[#f5b82e] hover:bg-[#fff4d4]"
    case "low":
      return "bg-[#ffd4d4] text-[#e85454] hover:bg-[#ffd4d4]"
  }
}

export function PincodeLevelAnalysis() {
  return (
    <Card className="border-white/50 rounded-[20px] flex-grow w-full bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-md">
      <CardContent className="p-6">
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          Pincode-Level Analysis
        </h3>

        <div className="rounded-xl border border-white/40 overflow-hidden">
          <div className="w-full overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-white/50 border-b border-white/40 h-12 hover:bg-white/60">
                  <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Pincode / Area
                  </TableHead>
                  <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase">
                    Sales
                  </TableHead>
                  <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase">
                    Returns
                  </TableHead>
                  <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase">
                    Performance
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pincodeData.map((item, index) => (
                  <TableRow
                    key={item.pincode}
                    className={`
                      border-b border-white/40 h-[60px] transition-all duration-200 cursor-pointer group
                      ${index % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}
                      hover:bg-white/40
                    `}
                  >
                    <TableCell className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-full bg-white/60 shadow-sm">
                          <MapPin className="w-3.5 h-3.5 text-[#25b990]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-gray-800">
                            {item.pincode}
                          </span>
                          <span className="text-[10px] text-gray-500 font-medium">
                            {item.area}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3">
                      <span className="text-[11px] font-bold text-gray-900">
                        {item.sales}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-3">
                      <span className={cn(
                        "text-[11px] font-medium",
                        parseFloat(item.returns) > 3 ? "text-[#e85454]" : "text-gray-700"
                      )}>
                        {item.returns}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-3">
                      <Badge
                        variant={item.performance}
                        className={cn(
                          "text-[10px] font-bold px-2.5 py-0.5 rounded-full border-0 shadow-none uppercase tracking-wide",
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
        </div>
      </CardContent>
    </Card>
  )
}

