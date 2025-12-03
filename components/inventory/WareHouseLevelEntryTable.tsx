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

import { ArrowUpDown, TriangleAlert } from "lucide-react"

import { cn } from "@/lib/utils"


// =====================================================
// Types
// =====================================================
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


// =====================================================
// Data (Exact same as screenshot)
// =====================================================
const warehouseData: WarehouseItem[] = [
  {
    id: "1",
    warehouse: "Mumbai Central WH",
    location: "Mumbai",
    stockUnits: 12500,
    stockValue: 1880000,
    drr: 850,
    doi: 15,
    status: "Healthy",
    expiryRisk: 8.5,
  },
  {
    id: "2",
    warehouse: "Delhi North WH",
    location: "Delhi",
    stockUnits: 8900,
    stockValue: 1330000,
    drr: 1250,
    doi: 7,
    status: "Healthy",
    expiryRisk: 12.3,
  },
  {
    id: "3",
    warehouse: "Bangalore East WH",
    location: "Bangalore",
    stockUnits: 15200,
    stockValue: 2280000,
    drr: 680,
    doi: 22,
    status: "Healthy",
    expiryRisk: 5.2,
  },
  {
    id: "4",
    warehouse: "Hyderabad WH",
    location: "Hyderabad",
    stockUnits: 6800,
    stockValue: 1020000,
    drr: 420,
    doi: 16,
    status: "Healthy",
    expiryRisk: 9.8,
  },
  {
    id: "5",
    warehouse: "Pune West WH",
    location: "Pune",
    stockUnits: 3200,
    stockValue: 480000,
    drr: 520,
    doi: 6,
    status: "Low Stock",
    expiryRisk: 18.5,
  },
  {
    id: "6",
    warehouse: "Chennai South WH",
    location: "Chennai",
    stockUnits: 22500,
    stockValue: 3380000,
    drr: 350,
    doi: 64,
    status: "Overstock",
    expiryRisk: 22.1,
  },
]


// =====================================================
// Helper
// =====================================================
const formatCurrency = (value: number): string => {
  return value >= 1_000_000
    ? `₹${(value / 1_000_000).toFixed(2)}M`
    : value >= 1000
      ? `₹${(value / 1000).toFixed(1)}K`
      : `₹${value}`
}


// =====================================================
// Columns (EXACT FIGMA VERSION)
// =====================================================
const columns: ColumnDef<WarehouseItem>[] = [
  {
    accessorKey: "warehouse",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center pr-2 hover:text-[#25B990]"
      >
        Warehouse
        <ArrowUpDown className="w-3 h-3 text-[#9CA3AF]" />
      </button>
    ),
    cell: ({ row }) => (
      <div>
        <p className="text-[10px] text-[#1F2937]">{row.original.warehouse}</p>
        <p className="text-[10px] text-[#6B7280]">{row.original.location}</p>
      </div>
    ),
  },

  {
    accessorKey: "stockUnits",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 pr-4 hover:text-[#25B990]"
      >
        Stock Units
        <ArrowUpDown className="w-3 h-3 text-[#9CA3AF]" />
      </button>
    ),
    cell: ({ row }) => (
      <span className="text-[10px] text-[#1F2937]">
        {row.original.stockUnits.toLocaleString()}
      </span>
    ),
  },

  {
    accessorKey: "stockValue",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 pr-4 hover:text-[#25B990]"
      >
        Stock Value (₹)
        <ArrowUpDown className="w-3 h-3 text-[#9CA3AF]" />
      </button>
    ),
    cell: ({ row }) => (
      <span className="text-[10px] text-[#1F2937]">
        {formatCurrency(row.original.stockValue)}
      </span>
    ),
  },

  {
    accessorKey: "drr",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 pr-4 hover:text-[#25B990]"
      >
        DRR (Units/day)
        <ArrowUpDown className="w-3 h-3 text-[#9CA3AF]" />
      </button>
    ),
    cell: ({ row }) => (
      <span className="text-[10px] text-[#25B990]">{row.original.drr}</span>
    ),
  },

  {
    accessorKey: "doi",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 pr-4 hover:text-[#25B990]"
      >
        DOI (days)
        <ArrowUpDown className="w-3 h-3 text-[#9CA3AF]" />
      </button>
    ),
    cell: ({ row }) => {
      const doi = row.original.doi
      const color =
        doi > 15 ? "#25B990" : doi > 10 ? "#F5B82E" : "#E85454"

      return <span className="text-[10px]" style={{ color }}>{doi}d</span>
    },
  },

  {
    accessorKey: "status",
    header: "Stock Status",
    cell: ({ row }) => {
      const status = row.original.status

      const badgeStyle =
        status === "Healthy"
          ? "bg-[#25B990]/10 text-[#25B990]"
          : status === "Low Stock"
            ? "bg-[#F5B82E]/10 text-[#F5B82E]"
            : "bg-[#E85454]/10 text-[#E85454]"

      return (
        <span className={`text-[10px] px-1 rounded-[10px] flex items-center gap-1 w-fit ${badgeStyle}`}>
          {status === "Low Stock" || status === "Overstock" ? (
            <TriangleAlert className="w-2.5 h-2.5" />
          ) : null}
          {status}
        </span>
      )
    },
  },

  {
    accessorKey: "expiryRisk",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 pr-4 hover:text-[#25B990]"
      >
        Expiry Risk %
        <ArrowUpDown className="w-3 h-3 text-[#9CA3AF]" />
      </button>
    ),
    cell: ({ row }) => (
      <span className="text-[10px] text-[#6B7280]">{row.original.expiryRisk}%</span>
    ),
  },
]


// =====================================================
// Component (FINAL EXACT FIGMA)
// =====================================================
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
    <Card className="border border-gray-200 rounded-[12px] bg-white  ">
      <CardContent className="p-4">
        <h3 className="text-sm font-gray-800   mb-10">
          Warehouse-Level Inventory
        </h3>

        <div className="rounded-[12px] border border-gray-200  backdrop-blur-sm">
          <div className=" rounded-[12px] overflow-hidden backdrop-blur-sm">
            <Table className="w-full text-[10px]">
    <TableHeader>
      {table.getHeaderGroups().map((group) => (
        <TableRow
          key={group.id}
          className="bg-gray-100 h-12 border-b border-gray-200"
        >
          {group.headers.map((header) => (
            <TableHead
              key={header.id}
              className="px-1 text-left align-middle font-medium whitespace-nowrap text-[#4B5563] text-[10px]"
            >
              {flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>

              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="h-[54px] border-b border-gray-200 hover:bg-white/60 transition-colors cursor-pointer overflow-hidden"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-1 py-[3px] align-middle whitespace-nowrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
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
