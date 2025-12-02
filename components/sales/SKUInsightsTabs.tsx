"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TopKeywords } from "./TopKeywords"
import { StockAgeingAnalysis } from "./StockAgeingAnalysis"

type TabType = "keywords" | "ageing" | "pincode" | "competitor"

export function SKUInsightsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("keywords")

  const tabs: { id: TabType; label: string }[] = [
    { id: "keywords", label: "Keywords" },
    { id: "ageing", label: "Ageing" },
    { id: "pincode", label: "Pincode" },
    { id: "competitor", label: "Competitor" },
  ]

  return (
    <Card className="border-gray-200 rounded-xl">
      <CardContent className="p-[17px] flex flex-col gap-[42px]">
        {/* Tab Bar */}
        <div className="bg-gray-200 rounded-2xl p-[3px] h-[36px]">
          <div className="grid grid-cols-4 gap-0 h-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center justify-center
                  rounded-2xl px-[9px] py-[5px]
                  text-xs font-medium text-gray-800 leading-4
                  transition-colors
                  ${
                    activeTab === tab.id
                      ? "bg-white"
                      : "bg-transparent hover:bg-gray-100"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[488px]">
          {activeTab === "keywords" && <TopKeywords />}

          {activeTab === "ageing" && <StockAgeingAnalysis />}

          {activeTab === "pincode" && (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-gray-500 font-medium">Pincode Analysis</p>
                <p className="text-sm text-gray-400 mt-1">
                  Coming soon - Pincode-wise performance
                </p>
              </div>
            </div>
          )}

          {activeTab === "competitor" && (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-gray-500 font-medium">Competitor Analysis</p>
                <p className="text-sm text-gray-400 mt-1">
                  Coming soon - Competitor price comparison
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
