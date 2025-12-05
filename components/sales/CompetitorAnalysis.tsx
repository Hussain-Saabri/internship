"use client"

import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CompetitorData {
    name: string
    price: string
    variance: string
    marketShare: string
    trend: "up" | "down"
}

const competitorData: CompetitorData[] = [
    { name: "Competitor A", price: "₹140", variance: "+5%", marketShare: "15%", trend: "up" },
    { name: "Competitor B", price: "₹135", variance: "+2%", marketShare: "12%", trend: "up" },
    { name: "Competitor C", price: "₹125", variance: "-5%", marketShare: "8%", trend: "down" },
]

export function CompetitorAnalysis() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                    <TrendingUp size={18} className="text-gray-400" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-tight">
                    Competitor Analysis
                </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {competitorData.map((item, index) => (
                    <div
                        key={index}
                        className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                            <span className="text-xs text-gray-500">Market Share: {item.marketShare}</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Price</span>
                                <span className="text-sm font-bold text-gray-900">{item.price}</span>
                            </div>

                            <div className="flex flex-col items-end gap-1 min-w-[60px]">
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Variance</span>
                                <div className={cn(
                                    "flex items-center gap-1 text-sm font-semibold",
                                    item.trend === "up" ? "text-rose-500" : "text-emerald-500"
                                )}>
                                    {item.variance}
                                    {item.trend === "up" ? (
                                        <ArrowUpRight size={14} strokeWidth={2.5} />
                                    ) : (
                                        <ArrowDownRight size={14} strokeWidth={2.5} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
