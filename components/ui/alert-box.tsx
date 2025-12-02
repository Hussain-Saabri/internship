"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface AlertBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count?: number;
  variant?: "error" | "warning" | "success" | "info";
  onClick?: () => void;
}

const variantStyles = {
  error: {
    container: "border-red-300 bg-red-50",
    badge: "bg-red-100 text-red-700",
  },
  warning: {
    container: "border-amber-300 bg-amber-50 ",
    badge: "bg-amber-100 text-amber-700",
  },
  success: {
    container: "border-green-300 bg-green-50",
    badge: "bg-green-100 text-green-700",
  },
  info: {
    container: "border-blue-300 bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
};

export function AlertBox({
  icon,
  title,
  description,
  count,
  variant = "info",
  onClick,
}: AlertBoxProps) {
  const styles = variantStyles[variant];

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex justify-between items-center rounded-xl border px-4 py-3 mb-3 cursor-pointer transition hover:shadow-sm",
        styles.container
      )}
    >
      <div className="flex text-[10px] items-start gap-3">
        <div className="mt-[2px]">{icon}</div>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>

      {count !== undefined && (
        <Badge
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold",
            styles.badge
          )}
        >
          {count}
        </Badge>
      )}
    </div>
  );
}
