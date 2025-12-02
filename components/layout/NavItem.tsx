"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type IconComponent } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface NavItemProps {
  href: string;
  icon: IconComponent;
  label: string;
  collapsed?: boolean;
  className?: string;
}

export function NavItem({
  href,
  icon: Icon,
  label,
  collapsed = false,
  className,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href);

  const buttonContent = (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200",
        collapsed ? "justify-center px-2" : "justify-start",

        // Default State
        "text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-sm",

        // Active State
        isActive &&
        `
          bg-white text-gray-900 font-medium shadow-sm
          ring-1 ring-gray-200/50
        `,

        className
      )}
    >
      <Icon
        size={18}
        strokeWidth={isActive ? 2 : 1.5}
        className={cn(
          "transition-colors duration-200",
          isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
        )}
      />

      {!collapsed && (
        <span className="text-[13.5px] tracking-tight">
          {label}
        </span>
      )}

      {/* Active Indicator (Optional - can be a dot or left border) */}
      {/* {isActive && !collapsed && (
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#2E7D32] rounded-r-full opacity-0" />
      )} */}
    </Link>
  );

  if (collapsed) {
    return (
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
          <TooltipContent side="right" className="bg-gray-900 text-white border-none text-xs font-medium px-2 py-1">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return buttonContent;
}

export default NavItem;
