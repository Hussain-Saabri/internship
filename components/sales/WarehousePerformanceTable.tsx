"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRouter, useParams } from "next/navigation"
import { ChevronRight } from "lucide-react"

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

export function WarehousePerformanceTable({ warehouses }: WarehousePerformanceTableProps) {
    const router = useRouter()
    const params = useParams()
    const platform = params.platform as string
    const city = params.city as string

    const handleWarehouseClick = (warehouseId: string) => {
        router.push(`/sales/${platform}/${city}/${warehouseId}`)
    }

    return (
        <Card className="border-white/50 rounded-[20px] flex-grow w-full bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-md">
            <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
                    Warehouse Performance
                </h3>

                <div className="rounded-xl border border-white/40 overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow className="bg-white/50 border-b border-white/40 h-12 hover:bg-white/60">
                                    <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase">
                                        Warehouse
                                    </TableHead>
                                    <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase">
                                        Location
                                    </TableHead>
                                    <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase whitespace-nowrap">
                                        Sales Value
                                    </TableHead>
                                    <TableHead className="px-4 py-3 text-left text-gray-500 font-medium text-[10px] tracking-wider uppercase">
                                        Orders
                                    </TableHead>
                                    <TableHead className="px-4 py-3 text-center text-gray-500 font-medium text-[10px] tracking-wider uppercase">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {warehouses.map((warehouse, index) => (
                                    <TableRow
                                        key={warehouse.id}
                                        className={`
                      border-b border-white/40 h-[60px] transition-all duration-200 cursor-pointer group
                      ${index % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}
                      hover:bg-white/40
                    `}
                                        onClick={() => handleWarehouseClick(warehouse.id)}
                                    >
                                        <TableCell className="px-4 py-3">
                                            <span className="text-[11px] font-bold text-gray-800 whitespace-nowrap">
                                                {warehouse.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className="px-4 py-3">
                                            <span className="text-[11px] font-medium text-gray-600 whitespace-nowrap">
                                                {warehouse.location}
                                            </span>
                                        </TableCell>
                                        <TableCell className="px-4 py-3">
                                            <span className="text-[11px] font-bold text-gray-900 whitespace-nowrap">
                                                {warehouse.salesValue}
                                            </span>
                                        </TableCell>
                                        <TableCell className="px-4 py-3">
                                            <span className="text-[11px] font-medium text-gray-700  whitespace-nowrap">
                                                {warehouse.orders.toLocaleString()}
                                            </span>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-center">
                                            <div className="flex justify-center">
                                                <button
                                                    className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 hover:bg-white/70 backdrop-blur-md border border-white/40 shadow-sm transition-all duration-200"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        handleWarehouseClick(warehouse.id)
                                                    }}
                                                >
                                                    <span className="text-[10px] font-bold whitespace-nowrap text-gray-600 group-hover:text-gray-800">
                                                        View Details
                                                    </span>
                                                    <ChevronRight className="w-3.5 h-3.5 text-[#6366F1] group-hover:translate-x-0.5 transition-transform" />
                                                </button>
                                            </div>
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
