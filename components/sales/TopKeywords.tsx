"use client"

import { SearchIcon } from "@/lib/flaticons"

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
    <div className="flex flex-col gap-3">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <SearchIcon size={16} className="text-gray-800" strokeWidth={2} />
        <h3 className="text-sm font-normal text-gray-800 leading-5 tracking-[-0.1504px]">
          Top Keywords Driving Discovery
        </h3>
      </div>

      {/* Keyword List */}
      <div className="flex flex-col gap-2">
        {keywordData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-[13px] flex flex-col gap-2"
          >
            {/* Keyword Header */}
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-gray-800 leading-4">
                {item.keyword}
              </p>
              <p className="text-[10px] font-normal text-gray-500 leading-[15px] tracking-[0.1172px]">
                {item.searches} searches
              </p>
            </div>

            {/* CTR and Conversion Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* CTR Box */}
              <div className="bg-gray-50 rounded p-2">
                <p className="text-[10px] font-normal text-gray-500 leading-[15px] tracking-[0.1172px] mb-[6px]">
                  CTR
                </p>
                <p className="text-xs font-normal text-[#25b990] leading-4">
                  {item.ctr}
                </p>
              </div>

              {/* Conversion Box */}
              <div className="bg-gray-50 rounded p-2">
                <p className="text-[10px] font-normal text-gray-500 leading-[15px] tracking-[0.1172px] mb-[6px]">
                  Conversion
                </p>
                <p className="text-xs font-normal text-[#25b990] leading-4">
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
