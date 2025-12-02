"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string // Optional href - if not provided, item is not clickable
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={cn("flex items-center space-x-2 sm:text-sm", className)}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-teal-600 hover:text-teal-700 hover:underline transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "font-medium",
                  isLast ? "text-gray-900" : "text-gray-600"
                )}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            )}
          </div>
        )
      })}
    </nav>
  )
}
