"use client"

import { SearchIcon } from "lucide-react"

interface KeywordData {
  keyword: string
  searches: number
  ctr: string
  conversion: string
}

const keywordData: KeywordData[] = [
  {
    keyword: "tata salt",
    searches: 1200,
    ctr: "8.5%",
    conversion: "12.3%",
  },
  {
    keyword: "salt 1kg",
    searches: 850,
    ctr: "6.2%",
    conversion: "9.8%",
  },
  {
    keyword: "iodized salt",
    searches: 620,
    ctr: "5.8%",
    conversion: "11.2%",
  },
  {
    keyword: "table salt",
    searches: 480,
    ctr: "4.5%",
    conversion: "8.5%",
  },
]

export function TopKeywords() {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-[12px] bg-white/70 backdrop-blur-md border border-gray-200/60 ">
      {/* Section Header */}
      <div className="flex items-center gap-2.5">
        <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
          <SearchIcon size={18} className="text-gray-400" strokeWidth={2} />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 tracking-tight">
          Top Keywords Driving Discovery
        </h3>
      </div>

      {/* Keyword List */}
      <div className="flex flex-col gap-3">
        {keywordData.map((item, index) => (
          <div
            key={index}
            className="group relative border border-gray-100 rounded-xl p-4 flex flex-col gap-3 bg-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5"
          >
            {/* Keyword Header */}
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-900 capitalize tracking-tight">
                {item.keyword}
              </p>
              <p className="text-[10px] font-medium text-gray-400 tracking-wide">
                {item.searches} searches
              </p>
            </div>

            {/* CTR and Conversion Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* CTR Box */}
              <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-2.5 border border-gray-100/50 transition-colors duration-200 group-hover:bg-gray-100/60">
                <p className="text-[10px] font-medium text-gray-500 tracking-wide mb-1">
                  CTR
                </p>
                <p className="text-xs font-semibold text-[#25b990] tracking-tight">
                  {item.ctr}
                </p>
              </div>

              {/* Conversion Box */}
              <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-2.5 border border-gray-100/50 transition-colors duration-200 group-hover:bg-gray-100/60">
                <p className="text-[10px] font-medium text-gray-500 tracking-wide mb-1">
                  Conversion
                </p>
                <p className="text-xs font-semibold text-[#5A9BFF] tracking-tight">
                  {item.conversion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
