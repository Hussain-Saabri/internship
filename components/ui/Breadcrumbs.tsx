"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface Crumb {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="
                    text-gray-500 
                    hover:text-gray-800 
                    px-2 py-1 
                    rounded-md 
                    hover:bg-gray-100 
                    transition-all 
                  "
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="
                    text-gray-900 
                    font-semibold 
                    px-2 py-1 
                    rounded-md 
                    bg-gray-100/70 
                    border border-gray-200 
                  "
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight size={15} className="text-gray-400" />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile Version - Scrollable */}
      <div className="md:hidden overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 text-xs whitespace-nowrap px-1 py-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <div key={index} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="
                      text-gray-500 
                      hover:text-gray-800 
                      px-2 py-1 
                      rounded-md 
                      hover:bg-gray-100 
                      transition-all
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="
                      text-gray-900 
                      font-semibold 
                      px-2 py-1 
                      rounded-md 
                      bg-gray-100/70 
                      border border-gray-200
                    "
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <ChevronRight size={15} className="text-gray-400" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
