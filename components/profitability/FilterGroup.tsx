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

  // Single-Select Mode
  value?: string;
  onChange?: (val: string) => void;

  // Multi-Select Mode (Legacy support)
  selected?: string[];
  onMultiChange?: (val: string[]) => void;
}

export default function FilterGroup({
  options,
  value,
  onChange,
  selected,
  onMultiChange,
}: FilterGroupProps) {
  const handleClick = (label: string) => {
    const opt = options.find((o) => o.label === label);

    if (opt?.fixed) return;

    // Multi-Select Logic
    if (selected && onMultiChange) {
      if (selected.includes(label)) {
        onMultiChange(selected.filter((item) => item !== label));
      } else {
        onMultiChange([...selected, label]);
      }
      return;
    }

    // Single-Select Logic
    if (onChange) {
      onChange(label);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 md:gap-3 max-w-full">
      {options.map((opt) => (
        <FilterPill
          key={opt.label}
          label={opt.label}
          icon={opt.icon}
          fixed={opt.fixed}
          disabled={opt.disabled}
          active={
            selected
              ? selected.includes(opt.label)
              : value === opt.label
          }
          onClick={() => handleClick(opt.label)}
        />
      ))}
    </div>
  );
}
