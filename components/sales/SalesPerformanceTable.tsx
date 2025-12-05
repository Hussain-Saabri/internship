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
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TrendingUpIcon,
  TrendingDownIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface ProductPerformance {
  id: string;
  productName: string;
  sku: string;
  category: string;
  platform: string;
  salesValue: number;
  orders: number;
  marginPercent: number;
  returnsPercent: number;
  stockDOI: number;
  stockDays: number;
  wtDiscPercent: number;
  growthPercent: number;
}

interface CategoryPerformance {
  id: string;
  category: string;
  subcategory: string;
  platform: string;
  salesValue: number;
  orders: number;
  marginPercent: number;
  returnsPercent: number;
  activeSKUs: number;
  osaPercent: number;
  osaStatus: "Good" | "Fair" | "Poor";
  wtDiscPercent: number;
  growthPercent: number;
}

// Props Interface
interface SalesPerformanceTableProps {
  showActions?: boolean;
  onRowAction?: (row: ProductPerformance | CategoryPerformance) => void;
  actionButtonLabel?: string;
}

// Sample Data
const productData: ProductPerformance[] = [
  {
    id: "1",
    productName: "Tata Salt 1kg",
    sku: "SKU-001",
    category: "Groceries",
    platform: "blinkit",
    salesValue: 45000,
    orders: 156,
    marginPercent: 38,
    returnsPercent: 1.9,
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
    platform: "zepto",
    salesValue: 38000,
    orders: 142,
    marginPercent: 32,
    returnsPercent: 2.3,
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
    platform: "instamart",
    salesValue: 35000,
    orders: 128,
    marginPercent: 42,
    returnsPercent: 1.2,
    stockDOI: 850,
    stockDays: 22,
    wtDiscPercent: 6.8,
    growthPercent: -3,
  },
  {
    id: "4",
    productName: "Parle-G Biscuits 1kg",
    sku: "SKU-004",
    category: "Snacks",
    platform: "blinkit",
    salesValue: 32000,
    orders: 118,
    marginPercent: 28,
    returnsPercent: 3.1,
    stockDOI: 320,
    stockDays: 8,
    wtDiscPercent: 15.5,
    growthPercent: 18,
  },
  {
    id: "5",
    productName: "Fortune Oil 1L",
    sku: "SKU-005",
    category: "Cooking Essentials",
    platform: "zepto",
    salesValue: 28000,
    orders: 95,
    marginPercent: 25,
    returnsPercent: 1.5,
    stockDOI: 580,
    stockDays: 16,
    wtDiscPercent: 9.2,
    growthPercent: 5,
  },
  {
    id: "6",
    productName: "Surf Excel Liquid 2L",
    sku: "SKU-006",
    category: "Home Care",
    platform: "instamart",
    salesValue: 26000,
    orders: 88,
    marginPercent: 35,
    returnsPercent: 2.8,
    stockDOI: 210,
    stockDays: 12,
    wtDiscPercent: 11.5,
    growthPercent: 15,
  },
  {
    id: "7",
    productName: "Colgate MaxFresh 150g",
    sku: "SKU-007",
    category: "Personal Care",
    platform: "blinkit",
    salesValue: 24000,
    orders: 102,
    marginPercent: 45,
    returnsPercent: 0.8,
    stockDOI: 640,
    stockDays: 20,
    wtDiscPercent: 7.3,
    growthPercent: 22,
  },
  {
    id: "8",
    productName: "Britannia Bread",
    sku: "SKU-008",
    category: "Bakery",
    platform: "zepto",
    salesValue: 22000,
    orders: 156,
    marginPercent: 18,
    returnsPercent: 4.2,
    stockDOI: 180,
    stockDays: 3,
    wtDiscPercent: 5.5,
    growthPercent: -8,
  },
  {
    id: "9",
    productName: "Red Bull Energy Drink",
    sku: "SKU-009",
    category: "Beverages",
    platform: "instamart",
    salesValue: 20000,
    orders: 78,
    marginPercent: 52,
    returnsPercent: 1.1,
    stockDOI: 290,
    stockDays: 10,
    wtDiscPercent: 8.9,
    growthPercent: 28,
  },
];

const categoryData: CategoryPerformance[] = [
  {
    id: "1",
    category: "Groceries",
    subcategory: "Staples",
    platform: "blinkit",
    salesValue: 285000,
    orders: 1240,
    marginPercent: 32,
    returnsPercent: 2.1,
    activeSKUs: 45,
    osaPercent: 94,
    osaStatus: "Good",
    wtDiscPercent: 8.5,
    growthPercent: 15,
  },
  {
    id: "2",
    category: "Dairy",
    subcategory: "Milk & Products",
    platform: "zepto",
    salesValue: 245000,
    orders: 1856,
    marginPercent: 28,
    returnsPercent: 3.8,
    activeSKUs: 32,
    osaPercent: 88,
    osaStatus: "Fair",
    wtDiscPercent: 12.2,
    growthPercent: 8,
  },
  {
    id: "3",
    category: "Snacks",
    subcategory: "Biscuits",
    platform: "instamart",
    salesValue: 198000,
    orders: 945,
    marginPercent: 38,
    returnsPercent: 2.5,
    activeSKUs: 68,
    osaPercent: 92,
    osaStatus: "Good",
    wtDiscPercent: 15.5,
    growthPercent: 22,
  },
  {
    id: "4",
    category: "Beverages",
    subcategory: "Soft Drinks",
    platform: "blinkit",
    salesValue: 176000,
    orders: 782,
    marginPercent: 42,
    returnsPercent: 1.8,
    activeSKUs: 28,
    osaPercent: 96,
    osaStatus: "Good",
    wtDiscPercent: 9.8,
    growthPercent: 18,
  },
  {
    id: "5",
    category: "Personal Care",
    subcategory: "Oral Care",
    platform: "zepto",
    salesValue: 164000,
    orders: 623,
    marginPercent: 45,
    returnsPercent: 1.2,
    activeSKUs: 34,
    osaPercent: 91,
    osaStatus: "Good",
    wtDiscPercent: 7.3,
    growthPercent: 28,
  },
  {
    id: "6",
    category: "Home Care",
    subcategory: "Detergents",
    platform: "instamart",
    salesValue: 152000,
    orders: 567,
    marginPercent: 35,
    returnsPercent: 2.9,
    activeSKUs: 25,
    osaPercent: 89,
    osaStatus: "Fair",
    wtDiscPercent: 11.5,
    growthPercent: 12,
  },
  {
    id: "7",
    category: "Instant Food",
    subcategory: "Noodles",
    platform: "blinkit",
    salesValue: 138000,
    orders: 892,
    marginPercent: 40,
    returnsPercent: 1.5,
    activeSKUs: 18,
    osaPercent: 95,
    osaStatus: "Good",
    wtDiscPercent: 6.8,
    growthPercent: -5,
  },
  {
    id: "8",
    category: "Cooking Essentials",
    subcategory: "Oils",
    platform: "zepto",
    salesValue: 125000,
    orders: 445,
    marginPercent: 25,
    returnsPercent: 1.8,
    activeSKUs: 22,
    osaPercent: 93,
    osaStatus: "Good",
    wtDiscPercent: 9.2,
    growthPercent: 10,
  },
  {
    id: "9",
    category: "Bakery",
    subcategory: "Bread",
    platform: "instamart",
    salesValue: 112000,
    orders: 1234,
    marginPercent: 18,
    returnsPercent: 4.5,
    activeSKUs: 12,
    osaPercent: 82,
    osaStatus: "Fair",
    wtDiscPercent: 5.5,
    growthPercent: -12,
  },
  {
    id: "10",
    category: "Baby Care",
    subcategory: "Food & Nutrition",
    platform: "blinkit",
    salesValue: 98000,
    orders: 356,
    marginPercent: 38,
    returnsPercent: 2.2,
    activeSKUs: 28,
    osaPercent: 87,
    osaStatus: "Fair",
    wtDiscPercent: 10.2,
    growthPercent: 16,
  },
];

// Helper functions for color coding
const getMarginColor = (margin: number): string => {
  if (margin >= 40) return "text-[#25b990]"; // Green
  if (margin >= 30) return "text-[#f5b82e]"; // Yellow
  if (margin >= 20) return "text-[#ff9966]"; // Orange
  return "text-[#e85454]"; // Red
};

const getStockBadgeColor = (days: number): string => {
  if (days > 15) return "bg-[#d4f4dd] text-[#25b990]"; // Green
  if (days > 10) return "bg-[#fff4d4] text-[#f5b82e]"; // Yellow
  if (days > 5) return "bg-[#ffe4d4] text-[#ff9966]"; // Orange
  return "bg-[#ffd4d4] text-[#e85454]"; // Red
};

const formatCurrency = (value: number): string => {
  if (value >= 1000) {
    return `₹${(value / 1000).toFixed(0)}K`;
  }
  return `₹${value}`;
};

const getOSAStatusColor = (status: "Good" | "Fair" | "Poor"): string => {
  if (status === "Good") return "bg-[#d4f4dd] text-[#25b990]"; // Green
  if (status === "Fair") return "bg-[#fff4d4] text-[#f5b82e]"; // Yellow
  return "bg-[#ffd4d4] text-[#e85454]"; // Red
};

// Column Definitions
const columns: ColumnDef<ProductPerformance>[] = [
  {
    accessorKey: "productName",
    header: "PRODUCT / SKU",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-[12px] font-bold text-gray-900">
          {row.original.productName}
        </span>
        <span className="text-[10px] text-gray-500">
          {row.original.sku}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
    cell: ({ row }) => (
      <span className="text-[12px] font-medium text-gray-70 ">{row.getValue("category")}</span>
    ),
  },
  {
    accessorKey: "salesValue",
    header: "SALES VALUE",
    cell: ({ row }) => (
      <span className="text-[12px] font-bold text-gray-900">
        {formatCurrency(row.getValue("salesValue"))}
      </span>
    ),
  },
  {
    accessorKey: "orders",
    header: "ORDERS",
    cell: ({ row }) => (
      <span className="text-[12px] font-medium text-gray-700">
        {row.getValue("orders")}
      </span>
    ),
  },
  {
    accessorKey: "marginPercent",
    header: "MARGIN %",
    cell: ({ row }) => {
      const margin = row.getValue("marginPercent") as number;
      return (
        <span className={cn("text-[12px] font-bold", getMarginColor(margin))}>
          {margin}%
        </span>
      );
    },
  },
  {
    accessorKey: "returnsPercent",
    header: "RETURNS %",
    cell: ({ row }) => {
      const returns = row.getValue("returnsPercent") as number;
      const isHigh = returns > 3;
      return (
        <span
          className={cn(
            "text-[12px] font-medium",
            isHigh ? "text-[#e85454]" : "text-gray-700"
          )}
        >
          {returns}%
        </span>
      );
    },
  },
  {
    accessorKey: "stockDOI",
    header: "STOCK (DOI)",
    cell: ({ row }) => {
      const days = row.original.stockDays;
      return (
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-gray-700">
            {row.getValue("stockDOI")}
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-bold",
              getStockBadgeColor(days)
            )}
          >
            {days}d
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "wtDiscPercent",
    header: "WT. DISC %",
    cell: ({ row }) => (
      <span className="text-[12px] text-gray-700">
        {row.getValue("wtDiscPercent")}%
      </span>
    ),
  },
  {
    accessorKey: "growthPercent",
    header: "GROWTH %",
    cell: ({ row }) => {
      const growth = row.getValue("growthPercent") as number;
      const isPositive = growth >= 0;
      return (
        <div className="flex items-center gap-1.5">
          {isPositive ? (
            <TrendingUpIcon
              className="text-[#25b990]"
              size={14}
              strokeWidth={2.5}
            />
          ) : (
            <TrendingDownIcon
              className="text-[#e85454]"
              size={14}
              strokeWidth={2.5}
            />
          )}
          <span
            className={cn(
              "text-[12px] font-bold",
              isPositive ? "text-[#25b990]" : "text-[#e85454]"
            )}
          >
            {Math.abs(growth)}%
          </span>
        </div>
      );
    },
  },
];

// Category Column Definitions
const categoryColumns: ColumnDef<CategoryPerformance>[] = [
  {
    accessorKey: "category",
    header: "CATEGORY",
    cell: ({ row }) => (
      <span className="text-[12px] font-semibold text-gray-800">
        {row.getValue("category")}
      </span>
    ),
  },
  {
    accessorKey: "subcategory",
    header: "SUBCATEGORY",
    cell: ({ row }) => (
      <span className="text-[12px] font-medium text-gray-700">
        {row.getValue("subcategory")}
      </span>
    ),
  },
  {
    accessorKey: "salesValue",
    header: "SALES VALUE",
    cell: ({ row }) => (
      <span className="text-[12px] font-bold text-gray-900">
        {formatCurrency(row.getValue("salesValue"))}
      </span>
    ),
  },
  {
    accessorKey: "orders",
    header: "ORDERS",
    cell: ({ row }) => (
      <span className="text-[12px] font-medium text-gray-700">
        {row.getValue("orders")}
      </span>
    ),
  },
  {
    accessorKey: "marginPercent",
    header: "MARGIN %",
    cell: ({ row }) => {
      const margin = row.getValue("marginPercent") as number;
      return (
        <span className={cn("text-[12px] font-bold", getMarginColor(margin))}>
          {margin}%
        </span>
      );
    },
  },
  {
    accessorKey: "returnsPercent",
    header: "RETURNS %",
    cell: ({ row }) => {
      const returns = row.getValue("returnsPercent") as number;
      const isHigh = returns > 3;
      return (
        <span
          className={cn(
            "text-[12px] font-medium",
            isHigh ? "text-[#e85454]" : "text-gray-700"
          )}
        >
          {returns}%
        </span>
      );
    },
  },
  {
    accessorKey: "activeSKUs",
    header: "ACTIVE SKUS",
    cell: ({ row }) => (
      <span className="text-[12px] text-gray-700">
        {row.getValue("activeSKUs")}
      </span>
    ),
  },
  {
    accessorKey: "osaPercent",
    header: "OSA %",
    cell: ({ row }) => (
      <span className="text-[12px] font-medium text-gray-700">
        {row.getValue("osaPercent")}%
      </span>
    ),
  },
  {
    accessorKey: "osaStatus",
    header: "OSA STATUS",
    cell: ({ row }) => {
      const status = row.getValue("osaStatus") as "Good" | "Fair" | "Poor";
      return (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-bold",
            getOSAStatusColor(status)
          )}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "wtDiscPercent",
    header: "WT. DISC %",
    cell: ({ row }) => (
      <span className="text-[12px] text-gray-700">
        {row.getValue("wtDiscPercent")}%
      </span>
    ),
  },
  {
    accessorKey: "growthPercent",
    header: "GROWTH %",
    cell: ({ row }) => {
      const growth = row.getValue("growthPercent") as number;
      const isPositive = growth >= 0;
      return (
        <div className="flex items-center gap-1.5">
          {isPositive ? (
            <TrendingUpIcon
              className="text-[#25b990]"
              size={14}
              strokeWidth={2.5}
            />
          ) : (
            <TrendingDownIcon
              className="text-[#e85454]"
              size={14}
              strokeWidth={2.5}
            />
          )}

          <span
            className={cn(
              "text-[12px] font-bold",
              isPositive ? "text-[#25b990]" : "text-[#e85454]"
            )}
          >
            {Math.abs(growth)}%
          </span>
        </div>
      );
    },
  },
];


export function SalesPerformanceTable({
  showActions = false,
  onRowAction,
  actionButtonLabel = "View Details",
}: SalesPerformanceTableProps = {}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [categorySorting, setCategorySorting] = useState<SortingState>([]);

  // Conditionally add action column to product columns
  const productColumnsWithActions: ColumnDef<ProductPerformance>[] =
    showActions && onRowAction
      ? [
        ...columns,
        {
          id: "actions",
          header: () => (
    <span className="text-[12px] left-2 relative block">ACTION</span>
  ),
          cell: ({ row }) => (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-[10px] h-7 right-2 relative "
              onClick={(e) => {
                e.stopPropagation();
                onRowAction(row.original);
              }}
            >
              {actionButtonLabel}
            </Button>
          ),
        },
      ]
      : columns;

  // Conditionally add action column to category columns
  const categoryColumnsWithActions: ColumnDef<CategoryPerformance>[] =
    showActions && onRowAction
      ? [
        ...categoryColumns,
         {
          id: "actions",
          header: () => (
    <span className="text-[12px] left-2 relative block">ACTION</span>
  ),
          cell: ({ row }) => (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-[10px] h-7 right-2 relative "
              onClick={(e) => {
                e.stopPropagation();
                onRowAction(row.original);
              }}
            >
              {actionButtonLabel}
            </Button>
          ),
        },
      ]
      : categoryColumns;

  const table = useReactTable({
    data: productData,
    columns: productColumnsWithActions,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const categoryTable = useReactTable({
    data: categoryData,
    columns: categoryColumnsWithActions,
    state: {
      sorting: categorySorting,
    },
    onSortingChange: setCategorySorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className="rounded-[12px] flex-grow w-full  relative overflow-hidden shadow-none">
      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900 tracking-wide  mb-6">
          Sales Performance Details
        </h3>

        {/* Tabs */}
        <Tabs defaultValue="product" className="w-full">
          <TabsList className="bg-gray-50 hover:bg-gray-25 p-1 rounded-xl mb-6 w-auto inline-flex border border-gray-200">
            <TabsTrigger
              value="product"
              className="
                data-[state=active]:bg-white data-[state=active]:text-gray-800 data-[state=active]:shadow-sm
                text-gray-800 rounded-lg px-4 py-2 text-[12px] font-semibold transition-all 
              "
            >
              Product Performance
            </TabsTrigger>
            <TabsTrigger
              value="category"
              className="
                data-[state=active]:bg-white data-[state=active]:text-gray-800 data-[state=active]:shadow-sm
                text-gray-500 rounded-lg px-4 py-2 text-[10px] font-semibold transition-all
              "
            >
              Category Performance
            </TabsTrigger>
          </TabsList>

         <TabsContent value="product">
  <div className="rounded-[12px] border border-gray-200 overflow-hidden">

    {/* scroll wrapper updated */}
    <div className="flex-1 overflow-x-auto thin-scrollbar">
      <div className="min-w-max"> 
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gray-50 hover:bg-gray-100 border-b border-gray-200 h-12 cursor-pointer"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-2 py-3 text-left font-semibold text-[12px] text-gray-900 tracking-wider uppercase whitespace-nowrap"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn(
                          "flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " ↑",
                          desc: " ↓",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
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
                className="
                  cursor-pointer
                  transition-all
                  bg-white
                  border-b border-gray-200
                  hover:bg-gray-50
                "
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-2 py-[4px] whitespace-nowrap"
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
</TabsContent>










<TabsContent value="category">
  <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">

    {/* scroll wrapper updated */}
    <div className="overflow-x-auto thin-scrollbar">
      <div className="min-w-max">

        <Table className="w-full border-collapse">
          <TableHeader>
            {categoryTable.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gray-50 hover:bg-gray-100 border-b border-gray-200"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-2 py-3 text-left text-gray-900 font-bold text-[12px] tracking-wider uppercase whitespace-nowrap"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn(
                          "flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors"
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " ↑",
                          desc: " ↓",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {categoryTable.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="
                  bg-white
                  border-b border-gray-200
                  cursor-pointer
                  transition-all
                  hover:bg-gray-50
                "
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-2 py-[10px] whitespace-nowrap"
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
</TabsContent>

        </Tabs >
      </CardContent >
    </Card >
  );
}
