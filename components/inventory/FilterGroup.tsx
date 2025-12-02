"use client";

import FilterPill from "./FilterPill";

interface FilterOption {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  fixed?: boolean;
}

interface FilterGroupProps {
  options: FilterOption[];

  // Single-select
  value?: string;
  onChange?: (val: string) => void;

  // Multi-select
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

    // If multi-select
    if (selected && onMultiChange) {
      if (selected.includes(label)) {
        onMultiChange(selected.filter((i) => i !== label));
      } else {
        onMultiChange([...selected, label]);
      }
      return;
    }

    // Single-select
    if (onChange) onChange(label);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <FilterPill
          key={opt.label}
          label={opt.label}
          icon={opt.icon}
          fixed={opt.fixed}
          disabled={opt.disabled}
          active={
            selected
              ? selected.includes(opt.label) // multi-select
              : value === opt.label // single-select
          }
          onClick={() => handleClick(opt.label)}
        />
      ))}
    </div>
  );
}
