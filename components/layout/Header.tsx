"use client";

import { PlatformSelector } from "@/components/dashboard/PlatformSelector";
import { DateRangePicker } from "@/components/dashboard/DateRangePicker";
import { NotificationBell } from "./NotificationBell";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { PlatformPIcon, CloseIcon } from "@/lib/flaticons";
import { useState } from "react";

export interface HeaderProps {
  title?: string;
  className?: string;
  showPlatformSelector?: boolean;
  showDatePicker?: boolean;
  showNotifications?: boolean;
}

export function Header({
  title = "Sales",
  className,
  showPlatformSelector = true,
  showDatePicker = true,
  showNotifications = true,
}: HeaderProps) {
  const toggleMobileSidebar = useUIStore((s) => s.toggleMobileSidebar);
  const [showPlatformModal, setShowPlatformModal] = useState(false);

  return (
    <>
      {/* ================== PREMIUM SaaS HEADER ================== */}
      <header
        className={cn(
          `
        w-full h-[70px]
        sticky top-0 z-50
        bg-white
        border-b border-gray-200
       
        flex items-center justify-between
        px-6
        backdrop-blur-xl
      `,
          className
        )}
      >
        {/* ---- LEFT: TITLE + MOBILE MENU ---- */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 md:hidden transition"
            onClick={toggleMobileSidebar}
          >
            <Menu size={22} />
          </button>

          <h1 className="text-[20px] font-semibold text-[#1F2937] tracking-tight">
            {title}
          </h1>
        </div>

        {/* ---- CENTER: PLATFORM + DATE FILTERS (Desktop) ---- */}
        <div className="hidden lg:flex items-center gap-4 ">
          {showPlatformSelector && <PlatformSelector />}
          {showDatePicker && <DateRangePicker />}
        </div>

        {/* ---- RIGHT: NOTIFICATIONS ---- */}
        <div className="flex items-center gap-3">
          {/* Mobile Date Picker */}
          {showDatePicker && (
            <button
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition"
              onClick={() => {
                const btn = document.querySelector("[data-datepicker-trigger]");
                btn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
              }}
            >
              📅
            </button>
          )}

          {showNotifications && <NotificationBell />}
        </div>
      </header>

      {/* ================= MOBILE FLOATING PLATFORM BUTTON ================= */}
      <button
        onClick={() => setShowPlatformModal(!showPlatformModal)}
        className="
          fixed bottom-20 right-5 z-50
          w-14 h-14 flex items-center justify-center
          bg-white/95 backdrop-blur-xl
          rounded-full border border-gray-200
          shadow-md
          active:scale-95 transition-all md:hidden
        "
      >
        {showPlatformModal ? (
          <CloseIcon size={30} className="text-gray-800" />
        ) : (
          <PlatformPIcon size={30} className="text-[#25B990]" />
        )}
      </button>

      {/* ================= MOBILE PLATFORM POPUP ================= */}
      {showPlatformModal && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setShowPlatformModal(false)}
          />

          <div className="fixed bottom-36 right-5 z-50 w-56 animate-slide-up">
            <PlatformSelector
              mobileOnly={true}
              onSelect={() => setShowPlatformModal(false)}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Header;
