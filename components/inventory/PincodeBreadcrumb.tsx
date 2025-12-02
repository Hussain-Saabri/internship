"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function PincodeBreadcrumb({
  name,
  pincode,
}: {
  name: string;
  pincode: string;
}) {
  return (
    <div className="w-full">
      <nav aria-label="breadcrumb" className="w-full">
        <ol className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br from-[#F4ECFF] to-[#E8E2FF] border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
          {/* Home / Inventory Overview */}
          <li className="flex items-center">
            <Link
              href="/inventory"
              className="group flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors duration-200"
            >
              <div className="p-1.5 rounded-md group-hover:bg-indigo-50 transition-colors">
                <Home className="w-3.5 h-3.5" strokeWidth={2} />
              </div>
              <span className="text-xs font-medium tracking-wide uppercase text-gray-500 group-hover:text-indigo-600 transition-colors">
                Inventory Overview
              </span>
            </Link>
          </li>

          {/* Separator */}
          <li className="flex items-center text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
          </li>

          {/* Active Page Pill */}
          <li className="flex items-center">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/50 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-semibold text-indigo-900 tracking-tight">
                {name} <span className="text-indigo-400/80 font-normal ml-0.5">({pincode})</span>
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
