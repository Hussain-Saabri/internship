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
    <div className="rounded-[12px] border border-gray-200 bg-white   p-4">
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
