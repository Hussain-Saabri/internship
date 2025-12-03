"use client"

import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Groceries", percentage: 35, color: "#16c79a" },
  { name: "Snacks", percentage: 25, color: "#5ee6b3" },
  { name: "Beverages", percentage: 20, color: "#99d5c9" },
  { name: "Personal Care", percentage: 12, color: "#3da5f5" },
  { name: "Others", percentage: 8, color: "#f4b840" },
]

export function CategorySplitChart() {
  return (
    <Card className="border border-gray-200/60 bg-white rounded-[22px] shadow-sm w-full">
      <CardContent className="p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-6 tracking-wide">
          Category Split
        </h3>

        <div className="space-y-5">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              
              {/* Category Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm font-medium text-gray-500">
                    {category.name}
                  </span>
                </div>

                <span className="text-sm font-semibold text-gray-500">
                  {category.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-[#E8EDF5] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${category.percentage}%`,
                    backgroundColor: category.color,
                  }}
                />
              </div>

            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
