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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDownIcon } from "@/lib/flaticons";
import { cn } from "@/lib/utils";

const statusStyles = {
  Current: "bg-[#25B990]/10 text-[#25B990] border-[#25B990]/20",
  "Due Soon": "bg-[#F5B82E]/10 text-[#F5B82E] border-[#F5B82E]/20",
  Overdue: "bg-[#E85454]/10 text-[#E85454] border-[#E85454]/20",
  Critical: "bg-[#E85454]/20 text-[#E85454] border-[#E85454]/30 font-bold",
};


interface ReceivableRow {
  platform: string;
  invoiceNumber: string;
  invoiceValue: string;
  ageingBucket: string;
  daysOverdue: string;
  status: "Current" | "Due Soon" | "Overdue" | "Critical";
}

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

const columns: ColumnDef<ReceivableRow>[] = [
  {
    accessorKey: "platform",
    header: ({ column }) => (
      <div className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span>PLATFORM</span>
        <ArrowUpDownIcon className={cn("w-3 h-3 transition-transform text-gray-400", column.getIsSorted() === "asc" && "rotate-180", column.getIsSorted() === "desc" && "rotate-0")} />
      </div>
    ),
    cell: ({ row }) => <span className="text-xs font-semibold text-gray-700">{row.original.platform}</span>
  },
  {
    accessorKey: "invoiceNumber",
    header: ({ column }) => (
      <div className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span>INVOICE</span>
        <ArrowUpDownIcon className={cn("w-3 h-3 mt-2 transition-transform text-gray-400", column.getIsSorted() === "asc" && "rotate-180", column.getIsSorted() === "desc" && "rotate-0")} />
      </div>
    ),
    cell: ({ row }) => <span className="text-xs text-gray-500 font-mono text-left">{row.original.invoiceNumber}</span>
  },
  {
    accessorKey: "invoiceValue",
    header: ({ column }) => (
      <div className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors justify-start pl-2" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span >VALUE (₹)</span>
        <ArrowUpDownIcon className={cn("w-3 h-3 transition-transform text-gray-400", column.getIsSorted() === "asc" && "rotate-180", column.getIsSorted() === "desc" && "rotate-0")} />
      </div>
    ),
    cell: ({ row }) => <div className="text-left pl-2"><span className="text-xs font-bold text-gray-800">{row.original.invoiceValue}</span></div>
  },
  {
    accessorKey: "ageingBucket",
    header: ({ column }) => (
      <div className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors justify-start pl-2" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span>AGEING</span>
        <ArrowUpDownIcon className={cn("w-3 h-3 transition-transform text-gray-400", column.getIsSorted() === "asc" && "rotate-180", column.getIsSorted() === "desc" && "rotate-0")} />
      </div>
    ),
    cell: ({ row }) => {
      const v = row.original.ageingBucket;
      const color =
        v === "31-60d"
          ? "text-[#F5B82E]"
          : v === "60+d"
            ? "text-[#E85454]"
            : "text-[#6B7280]";

      return (
        <div className="flex items-center justify-start pl-2">   {/* removes shifting */}
          <span className={`text-xs font-medium ${color}`}>
            {v}
          </span>
        </div>
      );
    }
    ,
  },
  {
    accessorKey: "daysOverdue",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors justify-start pl-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>OVERDUE</span>
        <ArrowUpDownIcon
          className={cn(
            "w-3 h-3 transition-transform text-gray-400",
            column.getIsSorted() === "asc" && "rotate-180",
            column.getIsSorted() === "desc" && "rotate-0"
          )}
        />
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

      return (
        <span className={`text-xs font-medium ${color} block text-left pl-2`}>
          {v}
        </span>
      );
    },
  }
  ,
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div
        className="flex items-center gap-1 cursor-pointer select-none hover:text-[#25B990] transition-colors justify-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>STATUS</span>
        <ArrowUpDownIcon
          className={cn(
            "w-3 h-3 transition-transform text-gray-400",
            column.getIsSorted() === "asc" && "rotate-180",
            column.getIsSorted() === "desc" && "rotate-0"
          )}
        />
      </div>
    ),
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div className="flex justify-center w-full">
          <span
            className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>
      );
    },
  }
  ,
];

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
    <Card className="rounded-[12px] border-gray-200 bg-white  lg:col-span-2">
      <CardContent className="px-6 py-6">
        <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mb-6">Outstanding Receivables Detail</h3>

        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white/40 backdrop-blur-sm">
          <div className="w-full overflow-x-auto">
            <Table className="w-full table-fixed min-w-[600px]">
              <TableHeader className="bg-white/50 border-b border-gray-200 h-10 hover:bg-white/60">
                {table.getHeaderGroups().map((group) => (
                  <TableRow key={group.id} className="border-b border-gray-200">
                    {group.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={cn(
                          "px-2 py-3 text-gray-500 font-bold text-[10px] tracking-wider uppercase whitespace-nowrap",
                          header.id === "invoiceValue" ? "text-right" :
                            header.id === "ageingBucket" || header.id === "daysOverdue" || header.id === "status" ? "text-center" : "text-left"
                        )}
                        style={{
                          width: header.id === "platform" ? "15%" :
                            header.id === "invoiceNumber" ? "20%" :
                              header.id === "invoiceValue" ? "15%" :
                                header.id === "ageingBucket" ? "15%" :
                                  header.id === "daysOverdue" ? "15%" : "20%"
                        }}
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
                    className="border-b border-gray-200 hover:bg-white/60 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={cn(
                          "px-2 py-3 whitespace-nowrap align-middle",
                          cell.column.id === "invoiceValue" ? "text-right" :
                            cell.column.id === "ageingBucket" || cell.column.id === "daysOverdue" || cell.column.id === "status" ? "text-center" : "text-left"
                        )}
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
