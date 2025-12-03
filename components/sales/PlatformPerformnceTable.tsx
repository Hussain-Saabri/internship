"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface PlatformItem {
  id: string
  name: string
  salesValue: string
  orders: number
  cities: number
  color: string
}

const platformData: PlatformItem[] = [
  {
    id: "blinkit",
    name: "Blinkit",
    salesValue: "₹1.86M",
    orders: 5020,
    cities: 5,
    color: "#F4C430",
  },
  {
    id: "zepto",
    name: "Zepto",
    salesValue: "₹1.72M",
    orders: 4230,
    cities: 4,
    color: "#B794F4",
  },
  {
    id: "instamart",
    name: "Instamart",
    salesValue: "₹1.42M",
    orders: 3200,
    cities: 3,
    color: "#FB923C",
  },
]

export function PlatformPerformanceTable() {
  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/sales/${id}`)
  }

  return (
    <Card className="rounded-[12px] flex-grow w-full relative overflow-hidden">
      <CardContent className="p-6">

        {/* TITLE */}
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          Platform Performance
        </h3>

        {/* TABLE WRAPPER */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">

              {/* HEADER */}
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-200 h-12">

                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap pl-6">
                    Platform
                  </TableHead>

                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Orders
                  </TableHead>

                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Active Cities
                  </TableHead>

                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Sales Value
                  </TableHead>

                  <TableHead className="px-2 py-3 text-center font-bold text-[10px] tracking-wider uppercase whitespace-nowrap pr-6">
                    Action
                  </TableHead>

                </TableRow>
              </TableHeader>

              {/* BODY */}
              <TableBody>
                {platformData.map((item) => (
                  <TableRow
                    key={item.id}
                    className="border-b border-gray-200 h-12 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleClick(item.id)}
                  >

                    {/* PLATFORM */}
                    <TableCell className="px-2 py-3 pl-6">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[10px] font-bold text-gray-800">
                          {item.name}
                        </span>
                      </div>
                    </TableCell>

                    {/* ORDERS */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-medium text-gray-700">
                        {item.orders.toLocaleString()}
                      </span>
                    </TableCell>

                    {/* ACTIVE CITIES */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-medium text-gray-700">
                        {item.cities}
                      </span>
                    </TableCell>

                    {/* SALES VALUE */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-bold text-gray-900">
                        {item.salesValue}
                      </span>
                    </TableCell>

                    {/* ACTION BUTTON */}
                    <TableCell className="px-2 py-3 text-center pr-6">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-white/50 border-gray-200 hover:bg-gray-100 text-[10px] h-7 px-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleClick(item.id)
                        }}
                      >
                        View Details
                      </Button>
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
