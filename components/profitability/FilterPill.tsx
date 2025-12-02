
import { Button } from "../ui/button";

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
  onClick
}: FilterPillProps) {
  const isDisabled = disabled || fixed;

  return (
    <button
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      className={`
          flex  gap-2 px-3 py-1.5 rounded-[10px] text-xs transition-colors
          
        ${
          active
            ? "bg-[#25B990] text-white"
            : "bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB] hover:bg-[#F3F4F6]"
        }
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
