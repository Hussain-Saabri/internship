"use client"

import { useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
  flexRender,
} from "@tanstack/react-table"

import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { TriangleAlert } from "lucide-react"
import { cn } from "@/lib/utils"
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "@/lib/flaticons"

// ==============================
// Types
// ==============================
interface WarehouseItem {
  id: string
  warehouse: string
  location: string
  stockUnits: number
  stockValue: number
  drr: number
  doi: number
  status: "Healthy" | "Low Stock" | "Overstock"
  expiryRisk: number
}

// ==============================
// Data
// ==============================
const warehouseData: WarehouseItem[] = [
  { id: "1", warehouse: "Mumbai Central WH", location: "Mumbai", stockUnits: 12500, stockValue: 1880000, drr: 850, doi: 15, status: "Healthy", expiryRisk: 8.5 },
  { id: "2", warehouse: "Delhi North WH", location: "Delhi", stockUnits: 8900, stockValue: 1330000, drr: 1250, doi: 7, status: "Healthy", expiryRisk: 12.3 },
  { id: "3", warehouse: "Bangalore East WH", location: "Bangalore", stockUnits: 15200, stockValue: 2280000, drr: 680, doi: 22, status: "Healthy", expiryRisk: 5.2 },
  { id: "4", warehouse: "Hyderabad WH", location: "Hyderabad", stockUnits: 6800, stockValue: 1020000, drr: 420, doi: 16, status: "Healthy", expiryRisk: 9.8 },
  { id: "5", warehouse: "Pune West WH", location: "Pune", stockUnits: 3200, stockValue: 480000, drr: 520, doi: 6, status: "Low Stock", expiryRisk: 18.5 },
  { id: "6", warehouse: "Chennai South WH", location: "Chennai", stockUnits: 22500, stockValue: 3380000, drr: 350, doi: 64, status: "Overstock", expiryRisk: 22.1 },
]

// ==============================
// Helpers
// ==============================
const formatCurrency = (value: number): string => {
  return value >= 1_000_000
    ? `₹${(value / 1_000_000).toFixed(2)}M`
    : value >= 1000
      ? `₹${(value / 1000).toFixed(1)}K`
      : `₹${value}`
}

// ==============================
// Columns
// ==============================
const columns: ColumnDef<WarehouseItem>[] = [
  {
    accessorKey: "warehouse",
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990]"
      >
        Warehouse
        {{
          asc: <ArrowUpIcon className="w-3 h-3 text-[#25B990]" />,
          desc: <ArrowDownIcon className="w-3 h-3 text-[#25B990]" />,
        }[column.getIsSorted() as string] ?? (
            <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
          )}
      </div>
    ),
    cell: ({ row }) => (
      <div>
        <p className="text-[12px] text-gray-900">{row.original.warehouse}</p>
        <p className="text-[12px] text-gray-500">{row.original.location}</p>
      </div>
    ),
  },

  {
    accessorKey: "stockUnits",
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990]"
      >
        Stock Units
        {{
          asc: <ArrowUpIcon className="w-3 h-3 text-[#25B990]" />,
          desc: <ArrowDownIcon className="w-3 h-3 text-[#25B990]" />,
        }[column.getIsSorted() as string] ?? (
            <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
          )}
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[12px] text-gray-900">
        {row.original.stockUnits.toLocaleString()}
      </span>
    ),
  },

  {
    accessorKey: "stockValue",
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990]"
      >
        Stock Value (₹)
        {{
          asc: <ArrowUpIcon className="w-3 h-3 text-[#25B990]" />,
          desc: <ArrowDownIcon className="w-3 h-3 text-[#25B990]" />,
        }[column.getIsSorted() as string] ?? (
            <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
          )}
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[12px] text-gray-900">
        {formatCurrency(row.original.stockValue)}
      </span>
    ),
  },

  {
    accessorKey: "drr",
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990]"
      >
        DRR (Units/day)
        {{
          asc: <ArrowUpIcon className="w-3 h-3 text-[#25B990]" />,
          desc: <ArrowDownIcon className="w-3 h-3 text-[#25B990]" />,
        }[column.getIsSorted() as string] ?? (
            <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
          )}
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[12px] text-[#25B990]">{row.original.drr}</span>
    ),
  },

  {
    accessorKey: "doi",
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990]"
      >
        DOI (days)
        {{
          asc: <ArrowUpIcon className="w-3 h-3 text-[#25B990]" />,
          desc: <ArrowDownIcon className="w-3 h-3 text-[#25B990]" />,
        }[column.getIsSorted() as string] ?? (
            <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
          )}
      </div>
    ),
    cell: ({ row }) => {
      const doi = row.original.doi
      const color = doi > 15 ? "#25B990" : doi > 10 ? "#F5B82E" : "#E85454"
      return <span className="text-[12px]" style={{ color }}>{doi}d</span>
    },
  },

  {
    accessorKey: "status",
    header: "Stock Status",
    cell: ({ row }) => {
      const s = row.original.status
      const style =
        s === "Healthy"
          ? "bg-[#25B990]/10 text-[#25B990]"
          : s === "Low Stock"
            ? "bg-[#F5B82E]/10 text-[#F5B82E]"
            : "bg-[#E85454]/10 text-[#E85454]"

      return (
        <span className={`text-[12px] px-2 py-1 rounded-full flex items-center gap-1 w-fit ${style}`}>
          {(s === "Low Stock" || s === "Overstock") && (
            <TriangleAlert className="w-3 h-3" />
          )}
          {s}
        </span>
      )
    },
  },

  {
    accessorKey: "expiryRisk",
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990]"
      >
        Expiry Risk %
        {{
          asc: <ArrowUpIcon className="w-3 h-3 text-[#25B990]" />,
          desc: <ArrowDownIcon className="w-3 h-3 text-[#25B990]" />,
        }[column.getIsSorted() as string] ?? (
            <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
          )}
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[12px] text-gray-600">
        {row.original.expiryRisk}%
      </span>
    ),
  },
]

// ==============================
// Component
// ==============================
export function WareHouseLevelEntryTable() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: warehouseData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Card className="border border-gray-200 rounded-[12px] bg-white shadow-none">
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-10">
          Warehouse-Level Inventory
        </h3>

        <div className="rounded-[12px] border border-gray-200 overflow-hidden">

          {/* ⭐ SAME PREMIUM SCROLLBAR AS PLATFORM TABLE */}
          <div className="overflow-x-auto rounded-b-[12px] thin-scrollbar">
            <div className="min-w-max">

              <Table className="w-full text-[12px]">
                <TableHeader>
                  {table.getHeaderGroups().map((group) => (
                    <TableRow
                      key={group.id}
                      className="bg-gray-50/60 backdrop-blur-sm h-12 border-b border-gray-200"
                    >
                      {group.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className="px-2 text-left align-middle whitespace-nowrap tracking-wide font-semibold text-gray-900"
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>

                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      className="h-[54px] border-b border-gray-200 hover:bg-white/60 transition-colors"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="px-2 py-[3px] whitespace-nowrap"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
