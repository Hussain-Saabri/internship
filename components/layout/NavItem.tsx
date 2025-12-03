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
        "group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 ease-in-out",
        collapsed ? "justify-center px-2" : "justify-start",

        // Default State (Inactive)
        "text-gray-600 hover:bg-gray-50 hover:text-gray-900",

        // Active State
        isActive &&
        `
          bg-gray-50 text-[#111] font-semibold shadow-sm
          border border-gray-200
        `,

        className
      )}
    >
      <Icon
        size={20}
        strokeWidth={isActive ? 2 : 1.5}
        className={cn(
          "transition-colors duration-200",
          isActive ? "text-[#25B990]" : "text-gray-400 group-hover:text-gray-600"
        )}
      />

      {!collapsed && (
        <span className="text-[14px] tracking-tight">
          {label}
        </span>
      )}
    </Link>
  );

  if (collapsed) {
    return (
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
          <TooltipContent side="right" className="bg-gray-900 text-white border-none text-xs font-medium px-2.5 py-1.5 rounded-lg ml-2 shadow-xl">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return buttonContent;
}

export default NavItem;
