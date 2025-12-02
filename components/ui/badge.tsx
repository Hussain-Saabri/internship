import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "high" | "medium" | "low"
}

const badgeVariants = {
  high: "bg-[rgba(37,185,144,0.1)] text-[#25b990]",
  medium: "bg-[rgba(245,184,46,0.1)] text-[#f5b82e]",
  low: "bg-[rgba(232,84,84,0.1)] text-[#e85454]",
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "high", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[10px] px-[9px] py-[3px] text-[10px] font-medium leading-[15px] tracking-[0.1172px]",
          badgeVariants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
