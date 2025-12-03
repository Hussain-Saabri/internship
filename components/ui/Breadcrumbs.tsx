import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
    className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav className={cn("flex items-center space-x-1", className)}>
            {items.map((item, index) => {
                const isLast = index === items.length - 1

                return (
                    <div key={index} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" strokeWidth={1.5} />
                        )}
                        {item.href && !isLast ? (
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span
                                className={cn(
                                    "text-sm font-medium",
                                    isLast ? "text-gray-900" : "text-gray-500"
                                )}
                            >
                                {item.label}
                            </span>
                        )}
                    </div>
                )
            })}
        </nav>
    )
}
