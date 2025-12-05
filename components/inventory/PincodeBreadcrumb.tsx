"use client";

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
        <ol
          className="
            w-full flex flex-wrap items-center gap-3 
            px-4 md:px-5 py-3 
            rounded-2xl 
            bg-white 
            border border-gray-200 
            shadow-none
          "
        >
          {/* Inventory Overview */}
          <li className="flex items-center">
            <Link
              href="/inventory"
              className="
                flex items-center gap-2 
                text-gray-700 hover:text-gray-900
                text-xs md:text-sm
              "
            >
              <Home className="w-4 h-4 md:w-5 md:h-5 text-[#25B990]" />
              <span className="font-semibold tracking-wide uppercase">
                Inventory Overview
              </span>
            </Link>
          </li>

          <ChevronRight className="w-4 h-4 text-gray-400" />

          {/* Active Chip */}
          <li>
            <div
              className="
                flex items-center gap-2 
                px-3 py-1.5 
                rounded-full 
                bg-[#25B990]/10 
                border border-[#25B990]/20
                text-xs md:text-sm
              "
            >
              <span className="w-2 h-2 rounded-full bg-[#25B990]" />
              <span className="font-semibold text-gray-700">
                {name}
                <span className="text-gray-500 ml-1">({pincode})</span>
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
