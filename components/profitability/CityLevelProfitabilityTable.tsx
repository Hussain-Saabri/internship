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

import { ArrowUpDownIcon } from "@/lib/flaticons";
import { cn } from "@/lib/utils";

// Types
interface PlatformProfitability {
  platform: string;
  netSales: number;
  drr: number;
  grossmargin: number;
  contribution: number;
}

// Data
const platformData: PlatformProfitability[] = [
  {
    platform: "Blinkit",
    netSales: 4.2,
    drr: 48,
    grossmargin: 24.8,
    contribution: 14.5,
  },
  {
    platform: "Zepto",
    netSales: 3.15,
    drr: 66,
    grossmargin: 25.3,
    contribution: 15.1,
  },
  {
    platform: "Instamart",
    netSales: 2.85,
    drr: 95,
    grossmargin: 27.8,
    contribution: 17.5,
  },
];

// Helpers
const formatMillions = (val: number) => `₹${val.toFixed(2)}M`;
const formatThousands = (val: number) => `₹${val}K/day`;

// Column Definitions
const platformColumns: ColumnDef<PlatformProfitability>[] = [
  {
    accessorKey: "platform",
    header: "CITY",
    cell: ({ row }) => {
      // Using same color logic or generic for cities if needed, 
      // but keeping consistent with platform colors for now as data uses platform names
      const colorMap: Record<string, string> = {
        Blinkit: "bg-[#FACC15]", // Yellow
        Zepto: "bg-[#C084FC]",   // Purple
        Instamart: "bg-[#FB923C]", // Orange
      }
      const dotColor = colorMap[row.original.platform] || "bg-gray-300"

      return (
        <div className="flex items-center gap-2">
          <div className={cn("w-1.5 h-1.5 rounded-full shadow-sm", dotColor)} />
          <span className="text-[10px] font-semibold text-gray-800">
            {row.getValue("platform")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "netSales",
    header: "NET SALES (₹)",
    cell: ({ row }) => (
      <div className="justify-start font-mono text-[10px] font-bold text-gray-900">
        {formatMillions(row.getValue("netSales"))}
      </div>
    ),
  },
  {
    accessorKey: "drr",
    header: "DRR",
    cell: ({ row }) => (
      <div className="justify-start font-mono text-[10px] font-bold text-[#18C17A]">
        {formatThousands(row.getValue("drr"))}
      </div>
    ),
  },
  {
    accessorKey: "grossmargin",
    header: "GROSS MARGIN %",
    cell: ({ row }) => (
      <div className="justify-start font-mono text-[10px] font-medium text-gray-600">
        {row.getValue("grossmargin")}%
      </div>
    ),
  },
  {
    accessorKey: "contribution",
    header: "CONTRIBUTION %",
    cell: ({ row }) => {
      const val = row.getValue("contribution") as number;
      // Green for high, Orange for low
      const color =
        val >= 18 ? "text-[#18C17A]" : val >= 15 ? "text-[#18C17A]" : "text-[#FF7A45]";

      return (
        <div className={cn("justify-start font-mono text-[10px] font-bold", color)}>
          {val}%
        </div>
      );
    },
  },
];

// Component
export function CityLevelProfitabilityTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: platformData,
    columns: platformColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className="border-white/50 rounded-[20px] flex-grow w-full bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-md h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">
          City-Level Profitability
        </h3>

        {/* Table Container */}
        <div className="flex-1 rounded-xl border border-white/40 overflow-hidden bg-white/40 backdrop-blur-sm flex flex-col">
          <div className="flex-1 overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            <Table className="w-full min-w-[600px]">
              {/* HEADER */}
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="bg-white/50 border-b border-white/40 h-12 hover:bg-white/60">
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={cn(
                          "px-4 py-3 text-left text-gray-500 font-bold text-[10px] tracking-wider uppercase whitespace-nowrap select-none",
                          header.id === "platform" ? "text-left" : "text-right"
                        )}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            className={cn(
                              "flex items-center gap-1.5 transition-colors hover:text-gray-700 cursor-pointer",
                              header.id !== "platform" && "justify-end"
                            )}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            <ArrowUpDownIcon className="w-3 h-3 text-gray-400 opacity-50" />
                          </div>
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              {/* BODY */}
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-b border-white/40 last:border-0 hover:bg-white/40 transition-colors duration-200 group"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="py-3 px-4"
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
  );
}
