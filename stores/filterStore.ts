import { create } from "zustand"
import { persist } from "zustand/middleware"

interface FilterState {
  platform: "all" | "blinkit" | "zepto" | "instamart"
  city: string | null
  warehouse: string | null
  pincode: string | null
  dateRange: {
    start: Date
    end: Date
  }
  setPlatform: (platform: FilterState["platform"]) => void
  setCity: (city: string | null) => void
  setWarehouse: (warehouse: string | null) => void
  setPincode: (pincode: string | null) => void
  setDateRange: (start: Date, end: Date) => void
  resetFilters: () => void
}

const defaultDateRange = {
  start: new Date(new Date().setDate(new Date().getDate() - 30)),
  end: new Date(),
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      platform: "all",
      city: null,
      warehouse: null,
      pincode: null,
      dateRange: defaultDateRange,

      setPlatform: (platform) => set({ platform }),

      setCity: (city) => set({ city, warehouse: null, pincode: null }),

      setWarehouse: (warehouse) => set({ warehouse, pincode: null }),

      setPincode: (pincode) => set({ pincode }),

      setDateRange: (start, end) => set({ dateRange: { start, end } }),

      resetFilters: () =>
        set({
          platform: "all",
          city: null,
          warehouse: null,
          pincode: null,
          dateRange: defaultDateRange,
        }),
    }),
    {
      name: "filter-storage",
      partialize: (state) => ({
        platform: state.platform,
        city: state.city,
        warehouse: state.warehouse,
        pincode: state.pincode,
        dateRange: {
          start: state.dateRange.start.toISOString(),
          end: state.dateRange.end.toISOString(),
        },
      }),
      onRehydrateStorage: () => (state) => {
        if (state && typeof state.dateRange.start === "string") {
          state.dateRange.start = new Date(state.dateRange.start)
          state.dateRange.end = new Date(state.dateRange.end)
        }
      },
    }
  )
)
