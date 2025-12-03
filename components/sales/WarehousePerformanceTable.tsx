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
import { useRouter, useParams } from "next/navigation"

interface WarehouseData {
  id: string
  name: string
  location: string
  salesValue: string
  orders: number
}

interface WarehousePerformanceTableProps {
  warehouses: WarehouseData[]
}

export function WarehousePerformanceTable({
  warehouses,
}: WarehousePerformanceTableProps) {
  const router = useRouter()
  const params = useParams()
  const platform = params.platform as string
  const city = params.city as string

  const handleWarehouseClick = (warehouseId: string) => {
    router.push(`/sales/${platform}/${city}/${warehouseId}`)
  }

  return (
    <Card className="rounded-[12px] flex-grow w-full relative overflow-hidden">
      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          Warehouse Performance
        </h3>

        {/* Table Container */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-200 h-12">
                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap pl-6">
                    Warehouse
                  </TableHead>
                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Location
                  </TableHead>
                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Sales Value
                  </TableHead>
                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Orders
                  </TableHead>
                  <TableHead className="px-2 py-3 text-center font-bold text-[10px] tracking-wider uppercase whitespace-nowrap pr-6">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {warehouses.map((warehouse) => (
                  <TableRow
                    key={warehouse.id}
                    onClick={() => handleWarehouseClick(warehouse.id)}
                    className="border-b border-gray-200 h-12 hover:bg-gray-50 cursor-pointer"
                  >
                    {/* Warehouse Name */}
                    <TableCell className="px-2 py-3 pl-6">
                      <span className="text-[10px] font-bold text-gray-800 whitespace-nowrap">
                        {warehouse.name}
                      </span>
                    </TableCell>

                    {/* Location */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap">
                        {warehouse.location}
                      </span>
                    </TableCell>

                    {/* Sales Value */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-bold text-gray-900 whitespace-nowrap">
                        {warehouse.salesValue}
                      </span>
                    </TableCell>

                    {/* Orders */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap">
                        {warehouse.orders.toLocaleString()}
                      </span>
                    </TableCell>

                    {/* Action Button */}
                    <TableCell className="px-2 py-3 text-center pr-6">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-white/50 border-gray-200 hover:bg-gray-100 text-[10px] h-7 px-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleWarehouseClick(warehouse.id)
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
