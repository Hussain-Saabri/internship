"use client";

interface FilterPillProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  fixed?: boolean;
  onClick?: () => void;
}

export default function FilterPill({
  label,
  icon,
  active = false,
  disabled = false,
  fixed = false,
  onClick,
}: FilterPillProps) {
  const isDisabled = disabled || fixed;

  return (
    <button
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-[10px] text-xs font-medium transition-all duration-200
        ${active
          ? "bg-[#25B990] text-white"
          : "bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB] hover:bg-[#F3F4F6]"
        }
        ${isDisabled && "opacity-50 cursor-not-allowed"}
      `}
    >
      {icon && (
        <span className={`w-3.5 h-3.5 ${active ? "text-white" : "text-[#6B7280]"}`}>
          {icon}
        </span>
      )}

      <span>{label}</span>
    </button>
  );
}
