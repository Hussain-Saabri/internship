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
      {/* ================== MODERN HEADER ================== */}
      <header
        className={cn(
          `
    w-full
    h-[64px]
    sticky top-0 z-50

    flex items-center justify-between
    px-6

    bg-white/80
    backdrop-blur-xl

    border-b border-gray-200
    transition-all duration-300
  `,
          className
        )}
      >

        {/* ---- LEFT CONTENT ---- */}
        <div className="flex items-center gap-4">
          {/* Mobile menu */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 md:hidden transition-colors"
            onClick={toggleMobileSidebar}
          >
            <Menu size={20} />
          </button>

          <h1 className="text-[18px] font-medium text-gray-800 tracking-tight">
            {title}
          </h1>
        </div>

        {/* ---- CENTER CONTENT ---- */}
        {showPlatformSelector && (
          <div className="hidden lg:block">
            <PlatformSelector />
          </div>
        )}

        {/* ---- RIGHT CONTENT ---- */}
        <div className="flex items-center gap-3">
          {/* Desktop Date Picker */}
          {showDatePicker && (
            <div className="hidden sm:block">
              <DateRangePicker />
            </div>
          )}

          {/* Mobile date picker icon */}
          {showDatePicker && (
            <button
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
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
          bg-white/90 backdrop-blur-xl
          rounded-full border border-gray-200
          active:scale-95 transition-all duration-200
          md:hidden
        "
      >
        {showPlatformModal ? (
          <CloseIcon size={32} />
        ) : (
          <PlatformPIcon size={32} className="text-gray-800" />
        )}
      </button>

      {/* ================= MOBILE PLATFORM SELECTOR LIST ================= */}
      {showPlatformModal && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setShowPlatformModal(false)}
          />

          <div className="fixed bottom-36 right-5 z-50 w-56 animate-in slide-in-from-bottom-5 fade-in duration-200">
            <div >
              <PlatformSelector
                mobileOnly={true}
                onSelect={() => setShowPlatformModal(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
