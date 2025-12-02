"use client"

import { useState } from "react"
import { useFilterStore } from "@/stores/filterStore"
import { formatDate } from "@/lib/formatters"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function DateRangePicker() {
  const { dateRange, setDateRange } = useFilterStore()
  const [isOpen, setIsOpen] = useState(false)

  const formatDateRange = () => {
    const start = formatDate(dateRange.start, "MMM dd, yyyy")
    const end = formatDate(dateRange.end, "MMM dd, yyyy")
    return `${start} - ${end}`
  }

  // Quick date range presets
  const setPreset = (days: number) => {
    const end = new Date()
    const start = new Date()
    start.setDate(start.getDate() - days)
    setDateRange(start, end)
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            // Base styles from Figma
            "flex h-9 items-center gap-2.5 rounded-[10px] border border-gray-200 bg-gray-50 px-3 text-sm font-medium text-gray-800 transition-colors",
            "hover:bg-gray-100",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
          aria-label="Select date range"
        >
          <Calendar size={16} className="text-gray-600" />
          <span className="whitespace-nowrap tracking-[-0.15px]">
            {formatDateRange()}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <div className="flex flex-col gap-2 p-3">
          <div className="text-sm font-semibold text-gray-900 mb-2">Quick Select</div>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => setPreset(7)}
          >
            Last 7 days
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => setPreset(30)}
          >
            Last 30 days
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => setPreset(90)}
          >
            Last 90 days
          </Button>
          <div className="border-t border-gray-200 my-2" />
          <div className="text-xs text-gray-500 px-2">
            Custom date range picker coming soon
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default DateRangePicker
