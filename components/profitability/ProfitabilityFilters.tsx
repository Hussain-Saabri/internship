"use client";

import { useState } from "react";
import FilterGroup from "./FilterGroup";
import ExportButton from "../common/ExportButton";

export default function ProfitabilityFilters() {
  const [timeFilter, setTimeFilter] = useState("Monthly");
  const [platformFilter, setPlatformFilter] = useState("All Platforms");

  const timeOptions = [
    { label: "Weekly" },
    { label: "Monthly" },
    { label: "Quaterly" },
  ];

  const platformOptions = [
    { label: "All Platforms" },
    { label: "Blinkit" },
    { label: "Zepto" },
    { label: "Instamart" },
  ];

  const otherOptions = [
    { label: "All Cities", disabled: true },
  ];

  return (
    <div className="rounded-[12px] border border-gray-200 bg-white   p-4">
      <div className="flex flex-wrap items-start justify-between gap-4
  md:flex-row md:items-center
  flex-col">

        {/* Filters wrap independently */}
        <div className="flex flex-wrap gap-3">
          <FilterGroup
            options={timeOptions}
            value={timeFilter}
            onChange={setTimeFilter}
          />
          <FilterGroup
            options={platformOptions}
            value={platformFilter}
            onChange={setPlatformFilter}
          />
          <FilterGroup
            options={otherOptions}
            value=""
            onChange={() => { }}
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
