"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
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

// -------------------------
// Status Styles
// -------------------------
const statusStyles = {
  Current: "bg-[#25B990]/10 text-[#25B990] border-[#25B990]/20",
  "Due Soon": "bg-[#F5B82E]/10 text-[#F5B82E] border-[#F5B82E]/20",
  Overdue: "bg-[#E85454]/10 text-[#E85454] border-[#E85454]/20",
  Critical: "bg-[#E85454]/20 text-[#E85454] border-[#E85454]/30 font-bold",
};

// -------------------------
// Types
// -------------------------
interface ReceivableRow {
  platform: string;
  invoiceNumber: string;
  invoiceValue: string;
  ageingBucket: string;
  daysOverdue: string;
  status: "Current" | "Due Soon" | "Overdue" | "Critical";
}

// -------------------------
// Sample Data
// -------------------------
const receivablesData: ReceivableRow[] = [
  { platform: "Blinkit", invoiceNumber: "INV-2024-1001", invoiceValue: "₹1.25M", ageingBucket: "0-15d", daysOverdue: "5 days", status: "Current" },
  { platform: "Zepto", invoiceNumber: "INV-2024-1002", invoiceValue: "₹980K", ageingBucket: "16-30d", daysOverdue: "22 days", status: "Due Soon" },
  { platform: "Instamart", invoiceNumber: "INV-2024-1003", invoiceValue: "₹750K", ageingBucket: "0-15d", daysOverdue: "8 days", status: "Current" },
  { platform: "Blinkit", invoiceNumber: "INV-2024-0987", invoiceValue: "₹425K", ageingBucket: "31-60d", daysOverdue: "45 days", status: "Overdue" },
  { platform: "Zepto", invoiceNumber: "INV-2024-0945", invoiceValue: "₹320K", ageingBucket: "60+d", daysOverdue: "72 days", status: "Critical" },
  { platform: "Instamart", invoiceNumber: "INV-2024-0998", invoiceValue: "₹580K", ageingBucket: "16-30d", daysOverdue: "28 days", status: "Due Soon" },
  { platform: "Blinkit", invoiceNumber: "INV-2024-1015", invoiceValue: "₹890K", ageingBucket: "0-15d", daysOverdue: "12 days", status: "Current" },
  { platform: "Zepto", invoiceNumber: "INV-2024-0912", invoiceValue: "₹215K", ageingBucket: "60+d", daysOverdue: "68 days", status: "Critical" },
];

// -------------------------
// Columns
// -------------------------
const columns: ColumnDef<ReceivableRow>[] = [
  {
    accessorKey: "platform",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        PLATFORM
        <ArrowUpDownIcon className="w-3 h-3 opacity-60" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[10px] font-semibold text-gray-700">
        {row.original.platform}
      </span>
    ),
  },

  {
    accessorKey: "invoiceNumber",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        INVOICE
        <ArrowUpDownIcon className="w-3 h-3 opacity-60" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[10px] text-gray-500">{row.original.invoiceNumber}</span>
    ),
  },

  {
    accessorKey: "invoiceValue",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        VALUE (₹)
        <ArrowUpDownIcon className="w-3 h-3 opacity-60" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[10px] font-bold text-gray-800">
        {row.original.invoiceValue}
      </span>
    ),
  },

  {
    accessorKey: "ageingBucket",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        AGEING
        <ArrowUpDownIcon className="w-3 h-3 opacity-60" />
      </div>
    ),
    cell: ({ row }) => {
      const v = row.original.ageingBucket;
      const color =
        v === "31-60d" ? "text-[#F5B82E]" :
        v === "60+d" ? "text-[#E85454]" :
        "text-[#6B7280]";

      return <span className={`text-[10px] font-medium ${color}`}>{v}</span>;
    },
  },

  {
    accessorKey: "daysOverdue",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        OVERDUE
        <ArrowUpDownIcon className="w-3 h-3 opacity-60" />
      </div>
    ),
    cell: ({ row }) => {
      const v = row.original.daysOverdue;
      const color =
        v.includes("45") || v.includes("72") || v.includes("68")
          ? "text-[#E85454]"
          : v.includes("22") || v.includes("28")
          ? "text-[#F5B82E]"
          : "text-[#6B7280]";

      return <span className={`text-[10px] font-medium ${color}`}>{v}</span>;
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none justify-center"
        onClick={column.getToggleSortingHandler()}
      >
        STATUS
        <ArrowUpDownIcon className="w-3 h-3 opacity-60" />
      </div>
    ),
    cell: ({ row }) => {
      const v = row.original.status;
      return (
        <span
          className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold ${statusStyles[v]}`}
        >
          {v}
        </span>
      );
    },
  },
];

// -------------------------
// Component
// -------------------------
export function OutstandingReceivablesDetail() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: receivablesData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className="rounded-[12px] border border-gray-200 bg-white shadow-none">
      <CardContent className="px-6 py-6">

        <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-6">
          Outstanding Receivables Detail
        </h3>

        <div className="rounded-xl border border-gray-200 bg-white/40 backdrop-blur-sm overflow-hidden">

          {/* ⭐ Same scroll style as your platform table */}
          <div className="overflow-x-auto thin-scrollbar rounded-b-[12px]">
            <div className="min-w-max">

              <Table className="w-full">
                <TableHeader>
                  {table.getHeaderGroups().map((group) => (
                    <TableRow key={group.id} className="bg-white/50 border-b border-gray-200 h-12">
                      {group.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className="bg-gray-50/60 backdrop-blur-sm px-4 py-3 text-left text-gray-700 font-bold text-[10px] tracking-wider uppercase whitespace-nowrap"
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
                      className="border-b border-gray-200 hover:bg-white/60 transition-colors"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="px-4 py-3 whitespace-nowrap">
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
