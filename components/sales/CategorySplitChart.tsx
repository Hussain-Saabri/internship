"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Groceries", percentage: 35, color: "#25b990" },
  { name: "Snacks", percentage: 25, color: "#6edfc2" },
  { name: "Beverages", percentage: 20, color: "#94d8c7" },
  { name: "Personal Care", percentage: 12, color: "#2d9cdb" },
  { name: "Others", percentage: 8, color: "#f5b82e" },
]

export function CategorySplitChart() {
  return (
    <Card className="border-white/50 rounded-[20px] flex-grow w-full bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-md">
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-gray-700 tracking-wide mb-6">
          Category Split
        </h3>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              {/* Label and Percentage Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0 ring-2 ring-white shadow-sm"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {category.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-600">
                  {category.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full k transition-all text-black duration-500 ease-out shadow-sm"
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
