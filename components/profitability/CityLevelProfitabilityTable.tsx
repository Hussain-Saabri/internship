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

import { ArrowUpDownIcon, ArrowUpIcon, ArrowDownIcon } from "@/lib/flaticons";
import { cn } from "@/lib/utils";

// =======================
// Types
// =======================
interface CityProfitability {
  platform: string;
  netSales: number;
  drr: number;
  grossmargin: number;
  contribution: number;
}

// =======================
// Data
// =======================
const cityData: CityProfitability[] = [
  { platform: "Blinkit", netSales: 4.2, drr: 48, grossmargin: 24.8, contribution: 14.5 },
  { platform: "Zepto", netSales: 3.15, drr: 66, grossmargin: 25.3, contribution: 15.1 },
  { platform: "Instamart", netSales: 2.85, drr: 95, grossmargin: 27.8, contribution: 17.5 },
];

// Helpers
const formatMillions = (v: number) => `₹${v.toFixed(2)}M`;
const formatThousands = (v: number) => `₹${v}K/day`;

// =======================
// Columns (Matched with Platform-Wise Table)
// =======================
const cityColumns: ColumnDef<CityProfitability>[] = [
  {
    accessorKey: "platform",
    header: "CITY",
    cell: ({ row }) => {
      const colorMap: Record<string, string> = {
        Blinkit: "bg-[#FACC15]",
        Zepto: "bg-[#C084FC]",
        Instamart: "bg-[#FB923C]",
      };
      const dotColor = colorMap[row.original.platform] || "bg-gray-300";

      return (
        <div className="flex items-center gap-2">
          <div className={cn("w-1.5 h-1.5 rounded-full shadow-sm", dotColor)} />
          <span className="text-[10px] font-semibold text-gray-800">
            {row.original.platform}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "netSales",
    header: "NET SALES (₹)",
    cell: ({ row }) => (
      <div className="text-center text-[10px] font-bold text-gray-900">
        {formatMillions(row.getValue("netSales"))}
      </div>
    ),
  },
  {
    accessorKey: "drr",
    header: "DAILY RUN RATE",
    cell: ({ row }) => (
      <div className="text-center text-[10px] font-bold text-[#18C17A]">
        {formatThousands(row.getValue("drr"))}
      </div>
    ),
  },
  {
    accessorKey: "grossmargin",
    header: "GROSS MARGIN %",
    cell: ({ row }) => (
      <div className="text-center text-[10px] font-medium text-gray-600">
        {row.getValue("grossmargin")}%
      </div>
    ),
  },
  {
    accessorKey: "contribution",
    header: "CONTRIBUTION %",
    cell: ({ row }) => {
      const v = row.getValue("contribution") as number;
      const color = v >= 15 ? "text-[#18C17A]" : "text-[#FF7A45]";

      return (
        <div className={cn("text-center text-[10px] font-bold", color)}>
          {v}%
        </div>
      );
    },
  },
];

// =======================
// Component
// =======================
export function CityLevelProfitabilityTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: cityData,
    columns: cityColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className="border-gray-200 border rounded-[12px] flex-grow w-full bg-white overflow-hidden shadow-none h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-6">
          City-Level Profitability
        </h3>

        {/* Table Container */}
        <div className="flex-1 rounded-[12px] border border-gray-200 overflow-hidden bg-white/40 backdrop-blur-sm flex flex-col">
          <div className="flex-1 overflow-x-auto thin-scrollbar">
            <div className="min-w-max">

              <Table className="w-full">
                {/* HEADER */}
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      key={headerGroup.id}
                      className="bg-white/50 border-b border-gray-200 h-12 hover:bg-white/60"
                    >
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className={cn(
                            "bg-gray-50/60 backdrop-blur-sm px-4 py-3 text-left text-gray-700 font-bold text-[10px] tracking-wider uppercase whitespace-nowrap select-none",
                            header.id === "platform" ? "text-left" : "text-right"
                          )}
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              className={cn(
                                "flex items-center gap-1.5 hover:text-gray-700 cursor-pointer",
                                header.id !== "platform" && "justify-end"
                              )}
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              {{
                                asc: <ArrowUpIcon className="w-3 h-3 text-[#25B990]" />,
                                desc: <ArrowDownIcon className="w-3 h-3 text-[#25B990]" />,
                              }[header.column.getIsSorted() as string] ?? (
                                  <ArrowUpDownIcon className="w-3 h-3 opacity-60" />
                                )}
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
                      className="border-b border-gray-200 last:border-0 hover:bg-white/40 transition-colors duration-200"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="py-3 px-4">
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
