"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TopKeywords } from "./TopKeywords"
import { StockAgeingAnalysis } from "./StockAgeingAnalysis"
import { PincodeLevelAnalysis } from "./sku/PincodeLevelAnalysis"
import { CompetitorAnalysis } from "./CompetitorAnalysis"

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
    <div className="flex flex-col gap-6 w-full">

      {/* 🔥 RESPONSIVE TABS */}
      <div className="
        bg-[linear-gradient(135deg,#EFF1F5,#F8FAFC)]
        rounded-2xl border border-gray-200/70 
        shadow-[0_2px_10px_rgba(0,0,0,0.03)]
        p-1.5
        w-full
      ">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-1 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-4 py-2 rounded-2xl text-xs font-medium tracking-tight 
                transition-all duration-200 flex-1 md:flex-none text-center
                ${activeTab === tab.id
                  ? "text-gray-900 font-semibold"
                  : "text-gray-600 hover:bg-gray-100/70"
                }
              `}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-2xl shadow-[0_2px_6px_rgba(0,0,0,0.06)]"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 RESPONSIVE CONTENT AREA */}
      <div className="
        bg-white/80 backdrop-blur-[2px] 
        rounded-2xl p-4 md:p-6 
        border border-gray-200/60 
        shadow-[0_4px_20px_rgba(0,0,0,0.03)]
        min-h-[300px] md:min-h-[400px] 
        w-full
      ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {activeTab === "keywords" && <TopKeywords />}
            {activeTab === "ageing" && <StockAgeingAnalysis />}
            {activeTab === "pincode" && <PincodeLevelAnalysis />}
            {activeTab === "competitor" && <CompetitorAnalysis />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
