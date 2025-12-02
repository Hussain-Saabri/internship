import React from "react";
import { DownloadIcon } from "@/lib/flaticons";

interface ExportButtonProps {
  label: string;
  onClick?: () => void;
}

export default function ExportButton({ label, onClick }: ExportButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-1.5 px-3 h-8 
                 text-xs whitespace-nowrap font-medium transition-all 
                 rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] 
                 hover:bg-[#F3F4F6] text-foreground hover:text-accent-foreground"
    >
      <DownloadIcon className="w-3.5 h-3.5" />
      {label}
    </button>
  );
}
