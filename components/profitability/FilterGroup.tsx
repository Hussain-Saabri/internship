"use client";

import FilterPill from "./FilterPill";

export interface FilterOption {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  fixed?: boolean;
}

interface FilterGroupProps {
  options: FilterOption[];
  selected: string[];
  onChange: (value: string[]) => void;
}

export default function FilterGroup({
  options,
  selected,
  onChange,
}: FilterGroupProps) {
  const handleSelect = (label: string) => {
    const opt = options.find((o) => o.label === label);

    // Do not toggle fixed items
    if (opt?.fixed) return;

    if (selected.includes(label)) {
      onChange(selected.filter((item) => item !== label));
    } else {
      onChange([...selected, label]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 md:gap-3 max-w-full">
      {options.map((opt) => (
        <FilterPill
          key={opt.label}
          label={opt.label}
          icon={opt.icon}
          active={selected.includes(opt.label)}
          fixed={opt.fixed}
          disabled={opt.disabled}
          onClick={() => handleSelect(opt.label)}
        />
      ))}
    </div>
  );
}
