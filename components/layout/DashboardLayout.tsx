"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import { useAuthStore } from "@/stores/authStore"
import { cn } from "@/lib/utils"
import { useUIStore } from "@/stores/uiStore"
export interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
  className?: string
  showPlatformSelector?: boolean
  showDatePicker?: boolean
  showNotifications?: boolean
}

export function DashboardLayout({
  children,
  title,
  className,
  showPlatformSelector = true,
  showDatePicker = true,
  showNotifications = true,
}: DashboardLayoutProps) {
  const { isAuthenticated, isLoading } = useAuthStore()
  const router = useRouter()
  const pathname = usePathname()
  // Zustand: Mobile Sidebar State
  const mobileSidebarOpen = useUIStore((s) => s.mobileSidebarOpen)
  const closeMobileSidebar = useUIStore((s) => s.closeMobileSidebar)
  // Initialize sidebar state from localStorage (default: collapsed for compact layout)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sidebar-collapsed")
      return stored !== null ? stored === "true" : true // Default to collapsed
    }
    return true
  })

  // Persist sidebar state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebar-collapsed", String(sidebarCollapsed))
    }
  }, [sidebarCollapsed])

  // Auto-generate title from pathname if not provided
  const pageTitle = title || generateTitleFromPath(pathname)

  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-sidebar-primary border-t-transparent mx-auto" />
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render if not authenticated
  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden",
          mobileSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileSidebar}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[260px] transition-transform md:hidden",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar collapsed={false} />
      </div>
      <div className="hidden md:block">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header
          title={pageTitle}
          showPlatformSelector={showPlatformSelector}
          showDatePicker={showDatePicker}
          showNotifications={showNotifications}
        />

        {/* Scrollable Content */}
        <main
          className={cn(
            "flex-1 overflow-y-auto overflow-x-hidden",
            "bg-white p-6",
            className
          )}
        >
          {children}
        </main>

      </div>
    </div>
  )
}

/**
 * Generate page title from pathname
 * E.g., /sales/profitability -> "Profitability"
 */
function generateTitleFromPath(pathname: string): string {
  // Remove leading slash and split by /
  const segments = pathname.split("/").filter(Boolean)

  // Get the last segment (most specific)
  const lastSegment = segments[segments.length - 1] || "Dashboard"

  // Convert to title case
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default DashboardLayout
