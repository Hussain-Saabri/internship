"use client";

import { useFilterStore } from "@/stores/filterStore";
import { cn } from "@/lib/utils";
import { PLATFORMS, PLATFORM_LABELS } from "@/lib/constants";
import { PlatformBadge } from "./PlatformBadge";

export interface PlatformSelectorProps {
  mobileOnly?: boolean;
  onSelect?: () => void;
  className?: string;
}

export function PlatformSelector({
  mobileOnly = false,
  onSelect,
  className,
}: PlatformSelectorProps) {
  const { platform, setPlatform } = useFilterStore();

  const platforms = [
    { value: PLATFORMS.ALL, label: PLATFORM_LABELS.all, showBadge: true },
    { value: PLATFORMS.BLINKIT, label: PLATFORM_LABELS.blinkit, showBadge: true },
    { value: PLATFORMS.ZEPTO, label: PLATFORM_LABELS.zepto, showBadge: true },
    { value: PLATFORMS.INSTAMART, label: PLATFORM_LABELS.instamart, showBadge: true },
  ];

  // ================= MOBILE UI =================
  if (mobileOnly) {
    return (
      <div className={cn("md:hidden relative", className)}>
        <div
          className="
            absolute bottom-full right-0 mb-3 w-48
            bg-white border border-gray-200
            rounded-md p-2
            backdrop-blur-sm
            z-50
          "
        >
          {platforms.map((p) => (
            <button
              key={p.value}
              onClick={() => {
                setPlatform(p.value);
                onSelect?.();
              }}
              className="
                flex items-center gap-3 w-full
                px-3 py-2.5 rounded-md
                text-left text-[14px] font-medium text-gray-800
                hover:bg-gray-50 active:bg-gray-100
                transition-all
              "
            >
              {p.showBadge && (
                <PlatformBadge platform={p.value} />
              )}
              {p.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ================= DESKTOP UI =================
  return (
    <div
      className={cn(
        "hidden md:flex h-10 items-center gap-2 rounded-xl bg-gray-50 p-1",
        className
      )}
      role="tablist"
    >
      {platforms.map((p) => {
        const isActive = platform === p.value;
        const isAll = p.value === PLATFORMS.ALL;

        return (
          <button
            key={p.value}
            onClick={() => {
              setPlatform(p.value);
              onSelect?.();
            }}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${p.value}-panel`}
            className={cn(
              "flex h-8 items-center gap-2 rounded-[10px] px-3 text-sm font-normal transition-all",
              isActive
                ? "bg-white text-gray-800"
                : "text-gray-500 hover:text-gray-700",
              isAll && isActive && "min-w-[106px]"
            )}
          >
            {p.showBadge && <PlatformBadge platform={p.value} />}
            <span className="whitespace-nowrap tracking-[-0.15px]">
              {p.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PlatformSelector;
