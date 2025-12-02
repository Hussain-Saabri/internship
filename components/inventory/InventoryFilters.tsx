"use client";

import { useState } from "react";
import FilterGroup from "./FilterGroup";
import {
  CalendarIcon,
  MapPinIcon,
  WarehouseIcon,
} from "@/lib/flaticons";
import ExportButton from "../common/ExportButton";

export default function InventoryFilters() {
  const [platform, setPlatform] = useState("All Platforms");

  const options = [
    { label: "Today", icon: <CalendarIcon size={14} /> },
    { label: "All Platforms" },
    { label: "Blinkit" },
    { label: "Zepto" },
    { label: "Instamart" },
    { label: "All Cities", icon: <MapPinIcon size={14} /> },
    { label: "All Warehouses", icon: <WarehouseIcon size={14} /> },
  ];

  return (
    <div className="rounded-[20px] border-white/50 bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md p-4">
      <div className="flex flex-wrap items-start justify-between gap-4 md:flex-row md:items-center flex-col">

        <div className="flex flex-wrap gap-3">
          <FilterGroup
            options={options}
            value={platform}
            onChange={setPlatform}
          />
        </div>

        <div className="flex items-center gap-2">
          <ExportButton label="Export CSV" />
          <ExportButton label="Export PDF" />
        </div>
      </div>
    </div>
  );
}
