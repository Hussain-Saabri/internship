"use client"

import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb"

export interface DrillDownBreadcrumbProps {
  className?: string
}

/**
 * Sales-specific breadcrumb that automatically builds from URL params
 * Handles all 5 levels: All Platforms → Platform → City → Warehouse → SKU
 */
export function DrillDownBreadcrumb({ className }: DrillDownBreadcrumbProps) {
  const pathname = usePathname()

  // Parse the pathname to extract drill-down segments
  // Expected format: /sales or /sales/[platform] or /sales/[platform]/[city] etc.
  const segments = pathname.split("/").filter(Boolean)

  // Build breadcrumb items dynamically
  const items: BreadcrumbItem[] = []

  // Level 0: All Platforms (always present)
  items.push({
    label: "All Platforms",
    href: "/sales",
  })

  // If we're beyond the base /sales route
  if (segments.length > 1) {
    // Extract all segment variables in the same scope to prevent scoping issues
    const platform = segments[1]
    const city = segments.length > 2 ? segments[2] : ""
    const warehouse = segments.length > 3 ? segments[3] : ""
    const sku = segments.length > 4 ? segments[4] : ""

    // Level 1: Platform
    items.push({
      label: formatPlatformName(platform),
      href: segments.length > 2 ? `/sales/${platform}` : undefined,
    })

    // Level 2: City
    if (segments.length > 2) {
      items.push({
        label: formatCityName(city),
        href: segments.length > 3 ? `/sales/${platform}/${city}` : undefined,
      })
    }

    // Level 3: Warehouse
    if (segments.length > 3) {
      items.push({
        label: formatWarehouseName(warehouse),
        href:
          segments.length > 4
            ? `/sales/${platform}/${city}/${warehouse}`
            : undefined,
      })
    }

    // Level 4: SKU
    if (segments.length > 4) {
      items.push({
        label: formatSKUName(sku),
        href: undefined, // Last level, not clickable
      })
    }
  }

  return <Breadcrumb items={items} className={className} />
}

/**
 * Format platform slug to display name
 * e.g., "blinkit" -> "Blinkit"
 */
function formatPlatformName(platform: string): string {
  return platform.charAt(0).toUpperCase() + platform.slice(1)
}

/**
 * Format city slug to display name
 * e.g., "mumbai" -> "Mumbai", "new-delhi" -> "New Delhi"
 */
function formatCityName(city: string): string {
  return city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * Format warehouse slug to display name
 * e.g., "warehouse-1" -> "Warehouse 1", "wh1" -> "WH1"
 */
function formatWarehouseName(warehouse: string): string {
  return warehouse
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * Format SKU slug to display name
 * e.g., "sku-002" -> "SKU-002"
 */
function formatSKUName(sku: string): string {
  return sku.toUpperCase()
}
