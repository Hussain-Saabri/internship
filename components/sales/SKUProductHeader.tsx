"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <Card className="border-gray-200 rounded-xl">
      <CardContent className="p-[17px]">
        <div className="flex gap-4 items-start">
          {/* Product Icon Container */}
          <div className="w-[80px] h-[80px] bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
            <PackageIcon size={40} className="text-gray-400" strokeWidth={1.5} />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-lg font-semibold text-gray-800 leading-[27px] tracking-[-0.4395px]">
              {productName}
            </h2>

            {/* Metadata Row */}
            <div className="flex items-center gap-4 h-[21px]">
              <p className="text-xs font-normal text-gray-500 leading-4">
                SKU: {sku}
              </p>
              <p className="text-xs font-normal text-gray-500 leading-4">
                Pack: {pack}
              </p>
              <p className="text-xs font-normal text-gray-500 leading-4">
                Category: {category}
              </p>
              {isActive && (
                <Badge variant="high">Active</Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
