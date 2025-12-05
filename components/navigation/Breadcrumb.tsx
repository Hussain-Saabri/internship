"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({
  items,
  className,
}: {
  items: BreadcrumbItem[]
  className?: string
}) {
  return (
    <nav className={`w-full ${className || ""}`}>
      {/* Desktop (md and above) */}
      <div className="hidden md:flex items-center  text-[13px]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div key={index} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="
                    text-gray-500
                    hover:text-gray-800
                    px-[6px] py-[4px]
                    rounded-md
                    hover:bg-gray-100
                    transition
                  "
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="
                    text-gray-900
                    font-semibold
                    px-[6px] py-[4px]
                    rounded-md
                    bg-gray-100/80
                    border border-gray-200
                  "
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight size={16} className="text-gray-300" />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile (smaller screens) */}
      <div className="md:hidden overflow-x-auto no-scrollbar">
        <div
          className="
            flex items-center gap-2 
            whitespace-nowrap 
            ml-[-7px]
            text-[12px]
            min-w-max
          "
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <div key={index} className="flex items-center gap-2">
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    className="
                      text-gray-500
                      hover:text-gray-900
                      px-[8px] py-[5px]
                      rounded-md
                      hover:bg-gray-100
                      transition
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="
                      text-gray-900
                      font-semibold
                      px-[8px] py-[5px]
                      rounded-md
                      bg-gray-100/80
                      border border-gray-200
                    "
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <ChevronRight size={12} className="text-gray-400" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
