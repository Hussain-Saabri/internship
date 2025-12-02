"use client";

import { useState } from "react";
import FilterGroup from "./FilterGroup";
import ExportButton from "../common/ExportButton";

export default function ProfitabilityFilters() {
  const [selectedFilters, setSelectedFilters] = useState([
    "Weekly",

    "All Platforms",
  ]);

  const allOptions = [
    { label: "Weekly", fixed: true },
    { label: "Monthly" },
    { label: "Quaterly", fixed: true },
    { label: "All Platforms", fixed: true },
    { label: "Blinkit" },
    { label: "Zepto" },
    { label: "Instamart" },
    { label: "All Cities" },
  ];



  return (
    <div className="rounded-[20px] border-white/50 bg-gradient-to-br from-white/70 to-[#F3F0FF]/60 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md p-4">
      <div className="flex flex-wrap items-start justify-between gap-4
  md:flex-row md:items-center
  flex-col">

        {/* Filters wrap independently */}
        <div className="flex flex-wrap gap-3">
          <FilterGroup
            options={allOptions}
            selected={selectedFilters}
            onChange={setSelectedFilters}
          />
        </div>

        {/* Export buttons stay right */}
        <div className="flex items-center gap-2">
          <ExportButton label="Export CSV" />
          <ExportButton label="Export PDF" />
        </div>

      </div>
    </div>

  );
}
