"use client";

import { NavItem } from "./NavItem";
import { NAV_ITEMS } from "@/lib/constants";
import { getIcon } from "@/lib/icon-map";
import { useAuthStore } from "@/stores/authStore";
import { ChevronLeftIcon, ChevronRightIcon, LogOut, Settings, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/base/Logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import z from "zod";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  return (
    <aside
      className={cn(
        "flex flex-col h-screen",
        collapsed ? "w-[72px]" : "w-[180px]",
        "relative transition-all duration-300 ease-in-out z-40",
        "bg-gray-50 border-r border-gray-200 shadow-sm"
      )}
    >


      {/* HEADER - Fixed Height 64px to match Main Header */}
      <div className={cn(
        "flex items-center h-[64px] px-5 border-b border-transparent", // border-transparent to keep height consistent but invisible
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed ? (
          <Logo width={100} height={28} />
        ) : (
          <div className="h-8 w-8 bg-sidebar-primary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            Q
          </div>
        )}
      </div>

      {/* COLLAPSE TOGGLE - Perfectly centered on border */}
      <button
        onClick={onToggle}
        className={cn(
          "absolute right-3 z-50",
          collapsed ? "top-[54px] left-[25px]" : "top-[20px]",
          "flex items-center justify-center w-6 h-6",
          "bg-white border border-gray-200 rounded-full shadow-sm",
          "text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:scale-105",
          "transition-all duration-200 ease-in-out cursor-pointer"
        )}
      >
        {collapsed ? (
          <ChevronRightIcon size={16} />
        ) : (
          <ChevronLeftIcon size={16} />
        )}
      </button>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto py-6 px-3">
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <NavItem
                key={item.href}
                href={item.href}
                icon={Icon}
                label={item.label}
                collapsed={collapsed}
              />
            );
          })}
        </nav>
      </div>

      {/* PROFILE BUTTON */}
      <div className="p-3 border-t border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={cn(
              "flex items-center gap-3 w-full p-2 rounded-xl transition-all duration-200",
              "hover:bg-white hover:shadow-sm hover:border-gray-200 border border-transparent",
              collapsed && "justify-center"
            )}>
              <Avatar className="h-8 w-8 border border-gray-200">
                <AvatarFallback className="bg-gray-100 text-gray-600 font-medium text-xs">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>

              {!collapsed && (
                <div className="flex flex-col items-start text-left overflow-hidden">
                  <span className="text-sm font-medium text-gray-700 truncate w-full">
                    {user?.name || "User"}
                  </span>
                  <span className="text-[11px] text-gray-400 truncate w-full">
                    {user?.email || "user@example.com"}
                  </span>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right" align="end" className="w-56 mb-2 p-1 rounded-xl border-gray-200 shadow-lg bg-white">
            <DropdownMenuLabel className="text-xs text-gray-500 font-normal px-2 py-1.5">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-100" />
            <DropdownMenuItem onClick={() => router.push("/settings")} className="rounded-lg text-sm text-gray-600 focus:text-gray-900 focus:bg-gray-50">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-gray-100" />
            <DropdownMenuItem
              onClick={() => {
                logout();
                router.push("/login");
              }}
              className="rounded-lg text-sm text-red-600 focus:text-red-700 focus:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
