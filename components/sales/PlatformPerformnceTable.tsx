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
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

interface WarehouseItem {
  id: string
  name: string
  salesValue: string
  orders: number
  cities: number
  gradient: string
}

const warehouseData: WarehouseItem[] = [
  {
    id: "blinkit",
    name: "Blinkit",
    salesValue: "₹1.86M",
    orders: 5020,
    cities: 5,
    gradient: "from-[#FACC15] to-[#EAB308]"
  },
  {
    id: "zepto",
    name: "Zepto",
    salesValue: "₹1.72M",
    orders: 4230,
    cities: 4,
    gradient: "from-[#C084FC] to-[#A855F7]"
  },
  {
    id: "instamart",
    name: "Instamart",
    salesValue: "₹1.42M",
    orders: 3200,
    cities: 3,
    gradient: "from-[#FB923C] to-[#F97316]"
  },
]

export function PlatformPerformnceTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const router = useRouter();

  const handlePlatformClick = (id: string) => {
    router.push(`/sales/${id}`)
  }

  const columns: ColumnDef<WarehouseItem>[] = [
    {
      accessorKey: "name",
      header: () => <span className="pl-4 font-bold text-gray-500">PLATFORM</span>,
      cell: ({ row }) => (
        <div className="flex items-center gap-3 pl-4 cursor-pointer">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${row.original.gradient}`} />
          <span className="text-[11px] text-gray-500">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "orders",
      header: () => <span className="font-bold text-gray-500">ORDERS</span>,
      cell: ({ row }) => (
        <span className="text-[11px] text-gray-500">
          {row.original.orders.toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: "cities",
      header: () => <span className="font-bold text-gray-500 whitespace-nowrap">ACTIVE CITIES</span>,
      cell: ({ row }) => (
        <span className="text-[11px] text-gray-500">
          {row.original.cities}
        </span>
      ),
    },
    {
      accessorKey: "salesValue",
      header: () => <span className="font-bold text-gray-500 whitespace-nowrap">SALES VALUE</span>,
      cell: ({ row }) => (
        <span className="text-[11px] text-gray-500">{row.original.salesValue}</span>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div className="font-bold text-gray-500 text-center">ACTIONS</div>,
      cell: ({ row }) => (
        <div className="flex justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePlatformClick(row.original.id)
            }}
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/50 hover:bg-white/70 backdrop-blur-md transition-all"
          >
            <span className="text-[10px] text-gray-500 group-hover:text-gray-700">View Details</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-700 transition-transform" />
          </button>
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data: warehouseData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Card className="rounded-[20px] bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md border-white/50">
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-gray-700 tracking-wide uppercase mb-6">
          Platform Performance
        </h3>

        <div className="rounded-xl border border-white/40 overflow-hidden">
          <Table className="w-full table-fixed">
            <TableHeader>
              {table.getHeaderGroups().map(group => (
                <TableRow key={group.id} className="h-12 bg-white/40">
                  {group.headers.map(header => (
                    <TableHead
                      key={header.id}
                      className="px-4 py-3 text-left text-[10px] font-bold text-gray-700 tracking-wide uppercase"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  onClick={() => handlePlatformClick(row.original.id)}
                  className={`cursor-pointer h-14 transition-all ${
                    index % 2 ? "bg-white/30" : "bg-white/20"
                  } hover:bg-white/50`}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} className="px-4 py-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
