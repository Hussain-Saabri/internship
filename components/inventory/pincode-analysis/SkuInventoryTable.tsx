"use client"

import { useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
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

import { cn } from "@/lib/utils"
import { AlertTriangleIcon } from "@/lib/flaticons"

// ===========================
// Types
// ===========================
interface ProductLevelInventory {
  id: string
  productName: string
  sku: string
  category: string
  currentStock: number
  stockValue: number
  drr: number
  doidays: number
  stockouts7d: number
  stockouts30d: number
  nearExpiry: number
  stockDOI: number
  stockDays: number
  wtDiscPercent: number
  growthPercent: number
}

interface SkuInventoryTableProps {
  pincode: string
}

// ===========================
// Helper Functions
// ===========================
const getStockoutColor = (a: number, b: number) =>
  a > 0 || b > 0 ? "text-[#e85454]" : "text-gray-800"

const getDOIStatus = (days: number) => {
  if (days <= 7) return { label: "Low", color: "bg-[#fff4d4] text-[#f5b82e]" }
  if (days > 30) return { label: "High", color: "bg-[#ffd4d4] text-[#e85454]" }
  return { label: "OK", color: "bg-[#d4f4dd] text-[#25b990]" }
}

const formatCurrency = (val: number) =>
  val >= 1000 ? `\u20B9${(val / 1000).toFixed(0)}K` : `\u20B9${val}`

// ===========================
// Inventory Data
// ===========================
const productData: ProductLevelInventory[] = [
  {
    id: "1",
    productName: "Tata Salt 1kg",
    sku: "SKU-001",
    category: "Groceries",
    currentStock: 700,
    stockValue: 15600,
    drr: 38,
    doidays: 10,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 5,
    stockDOI: 700,
    stockDays: 18,
    wtDiscPercent: 8.5,
    growthPercent: 12,
  },
  {
    id: "2",
    productName: "Amul Butter 500g",
    sku: "SKU-002",
    category: "Dairy",
    currentStock: 450,
    stockValue: 142,
    drr: 32,
    doidays: 15,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 22,
    stockDOI: 450,
    stockDays: 14,
    wtDiscPercent: 12.2,
    growthPercent: 8,
  },
  {
    id: "3",
    productName: "Maggi 2-Min Noodles",
    sku: "SKU-003",
    category: "Instant Food",
    currentStock: 850,
    stockValue: 128,
    drr: 42,
    doidays: 20,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 5,
    stockDOI: 850,
    stockDays: 22,
    wtDiscPercent: 6.8,
    growthPercent: -3,
  },
  {
    id: "4",
    productName: "Maggi 2-Min Noodles",
    sku: "SKU-004",
    category: "Instant Food",
    currentStock: 320,
    stockValue: 128,
    drr: 42,
    doidays: 60,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 25,
    stockDOI: 850,
    stockDays: 22,
    wtDiscPercent: 6.8,
    growthPercent: -3,
  },
  {
    id: "5",
    productName: "Tata Salt 1kg",
    sku: "SKU-001",
    category: "Groceries",
    currentStock: 700,
    stockValue: 15600,
    drr: 38,
    doidays: 10,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 5,
    stockDOI: 700,
    stockDays: 18,
    wtDiscPercent: 8.5,
    growthPercent: 12,
  },
  {
    id: "6",
    productName: "Tata Salt 1kg",
    sku: "SKU-001",
    category: "Groceries",
    currentStock: 700,
    stockValue: 15600,
    drr: 38,
    doidays: 10,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 5,
    stockDOI: 700,
    stockDays: 18,
    wtDiscPercent: 8.5,
    growthPercent: 12,
  },
  {
    id: "7",
    productName: "Tata Salt 1kg",
    sku: "SKU-001",
    category: "Groceries",
    currentStock: 700,
    stockValue: 15600,
    drr: 38,
    doidays: 10,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 5,
    stockDOI: 700,
    stockDays: 18,
    wtDiscPercent: 8.5,
    growthPercent: 12,
  },
  {
    id: "8",
    productName: "Tata Salt 1kg",
    sku: "SKU-001",
    category: "Groceries",
    currentStock: 700,
    stockValue: 15600,
    drr: 38,
    doidays: 10,
    stockouts7d: 0,
    stockouts30d: 2,
    nearExpiry: 5,
    stockDOI: 700,
    stockDays: 18,
    wtDiscPercent: 8.5,
    growthPercent: 12,
  },
]

// ===========================
// Column Definition
// ===========================
const columns: ColumnDef<ProductLevelInventory>[] = [
  {
    accessorKey: "productName",
    header: "Product / SKU",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-xs font-normal text-gray-800">{row.original.productName}</span>
        <span className="text-[10px] text-gray-500">{row.original.sku}</span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="text-xs text-[#6B7280]">{row.getValue("category")}</span>
    ),
  },
  {
    accessorKey: "currentStock",
    header: "Stock",
    cell: ({ row }) => (
      <span className="text-xs text-[#1F2937]">
        {row.getValue("currentStock")} units
      </span>
    ),
  },
  {
    accessorKey: "stockValue",
    header: "Value",
    cell: ({ row }) => (
      <span className="text-xs text-[#1F2937]">
        {formatCurrency(row.getValue("stockValue"))}
      </span>
    ),
  },
  {
    accessorKey: "drr",
    header: "DRR",
    cell: ({ row }) => (
      <span className="text-xs text-[#25b990]">{row.getValue("drr")}/day</span>
    ),
  },
  {
    accessorKey: "doidays",
    header: "DOI",
    cell: ({ row }) => {
      const days = row.getValue("doidays") as number
      const { label, color } = getDOIStatus(days)

      return (
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#1F2937]">{days}d</span>
          <span
            className={cn(
              "inline-flex items-center rounded-[10px] px-1.5 py-0.5 text-[8px] font-bold",
              color
            )}
          >
            {label}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "stockouts",
    header: "Warehouse",
    cell: ({ row }) => {
      const seven = row.original.stockouts7d
      const thirty = row.original.stockouts30d
      const color = getStockoutColor(seven, thirty)

      return (
        <div className="flex items-center gap-1">
          <span className={cn("text-xs", color)}>{seven}</span>
          <span className="text-gray-400">/</span>
          <span className={cn("text-xs", color)}>{thirty}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "nearExpiry",
    header: "Expiry %",
    cell: ({ row }) => {
      const val = row.getValue("nearExpiry") as number
      const isHigh = val > 20

      return (
        <div className="flex items-center gap-1">
          {isHigh && <AlertTriangleIcon size={12} className="text-[#e85454]" />}
          <span className={cn("text-xs", isHigh ? "text-[#e85454]" : "text-[#1F2937]")}>
            {val}%
          </span>
        </div>
      )
    },
  },
]

// ===========================
// Component
// ===========================
export function SkuInventoryTable({ pincode }: SkuInventoryTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    data: productData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Card className="border-white/50 rounded-[20px] flex-grow w-full bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-md">
      <CardContent className="p-6">

        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          SKU-Level Inventory for {pincode}
        </h3>

        <div className="rounded-xl border border-white/40 overflow-hidden bg-white/40 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <Table className="w-full text-sm">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="bg-white/50 border-b border-white/40 h-12 hover:bg-white/60"
                  >
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="px-4 py-3 text-left text-gray-500 font-bold text-[10px] tracking-wider uppercase whitespace-nowrap align-middle"
                      >
                        {header.isPlaceholder ? null : (
                          <button
                            className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}

                            {/* Sort Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="m21 16-4 4-4-4"></path>
                              <path d="M17 20V4"></path>
                              <path d="m3 8 4-4 4 4"></path>
                              <path d="M7 4v16"></path>
                            </svg>
                          </button>
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
                    className="border-b border-white/40 hover:bg-white/60 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-4 py-3 align-middle whitespace-nowrap text-xs text-gray-700"
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
      </CardContent>
    </Card>
  )
}