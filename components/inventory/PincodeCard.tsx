import { cn } from "@/lib/utils";

interface PincodeCardProps {
  data: {
    id: string;
    name: string;
    drr: string;
    value: string;
    doi: string;
    stockouts: number;
  };
}

export function PincodeCard({ data }: PincodeCardProps) {
  const { id, name, drr, value, doi, stockouts } = data;

  return (
    <div className="flex items-center justify-between bg-white/60 border border-gray-200 rounded-xl px-4 py-3   ">
      {/* Left Side: Location Info */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-800">{name}</span>
          <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-md">{id}</span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[10px] text-gray-500">DRR: <span className="font-medium text-gray-700">{drr}</span></span>
          <span className="text-[10px] text-gray-500">DOI: <span className="font-medium text-gray-700">{doi}</span></span>
        </div>
      </div>

      {/* Right Side: Value & Status */}
      <div className="flex flex-col items-end gap-0.5">
        <span className="text-sm font-bold text-[#10B981]">{value}</span>
        <span
          className={cn(
            "text-[10px] font-medium px-2 py-0.5 rounded-full",
            stockouts > 3
              ? "bg-red-50 text-red-600"
              : "bg-gray-50 text-gray-500"
          )}
        >
          {stockouts} stockouts
        </span>
      </div>
    </div>
  );
}
