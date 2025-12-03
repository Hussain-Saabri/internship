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

interface CityData {
  id: string
  name: string
  salesValue: string
  orders: number
}

interface CityPerformanceTableProps {
  cities: CityData[]
}

export function CityPerformanceTable({ cities }: CityPerformanceTableProps) {
  const router = useRouter()
  const params = useParams()
  const platform = params.platform as string

  const handleCityClick = (cityId: string) => {
    router.push(`/sales/${platform}/${cityId}`)
  }

  return (
    <Card className="rounded-[12px] flex-grow w-full relative overflow-hidden">
      <CardContent className="p-6">
        {/* Header */}
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          City Performance
        </h3>

        {/* Table Wrapper */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              {/* Table Header */}
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-200 h-12">
                  <TableHead className="px-2 py-3 text-left font-bold text-[10px] tracking-wider uppercase whitespace-nowrap pl-6">
                    City
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

              {/* Table Body */}
              <TableBody>
                {cities.map((city) => (
                  <TableRow
                    key={city.id}
                    onClick={() => handleCityClick(city.id)}
                    className="border-b border-gray-200 h-12 hover:bg-gray-50 cursor-pointer"
                  >
                    {/* City Name */}
                    <TableCell className="px-2 py-3 pl-6">
                      <span className="text-[10px] font-bold text-gray-800">
                        {city.name}
                      </span>
                    </TableCell>

                    {/* Sales Value */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-bold text-gray-900">
                        {city.salesValue}
                      </span>
                    </TableCell>

                    {/* Orders */}
                    <TableCell className="px-2 py-3 text-left">
                      <span className="text-[10px] font-medium text-gray-700">
                        {city.orders.toLocaleString()}
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
                          handleCityClick(city.id)
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
