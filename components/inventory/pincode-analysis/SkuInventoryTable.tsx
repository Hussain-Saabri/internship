"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from "@tanstack/react-table";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { AlertTriangleIcon, ArrowUpDownIcon } from "@/lib/flaticons";

// ===========================
// Types
// ===========================
interface ProductLevelInventory {
  id: string;
  productName: string;
  sku: string;
  category: string;
  currentStock: number;
  stockValue: number;
  drr: number;
  doidays: number;
  stockouts7d: number;
  stockouts30d: number;
  nearExpiry: number;

  // MISSING FIELDS → Adding now
  stockDOI: number;
  stockDays: number;
  wtDiscPercent: number;
  growthPercent: number;
}


interface SkuInventoryTableProps {
  pincode: string;
}

// ===========================
// Helpers
// ===========================
const getStockoutColor = (a: number, b: number) =>
  a > 0 || b > 0 ? "text-[#e85454]" : "text-gray-800";

const getDOIStatus = (days: number) => {
  if (days <= 7) return { label: "Low", color: "bg-[#fff4d4] text-[#f5b82e]" };
  if (days > 30) return { label: "High", color: "bg-[#ffd4d4] text-[#e85454]" };
  return { label: "OK", color: "bg-[#d4f4dd] text-[#25b990]" };
};

const formatCurrency = (val: number) =>
  val >= 1000 ? `₹${(val / 1000).toFixed(0)}K` : `₹${val}`;

// ===========================
// SAMPLE DATA
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
// COLUMNS (WITH SORT ICON)
// ===========================
const columns: ColumnDef<ProductLevelInventory>[] = [
  {
    accessorKey: "productName",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        PRODUCT / SKU
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-xs font-medium text-gray-800">
          {row.original.productName}
        </span>
        <span className="text-[10px] text-gray-500">{row.original.sku}</span>
      </div>
    ),
  },

  {
    accessorKey: "category",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        CATEGORY
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs text-gray-600">{row.getValue("category")}</span>
    ),
  },

  {
    accessorKey: "currentStock",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        STOCK
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs text-gray-900">
        {row.getValue("currentStock")} units
      </span>
    ),
  },

  {
    accessorKey: "stockValue",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        VALUE
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs font-semibold text-gray-900">
        {formatCurrency(row.getValue("stockValue"))}
      </span>
    ),
  },

  {
    accessorKey: "drr",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        DRR
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-xs text-[#25b990]">
        {row.getValue("drr")}/day
      </span>
    ),
  },

  {
    accessorKey: "doidays",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        DOI
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => {
      const days = row.original.doidays;
      const { label, color } = getDOIStatus(days);

      return (
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-900">{days}d</span>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold",
              color
            )}
          >
            {label}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "stockouts",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        STOCKOUTS
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => {
      const a = row.original.stockouts7d;
      const b = row.original.stockouts30d;
      const color = getStockoutColor(a, b);

      return (
        <div className="flex items-center gap-1">
          <span className={cn("text-xs", color)}>{a}</span>
          <span className="text-gray-400 text-xs">/</span>
          <span className={cn("text-xs", color)}>{b}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "nearExpiry",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
        onClick={column.getToggleSortingHandler()}
      >
        EXPIRY %
        <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
      </div>
    ),
    cell: ({ row }) => {
      const v = row.original.nearExpiry;
      const isHigh = v > 20;

      return (
        <div className="flex items-center gap-1">
          {isHigh && (
            <AlertTriangleIcon size={12} className="text-[#e85454]" />
          )}
          <span className={cn("text-xs", isHigh ? "text-[#e85454]" : "text-gray-900")}>
            {v}%
          </span>
        </div>
      );
    },
  },
];

// ===========================
// COMPONENT (FINAL + CLEAN)
// ===========================
export function SkuInventoryTable({ pincode }: SkuInventoryTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: productData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className="border border-gray-200 rounded-[12px] bg-white shadow-none">
      <CardContent className="p-6">
        <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-6">
          SKU Inventory — Pincode {pincode}
        </h3>

        <div className="rounded-[12px] border border-gray-200 overflow-hidden ">
          {/* thin scrollbar */}
          <div className="overflow-x-auto thin-scrollbar rounded-b-[12px]">
            <div className="min-w-max">
              <Table className="w-full">
                <TableHeader>
                  {table.getHeaderGroups().map((group) => (
                    <TableRow
                      key={group.id}
                      className="bg-gray-50/60 backdrop-blur-sm border-b border-gray-200 h-10"
                    >
                      {group.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className="px-2 text-left whitespace-nowrap font-semibold text-gray-900 text-[11px]"
                        >
                          <div
                            className="flex items-center gap-1 cursor-pointer hover:text-[#25B990]"
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            <ArrowUpDownIcon className="w-3 h-3 text-gray-400" />
                          </div>
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>

                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      className="border-b border-gray-200 hover:bg-white/60 transition-colors"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="px-2 py-3 whitespace-nowrap text-xs text-gray-700"
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
  );
}
