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
        "bg-white border-r border-gray-200 "
      )}
    >


      {/* HEADER - Fixed Height 64px to match Main Header */}
      <div className={cn(
        "flex items-center h-[64px] px-6 border-b border-transparent", // border-transparent to keep height consistent but invisible
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed ? (
          <Logo width={110} height={30} />
        ) : (
          <div className="">
            
          </div>
        )}
      </div>

      {/* COLLAPSE TOGGLE - Perfectly centered on border */}
      <button
        onClick={onToggle}
        className={cn(
          "absolute right-3 z-50",
          collapsed ? "top-[22px] left-[25px]" : "top-[20px]",
          "flex items-center justify-center w-6 h-6",
          "bg-white border border-gray-200 rounded-full ",
          "text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:scale-105",
          "transition-all duration-200 ease-in-out cursor-pointer"
        )}
      >
        {collapsed ? (
          <ChevronRightIcon size={14} strokeWidth={2} />
        ) : (
          <ChevronLeftIcon size={14} strokeWidth={2} />
        )}
      </button>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto py-8 px-4">
        <nav className="flex flex-col gap-2">
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
      <div className="p-4 border-t border-gray-100">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={cn(
              "flex items-center gap-3 w-full p-2.5 rounded-xl transition-all duration-200",
              "hover:bg-gray-50 border border-transparent hover:border-gray-200",
              collapsed && "justify-center"
            )}>
              <Avatar className="h-9 w-9 border border-gray-100 ">
                <AvatarFallback className="bg-gray-50 text-gray-700 font-semibold text-xs">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>

              {!collapsed && (
                <div className="flex flex-col items-start text-left overflow-hidden">
                  <span className="text-sm font-semibold text-gray-900 truncate w-full">
                    {user?.name || "User"}
                  </span>
                  <span className="text-[11px] text-gray-400 truncate w-full font-medium">
                    {user?.email || "user@example.com"}
                  </span>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right" align="end" className="w-56 mb-2 p-1.5 rounded-xl border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white">
            <DropdownMenuLabel className="text-xs text-gray-400 font-medium px-2 py-1.5 uppercase tracking-wider">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-100" />
            <DropdownMenuItem onClick={() => router.push("/settings")} className="rounded-lg text-sm font-medium text-gray-600 focus:text-gray-900 focus:bg-gray-50 py-2">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-gray-100" />
            <DropdownMenuItem
              onClick={() => {
                logout();
                router.push("/login");
              }}
              className="rounded-lg text-sm font-medium text-red-600 focus:text-red-700 focus:bg-red-50 py-2"
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
