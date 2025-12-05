"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PackageIcon } from "@/lib/flaticons"

interface SKUProductHeaderProps {
  productName: string
  sku: string
  pack: string
  category: string
  isActive?: boolean
}

export function SKUProductHeader({
  productName,
  sku,
  pack,
  category,
  isActive = true,
}: SKUProductHeaderProps) {
  return (
    <Card className="
      border border-gray-200 
      rounded-[12px] 
      shadow-none
      bg-white
    ">
      <CardContent className="p-6">
        <div className="flex items-start gap-5">

          {/* NEW — Gradient Icon Bubble */}
          <div className="
            w-[82px] h-[82px] 
            rounded-2xl 
            bg-gray-50 
            border border-gray-200 
            flex items-center justify-center 
            shadow-inner
          ">
            <PackageIcon size={38} className="text-gray-500" strokeWidth={1.6} />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-2 flex-1">

            {/* Product Name */}
            <h2 className="text-xl font-semibold text-gray-900 tracking-tight leading-[22px]">
              {productName}
            </h2>

            {/* Metadata Chips */}
            <div className="flex flex-wrap gap-2 mt-1">

              <span className="
                text-[11px] px-3 py-[5px] rounded-full 
                bg-gray-100 text-gray-600 border border-gray-200
              ">
                SKU: {sku}
              </span>

              <span className="
                text-[11px] px-3 py-[5px] rounded-full 
                bg-gray-100 text-gray-600 border border-gray-200
              ">
                Pack: {pack}
              </span>

              <span className="
                text-[11px] px-3 py-[5px] rounded-full 
                bg-gray-100 text-gray-600 border border-gray-200
              ">
                Category: {category}
              </span>

              {isActive && (
                <span
                  className="
                    text-[11px] px-3 py-[5px]
                    rounded-full 
                    bg-emerald-50 
                    text-emerald-700 
                    border border-emerald-200
                    font-medium
                  "
                >
                  Active
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
