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
// Helper Functions
// ===========================
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
  val >= 1000 ? `₹${(val / 1000).toFixed(0)}K` : `₹${val}`

// ===========================
// FINAL Column Definition
// (MATCHING SalesPerformance Table UI)
// ===========================
const columns: ColumnDef<ProductLevelInventory>[] = [
  {
    accessorKey: "productName",
    header: "PRODUCT / SKU",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold text-gray-800">{row.original.productName}</span>
        <span className="text-[10px] text-gray-500">{row.original.sku}</span>
      </div>
    ),
  },

  {
    accessorKey: "category",
    header: "CATEGORY",
    cell: ({ row }) => (
      <span className="text-[10px] text-gray-600">{row.getValue("category")}</span>
    ),
  },

  {
    accessorKey: "currentStock",
    header: "CURRENT STOCK",
    cell: ({ row }) => (
      <span className="text-[10px] text-[#1F2937]">
        {row.getValue("currentStock")} units
      </span>
    ),
  },

  {
    accessorKey: "stockValue",
    header: "STOCK VALUE",
    cell: ({ row }) => (
      <span className="text-[10px] font-bold text-gray-900">
        {formatCurrency(row.getValue("stockValue"))}
      </span>
    ),
  },

  {
    accessorKey: "drr",
    header: "DRR",
    cell: ({ row }) => (
      <span className="text-[10px] text-[#25b990]">{row.getValue("drr")}/day</span>
    ),
  },

  {
    accessorKey: "doidays",
    header: "DOI (DAYS)",
    cell: ({ row }) => {
      const days = row.getValue("doidays") as number
      const { label, color } = getDOIStatus(days)

      return (
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#1F2937]">{days}d</span>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold",
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
    header: "STOCKOUTS (7D/30D)",
    cell: ({ row }) => {
      const seven = row.original.stockouts7d
      const thirty = row.original.stockouts30d
      const color = getStockoutColor(seven, thirty)

      return (
        <div className="flex items-center gap-1">
          <span className={cn("text-[10px]", color)}>{seven}</span>
          <span className="text-gray-400 text-[10px]">/</span>
          <span className={cn("text-[10px]", color)}>{thirty}</span>
        </div>
      )
    },
  },

  {
    accessorKey: "nearExpiry",
    header: "NEAR EXPIRY %",
    cell: ({ row }) => {
      const val = row.getValue("nearExpiry") as number
      const isHigh = val > 20

      return (
        <div className="flex items-center gap-1">
          {isHigh && <AlertTriangleIcon size={12} className="text-[#e85454]" />}
          <span className={cn("text-[10px]", isHigh ? "text-[#e85454]" : "text-[#1F2937]")}>
            {val}%
          </span>
        </div>
      )
    },
  },
]

// ===========================
// FINAL PRODUCT-LEVEL TABLE (MATCHING SALES TABLE UI)
// ===========================
export function ProductLevelTable() {
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
    <Card className="border-gray-200 border rounded-[12px] bg-white ">
      <CardContent className="p-6">

        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          Product-Level Inventory (Top SKUs by Stock)
        </h3>

        <div className="rounded-[12px] border border-gray-200 overflow-hidden  backdrop-blur-sm">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="bg-gray-50 border-b border-gray-200 h-12 "
                  >
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="px-2 py-3 text-left text-gray-500 font-bold text-[10px] tracking-wider uppercase whitespace-nowrap"
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            className="flex items-center gap-1 hover:text-[#25B990] transition-colors cursor-pointer select-none"
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </div>
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody className="[&_tr:last-child]:border-0">
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-b border-gray-200 hover:bg-white/60 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-2 py-3 align-middle whitespace-nowrap"
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
    </Card >
  )
}
