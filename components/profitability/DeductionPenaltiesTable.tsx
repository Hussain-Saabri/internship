"use client"

import { useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
  SortingState,
} from "@tanstack/react-table"

import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { ArrowUpDownIcon } from "@/lib/flaticons"

// -----------------------------
// Data Interface & Sample Data
// -----------------------------
interface DeductionData {
  platform: string
  returns: string
  penalties: string
  otherDeductions: string
  totalDeductions: string
  deductionPercent: string
  netReceivable: string
}

const data: DeductionData[] = [
  {
    platform: "Blinkit",
    returns: "₹125K",
    penalties: "₹48K",
    otherDeductions: "₹22K",
    totalDeductions: "₹195K",
    deductionPercent: "4.9%",
    netReceivable: "₹3.81M",
  },
  {
    platform: "Zepto",
    returns: "₹98K",
    penalties: "₹35K",
    otherDeductions: "₹18K",
    totalDeductions: "₹151K",
    deductionPercent: "5%",
    netReceivable: "₹2.85M",
  },
  {
    platform: "Instamart",
    returns: "₹86K",
    penalties: "₹42K",
    otherDeductions: "₹15K",
    totalDeductions: "₹143K",
    deductionPercent: "5.7%",
    netReceivable: "₹2.36M",
  },
]

// -----------------------------
// Columns
// -----------------------------
const columns: ColumnDef<DeductionData>[] = [
  {
    accessorKey: "platform",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>PLATFORM</span>
        <ArrowUpDownIcon
          className={cn(
            "w-3 h-3 transition-transform text-gray-400",
            column.getIsSorted() === "asc" && "rotate-180",
            column.getIsSorted() === "desc" && "rotate-0"
          )}
        />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs font-semibold text-gray-700">
        {row.original.platform}
      </span>
    ),
  },

  {
    accessorKey: "returns",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>RETURNS (₹)</span>
        <ArrowUpDownIcon
          className={cn(
            "w-3 h-3 transition-transform text-gray-400",
            column.getIsSorted() === "asc" && "rotate-180",
            column.getIsSorted() === "desc" && "rotate-0"
          )}
        />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs font-medium text-[#EF4444] text-ce">
        {row.original.returns}
      </span>
    ),
  },

  {
    accessorKey: "penalties",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>PENALTIES (₹)</span>
        <ArrowUpDownIcon
          className={cn(
            "w-3 h-3 transition-transform text-gray-400",
            column.getIsSorted() === "asc" && "rotate-180",
            column.getIsSorted() === "desc" && "rotate-0"
          )}
        />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs font-medium text-[#EF4444]">
        {row.original.penalties}
      </span>
    ),
  },

  {
    accessorKey: "otherDeductions",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>OTHER DEDUCTIONS (₹)</span>
        <ArrowUpDownIcon
          className={cn(
            "w-3 h-3 transition-transform text-gray-400",
            column.getIsSorted() === "asc" && "rotate-180",
            column.getIsSorted() === "desc" && "rotate-0"
          )}
        />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs font-medium text-[#F59E0B]">
        {row.original.otherDeductions}
      </span>
    ),
  },

  {
    accessorKey: "totalDeductions",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>TOTAL DEDUCTIONS</span>
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs font-bold text-[#EF4444]">
        {row.original.totalDeductions}
      </span>
    ),
  },

  {
    accessorKey: "deductionPercent",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>DEDUCTION %</span>
      </div>
    ),
    cell: ({ row }) => (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-100">
        {row.original.deductionPercent}
      </span>
    ),
  },

  {
    accessorKey: "netReceivable",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>NET RECEIVABLE (₹)</span>
        <ArrowUpDownIcon
          className={cn(
            "w-3 h-3 transition-transform text-gray-400",
            column.getIsSorted() === "asc" && "rotate-180",
            column.getIsSorted() === "desc" && "rotate-0"
          )}
        />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs font-bold text-[#10B981]">
        {row.original.netReceivable}
      </span>
    ),
  },
]


// -----------------------------
// Component
// -----------------------------
export function DeductionPenaltiesTable() {
  const [sorting, setSorting] = useState<SortingState>([])


  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })


  return (
    <Card className="rounded-[12px] border border-gray-200 bg-white shadow-none ">
      <CardContent className="p-6">
        {/* Header */}
        <h4 className="text-sm font-semibold text-gray-700 tracking-wide mb-6">
          Deductions & Penalties by Platform
        </h4>

        {/* Table */}
        <div className="rounded-[12px] border border-gray-200 overflow-hidden bg-white/40 backdrop-blur-sm">
          <div >
            <Table className="w-full">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="bg-white/50 h-10 hover:bg-white/60 "
                  >
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="px-4 py-3 text-left pr-1 text-gray-900 font-semibold text-[10px] tracking-wider bg-gray-50 whitespace-nowrap "
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody className="[&_tr:last-child]:border-0">
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className=" hover:bg-white/60 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-4 py-4 align-middle whitespace-nowrap text-center"
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
