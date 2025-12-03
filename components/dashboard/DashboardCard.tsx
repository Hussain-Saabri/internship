import { cn } from "@/lib/utils"

interface DashboardCardProps {
    children: React.ReactNode
    className?: string
}

export function DashboardCard({ children, className }: DashboardCardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-[12px] p-6 border border-gray-200",
                className
            )}
        >
            {children}
        </div>
    )
}
